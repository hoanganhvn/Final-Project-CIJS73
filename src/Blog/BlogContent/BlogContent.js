import "./BlogContent.css"
import { MainBody } from "./Mainbody/MainBody";
import { Sidebar } from "./Sidebar/Sidebar";

const BlogContent = () => {

    return (
        <div className="blog-content">
            <div className="row">
                <Sidebar />
                <MainBody />
            </div>
        </div>
    )
}

export { BlogContent };