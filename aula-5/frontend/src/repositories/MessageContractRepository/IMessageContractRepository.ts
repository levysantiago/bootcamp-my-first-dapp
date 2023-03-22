import { Web3Provider } from "@ethersproject/providers";
import { IMessage } from "./IMessage";

export interface IMessageContractRepository {
  init(provider: Web3Provider): void;
  newMessage(content: string): Promise<void>;
  getMessages(): Promise<IMessage[]>;
  likeMessage(messageIndex: number): Promise<void>;
  monetizeMessage(messageIndex: number, value: string): Promise<void>;
}
