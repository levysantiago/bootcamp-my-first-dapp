import { Web3Provider } from "@ethersproject/providers";

export interface ICryptoRepository {
  init(provider: Web3Provider): void;
  balanceOf(address: string): Promise<string>;
}
