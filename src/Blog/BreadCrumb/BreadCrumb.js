import "./BreadCrumb.css"
import { Link } from "react-router-dom";

const BreadCrumb = () => {
    return (
        <div className="blog-breadcrumb">
            <ol className="text-breadcrumb">
                <li style={{ display: 'inline-block' }}>
                    <a href="index.html" target="_blank" style={{color: "#252a2b", textDecoration: "none", outline: "none", transition: "all 0.2s ease-in-out"}}>Trang chủ </a>
                </li>
                <li style={{ display: 'inline-block' }}>
                    /
                </li>
                <li style={{ display: 'inline-block' }}>
                    <Link to="/blog" style={{color: "#252a2b", textDecoration: "none", outline: "none", transition: "all 0.2s ease-in-out"}}><span>Tin tức</span></Link>
                </li>
            </ol>
        </div>
    )
}

export {BreadCrumb};