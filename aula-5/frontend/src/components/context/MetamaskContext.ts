import { createContext } from "react";
import { IMetamaskContext } from "./IMetamaskContext";

export const MetamaskContext = createContext<IMetamaskContext>({
  walletAddress: "",
  isNetworkWrong: false,
  cryptoBalance: "...",
  messageContractRepository: undefined,
  reload: false,
  reloadComponents: () => {},
  connect: () => {
    return new Promise(() => {});
  },
});
