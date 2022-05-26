import MenuBlog from "./MenuBlog/MenuBlog";
import NewsLatest from "./NewsLatest/NewsLatest";

const Sidebar = () => {

    return (
        <div class="blog-content">
                <div class="col-md-12 col-sm-12 col-xs-12 ">
                    <NewsLatest />
                    <MenuBlog />
                </div>
        </div>
    )
}

export default Sidebar;