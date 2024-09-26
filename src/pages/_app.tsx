import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { SuiClientProvider, WalletProvider } from "@mysten/dapp-kit";
import { ZKShuffleProvider } from '../contexts/ZKShuffle';
import { networkConfig } from '../pages/networkConfig';

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
        <SuiClientProvider networks={networkConfig} defaultNetwork="testnet">
          <WalletProvider autoConnect>
            <ZKShuffleProvider>
              <Component {...pageProps} />
            </ZKShuffleProvider>
        </WalletProvider>
      </SuiClientProvider>
    </QueryClientProvider>
  );
}
