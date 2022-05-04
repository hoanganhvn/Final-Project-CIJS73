import "./Blog.css"
import { BlogContent } from "./BlogContent/BlogContent";
import { BreadCrumb } from "./BreadCrumb/BreadCrumb";

const Blog = () => {
    return (
        <div id="blog">
            <BreadCrumb />
            <BlogContent />
        </div>
    )
}

export { Blog };