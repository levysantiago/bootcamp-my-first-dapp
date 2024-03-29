/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "./common";

export declare namespace Message {
  export type TMessageStruct = {
    id: PromiseOrValue<BigNumberish>;
    content: PromiseOrValue<string>;
    from: PromiseOrValue<string>;
    likes: PromiseOrValue<BigNumberish>;
    coins: PromiseOrValue<BigNumberish>;
  };

  export type TMessageStructOutput = [
    BigNumber,
    string,
    string,
    BigNumber,
    BigNumber
  ] & {
    id: BigNumber;
    content: string;
    from: string;
    likes: BigNumber;
    coins: BigNumber;
  };
}

export interface MessageAbiInterface extends utils.Interface {
  functions: {
    "getMessages()": FunctionFragment;
    "likeMessage(uint256)": FunctionFragment;
    "messages(uint256)": FunctionFragment;
    "monetizeMessage(uint256)": FunctionFragment;
    "setMessage(string)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "getMessages"
      | "likeMessage"
      | "messages"
      | "monetizeMessage"
      | "setMessage"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "getMessages",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "likeMessage",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "messages",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "monetizeMessage",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "setMessage",
    values: [PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(
    functionFragment: "getMessages",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "likeMessage",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "messages", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "monetizeMessage",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setMessage", data: BytesLike): Result;

  events: {};
}

export interface MessageAbi extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: MessageAbiInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    getMessages(
      overrides?: CallOverrides
    ): Promise<[Message.TMessageStructOutput[]]>;

    likeMessage(
      index: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    messages(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, string, string, BigNumber, BigNumber] & {
        id: BigNumber;
        content: string;
        from: string;
        likes: BigNumber;
        coins: BigNumber;
      }
    >;

    monetizeMessage(
      index: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setMessage(
      _content: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  getMessages(
    overrides?: CallOverrides
  ): Promise<Message.TMessageStructOutput[]>;

  likeMessage(
    index: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  messages(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, string, string, BigNumber, BigNumber] & {
      id: BigNumber;
      content: string;
      from: string;
      likes: BigNumber;
      coins: BigNumber;
    }
  >;

  monetizeMessage(
    index: PromiseOrValue<BigNumberish>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setMessage(
    _content: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    getMessages(
      overrides?: CallOverrides
    ): Promise<Message.TMessageStructOutput[]>;

    likeMessage(
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    messages(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, string, string, BigNumber, BigNumber] & {
        id: BigNumber;
        content: string;
        from: string;
        likes: BigNumber;
        coins: BigNumber;
      }
    >;

    monetizeMessage(
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    setMessage(
      _content: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    getMessages(overrides?: CallOverrides): Promise<BigNumber>;

    likeMessage(
      index: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    messages(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    monetizeMessage(
      index: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setMessage(
      _content: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getMessages(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    likeMessage(
      index: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    messages(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    monetizeMessage(
      index: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setMessage(
      _content: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
