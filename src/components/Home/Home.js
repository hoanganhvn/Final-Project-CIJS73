import SliderShow from "./components/SliderShow";
import Popup from "./components/Popup";
import NewProduct from "./components/NewProduct";
import Banner from "./components/Banner";
import BestsSellProduct from "./components/BestsSellProduct";
import Aboutus from "./components/Aboutus";
import { useEffect, useState } from 'react';

function Home() {
    const [openPopup, setOpenPopup] = useState(false);
    useEffect(() => {
      const timer = setTimeout(() => {
        setOpenPopup(true);
      }, 2000);
      return () => clearTimeout(timer);
    }, []);
    const handleClosePopup = () => setOpenPopup(false);

  return (
    < >
      <div className="container-fluid">
      <SliderShow />
      <Popup openPopup={openPopup} handleClosePopup={handleClosePopup} />
      <NewProduct />
      <Banner />
      <BestsSellProduct />
      <Aboutus />
      </div>
    </>
  );
}

export default Home;
