import { parseUnits, formatUnits } from "starknet/utils";

export const toWei = (val: string | number, decimals = 18) => parseUnits(String(val), decimals);
export const fromWei = (val: string | number, decimals = 18) => formatUnits(val, decimals);
