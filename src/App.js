import CardCollections from "./components/CardCollections/CardCollections";
import Sidebar from "./components/SideBar/Sidebar";
import OfferDetails from "./components/offerDetails/OfferDetails";

function App() {
  return (
    <div>
      <div className=" flex flex-nowrap gap-[20px]">
       
        <Sidebar />
        {/* <OfferDetails /> */}
        <CardCollections />
      </div>
    </div>
  );
}

export default App;
