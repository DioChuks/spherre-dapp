export interface ProposeTransactionArgs {
  target: string;
  value: string; // probably BigNumberish or `felt252`
  data: string[];
}
export interface ProposeTransaction {
  id: string;
  proposer: string;
  target: string;
  value: string; // probably BigNumberish or `felt252`
  data: string[];
  eta: number; // timestamp in seconds
  executed: boolean;
}
