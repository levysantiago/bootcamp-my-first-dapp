import { useEffect, useState } from "react";
import { MetamaskContext } from "./MetamaskContext";
import { Web3Provider } from "@ethersproject/providers";
import CryptoRepository from "../../repositories/CryptoRepository";
import { ICryptoRepository } from "../../repositories/CryptoRepository/ICryptoRepository";
import { BigNumber as BN } from "bignumber.js";
import { IMessageContractRepository } from "../../repositories/MessageContractRepository/IMessageContractRepository";
import MessageContractRepository from "../../repositories/MessageContractRepository";

interface IMetamaskProviderProps {
  children: React.ReactElement;
}

export function MetamaskProvider({ children }: IMetamaskProviderProps) {
  const [walletAddress, setWalletAddress] = useState("");
  const [isNetworkWrong, setIsNetworkWrong] = useState(false);
  const [cryptoRepository, setCryptoRepository] = useState<ICryptoRepository>();
  const [messageContractRepository, setMessageContractRepository] =
    useState<IMessageContractRepository>();
  const [cryptoBalance, setCryptoBalance] = useState("...");
  const [provider, setProvider] = useState<Web3Provider | undefined>();

  async function connect(): Promise<string[] | undefined> {
    try {
      if (window.ethereum) {
        const accounts = (await window.ethereum.request({
          method: "eth_requestAccounts",
        })) as string[] | undefined;

        if (accounts && accounts.length) {
          setWalletAddress(accounts[0].toLowerCase());
        }

        return accounts;
      }
    } catch (e) {
      console.log(e);
    }
  }

  function verifyNetwork(selectedChainId: string) {
    if (selectedChainId === process.env.REACT_APP_CHAIN_ID) {
      setIsNetworkWrong(false);
    } else {
      setIsNetworkWrong(true);
    }
  }

  function getProvider() {
    if (window.ethereum) {
      const windowEthereum: any = window.ethereum;
      const provider = new Web3Provider(windowEthereum);

      setProvider(provider);

      return provider;
    }
  }

  useEffect(() => {
    getProvider();

    window.ethereum?.on("accountsChanged", (accounts: any) => {
      const _accounts: string[] = accounts;

      if (_accounts.length) {
        setWalletAddress(_accounts[0].toLowerCase());
      } else {
        setWalletAddress("");
      }
    });

    window.ethereum?.on("chainChanged", (chainId) => {
      verifyNetwork(chainId as string);
    });
  }, []);

  useEffect(() => {
    if (provider && provider.network) {
      const chainId = `0x${provider?.network.chainId.toString(16)}`;
      verifyNetwork(chainId);

      // Criando repositórios
      const _cryptoRepository = new CryptoRepository(provider);
      setCryptoRepository(_cryptoRepository);

      const _messageContractRepository = new MessageContractRepository(
        provider
      );
      setMessageContractRepository(_messageContractRepository);

      _messageContractRepository.getMessages().then();
    }
  }, [provider, walletAddress]);

  useEffect(() => {
    if (walletAddress && cryptoRepository) {
      cryptoRepository.balanceOf(walletAddress).then((balance: string) => {
        const _cryptoBalance = new BN(balance).toFixed(3, BN.ROUND_DOWN);
        setCryptoBalance(_cryptoBalance);
      });
    }
  }, [cryptoRepository, walletAddress]);

  return (
    <MetamaskContext.Provider
      value={{ walletAddress, isNetworkWrong, connect, cryptoBalance }}
    >
      {children}
    </MetamaskContext.Provider>
  );
}
