import "./Blog.css"
import BreadCrumb from "./BreadCrumb/BreadCrumb";
import Sidebar from "./BlogContent/Sidebar/Sidebar";
import Article1 from "./BlogContent/MainContent/Article1";
import  { useEffect } from 'react';

const Gio = () => {
        useEffect(() => {
        document.title = "Fresh Organic - Tin tức"
      }, [])

    return (
        <>
            <div className="container-fluid">
                <BreadCrumb />
                <div class="col-md-12 col-lg-12">
                    <div className="blog-content">
                        <div className="row">
                            <div class="col-md-3 col-lg-3">
                                <Sidebar />
                            </div>
                            <div class="col-md-9 col-lg-9">
                                <Article1 />
                                
                            </div>
                      
                        </div>
                    </div>
                </div>
            </div>


        </>

    )
}

export default Gio;