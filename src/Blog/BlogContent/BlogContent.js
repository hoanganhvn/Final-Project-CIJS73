import "./BlogContent.css"
import { Sidebar } from "./Sidebar/Sidebar";
import { Outlet } from "react-router-dom";

const BlogContent = () => {

    return (
        <div className="blog-content">
            <div className="row">
                <Sidebar />
                {/* <Routes>
                    <Route path="/" element={<MainBody />} />
                    <Route path="/article1" element={<Article1 />} />
                </Routes> */}
                <Outlet />
            </div>
        </div>
    )
}

export { BlogContent };