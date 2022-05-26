import type { Overrides } from 'fuels';
import { useMemo } from 'react';

import { objectId } from '../lib/utils';

import { useWallet } from '~/context/AppContext';
import { Token_contractAbi__factory } from '~/types/contracts';

export function useTokenMethods(tokenId: string) {
  const wallet = useWallet()!;
  const contract = useMemo(
    () => Token_contractAbi__factory.connect(tokenId, wallet),
    [wallet.address]
  );

  return {
    contract,
    getBalance() {
      return wallet.getBalance(tokenId);
    },
    mint(amount: bigint) {
      return contract.functions.mint_coins(amount);
    },
    transferTo(amount: bigint, overrides: Overrides & { from?: string | Promise<string> } = {}) {
      return contract.functions.transfer_coins_to_output(
        amount,
        objectId(contract.id),
        objectId(wallet.address),
        overrides
      );
    },
  };
}