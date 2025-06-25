import { BigNumberish } from "starknet";

export const toBigNumberish = (val: string | number): BigNumberish => {
  return BigInt(val); // or use starknet/utils
};
