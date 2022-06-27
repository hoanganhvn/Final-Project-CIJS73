import SliderShow from "./components/SliderShow";
import Popup from "./components/Popup";
import NewProduct from "./components/NewProduct";
import Banner from "./components/Banner";
import BestsSellProduct from "./components/BestsSellProduct";
import AboutUs from "./components/AboutUs";
import { useEffect } from 'react';
// import database from "../../helpers/Firebase.js";
// import { ref, child, get, set } from "firebase/database";
import {Helmet} from "react-helmet";

function Home() {
    // useEffect(() => {
    //     document.title = "Fresh Organic - Trang chủ";
    // }, [])
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // const dbRef = ref(database);
    // const userId = 5;
    // get(child(dbRef, `users/${userId}`)).then((snapshot) => {
    //   if (snapshot.exists()) {
    //     console.log(snapshot.val());
    //   } else {
    //     console.log("No data available");
    //   }
    // }).catch((error) => {
    //   console.error(error);
    // });

    return (
        < >
            <div className="container-fluid" >
            <Helmet>
                <meta charSet="utf-8" />
                <title>My Title adsfgh</title>
                <link rel="canonical" href="http://mysite.com/example" />
                <meta name="description" content="Nested component adsfdgfghjk" />
            </Helmet>
                <SliderShow />
                <Popup />
                <NewProduct />
                <Banner />
                <BestsSellProduct />
                <AboutUs />
            </div>
        </>
    );
}

export default Home;