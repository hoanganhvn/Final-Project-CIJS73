import { Link } from "react-router-dom";

function NoPage() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12 pt-5 ">
          <h1 className="display-4 text-center"> 404 Page Not Found. </h1>
          <h1 className="display-4 text-center">
            {" "}
            <Link to="/">Click Here To Go To HomePage. </Link>{" "}
          </h1>
          <img
            src="https://colorlib.com/cdn-cgi/image/quality=80,format=auto,onerror=redirect,metadata=none/wp/wp-content/uploads/sites/2/404-error-page-templates.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default NoPage;

{
  /* <Route path="/gioi-thieu" element={<IntroductionLayout />}>
            // <Route index element={<Introduction />} />
            // <Route path="restore" element={<Restore />} />
            // <Route path="privacy" element={<Privacy />} />
            // <Route path="service" element={<Service />} />
            // <Route path="searching" element={<Searching />} />
            // <Route path="contact" element={<Contact />} />
            <Directory />
          </Route> */
}
// import IntroductionLayout from "./Introduction/IntroductionLayout";
//import Introduction from "./Introduction/Introduction";
//import Restore from "./Introduction/Restore";
//import Privacy from "./Introduction/Privacy";
//import Service from "./Introduction/Service";
//import Searching from "./Introduction/Searching";
//import Contact from "./Introduction/Contact";
