import { useContract, useSendTransaction, useTransactionReceipt } from "@starknet-react/core";
import { SPHERRE_ABI, SPHERRE_CONTRACT_ADDRESS } from "@/lib/constants";
import { ProposeTransactionArgs } from "@/lib/types/contracts";

export const useProposeTransaction = () => {
  const { contract } = useContract({
    abi: SPHERRE_ABI,
    address: SPHERRE_CONTRACT_ADDRESS,
  });

  const { data: txHash, sendTransaction, isPending, error } = useSendTransaction();
  const txReceipt = useTransactionReceipt({ hash: txHash });

  const propose = async ({ target, value, data }: ProposeTransactionArgs) => {
    if (!contract) throw new Error("Contract not loaded");

    const calldata = [target, value, ...data];

    await sendTransaction({
      contract,
      entrypoint: "propose",
      calldata,
    });
  };

  return {
    propose,
    txHash,
    txReceipt,
    isPending,
    error,
  };
};
