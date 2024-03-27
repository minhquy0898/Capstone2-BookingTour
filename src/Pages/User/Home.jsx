import About from "../../Components/About/About";
import HotTopic from "../../Components/HotTopic/HotTopic";
import Offers from "../../Components/Offers/Offers";
import SearchTour from "../../Components/SearchTour/SearchTour";

const Home = () => {
  return (
    <div>
      <SearchTour />
      <HotTopic />
      <Offers />
      <About />
    </div>
  );
};

export default Home;
