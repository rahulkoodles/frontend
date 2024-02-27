import { BrowserRouter } from "react-router-dom";
import Sidebar from "./components/SideBar/Sidebar";
import RoutesPages from "./routes/RoutesPages";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
//********************** Wallet Connect ******************* *
import { createWeb3Modal, defaultConfig } from "@web3modal/ethers5/react";
import store from "./components/Redux/Store/Store";

//************** Wagmi Provider *************** */
import { WagmiProvider } from "wagmi";

// Import necessary modules from 'wagmi'
import { http, createConfig } from "wagmi";
import { mainnet, sepolia } from "wagmi/chains";

export const config = createConfig({
  chains: [mainnet, sepolia ],
  multiInjectedProviderDiscovery :false,
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),

  },
});

function App() {
  const projectId = "20eb0c483bb4801ec4004dea1a843576";

  const mainnet = {
    chainId: 1,
    name: "Ethereum",
    currency: "ETH",
    explorerUrl: "https://etherscan.io",
    rpcUrl: "https://cloudflare-eth.com",
  };
  const metadata = {
    name: "My Website",
    description: "My Website description",
    url: "https://mywebsite.com",
    icons: ["https://avatars.mywebsite.com/"],
  };

  createWeb3Modal({
    ethersConfig: defaultConfig({ metadata }),
    chains: [mainnet],
    projectId,
    enableAnalytics: true,
  });
  const queryClient = new QueryClient();

  return (
    <div>
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          <Provider store={store}>
            <BrowserRouter>
              <div className=" flex flex-nowrap">
                <Sidebar />
                <RoutesPages className=" flex " />
              </div>
            </BrowserRouter>
          </Provider>
        </QueryClientProvider>
      </WagmiProvider>
    </div>
  );
}

export default App;
