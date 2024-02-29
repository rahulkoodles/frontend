import { BrowserRouter } from "react-router-dom";
import Sidebar from "./components/SideBar/Sidebar";
import RoutesPages from "./Routes/RoutesPages";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createWeb3Modal, defaultConfig } from "@web3modal/ethers5/react";
import store from "./components/Redux/Store/Store";

// export const config = createConfig({
//   chains: [chains.mainnet, chains.sepolia],
//   multiInjectedProviderDiscovery: false,
//   transports: {
//     [chains.mainnet.id]: http(),
//     [chains.sepolia.id]: http(),
//   },
// });

function App() {
  const projectId = "20eb0c483bb4801ec4004dea1a843576";

  const metadata = {
    name: "My Website",
    description: "My Website description",
    url: "https://mywebsite.com",
    icons: ["https://avatars.mywebsite.com/"],
  };

  const mainnet = {
    chainId: 11155111,
    name: 'Sepolia',
    currency: 'ETH',
    explorerUrl: 'https://sepolia.etherscan.io',
    rpcUrl: 'https://rpc.sepolia.org'
  }

  createWeb3Modal({
    ethersConfig: defaultConfig({ metadata }),
    chains: [mainnet],
    projectId,
    enableAnalytics: true,
  });
  const queryClient = new QueryClient();

  return (
    <div>
      {/* <WagmiProvider config={config}> */}
        <QueryClientProvider client={queryClient}>
          <Provider store={store}>
            <BrowserRouter>
              <div className="flex flex-nowrap">
                <Sidebar />
                <RoutesPages className="flex" />
              </div>
            </BrowserRouter>
          </Provider>
        </QueryClientProvider>
      {/* </WagmiProvider> */}
    </div>
  );
}

export default App;
