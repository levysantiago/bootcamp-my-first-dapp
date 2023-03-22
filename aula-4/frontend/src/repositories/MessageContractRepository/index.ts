import { Web3Provider } from "@ethersproject/providers";
import { MessageAbi } from "../../smc-types";
import { IMessage } from "./IMessage";
import { IMessageContractRepository } from "./IMessageContractRepository";
import { MessageAbi__factory } from "../../smc-types/factories/MessageAbi__factory";
import { ethers } from "ethers";
import { BigNumber as BN } from "bignumber.js";

class MessageContractRepository implements IMessageContractRepository {
  private messageContract: MessageAbi | undefined;

  constructor(provider?: Web3Provider) {
    if (provider) this.init(provider);
  }

  private validate() {
    if (!this.messageContract) throw new Error("Message contract not defined.");
  }

  private formatMessageList(rawMessages: any[]): IMessage[] {
    const messages: IMessage[] = rawMessages.map((msg) => {
      const newMessage: IMessage = {
        id: ethers.BigNumber.from(msg["id"]).toNumber(),
        from: msg["from"],
        content: msg["content"],
        likes: ethers.BigNumber.from(msg["likes"]).toNumber(),
        coins: new BN(ethers.utils.formatEther(msg["coins"])).toFixed(
          3,
          BN.ROUND_DOWN
        ),
      };

      return newMessage;
    });

    return messages.reverse();
  }

  init(provider: Web3Provider): void {
    this.messageContract = MessageAbi__factory.connect(
      process.env.REACT_APP_MESSAGE_CONTRACT_ADDRESS!,
      provider.getSigner()
    );
  }

  async newMessage(content: string): Promise<void> {
    this.validate();
    const trx = await this.messageContract!.setMessage(content);
    await trx.wait();
  }

  async getMessages(): Promise<IMessage[]> {
    this.validate();
    const rawMessages = await this.messageContract!.getMessages();
    return this.formatMessageList(rawMessages);
  }

  async likeMessage(messageIndex: number): Promise<void> {
    this.validate();
    const trx = await this.messageContract!.likeMessage(messageIndex);
    await trx.wait();
  }

  async monetizeMessage(messageIndex: number, value: string): Promise<void> {
    this.validate();
    const trx = await this.messageContract!.monetizeMessage(messageIndex, {
      value: ethers.utils.parseEther(value),
    });
    await trx.wait();
  }
}

export default MessageContractRepository;
