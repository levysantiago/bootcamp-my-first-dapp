import { IMessageContractRepository } from "../../repositories/MessageContractRepository/IMessageContractRepository";

export interface IMetamaskContext {
  walletAddress: string;
  isNetworkWrong: boolean;
  cryptoBalance: string;
  messageContractRepository: IMessageContractRepository | undefined;
  reload: boolean;
  reloadComponents: () => void;
  connect: () => Promise<string[] | undefined>;
}
