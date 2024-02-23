import { BrowserRouter } from "react-router-dom";
import Sidebar from "./components/SideBar/Sidebar";
import RoutesPages from "./routes/RoutesPages";

import { createWeb3Modal, defaultConfig } from "@web3modal/ethers5/react";

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

  return (
    <div>
      <BrowserRouter>
        <div className=" flex flex-nowrap">
          <Sidebar />
          <RoutesPages className=" flex " />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
