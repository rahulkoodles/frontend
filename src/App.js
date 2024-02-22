import { BrowserRouter } from "react-router-dom";
import CardCollections from "./components/CardCollections/CardCollections";
import Sidebar from "./components/SideBar/Sidebar";
import OfferDetails from "./components/offerDetails/OfferDetails";
import RoutesPages from "./routes/RoutesPages";

function App() {
  return (
    <div>
      <BrowserRouter>
        <div className=" flex flex-nowrap gap-[20px]">
          <Sidebar />
          <RoutesPages className=" flex " />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
