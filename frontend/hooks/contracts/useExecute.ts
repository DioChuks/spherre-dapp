import { useContract, useSendTransaction, useTransactionReceipt } from "@starknet-react/core";
import { SPHERRE_ABI, SPHERRE_CONTRACT_ADDRESS } from "@/lib/constants";

interface ExecuteArgs {
  proposalId: string; // or BigNumberish
}

export const useExecuteProposal = () => {
  const { contract } = useContract({
    abi: SPHERRE_ABI,
    address: SPHERRE_CONTRACT_ADDRESS,
  });

  const { data: txHash, sendTransaction, isPending, error } = useSendTransaction();
  const txReceipt = useTransactionReceipt({ hash: txHash });

  const execute = async ({ proposalId }: ExecuteArgs) => {
    if (!contract) throw new Error("Contract not loaded");

    await sendTransaction({
      contract,
      entrypoint: "execute",
      calldata: [proposalId],
    });
  };

  return {
    execute,
    txHash,
    txReceipt,
    isPending,
    error,
  };
};
