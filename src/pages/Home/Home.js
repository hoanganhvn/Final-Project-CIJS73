import SliderShow from "./components/SliderShow";
import Popup from "./components/Popup";
import NewProduct from "./components/NewProduct";
import Banner from "./components/Banner";
import BestsSellProduct from "./components/BestsSellProduct";
import Aboutus from "./components/Aboutus";
import { useEffect } from 'react';

function Home() {
  useEffect(() => {
    document.title = "Fresh Organic - Home"
  }, [])
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    < >
      <div className="container-fluid">
        <SliderShow />
        <Popup />
        <NewProduct />
        <Banner />
        <BestsSellProduct />
        <Aboutus />
      </div>
    </>
  );
}

export default Home;
