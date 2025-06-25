import { ProposeTransactionArgs } from "@/lib/types/contracts";
import { useContract, useReadContract, useSendTransaction, useTransactionReceipt } from "@starknet-react/core";

export const useGetProposals = (args: { daoId: string }) => {
  return useReadContract({
    functionName: "get_proposals",
    args: [args.daoId],
    abi: SPHERRE_ABI,
    address: SPHERRE_ADDRESS,
  });
};

export const useProposeTransaction = () => {
  const { contract } = useContract({ abi: SPHERRE_ABI, address: SPHERRE_ADDRESS });
  const { data: txHash, sendTransaction } = useSendTransaction();
  const txReceipt = useTransactionReceipt({ hash: txHash });

  const propose = async (args: ProposeTransactionArgs) => {
    const calldata = [args.target, args.value, ...args.data];
    await sendTransaction({ contract, entrypoint: "propose", calldata });
  };

  return { propose, txHash, txReceipt };
};
