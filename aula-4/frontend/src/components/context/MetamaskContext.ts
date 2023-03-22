import { createContext } from "react";
import { IMetamaskContext } from "./IMetamaskContext";

export const MetamaskContext = createContext<IMetamaskContext>({
  walletAddress: "",
  isNetworkWrong: false,
  cryptoBalance: "...",
  connect: () => {
    return new Promise(() => {});
  },
});
