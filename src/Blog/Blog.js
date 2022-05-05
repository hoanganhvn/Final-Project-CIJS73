import "./Blog.css"
import { BlogContent } from "./BlogContent/BlogContent";
import { BreadCrumb } from "./BreadCrumb/BreadCrumb";
import { Routes, Route } from "react-router-dom";
import { Article1 } from "./BlogContent/Mainbody/Article1";
import { MainBody } from "./BlogContent/Mainbody/MainBody";
import { Article2 } from "./BlogContent/Mainbody/Article2";
import { Article4 } from "./BlogContent/Mainbody/Article4";
import { Article3 } from "./BlogContent/Mainbody/Article3";

const Blog = () => {
    return (
        <div id="blog">
            <BreadCrumb />
            <Routes>
                <Route path="/" element={<BlogContent />} >
                    <Route path="/" element={<MainBody />} />
                    <Route path="/article1" element={<Article1 />} />
                    <Route path="/article2" element={<Article2 />} />
                    <Route path="/article3" element={<Article3 />} />
                    <Route path="/article4" element={<Article4 />} />
                </Route>
            </Routes>
            {/* <BlogContent /> */}
        </div>
    )
}

export { Blog };