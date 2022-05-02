import { MenuBlog } from "./MenuBlog/MenuBlog";
import { NewsLatest } from "./NewsLatest/NewsLatest";
import "./Sidebar.css"
import { useState, useEffect } from "react";

const Sidebar = () => {
    const [blogData, setBlogData] = useState();

    const fetchBlog = async () => {
        const response = await fetch("https://626f593d64bae572bb561fc9.mockapi.io/api/v1/Articles");
        const data = await response.json();
        setBlogData(data);
    }

    console.log(blogData);

    useEffect(() =>{
        fetchBlog()
    }, [])

    return (
        <div className="col-md-3 col-sm-12 col-xs-12">
            <NewsLatest />
            <MenuBlog />
        </div>
    )
}

export { Sidebar };