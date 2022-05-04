import "./BreadCrumb.css"

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
                    <span>Tin tức</span>
                </li>
            </ol>
        </div>
    )
}

export {BreadCrumb};