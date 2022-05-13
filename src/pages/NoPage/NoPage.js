import { Link } from 'react-router-dom';
import { useEffect } from 'react';

function NoPage() {
    useEffect(() => {
        document.title = "Fresh Organic - Page Not Found"
    }, [])
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="container" >
            <div className="row">
                <div className="col-sm-12 pt-5 ">
                    <h1 className="display-4 text-center">     404 Page Not Found.  </h1>
                    <h1 className="display-4 text-center">     <Link to="/">Click Here To Go To HomePage. </Link> </h1>
                    <img src="https://colorlib.com/cdn-cgi/image/quality=80,format=auto,onerror=redirect,metadata=none/wp/wp-content/uploads/sites/2/404-error-page-templates.jpg" alt="" />
                </div>
            </div>
        </div>
    );
}

export default NoPage;