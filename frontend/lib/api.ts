export const fetchProposalStatus = async (id: string) => {
  const res = await fetch(`/api/proposals/${id}`);
  if (!res.ok) throw new Error("Proposal fetch failed");
  return res.json();
};

export const fetchProposals = async (daoId: string) => {
  const res = await fetch(`/api/proposals?daoId=${daoId}`);
  if (!res.ok) throw new Error("Proposals fetch failed");
  return res.json();
};
