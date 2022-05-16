import SliderShow from "./components/SliderShow";
import Popup from "./components/Popup";
import NewProduct from "./components/NewProduct";
import Banner from "./components/Banner";
import BestsSellProduct from "./components/BestsSellProduct";
import Aboutus from "./components/Aboutus";
import { useEffect } from 'react';
import database from "../../helpers/Firebase.js";
import { ref, child, get } from "firebase/database";

function Home() {
  useEffect(() => {
    document.title = "Fresh Organic - Home"
  }, [])
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const dbRef = ref(database);
  const userId = 5;
  get(child(dbRef, `users/${userId}`)).then((snapshot) => {
    if (snapshot.exists()) {
      console.log(snapshot.val());
    } else {
      console.log("No data available");
    }
  }).catch((error) => {
    console.error(error);
  });



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
