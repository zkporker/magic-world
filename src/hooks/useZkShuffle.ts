import { useEffect, useState } from 'react';
// import useSigner from '../hooks/useSigner';
import { ZKShuffle } from '../utils/shuffle/zkshuffle';
import { dnld_crypto_files } from '../utils/shuffle/utility';
import { useContracts } from './useContracts';
import { useAccount, useSigner } from 'wagmi';
import { set, get } from 'idb-keyval';

type UnwrapPromise<T> = T extends Promise<infer U> ? U : never;

function useZkShuffle() {
  const { curChainConfig } = useContracts();
  const { data: signer } = useSigner();
  const { address } = useAccount();
  //   console.log('provider', provider);
  console.log('signer', signer);
  const [zkShuffle, setZkShuffle] = useState<ZKShuffle>();
  const cacheCryptoFiles = async (
    files: UnwrapPromise<ReturnType<typeof dnld_crypto_files>>
  ) => {
    const keys = Object.keys(files);
    const values = Object.values(files);
    keys.forEach((key, index) => {
      set(key, values[index]);
    });
  };

  const getCryptoFilesFromCache = async () => {
    const [encrypt_wasm, encrypt_zkey, decrypt_wasm, decrypt_zkey] =
      await Promise.all([
        get('encrypt_wasm'),
        get('encrypt_zkey'),
        get('decrypt_wasm'),
        get('decrypt_zkey'),
      ]);
    const isCached =
      encrypt_wasm && encrypt_zkey && decrypt_wasm && decrypt_zkey;
    return isCached
      ? { encrypt_wasm, encrypt_zkey, decrypt_wasm, decrypt_zkey }
      : null;
  };
  //   console.log('signer', signer, { ...signer });
  useEffect(() => {
    const getCacheData = async () => {
      const data = await getCryptoFilesFromCache();
      let res = null;
      if (!data) {
        res = await dnld_crypto_files(52);
        if (res) {
          await cacheCryptoFiles(res);
        } else {
          console.log('get crypto files error');
          return;
        }
      }
      const shuffleParams = data || res;
      const seed = await ZKShuffle.generateShuffleSecret();
      const zkShuffle = await ZKShuffle.create(
        curChainConfig.SHUFFLE,
        signer,
        seed,
        shuffleParams.decrypt_wasm,
        shuffleParams.decrypt_zkey,
        shuffleParams.encrypt_wasm,
        shuffleParams.encrypt_zkey
      );
      setZkShuffle(zkShuffle);
    };
    if (!signer) return;
    getCacheData();
  }, [signer]);

  return {
    zkShuffle,
    cacheCryptoFiles,
    getCryptoFilesFromCache,
  };
}

export default useZkShuffle;