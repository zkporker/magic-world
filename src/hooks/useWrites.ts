import { useMutation } from '@tanstack/react-query';

import { useContracts } from './useContracts';
import useWriteContract from './useWriteContract';
import { useContext } from 'react';
import { ZKShuffleContext } from '../contexts/ZKShuffle';

export const useWrites = () => {
  const { hs } = useContracts();
  const { zkShuffle } = useContext(ZKShuffleContext);
  const createGameStatus = useWriteContract(hs?.createShuffleForCreator, {});
  const joinGameStatus = useWriteContract(hs?.createShuffleForJoiner, {});

  const creatorShuffleJoinStatus = useMutation({
    mutationFn: (shuffleId: number) => {
      return zkShuffle?.joinGame(shuffleId);
    },
  });
  const joinerShuffleJoinStatus = useMutation({
    mutationFn: (shuffleId: number) => {
      return zkShuffle?.joinGame(shuffleId);
    },
  });

  const creatorShuffleShuffleStatus = useMutation({
    mutationFn: (gameId: number) => {
      return zkShuffle?.shuffle(gameId);
    },
  });

  const joinerShuffleShuffleStatus = useMutation({
    mutationFn: (gameId: number) => {
      return zkShuffle?.shuffle(gameId);
    },
  });

  return {
    createGameStatus,
    joinGameStatus,
    creatorShuffleJoinStatus,
    joinerShuffleJoinStatus,
    creatorShuffleShuffleStatus,
    joinerShuffleShuffleStatus,
  };
};
