import { Web3Provider } from "@ethersproject/providers";
import { ethers } from "ethers";
import { ICryptoRepository } from "./ICryptoRepository";

class CryptoRepository implements ICryptoRepository {
  private provider: Web3Provider;

  constructor(provider: Web3Provider) {
    this.provider = provider;
  }

  init(provider: Web3Provider): void {
    this.provider = provider;
  }

  async balanceOf(address: string): Promise<string> {
    const balance = await this.provider.getBalance(address);
    return ethers.utils.formatEther(balance);
  }
}

export default CryptoRepository;
