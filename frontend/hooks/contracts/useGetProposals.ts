import { useReadContract } from "@starknet-react/core";
import { SPHERRE_ABI, SPHERRE_CONTRACT_ADDRESS } from "@/lib/constants";

interface UseGetProposalsArgs {
  daoId: string;
}

export const useGetProposals = ({ daoId }: UseGetProposalsArgs) => {
  const { data, isLoading, error } = useReadContract({
    address: SPHERRE_CONTRACT_ADDRESS,
    abi: SPHERRE_ABI,
    functionName: "get_proposals",
    args: [daoId],
    watch: true, // optional — enables polling
  });

  return {
    proposals: data,
    isLoading,
    error,
  };
};
