// import SliderShow from "./components/SliderShow";
// import Popup from "./components/Popup";
// import NewProduct from "./components/NewProduct";
// import Banner from "./components/Banner";
// import BestsSellProduct from "./components/BestsSellProduct";
// import Aboutus from "./components/Aboutus";
// import { useEffect, useState } from 'react';
import "./LandingPage.scss";
import { useEffect } from 'react';

function LandingPage() {
    // const [openPopup, setOpenPopup] = useState(false);
    // useEffect(() => {
    //   const timer = setTimeout(() => {
    //     setOpenPopup(true);
    //   }, 2000);
    //   return () => clearTimeout(timer);
    // }, []);
    // const handleClosePopup = () => setOpenPopup(false);
    useEffect(() => {
        document.title = "Fresh Organic - Khuyến mại"
    }, [])
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        < >
            {/* <div className="container-fluid">
      <SliderShow />
      <Popup openPopup={openPopup} handleClosePopup={handleClosePopup} />
      <NewProduct />
      <Banner />
      <BestsSellProduct />
      <Aboutus />
      </div> */}
            {/* /* Start Body * / */}
            <div className="container-fluid">
                <div className="body">
                    <div>
                        <img className="top__banner1" src="https://theme.hstatic.net/1000309753/1000718324/14/food01_bannertop_image.jpg?v=209" alt="img"/>
                    </div>
                    <div className="top">
                        <img className="top__banner2" src="https://theme.hstatic.net/1000309753/1000718324/14/food01_bannertop_2.jpg?v=209" alt="img"/>
                    </div>
                    <div className="pageTitle">
                        <h1 className="pageTitle__text" style={{ color: 'white' }}>HÈ CỰC NÓNG, GIÁ CỰC SỐC</h1>
                    </div>
                    <div className="countdown">
                        <h3>ƯU ĐÃI KẾT THÚC</h3>
                        <div id="clockdiv">
                            <div className="timer">
                                <span className="timer__number days" />
                                <div className="smalltext">Ngày</div>
                            </div>
                            <div className="timer">
                                <span className="timer__number hours" />
                                <div className="smalltext">Giờ</div>
                            </div>
                            <div className="timer">
                                <span className="timer__number minutes" />
                                <div className="smalltext">Phút</div>
                            </div>
                            <div className="timer">
                                <span className="timer__number seconds" />
                                <div className="smalltext">Giây</div>
                            </div>
                        </div>
                    </div>
                    <nav>
                        <ul className="ul">
                            <div className="li">
                                <li className="li1">Nổi bật <div className="hr1" />
                                </li>
                                <li className="li2">Khuyến mãi <div className="hr2" />
                                </li>
                            </div>
                            <div className="li">
                                <li className="li4">Bán chạy <div className="hr4" />
                                </li>
                                <li className="li3">Sản phẩm mới <div className="hr3" />
                                </li>
                            </div>
                        </ul>
                    </nav>
                    <div className="outstanding">
                        <div className="product-item">
                            <a href><img className="img1" src="https://product.hstatic.net/1000309753/product/tao_9b109fb4d777472ca8bc09ce8d72119d_8a56c73eebad42339d49d203a540f87c_large.jpg" onmouseover="this.src='https://product.hstatic.net/1000309753/product/tao-do-3_09106304e44b4ce5a6baddac6465c96b_a0a93208bc7d4ff9a2acf9390f53a294_large.jpg'" onmouseout="this.src='https://product.hstatic.net/1000309753/product/tao_9b109fb4d777472ca8bc09ce8d72119d_8a56c73eebad42339d49d203a540f87c_large.jpg'" alt="img"/></a>
                            <img className="img2" src="//theme.hstatic.net/1000309753/1000718324/14/food01_frame_image.png?v=209" alt="img"/>
                            <p className="product__name"><a href>Táo Juliet Hữu Cơ Pháp</a></p>
                            <b>
                                <p className="product__price">150,000₫</p>
                            </b>
                        </div>
                        <div className="product-item">
                            <a href><img className="img1" src="https://product.hstatic.net/1000309753/product/cam-4_b1be682b1df24b098c3a086405b46e7e_596e3b20f1d04f7796e8e342bbe85aa5_large.jpg" onmouseover="this.src='https://product.hstatic.net/1000309753/product/cam-1_d1069e59cda146fe90e8b23bf1c7b249_9361ea332c704edaa7f5d9c1860fc80f_large.jpg'" onmouseout="this.src='https://product.hstatic.net/1000309753/product/cam-4_b1be682b1df24b098c3a086405b46e7e_596e3b20f1d04f7796e8e342bbe85aa5_large.jpg'" alt="img" /></a>
                            <img className="img2" src="//theme.hstatic.net/1000309753/1000718324/14/food01_frame_image.png?v=209" alt="img"/>
                            <p className="product__name"><a href>Cam Vàng Ai Cập</a></p>
                            <b>
                                <p className="product__price"><span className="price-aft">40,000₫</span><span className="price-bef">50,000₫</span></p>
                            </b>
                            <div className="product__discount">Giảm 20%</div>
                        </div>
                        <div className="product-item">
                            <a href><img className="img1" src="https://product.hstatic.net/1000309753/product/prosf_master.jpg" onmouseover="this.src='https://product.hstatic.net/1000309753/product/fs_master.jpg'" onmouseout="this.src='https://product.hstatic.net/1000309753/product/prosf_master.jpg'" alt="img"/></a>
                            <img className="img2" src="//theme.hstatic.net/1000309753/1000718324/14/food01_frame_image.png?v=209" alt="img"/>
                            <p className="product__name"><a href>Gift Basket</a></p>
                            <b>
                                <p className="product__price">459,000₫</p>
                            </b>
                        </div>
                        <div className="product-item">
                            <a href><img className="img1" src="https://product.hstatic.net/1000309753/product/nho_c8339e97b4144cfca707f9a228c1516f_2ea36ab3f06348eebb6a10bd5176896f_large.jpg" onmouseover="this.src='https://product.hstatic.net/1000309753/product/nho-3_985431808a494cc09e210c7747acd3bf_7107061683f945588ec965613f3ec280_large.jpg'" onmouseout="this.src='https://product.hstatic.net/1000309753/product/nho_c8339e97b4144cfca707f9a228c1516f_2ea36ab3f06348eebb6a10bd5176896f_large.jpg'" alt="img" /></a>
                            <img className="img2" src="//theme.hstatic.net/1000309753/1000718324/14/food01_frame_image.png?v=209" alt="img"/>
                            <p className="product__name"><a href>Nho Đỏ Crimson Úc</a></p>
                            <b>
                                <p className="product__price"><span className="price-aft">120,000₫</span><span className="price-bef">150,000₫</span></p>
                            </b>
                            <div className="product__discount">Giảm 20%</div>
                        </div>
                        <div className="product-item">
                            <a href><img className="img1" src="https://www.visitsingapore.com/content/dam/desktop/global/dining-drinks-singapore/local-dishes/fish-head-curry-carousel-new-640x640.jpg" alt="img"/></a>
                            <img className="img2" src="//theme.hstatic.net/1000309753/1000718324/14/food01_frame_image.png?v=209" alt="img"/>
                            <p className="product__name"><a href>Cà Ri cá Bớt Ấn Độ</a></p>
                            <b>
                                <p className="product__price"><span className="price-aft">100,000₫</span><span className="price-bef">
                                    130,000₫</span></p>
                            </b>
                            <div className="product__discount">Giảm 23%</div>
                        </div>
                        <div className="product-item">
                            <a href><img className="img1" src="https://product.hstatic.net/1000309753/product/mt-480_product-15_228ef35aa5b64e30a24057bccad47c1f_master.jpg" onmouseover="this.src='https://product.hstatic.net/1000309753/product/mt-480_product-15-1_2294227db22a475e9883b0b6ffe90b9f_master.jpg'" onmouseout="this.src='https://product.hstatic.net/1000309753/product/mt-480_product-15_228ef35aa5b64e30a24057bccad47c1f_master.jpg'" alt="img"/></a>
                            <img className="img2" src="//theme.hstatic.net/1000309753/1000718324/14/food01_frame_image.png?v=209" alt="img"/>
                            <p className="product__name"><a href>Kicking Horse Coffee</a></p>
                            <b>
                                <p className="product__price"><span className="price-aft">145,000₫</span><span className="price-bef">
                                    178,000₫</span></p>
                            </b>
                            <div className="product__discount">Giảm 19%</div>
                        </div>
                        <div className="product-item">
                            <a href><img className="img1" src="https://product.hstatic.net/1000309753/product/cai-xanh_4bab4a65d8424af887618235dab20c13_c96b70a705d44cb0ada6509b00076118_large.jpg" onmouseover="this.src='https://bizweb.dktcdn.net/100/021/951/products/rau-cai-xanh-huu-co-55x50.jpg?v=1629686620963'" onmouseout="this.src='https://product.hstatic.net/1000309753/product/cai-xanh_4bab4a65d8424af887618235dab20c13_c96b70a705d44cb0ada6509b00076118_large.jpg'" alt="img"/></a>
                            <img className="img2" src="//theme.hstatic.net/1000309753/1000718324/14/food01_frame_image.png?v=209" alt="img"/>
                            <p className="product__name"><a href>Cải xanh Đà Lạt 500gr</a></p>
                            <b>
                                <p className="product__price"><span className="price-aft">20,000₫</span><span className="price-bef">30,000₫</span></p>
                            </b>
                            <div className="product__discount">Giảm 33%</div>
                        </div>
                        <div className="product-item">
                            <a href><img className="img1" src="https://product.hstatic.net/1000309753/product/ca-chua-4_25bebd7bd2484e258a4709da1971e0ae_c6faf6ea88a64713b8663fb369491eba_large.jpg" onmouseover="this.src='https://product.hstatic.net/1000309753/product/ca-chua-1_fc77722715794113ab00c5139245b176_022582e18ee944988cb8dc9c6805a624_large.jpg'" onmouseout="this.src='https://product.hstatic.net/1000309753/product/ca-chua-4_25bebd7bd2484e258a4709da1971e0ae_c6faf6ea88a64713b8663fb369491eba_large.jpg'" alt="img"/></a>
                            <img className="img2" src="//theme.hstatic.net/1000309753/1000718324/14/food01_frame_image.png?v=209" alt="img"/>
                            <p className="product__name"><a href>Cà Chua Đà Lạt 500g</a></p>
                            <b>
                                <p className="product__price">10,000₫</p>
                            </b>
                        </div>
                        <div className="product-item">
                            <a href><img className="img1" src="https://product.hstatic.net/1000309753/product/pro-9_389dbd9937254c4ba377099698895c09_master.jpg" onmouseover="this.src='https://product.hstatic.net/1000309753/product/pro-4_f5998ff4554e42f480efbdc4c9f30ad1_master.jpg'" onmouseout="this.src='https://product.hstatic.net/1000309753/product/pro-9_389dbd9937254c4ba377099698895c09_master.jpg'" alt="img"/></a>
                            <img className="img2" src="//theme.hstatic.net/1000309753/1000718324/14/food01_frame_image.png?v=209" alt="img" />
                            <p className="product__name"><a href>Praesent Esr Edio</a></p>
                            <b>
                                <p className="product__price"><span className="price-aft">20,000₫</span><span className="price-bef">30,000₫</span></p>
                            </b>
                            <div className="product__discount">Giảm 8%</div>
                        </div>
                        <div className="product-item">
                            <a href><img className="img1" src="https://product.hstatic.net/1000309753/product/dua-hau-1_a51dfc663ed344bca88b4e746a8b3a2f_9575d8fba3ae45b9b80ae69cdb56c9f0_large.jpg" onmouseover="this.src='https://product.hstatic.net/1000309753/product/dua-hau-6_6f6cfd3bf2be410c8b9cbc8a443dc4c9_72a8d4084b934d269888c01e588011d5_large.jpg'" onmouseout="this.src='https://product.hstatic.net/1000309753/product/dua-hau-1_a51dfc663ed344bca88b4e746a8b3a2f_9575d8fba3ae45b9b80ae69cdb56c9f0_large.jpg'" alt="img"/></a>
                            <img className="img2" src="//theme.hstatic.net/1000309753/1000718324/14/food01_frame_image.png?v=209" alt="img" />
                            <p className="product__name"><a href>Dưa Hấu Đỏ Không Hạt Long An</a></p>
                            <b>
                                <p className="product__price">20,000₫</p>
                            </b>
                        </div>
                        <div className="product row3">
                            <a href><img className="img1" src="https://product.hstatic.net/1000309753/product/bo-bit-tet_f71b060e07b246ce9a7c31121a8c63a3_f92c1b3ade1e4a52befb2c96447a4912_large.jpg" onmouseover="this.src='https://img.lovepik.com/free-png/20211117/lovepik-a-delicious-steak-png-image_400979545_wh1200.png'" onmouseout="this.src='https://product.hstatic.net/1000309753/product/bo-bit-tet_f71b060e07b246ce9a7c31121a8c63a3_f92c1b3ade1e4a52befb2c96447a4912_large.jpg'" alt="img"/></a>
                            <img className="img2" src="//theme.hstatic.net/1000309753/1000718324/14/food01_frame_image.png?v=209" alt="img" />
                            <p className="product__name"><a href>Bò bit tết kiểu Ý 500gr</a></p>
                            <b>
                                <p className="product__price"><span className="price-aft">250,000₫</span><span className="price-bef">300,000₫</span></p>
                            </b>
                            <div className="product__discount">Giảm 17%</div>
                        </div>
                        <div className="product row3">
                            <a href><img className="img1" src="https://product.hstatic.net/1000309753/product/pro-10_large.jpg" onmouseover="this.src='https://product.hstatic.net/1000309753/product/pro-2_large.jpg'" onmouseout="this.src='https://product.hstatic.net/1000309753/product/pro-10_large.jpg'" alt="img"/></a>
                            <img className="img2" src="//theme.hstatic.net/1000309753/1000718324/14/food01_frame_image.png?v=209" alt="img" />
                            <p className="product__name"><a href>De Cecco Angel Hair Nests</a></p>
                            <b>
                                <p className="product__price"><span className="price-aft">25,000₫</span><span className="price-bef">32,000₫</span></p>
                            </b>
                            <div className="product__discount">Giảm 22%</div>
                        </div>
                        <div className="product row3">
                            <a href><img className="img1" src="https://product.hstatic.net/1000309753/product/anh-dao-2_ccb29fe1c4514ecb88a6f5d3a0fcab5c_c55c8907459a4e3c917f30b1fcf68bc4_large.jpg" onmouseover="this.src='https://product.hstatic.net/1000309753/product/cherry_1d1e51c3515245ce933ff609875ea357_e200984dc2a443fd8fad7614e5714083_large.jpg'" onmouseout="this.src='https://product.hstatic.net/1000309753/product/anh-dao-2_ccb29fe1c4514ecb88a6f5d3a0fcab5c_c55c8907459a4e3c917f30b1fcf68bc4_large.jpg'" alt="img"/></a>
                            <img className="img2" src="//theme.hstatic.net/1000309753/1000718324/14/food01_frame_image.png?v=209" alt="img" />
                            <p className="product__name"><a href>Cherry Đỏ Mỹ Size 9.5</a></p>
                            <b>
                                <p className="product__price"><span className="price-aft">150,000₫</span><span className="price-bef">160,000₫</span></p>
                            </b>
                            <div className="product__discount">Giảm 6%</div>
                        </div>
                        <div className="product row3">
                            <a href><img className="img1" src="https://product.hstatic.net/1000309753/product/cookie-nut_b8022cea560e41e5a33aa4eaa2133f79_376eda5bccef4849a799084162ca6bed_large.jpg" onmouseover="this.src='https://product.hstatic.net/1000347086/product/untitled_76620851adc34cdab4f953a2690b5321_master_3a70c9ba696d4e8186e195d20101f09a_master.jpg'" onmouseout="this.src='https://product.hstatic.net/1000309753/product/cookie-nut_b8022cea560e41e5a33aa4eaa2133f79_376eda5bccef4849a799084162ca6bed_large.jpg'" alt="img"/></a>
                            <img className="img2" src="//theme.hstatic.net/1000309753/1000718324/14/food01_frame_image.png?v=209" alt="img" />
                            <p className="product__name"><a href>Bánh quy hạt dẻ</a></p>
                            <b>
                                <p className="product__price"><span className="price-aft">54,000₫</span><span className="price-bef">65,000₫</span></p>
                            </b>
                            <div className="product__discount">Giảm 17%</div>
                        </div>
                        <div className="product row3">
                            <a href><img className="img1" src="https://product.hstatic.net/1000309753/product/mt-480_product-14_large.jpg" onmouseover="this.src='https://product.hstatic.net/1000309753/product/pro-5_large.jpg'" onmouseout="this.src='https://product.hstatic.net/1000309753/product/mt-480_product-14_large.jpg'" alt="img"/></a>
                            <img className="img2" src="//theme.hstatic.net/1000309753/1000718324/14/food01_frame_image.png?v=209" alt="img" />
                            <p className="product__name"><a href>De Cecco Angel Hair Nests</a></p>
                            <b>
                                <p className="product__price"><span className="price-aft">25,000₫</span><span className="price-bef">32,000₫</span></p>
                            </b>
                            <div className="product__discount">Giảm 22%</div>
                        </div>
                        <div className="seemore">
                            <button className="btn outstanding__btn">Xem thêm sản phẩm</button>
                        </div>
                    </div>
                    <div className="promotion">
                        <div className="product-item">
                            <a href><img className="img1" src="https://product.hstatic.net/1000309753/product/bo-bit-tet_f71b060e07b246ce9a7c31121a8c63a3_f92c1b3ade1e4a52befb2c96447a4912_large.jpg" onmouseover="this.src='https://img.lovepik.com/free-png/20211117/lovepik-a-delicious-steak-png-image_400979545_wh1200.png'" onmouseout="this.src='https://product.hstatic.net/1000309753/product/bo-bit-tet_f71b060e07b246ce9a7c31121a8c63a3_f92c1b3ade1e4a52befb2c96447a4912_large.jpg'" alt="img"/></a>
                            <img className="img2" src="//theme.hstatic.net/1000309753/1000718324/14/food01_frame_image.png?v=209" alt="img" />
                            <p className="product__name"><a href>Bò bit tết kiểu Ý 500gr</a></p>
                            <b>
                                <p className="product__price"><span className="price-aft">250,000₫</span><span className="price-bef">300,000₫</span></p>
                            </b>
                            <div className="product__discount">Giảm 17%</div>
                        </div>
                        <div className="product-item">
                            <a href><img className="img1" src="https://product.hstatic.net/1000309753/product/nho_c8339e97b4144cfca707f9a228c1516f_2ea36ab3f06348eebb6a10bd5176896f_large.jpg" onmouseover="this.src='https://product.hstatic.net/1000309753/product/nho-3_985431808a494cc09e210c7747acd3bf_7107061683f945588ec965613f3ec280_large.jpg'" onmouseout="this.src='https://product.hstatic.net/1000309753/product/nho_c8339e97b4144cfca707f9a228c1516f_2ea36ab3f06348eebb6a10bd5176896f_large.jpg'" alt="img"/></a>
                            <img className="img2" src="//theme.hstatic.net/1000309753/1000718324/14/food01_frame_image.png?v=209" alt="img" />
                            <p className="product__name"><a href>Nho Đỏ Crimson Úc</a></p>
                            <b>
                                <p className="product__price"><span className="price-aft">120,000₫</span><span className="price-bef">150,000₫</span></p>
                            </b>
                            <div className="product__discount">Giảm 20%</div>
                        </div>
                        <div className="product-item">
                            <a href><img className="img1" src="https://www.visitsingapore.com/content/dam/desktop/global/dining-drinks-singapore/local-dishes/fish-head-curry-carousel-new-640x640.jpg" alt="img"/></a>
                            <img className="img2" src="//theme.hstatic.net/1000309753/1000718324/14/food01_frame_image.png?v=209" alt="img" />
                            <p className="product__name"><a href>Cà Ri cá Bớt Ấn Độ</a></p>
                            <b>
                                <p className="product__price"><span className="price-aft">100,000₫</span><span className="price-bef">
                                    130,000₫</span></p>
                            </b>
                            <div className="product__discount">Giảm 23%</div>
                        </div>
                        <div className="product-item">
                            <a href><img className="img1" src="https://product.hstatic.net/1000309753/product/cai-xanh_4bab4a65d8424af887618235dab20c13_c96b70a705d44cb0ada6509b00076118_large.jpg" onmouseover="this.src='https://bizweb.dktcdn.net/100/021/951/products/rau-cai-xanh-huu-co-55x50.jpg?v=1629686620963'" onmouseout="this.src='https://product.hstatic.net/1000309753/product/cai-xanh_4bab4a65d8424af887618235dab20c13_c96b70a705d44cb0ada6509b00076118_large.jpg'" alt="img"/></a>
                            <img className="img2" src="//theme.hstatic.net/1000309753/1000718324/14/food01_frame_image.png?v=209" alt="img" />
                            <p className="product__name"><a href>Cải xanh Đà Lạt 500gr</a></p>
                            <b>
                                <p className="product__price"><span className="price-aft">20,000₫</span><span className="price-bef">30,000₫</span></p>
                            </b>
                            <div className="product__discount">Giảm 33%</div>
                        </div>
                        <div className="product-item">
                            <a href><img className="img1" src="https://product.hstatic.net/1000309753/product/mt-480_product-15_228ef35aa5b64e30a24057bccad47c1f_master.jpg" onmouseover="this.src='https://product.hstatic.net/1000309753/product/mt-480_product-15-1_2294227db22a475e9883b0b6ffe90b9f_master.jpg'" onmouseout="this.src='https://product.hstatic.net/1000309753/product/mt-480_product-15_228ef35aa5b64e30a24057bccad47c1f_master.jpg'" alt="img"/></a>
                            <img className="img2" src="//theme.hstatic.net/1000309753/1000718324/14/food01_frame_image.png?v=209" alt="img" />
                            <p className="product__name"><a href>Kicking Horse Coffee</a></p>
                            <b>
                                <p className="product__price"><span className="price-aft">145,000₫</span><span className="price-bef">
                                    178,000₫</span></p>
                            </b>
                            <div className="product__discount">Giảm 19%</div>
                        </div>
                        <div className="product-item">
                            <a href><img className="img1" src="https://product.hstatic.net/1000309753/product/pro-9_389dbd9937254c4ba377099698895c09_master.jpg" onmouseover="this.src='https://product.hstatic.net/1000309753/product/pro-4_f5998ff4554e42f480efbdc4c9f30ad1_master.jpg'" onmouseout="this.src='https://product.hstatic.net/1000309753/product/pro-9_389dbd9937254c4ba377099698895c09_master.jpg'" alt="img"/></a>
                            <img className="img2" src="//theme.hstatic.net/1000309753/1000718324/14/food01_frame_image.png?v=209" alt="img" />
                            <p className="product__name"><a href>Praesent Esr Edio</a></p>
                            <b>
                                <p className="product__price"><span className="price-aft">20,000₫</span><span className="price-bef">30,000₫</span></p>
                            </b>
                            <div className="product__discount">Giảm 8%</div>
                        </div>
                        <div className="product-item">
                            <a href><img className="img1" src="https://product.hstatic.net/1000309753/product/cam-4_b1be682b1df24b098c3a086405b46e7e_596e3b20f1d04f7796e8e342bbe85aa5_large.jpg" onmouseover="this.src='https://product.hstatic.net/1000309753/product/cam-1_d1069e59cda146fe90e8b23bf1c7b249_9361ea332c704edaa7f5d9c1860fc80f_large.jpg'" onmouseout="this.src='https://product.hstatic.net/1000309753/product/cam-4_b1be682b1df24b098c3a086405b46e7e_596e3b20f1d04f7796e8e342bbe85aa5_large.jpg'" alt="img"/></a>
                            <img className="img2" src="//theme.hstatic.net/1000309753/1000718324/14/food01_frame_image.png?v=209" alt="img" />
                            <p className="product__name"><a href>Cam Vàng Ai Cập</a></p>
                            <b>
                                <p className="product__price"><span className="price-aft">40,000₫</span><span className="price-bef">50,000₫</span></p>
                            </b>
                            <div className="product__discount">Giảm 20%</div>
                        </div>
                        <div className="product-item">
                            <a href><img className="img1" src="https://product.hstatic.net/1000309753/product/pro-10_large.jpg" onmouseover="this.src='https://product.hstatic.net/1000309753/product/pro-2_large.jpg'" onmouseout="this.src='https://product.hstatic.net/1000309753/product/pro-10_large.jpg'" alt="img"/></a>
                            <img className="img2" src="//theme.hstatic.net/1000309753/1000718324/14/food01_frame_image.png?v=209" alt="img" />
                            <p className="product__name"><a href>De Cecco Angel Hair Nests</a></p>
                            <b>
                                <p className="product__price"><span className="price-aft">25,000₫</span><span className="price-bef">32,000₫</span></p>
                            </b>
                            <div className="product__discount">Giảm 22%</div>
                        </div>
                        <div className="product-item">
                            <a href><img className="img1" src="https://product.hstatic.net/1000309753/product/cookie-nut_b8022cea560e41e5a33aa4eaa2133f79_376eda5bccef4849a799084162ca6bed_large.jpg" onmouseover="this.src='https://product.hstatic.net/1000347086/product/untitled_76620851adc34cdab4f953a2690b5321_master_3a70c9ba696d4e8186e195d20101f09a_master.jpg'" onmouseout="this.src='https://product.hstatic.net/1000309753/product/cookie-nut_b8022cea560e41e5a33aa4eaa2133f79_376eda5bccef4849a799084162ca6bed_large.jpg'" alt="img"/></a>
                            <img className="img2" src="//theme.hstatic.net/1000309753/1000718324/14/food01_frame_image.png?v=209" alt="img" />
                            <p className="product__name"><a href>Bánh quy hạt dẻ</a></p>
                            <b>
                                <p className="product__price"><span className="price-aft">54,000₫</span><span className="price-bef">65,000₫</span></p>
                            </b>
                            <div className="product__discount">Giảm 17%</div>
                        </div>
                        <div className="product-item">
                            <a href><img className="img1" src="https://product.hstatic.net/1000309753/product/mt-480_product-14_large.jpg" onmouseover="this.src='https://product.hstatic.net/1000309753/product/pro-5_large.jpg'" onmouseout="this.src='https://product.hstatic.net/1000309753/product/mt-480_product-14_large.jpg'" alt="img"/></a>
                            <img className="img2" src="//theme.hstatic.net/1000309753/1000718324/14/food01_frame_image.png?v=209" alt="img" />
                            <p className="product__name"><a href>Collezione Pasta Orecchiette</a></p>
                            <b>
                                <p className="product__price"><span className="price-aft">125,000₫</span><span className="price-bef">165,000₫</span></p>
                            </b>
                            <div className="product__discount">Giảm 24%</div>
                        </div>
                    </div>
                    <div className="news">
                        <div className="product-item">
                            <a href><img className="img1" src="https://product.hstatic.net/1000309753/product/dua-hau-1_a51dfc663ed344bca88b4e746a8b3a2f_9575d8fba3ae45b9b80ae69cdb56c9f0_large.jpg" onmouseover="this.src='https://product.hstatic.net/1000309753/product/dua-hau-6_6f6cfd3bf2be410c8b9cbc8a443dc4c9_72a8d4084b934d269888c01e588011d5_large.jpg'" onmouseout="this.src='https://product.hstatic.net/1000309753/product/dua-hau-1_a51dfc663ed344bca88b4e746a8b3a2f_9575d8fba3ae45b9b80ae69cdb56c9f0_large.jpg'" alt="img"/></a>
                            <img className="img2" src="//theme.hstatic.net/1000309753/1000718324/14/food01_frame_image.png?v=209" alt="img" />
                            <p className="product__name"><a href>Dưa Hấu Đỏ Không Hạt Long An</a></p>
                            <b>
                                <p className="product__price">20,000₫</p>
                            </b>
                        </div>
                        <div className="product-item">
                            <a href><img className="img1" src="https://dalatfarm.net/wp-content/uploads/2021/06/hat-dau-ha-lan.jpg" onmouseover="this.src='https://product.hstatic.net/1000309753/product/dau-xanh_aae15268ea214a6f86f5be014efc6dad_9cc7ba1303ed4f87aae38a8d0bd170ff_large.jpg'" onmouseout="this.src='https://dalatfarm.net/wp-content/uploads/2021/06/hat-dau-ha-lan.jpg'" alt="img"/></a>
                            <img className="img2" src="//theme.hstatic.net/1000309753/1000718324/14/food01_frame_image.png?v=209" alt="img" />
                            <p className="product__name"><a href>Đậu Hà Lan hữu cơ Rapunzel</a></p>
                            <b>
                                <p className="product__price">190,000₫</p>
                            </b>
                        </div>
                        <div className="product-item">
                            <a href><img className="img1" src="https://product.hstatic.net/1000309753/product/pro-1_fa7cc97f2c8543cda1b98279217137a1_large.jpg" onmouseover="this.src='https://product.hstatic.net/1000309753/product/pro-5_4314cbdd39b448bd821cb0a32453d611_large.jpg'" onmouseout="this.src='https://product.hstatic.net/1000309753/product/pro-1_fa7cc97f2c8543cda1b98279217137a1_large.jpg'" alt="img"/></a>
                            <img className="img2" src="//theme.hstatic.net/1000309753/1000718324/14/food01_frame_image.png?v=209" alt="img" />
                            <p className="product__name"><a href>Ferara Pasta Long Fusilli</a></p>
                            <b>
                                <p className="product__price">120,000₫</p>
                            </b>
                        </div>
                        <div className="product-item">
                            <a href><img className="img1" src="https://product.hstatic.net/1000309753/product/prosf_master.jpg" onmouseover="this.src='https://product.hstatic.net/1000309753/product/fs_master.jpg'" onmouseout="this.src='https://product.hstatic.net/1000309753/product/prosf_master.jpg'" alt="img"/></a>
                            <img className="img2" src="//theme.hstatic.net/1000309753/1000718324/14/food01_frame_image.png?v=209" alt="img" />
                            <p className="product__name"><a href>Gift Basket</a></p>
                            <b>
                                <p className="product__price">459,000₫</p>
                            </b>
                        </div>
                        <div className="product-item">
                            <a href><img className="img1" src="https://product.hstatic.net/1000309753/product/trung_076e3658a6e448bda26239b94f10e571_17d511ab207048eaa75fdde74026ad92_large.jpg" onmouseover="this.src='https://product.hstatic.net/1000309753/product/trung-4_456a260d03f8435881cec8fc7df38ec1_73c18e61bfb84c47a5ab0d88888aaa59_large.jpg'" onmouseout="this.src='https://product.hstatic.net/1000309753/product/trung_076e3658a6e448bda26239b94f10e571_17d511ab207048eaa75fdde74026ad92_large.jpg'" alt="img"/></a>
                            <img className="img2" src="//theme.hstatic.net/1000309753/1000718324/14/food01_frame_image.png?v=209" alt="img" />
                            <p className="product__name"><a href>Trứng Gà Thảo Mộc - Vỉ 10 Quả</a></p>
                            <b>
                                <p className="product__price">86,000₫</p>
                            </b>
                        </div>
                        <div className="product-item">
                            <a href><img className="img1" src="https://product.hstatic.net/1000309753/product/mt-480_product-14_large.jpg" onmouseover="this.src='https://product.hstatic.net/1000309753/product/pro-5_large.jpg'" onmouseout="this.src='https://product.hstatic.net/1000309753/product/mt-480_product-14_large.jpg'" alt="img"/></a>
                            <img className="img2" src="//theme.hstatic.net/1000309753/1000718324/14/food01_frame_image.png?v=209" alt="img" />
                            <p className="product__name"><a href>Collezione Pasta Orecchiette</a></p>
                            <b>
                                <p className="product__price"><span className="price-aft">125,000₫</span><span className="price-bef">165,000₫</span></p>
                            </b>
                        </div>
                        <div className="product-item">
                            <a href><img className="img1" src="https://product.hstatic.net/1000309753/product/ca-chua-4_25bebd7bd2484e258a4709da1971e0ae_c6faf6ea88a64713b8663fb369491eba_large.jpg" onmouseover="this.src='https://product.hstatic.net/1000309753/product/ca-chua-1_fc77722715794113ab00c5139245b176_022582e18ee944988cb8dc9c6805a624_large.jpg'" onmouseout="this.src='https://product.hstatic.net/1000309753/product/ca-chua-4_25bebd7bd2484e258a4709da1971e0ae_c6faf6ea88a64713b8663fb369491eba_large.jpg'" alt="img"/></a>
                            <img className="img2" src="//theme.hstatic.net/1000309753/1000718324/14/food01_frame_image.png?v=209" alt="img" />
                            <p className="product__name"><a href>Cà Chua Đà Lạt 500g</a></p>
                            <b>
                                <p className="product__price">10,000₫</p>
                            </b>
                        </div>
                        <div className="product-item">
                            <a href><img className="img1" src="https://product.hstatic.net/1000309753/product/khoai-tay-2_0cbaec5bb6c241d9b10b4e8350136c11_98614330f6f44f6b9d4a2d13831b96d1_large.jpg" onmouseover="this.src='https://product.hstatic.net/1000309753/product/khoai-tay-1_d6be3f665a5d41af9d4a0484d68d6aef_0808ee3bbcf0494faa5935364d8b6dd9_large.jpg'" onmouseout="this.src='https://product.hstatic.net/1000309753/product/khoai-tay-2_0cbaec5bb6c241d9b10b4e8350136c11_98614330f6f44f6b9d4a2d13831b96d1_large.jpg'" alt="img"/></a>
                            <img className="img2" src="//theme.hstatic.net/1000309753/1000718324/14/food01_frame_image.png?v=209" alt="img" />
                            <p className="product__name"><a href>Khoai Tây Bi Đà Lạt</a></p>
                            <b>
                                <p className="product__price">90,000₫</p>
                            </b>
                        </div>
                        <div className="product-item">
                            <a href><img className="img1" src="https://product.hstatic.net/1000309753/product/cookie-nut_b8022cea560e41e5a33aa4eaa2133f79_376eda5bccef4849a799084162ca6bed_large.jpg" onmouseover="this.src='https://product.hstatic.net/1000347086/product/untitled_76620851adc34cdab4f953a2690b5321_master_3a70c9ba696d4e8186e195d20101f09a_master.jpg'" onmouseout="this.src='https://product.hstatic.net/1000309753/product/cookie-nut_b8022cea560e41e5a33aa4eaa2133f79_376eda5bccef4849a799084162ca6bed_large.jpg'" alt="img"/></a>
                            <img className="img2" src="//theme.hstatic.net/1000309753/1000718324/14/food01_frame_image.png?v=209" alt="img" />
                            <p className="product__name"><a href>Bánh quy hạt dẻ</a></p>
                            <b>
                                <p className="product__price"><span className="price-aft">54,000₫</span><span className="price-bef">65,000₫</span></p>
                            </b>
                        </div>
                        <div className="product-item">
                            <a href><img className="img1" src="https://product.hstatic.net/1000309753/product/tao_9b109fb4d777472ca8bc09ce8d72119d_8a56c73eebad42339d49d203a540f87c_large.jpg" onmouseover="this.src='https://product.hstatic.net/1000309753/product/tao-do-3_09106304e44b4ce5a6baddac6465c96b_a0a93208bc7d4ff9a2acf9390f53a294_large.jpg'" onmouseout="this.src='https://product.hstatic.net/1000309753/product/tao_9b109fb4d777472ca8bc09ce8d72119d_8a56c73eebad42339d49d203a540f87c_large.jpg'" alt="img"/></a>
                            <img className="img2" src="//theme.hstatic.net/1000309753/1000718324/14/food01_frame_image.png?v=209" alt="img" />
                            <p className="product__name"><a href>Táo Juliet Hữu Cơ Pháp</a></p>
                            <b>
                                <p className="product__price">150,000₫</p>
                            </b>
                        </div>
                        <div className="product news__row3">
                            <a href><img className="img1" src="https://product.hstatic.net/1000309753/product/bong-cai-1_d79d78966b424d58a2b199ede2bc6ff5_c9f1d5de5124483fad5616cf8773837e_large.jpg" onmouseover="this.src='https://product.hstatic.net/1000309753/product/bong-cai_1958f4f940a84635a1fa968e9bdc0fe0_12398882bcc543ea9223ecafecad9760_large.jpg'" onmouseout="this.src='https://product.hstatic.net/1000309753/product/bong-cai-1_d79d78966b424d58a2b199ede2bc6ff5_c9f1d5de5124483fad5616cf8773837e_large.jpg'" alt="img"/></a>
                            <img className="img2" src="//theme.hstatic.net/1000309753/1000718324/14/food01_frame_image.png?v=209" alt="img" />
                            <p className="product__name"><a href>Bông cải xanh hữu cơ</a></p>
                            <b>
                                <p className="product__price">26,000₫</p>
                            </b>
                        </div>
                        <div className="product news__row3">
                            <a href><img className="img1" src="https://ae01.alicdn.com/kf/HTB1cx1zXLLsK1Rjy0Fbq6xSEXXai.jpg_q50.jpg" alt="img"/></a>
                            <img className="img2" src="//theme.hstatic.net/1000309753/1000718324/14/food01_frame_image.png?v=209" alt="img" />
                            <p className="product__name"><a href>Nến Sáp cục 1Kg</a></p>
                            <b>
                                <p className="product__price">12,000₫</p>
                            </b>
                        </div>
                        <div className="product news__row3">
                            <a href><img className="img1" src="https://product.hstatic.net/1000309753/product/pro-25_large.jpg" onmouseover="this.src='https://product.hstatic.net/1000309753/product/pro-23_large.jpg'" onmouseout="this.src='https://product.hstatic.net/1000309753/product/pro-25_large.jpg'" alt="img"/></a>
                            <img className="img2" src="//theme.hstatic.net/1000309753/1000718324/14/food01_frame_image.png?v=209" alt="img" />
                            <p className="product__name"><a href>Mixed Vegetables</a></p>
                            <b>
                                <p className="product__price">98,000₫</p>
                            </b>
                        </div>
                        <div className="product news__row3">
                            <a href><img className="img1" src="https://product.hstatic.net/1000309753/product/nho_c8339e97b4144cfca707f9a228c1516f_2ea36ab3f06348eebb6a10bd5176896f_large.jpg" onmouseover="this.src='https://product.hstatic.net/1000309753/product/nho-3_985431808a494cc09e210c7747acd3bf_7107061683f945588ec965613f3ec280_large.jpg'" onmouseout="this.src='https://product.hstatic.net/1000309753/product/nho_c8339e97b4144cfca707f9a228c1516f_2ea36ab3f06348eebb6a10bd5176896f_large.jpg'" alt="img"/></a>
                            <img className="img2" src="//theme.hstatic.net/1000309753/1000718324/14/food01_frame_image.png?v=209" alt="img" />
                            <p className="product__name"><a href>Nho Đỏ Crimson Úc</a></p>
                            <b>
                                <p className="product__price"><span className="price-aft">120,000₫</span><span className="price-bef">150,000₫</span></p>
                            </b>
                            <div className="product__discount">Giảm 20%</div>
                        </div>
                        <div className="product news__row3">
                            <a href><img className="img1" src="https://product.hstatic.net/1000309753/product/pro-10_large.jpg" onmouseover="this.src='https://product.hstatic.net/1000309753/product/pro-2_large.jpg'" onmouseout="this.src='https://product.hstatic.net/1000309753/product/pro-10_large.jpg'" alt="img"/></a>
                            <img className="img2" src="//theme.hstatic.net/1000309753/1000718324/14/food01_frame_image.png?v=209" alt="img" />
                            <p className="product__name"><a href>De Cecco Angel Hair Nests</a></p>
                            <b>
                                <p className="product__price"><span className="price-aft">25,000₫</span><span className="price-bef">32,000₫</span></p>
                            </b>
                            <div className="product__discount">Giảm 22%</div>
                        </div>
                        <div className="seemore">
                            <button className="btn news__btn">Xem thêm sản phẩm</button>
                        </div>
                    </div>
                    <div className="best-selling">
                        <div className="product-item">
                            <a href><img className="img1" src="https://product.hstatic.net/1000309753/product/cookie-nut_b8022cea560e41e5a33aa4eaa2133f79_376eda5bccef4849a799084162ca6bed_large.jpg" onmouseover="this.src='https://product.hstatic.net/1000347086/product/untitled_76620851adc34cdab4f953a2690b5321_master_3a70c9ba696d4e8186e195d20101f09a_master.jpg'" onmouseout="this.src='https://product.hstatic.net/1000309753/product/cookie-nut_b8022cea560e41e5a33aa4eaa2133f79_376eda5bccef4849a799084162ca6bed_large.jpg'" alt="img"/></a>
                            <img className="img2" src="//theme.hstatic.net/1000309753/1000718324/14/food01_frame_image.png?v=209" alt="img" />
                            <p className="product__name"><a href>Bánh quy hạt dẻ</a></p>
                            <b>
                                <p className="product__price"><span className="price-aft">54,000₫</span><span className="price-bef">65,000₫</span></p>
                            </b>
                            <div className="product__discount">Giảm 17%</div>
                        </div>
                        <div className="product-item">
                            <a href><img className="img1" src="https://product.hstatic.net/1000309753/product/bo-bit-tet_f71b060e07b246ce9a7c31121a8c63a3_f92c1b3ade1e4a52befb2c96447a4912_large.jpg" onmouseover="this.src='https://img.lovepik.com/free-png/20211117/lovepik-a-delicious-steak-png-image_400979545_wh1200.png'" onmouseout="this.src='https://product.hstatic.net/1000309753/product/bo-bit-tet_f71b060e07b246ce9a7c31121a8c63a3_f92c1b3ade1e4a52befb2c96447a4912_large.jpg'" alt="img"/></a>
                            <img className="img2" src="//theme.hstatic.net/1000309753/1000718324/14/food01_frame_image.png?v=209" alt="img" />
                            <p className="product__name"><a href>Bò bit tết kiểu Ý 500gr</a></p>
                            <b>
                                <p className="product__price"><span className="price-aft">250,000₫</span><span className="price-bef">300,000₫</span></p>
                            </b>
                            <div className="product__discount">Giảm 17%</div>
                        </div>
                        <div className="product-item">
                            <a href><img className="img1" src="https://product.hstatic.net/1000309753/product/anh-dao-2_ccb29fe1c4514ecb88a6f5d3a0fcab5c_c55c8907459a4e3c917f30b1fcf68bc4_large.jpg" onmouseover="this.src='https://product.hstatic.net/1000309753/product/cherry_1d1e51c3515245ce933ff609875ea357_e200984dc2a443fd8fad7614e5714083_large.jpg'" onmouseout="this.src='https://product.hstatic.net/1000309753/product/anh-dao-2_ccb29fe1c4514ecb88a6f5d3a0fcab5c_c55c8907459a4e3c917f30b1fcf68bc4_large.jpg'" alt="img"/></a>
                            <img className="img2" src="//theme.hstatic.net/1000309753/1000718324/14/food01_frame_image.png?v=209" alt="img" />
                            <p className="product__name"><a href>Cherry Đỏ Mỹ Size 9.5</a></p>
                            <b>
                                <p className="product__price"><span className="price-aft">150,000₫</span><span className="price-bef">160,000₫</span></p>
                            </b>
                            <div className="product__discount">Giảm 6%</div>
                        </div>
                        <div className="product-item">
                            <a href><img className="img1" src="https://product.hstatic.net/1000309753/product/dua-hau-1_a51dfc663ed344bca88b4e746a8b3a2f_9575d8fba3ae45b9b80ae69cdb56c9f0_large.jpg" onmouseover="this.src='https://product.hstatic.net/1000309753/product/dua-hau-6_6f6cfd3bf2be410c8b9cbc8a443dc4c9_72a8d4084b934d269888c01e588011d5_large.jpg'" onmouseout="this.src='https://product.hstatic.net/1000309753/product/dua-hau-1_a51dfc663ed344bca88b4e746a8b3a2f_9575d8fba3ae45b9b80ae69cdb56c9f0_large.jpg'" alt="img"/></a>
                            <img className="img2" src="//theme.hstatic.net/1000309753/1000718324/14/food01_frame_image.png?v=209" alt="img" />
                            <p className="product__name"><a href>Dưa Hấu Đỏ Không Hạt Long An</a></p>
                            <b>
                                <p className="product__price">20,000₫</p>
                            </b>
                        </div>
                        <div className="product-item">
                            <a href><img className="img1" src="https://product.hstatic.net/1000309753/product/nho_c8339e97b4144cfca707f9a228c1516f_2ea36ab3f06348eebb6a10bd5176896f_large.jpg" onmouseover="this.src='https://product.hstatic.net/1000309753/product/nho-3_985431808a494cc09e210c7747acd3bf_7107061683f945588ec965613f3ec280_large.jpg'" onmouseout="this.src='https://product.hstatic.net/1000309753/product/nho_c8339e97b4144cfca707f9a228c1516f_2ea36ab3f06348eebb6a10bd5176896f_large.jpg'" alt="img"/></a>
                            <img className="img2" src="//theme.hstatic.net/1000309753/1000718324/14/food01_frame_image.png?v=209" alt="img" />
                            <p className="product__name"><a href>Nho Đỏ Crimson Úc</a></p>
                            <b>
                                <p className="product__price"><span className="price-aft">120,000₫</span><span className="price-bef">150,000₫</span></p>
                            </b>
                            <div className="product__discount">Giảm 20%</div>
                        </div>
                        <div className="product-item">
                            <a href><img className="img1" src="https://product.hstatic.net/1000309753/product/tao_9b109fb4d777472ca8bc09ce8d72119d_8a56c73eebad42339d49d203a540f87c_large.jpg" onmouseover="this.src='https://product.hstatic.net/1000309753/product/tao-do-3_09106304e44b4ce5a6baddac6465c96b_a0a93208bc7d4ff9a2acf9390f53a294_large.jpg'" onmouseout="this.src='https://product.hstatic.net/1000309753/product/tao_9b109fb4d777472ca8bc09ce8d72119d_8a56c73eebad42339d49d203a540f87c_large.jpg'" alt="img"/></a>
                            <img className="img2" src="//theme.hstatic.net/1000309753/1000718324/14/food01_frame_image.png?v=209" alt="img" />
                            <p className="product__name"><a href>Táo Juliet Hữu Cơ Pháp</a></p>
                            <b>
                                <p className="product__price">150,000₫</p>
                            </b>
                        </div>
                        <div className="product-item">
                            <a href><img className="img1" src="https://www.visitsingapore.com/content/dam/desktop/global/dining-drinks-singapore/local-dishes/fish-head-curry-carousel-new-640x640.jpg" alt="img"/></a>
                            <img className="img2" src="//theme.hstatic.net/1000309753/1000718324/14/food01_frame_image.png?v=209" alt="img" />
                            <p className="product__name"><a href>Cà Ri cá Bớt Ấn Độ</a></p>
                            <b>
                                <p className="product__price"><span className="price-aft">100,000₫</span><span className="price-bef">
                                    130,000₫</span></p>
                            </b>
                            <div className="product__discount">Giảm 23%</div>
                        </div>
                        <div style={{ width: '52%', height: '10px' }} />
                    </div>
                    <div className="voucher">
                        <div className="voucher__item">
                            <div className="voucher__item--content">
                                <div className="discount__amount">
                                    <b id="discount">GIẢM NGAY <span className="amount"> 300K</span></b>
                                </div>
                                <ul className="co">
                                    <li className="condition">Đơn hàng từ 900k</li>
                                    <div>
                                        <button className="copyBtn copy1" onclick="navigator.clipboard.writeText('5MNLITQQA3ER'); this.innerHTML=('Đã sao chép')">Sao
                                            chép mã</button>
                                    </div>
                                </ul>
                            </div>
                            <div className="exp">
                                <p>Hạn sử dụng:</p>
                                <p>07/08/2021</p>
                                <p>5MNLITQQA3ER</p>
                            </div>
                        </div>
                        <div className="voucher__item">
                            <div className="voucher__item--content">
                                <div className="discount__amount">
                                    <b id="discount">GIẢM NGAY <span className="amount">20%</span></b>
                                </div>
                                <ul className="co">
                                    <li className="condition">Tất cả đơn hàng</li>
                                    <div>
                                        <button className="copyBtn copy2" onclick="navigator.clipboard.writeText('FYPOSBOOWIY9'); this.innerHTML=('Đã sao chép')">Sao
                                            chép mã</button>
                                    </div>
                                </ul>
                            </div>
                            <div className="exp">
                                <p>Hạn sử dụng:</p>
                                <p>05/08/2021</p>
                                <p>FYPOSBOOWIY9</p>
                            </div>
                        </div>
                        <div className="voucher__item">
                            <div className="voucher__item--content">
                                <div className="discount__amount">
                                    <b id="discount">GIẢM NGAY <span className="amount">100K</span></b>
                                </div>
                                <ul className="co">
                                    <li className="condition">Đơn hàng từ 500k</li>
                                    <div>
                                        <button className="copyBtn copy3" onclick="navigator.clipboard.writeText('AP4KI59F3WB2'); this.innerHTML=('Đã sao chép')">Sao
                                            chép mã</button>
                                    </div>
                                </ul>
                            </div>
                            <div className="exp">
                                <p>Hạn sử dụng:</p>
                                <p>07/08/2021 22:00 CN</p>
                                <p>AP4KI59F3WB2</p>
                            </div>
                        </div>
                        <div className="voucher__item">
                            <div className="voucher__item--content">
                                <div className="discount__amount">
                                    <b id="discount">GIẢM NGAY <span className="amount">30%</span></b>
                                </div>
                                <ul className="co">
                                    <li className="condition">Tất cả đơn hàng</li>
                                    <div>
                                        <button className="copyBtn copy4" onclick="navigator.clipboard.writeText('T75CJBDAV9JH'); this.innerHTML=('Đã sao chép')">Sao
                                            chép mã</button>
                                    </div>
                                </ul>
                            </div>
                            <div className="exp">
                                <p>Hạn sử dụng:</p>
                                <p>05/08/2021 22:59 CN</p>
                                <p>T75CJBDAV9JH</p>
                            </div>
                        </div>
                    </div>
                    <div className="pageTitle">
                        <h1 className="pageTitle__text" style={{ color: 'white' }}>TOP SẢN PHẨM BÁN CHẠY</h1>
                    </div>
                    <nav>
                        <ul className="ul">
                            <li className="li1 li10">Ưu đãi hôm nay <div className="hr1 hr10" />
                            </li>
                            <li className="li2 li20">Sản phẩm hot <div className="hr2 hr20" />
                            </li>
                            <li className="li3 li30">Siêu khuyến mãi <div className="hr3 hr30" />
                            </li>
                        </ul>
                    </nav>
                    <div className="concessionary">
                        <div className="product-item">
                            <a href><img className="img1" src="https://product.hstatic.net/1000309753/product/cookie-nut_b8022cea560e41e5a33aa4eaa2133f79_376eda5bccef4849a799084162ca6bed_large.jpg" onmouseover="this.src='https://product.hstatic.net/1000347086/product/untitled_76620851adc34cdab4f953a2690b5321_master_3a70c9ba696d4e8186e195d20101f09a_master.jpg'" onmouseout="this.src='https://product.hstatic.net/1000309753/product/cookie-nut_b8022cea560e41e5a33aa4eaa2133f79_376eda5bccef4849a799084162ca6bed_large.jpg'" alt="img"/></a>
                            <img className="img2" src="//theme.hstatic.net/1000309753/1000718324/14/food01_frame_image.png?v=209" alt="img" />
                            <p className="product__name"><a href>Bánh quy hạt dẻ</a></p>
                            <b>
                                <p className="product__price"><span className="price-aft">54,000₫</span><span className="price-bef">65,000₫</span></p>
                            </b>
                            <div className="product__discount">Giảm 17%</div>
                        </div>
                        <div className="product-item">
                            <a href><img className="img1" src="https://product.hstatic.net/1000309753/product/bo-bit-tet_f71b060e07b246ce9a7c31121a8c63a3_f92c1b3ade1e4a52befb2c96447a4912_large.jpg" onmouseover="this.src='https://img.lovepik.com/free-png/20211117/lovepik-a-delicious-steak-png-image_400979545_wh1200.png'" onmouseout="this.src='https://product.hstatic.net/1000309753/product/bo-bit-tet_f71b060e07b246ce9a7c31121a8c63a3_f92c1b3ade1e4a52befb2c96447a4912_large.jpg'" alt="img"/></a>
                            <img className="img2" src="//theme.hstatic.net/1000309753/1000718324/14/food01_frame_image.png?v=209" alt="img" />
                            <p className="product__name"><a href>Bò bit tết kiểu Ý 500gr</a></p>
                            <b>
                                <p className="product__price"><span className="price-aft">250,000₫</span><span className="price-bef">300,000₫</span></p>
                            </b>
                            <div className="product__discount">Giảm 17%</div>
                        </div>
                        <div className="product-item">
                            <a href><img className="img1" src="https://product.hstatic.net/1000309753/product/trung_076e3658a6e448bda26239b94f10e571_17d511ab207048eaa75fdde74026ad92_large.jpg" onmouseover="this.src='https://product.hstatic.net/1000309753/product/trung-4_456a260d03f8435881cec8fc7df38ec1_73c18e61bfb84c47a5ab0d88888aaa59_large.jpg'" onmouseout="this.src='https://product.hstatic.net/1000309753/product/trung_076e3658a6e448bda26239b94f10e571_17d511ab207048eaa75fdde74026ad92_large.jpg'" alt="img"/></a>
                            <img className="img2" src="//theme.hstatic.net/1000309753/1000718324/14/food01_frame_image.png?v=209" alt="img" />
                            <p className="product__name"><a href>Trứng Gà Thảo Mộc - Vỉ 10 Quả</a></p>
                            <b>
                                <p className="product__price">86,000₫</p>
                            </b>
                        </div>
                        <div className="product-item">
                            <a href><img className="img1" src="https://product.hstatic.net/1000309753/product/mt-480_product-14_large.jpg" onmouseover="this.src='https://product.hstatic.net/1000309753/product/pro-5_large.jpg'" onmouseout="this.src='https://product.hstatic.net/1000309753/product/mt-480_product-14_large.jpg'" alt="img"/></a>
                            <img className="img2" src="//theme.hstatic.net/1000309753/1000718324/14/food01_frame_image.png?v=209" alt="img" />
                            <p className="product__name"><a href>Collezione Pasta Orecchiette</a></p>
                            <b>
                                <p className="product__price"><span className="price-aft">125,000₫</span><span className="price-bef">165,000₫</span></p>
                            </b>
                        </div>
                        <div className="product-item">
                            <a href><img className="img1" src="https://product.hstatic.net/1000309753/product/tao_9b109fb4d777472ca8bc09ce8d72119d_8a56c73eebad42339d49d203a540f87c_large.jpg" onmouseover="this.src='https://product.hstatic.net/1000309753/product/tao-do-3_09106304e44b4ce5a6baddac6465c96b_a0a93208bc7d4ff9a2acf9390f53a294_large.jpg'" onmouseout="this.src='https://product.hstatic.net/1000309753/product/tao_9b109fb4d777472ca8bc09ce8d72119d_8a56c73eebad42339d49d203a540f87c_large.jpg'" alt="img"/></a>
                            <img className="img2" src="//theme.hstatic.net/1000309753/1000718324/14/food01_frame_image.png?v=209" alt="img" />
                            <p className="product__name"><a href>Táo Juliet Hữu Cơ Pháp</a></p>
                            <b>
                                <p className="product__price">150,000₫</p>
                            </b>
                        </div>
                        <div className="product-item">
                            <a href><img className="img1" src="https://www.visitsingapore.com/content/dam/desktop/global/dining-drinks-singapore/local-dishes/fish-head-curry-carousel-new-640x640.jpg" alt="img"/></a>
                            <img className="img2" src="//theme.hstatic.net/1000309753/1000718324/14/food01_frame_image.png?v=209" alt="img" />
                            <p className="product__name"><a href>Cà Ri cá Bớt Ấn Độ</a></p>
                            <b>
                                <p className="product__price"><span className="price-aft">100,000₫</span><span className="price-bef">
                                    130,000₫</span></p>
                            </b>
                            <div className="product__discount">Giảm 23%</div>
                        </div>
                        <div className="product-item">
                            <a href><img className="img1" src="https://product.hstatic.net/1000309753/product/cai-xanh_4bab4a65d8424af887618235dab20c13_c96b70a705d44cb0ada6509b00076118_large.jpg" onmouseover="this.src='https://bizweb.dktcdn.net/100/021/951/products/rau-cai-xanh-huu-co-55x50.jpg?v=1629686620963'" onmouseout="this.src='https://product.hstatic.net/1000309753/product/cai-xanh_4bab4a65d8424af887618235dab20c13_c96b70a705d44cb0ada6509b00076118_large.jpg'" alt="img"/></a>
                            <img className="img2" src="//theme.hstatic.net/1000309753/1000718324/14/food01_frame_image.png?v=209" alt="img" />
                            <p className="product__name"><a href>Cải xanh Đà Lạt 500gr</a></p>
                            <b>
                                <p className="product__price"><span className="price-aft">20,000₫</span><span className="price-bef">30,000₫</span></p>
                            </b>
                            <div className="product__discount">Giảm 33%</div>
                        </div>
                        <div className="product-item">
                            <a href><img className="img1" src="https://product.hstatic.net/1000309753/product/anh-dao-2_ccb29fe1c4514ecb88a6f5d3a0fcab5c_c55c8907459a4e3c917f30b1fcf68bc4_large.jpg" onmouseover="this.src='https://product.hstatic.net/1000309753/product/cherry_1d1e51c3515245ce933ff609875ea357_e200984dc2a443fd8fad7614e5714083_large.jpg'" onmouseout="this.src='https://product.hstatic.net/1000309753/product/anh-dao-2_ccb29fe1c4514ecb88a6f5d3a0fcab5c_c55c8907459a4e3c917f30b1fcf68bc4_large.jpg'" alt="img"/></a>
                            <img className="img2" src="//theme.hstatic.net/1000309753/1000718324/14/food01_frame_image.png?v=209" alt="img" />
                            <p className="product__name"><a href>Cherry Đỏ Mỹ Size 9.5</a></p>
                            <b>
                                <p className="product__price"><span className="price-aft">150,000₫</span><span className="price-bef">160,000₫</span></p>
                            </b>
                            <div className="product__discount">Giảm 6%</div>
                        </div>
                        <div className="product-item">
                            <a href><img className="img1" src="https://product.hstatic.net/1000309753/product/dua-hau-1_a51dfc663ed344bca88b4e746a8b3a2f_9575d8fba3ae45b9b80ae69cdb56c9f0_large.jpg" onmouseover="this.src='https://product.hstatic.net/1000309753/product/dua-hau-6_6f6cfd3bf2be410c8b9cbc8a443dc4c9_72a8d4084b934d269888c01e588011d5_large.jpg'" onmouseout="this.src='https://product.hstatic.net/1000309753/product/dua-hau-1_a51dfc663ed344bca88b4e746a8b3a2f_9575d8fba3ae45b9b80ae69cdb56c9f0_large.jpg'" alt="img"/></a>
                            <img className="img2" src="//theme.hstatic.net/1000309753/1000718324/14/food01_frame_image.png?v=209" alt="img" />
                            <p className="product__name"><a href>Dưa Hấu Đỏ Không Hạt Long An</a></p>
                            <b>
                                <p className="product__price">20,000₫</p>
                            </b>
                        </div>
                        <div className="product-item">
                            <a href><img className="img1" src="https://product.hstatic.net/1000309753/product/nho_c8339e97b4144cfca707f9a228c1516f_2ea36ab3f06348eebb6a10bd5176896f_large.jpg" onmouseover="this.src='https://product.hstatic.net/1000309753/product/nho-3_985431808a494cc09e210c7747acd3bf_7107061683f945588ec965613f3ec280_large.jpg'" onmouseout="this.src='https://product.hstatic.net/1000309753/product/nho_c8339e97b4144cfca707f9a228c1516f_2ea36ab3f06348eebb6a10bd5176896f_large.jpg'" alt="img"/></a>
                            <img className="img2" src="//theme.hstatic.net/1000309753/1000718324/14/food01_frame_image.png?v=209" alt="img" />
                            <p className="product__name"><a href>Nho Đỏ Crimson Úc</a></p>
                            <b>
                                <p className="product__price"><span className="price-aft">120,000₫</span><span className="price-bef">150,000₫</span></p>
                            </b>
                            <div className="product__discount">Giảm 20%</div>
                        </div>
                        <div className="product row3 concessionary__row3">
                            <a href><img className="img1" src="https://ae01.alicdn.com/kf/HTB1cx1zXLLsK1Rjy0Fbq6xSEXXai.jpg_q50.jpg" alt="img"/></a>
                            <img className="img2" src="//theme.hstatic.net/1000309753/1000718324/14/food01_frame_image.png?v=209" alt="img" />
                            <p className="product__name"><a href>Nến Sáp cục 1Kg</a></p>
                            <b>
                                <p className="product__price">12,000₫</p>
                            </b>
                        </div>
                        <div className="product row3 concessionary__row3">
                            <a href><img className="img1" src="https://product.hstatic.net/1000309753/product/pro-25_large.jpg" onmouseover="this.src='https://product.hstatic.net/1000309753/product/pro-23_large.jpg'" onmouseout="this.src='https://product.hstatic.net/1000309753/product/pro-25_large.jpg'" alt="img"/></a>
                            <img className="img2" src="//theme.hstatic.net/1000309753/1000718324/14/food01_frame_image.png?v=209" alt="img" />
                            <p className="product__name"><a href>Mixed Vegetables</a></p>
                            <b>
                                <p className="product__price">98,000₫</p>
                            </b>
                        </div>
                        <div className="product row3 concessionary__row3">
                            <a href><img className="img1" src="https://product.hstatic.net/1000309753/product/ca-chua-4_25bebd7bd2484e258a4709da1971e0ae_c6faf6ea88a64713b8663fb369491eba_large.jpg" onmouseover="this.src='https://product.hstatic.net/1000309753/product/ca-chua-1_fc77722715794113ab00c5139245b176_022582e18ee944988cb8dc9c6805a624_large.jpg'" onmouseout="this.src='https://product.hstatic.net/1000309753/product/ca-chua-4_25bebd7bd2484e258a4709da1971e0ae_c6faf6ea88a64713b8663fb369491eba_large.jpg'" alt="img"/></a>
                            <img className="img2" src="//theme.hstatic.net/1000309753/1000718324/14/food01_frame_image.png?v=209" alt="img" />
                            <p className="product__name"><a href>Cà Chua Đà Lạt 500g</a></p>
                            <b>
                                <p className="product__price">10,000₫</p>
                            </b>
                        </div>
                        <div className="product row3 concessionary__row3">
                            <a href><img className="img1" src="https://product.hstatic.net/1000309753/product/pro-9_389dbd9937254c4ba377099698895c09_master.jpg" onmouseover="this.src='https://product.hstatic.net/1000309753/product/pro-4_f5998ff4554e42f480efbdc4c9f30ad1_master.jpg'" onmouseout="this.src='https://product.hstatic.net/1000309753/product/pro-9_389dbd9937254c4ba377099698895c09_master.jpg'" alt="img"/></a>
                            <img className="img2" src="//theme.hstatic.net/1000309753/1000718324/14/food01_frame_image.png?v=209" alt="img" />
                            <p className="product__name"><a href>Praesent Esr Edio</a></p>
                            <b>
                                <p className="product__price"><span className="price-aft">20,000₫</span><span className="price-bef">30,000₫</span></p>
                            </b>
                            <div className="product__discount">Giảm 8%</div>
                        </div>
                        <div className="product row3 concessionary__row3">
                            <a href><img className="img1" src="https://product.hstatic.net/1000309753/product/khoai-tay-2_0cbaec5bb6c241d9b10b4e8350136c11_98614330f6f44f6b9d4a2d13831b96d1_large.jpg" onmouseover="this.src='https://product.hstatic.net/1000309753/product/khoai-tay-1_d6be3f665a5d41af9d4a0484d68d6aef_0808ee3bbcf0494faa5935364d8b6dd9_large.jpg'" onmouseout="this.src='https://product.hstatic.net/1000309753/product/khoai-tay-2_0cbaec5bb6c241d9b10b4e8350136c11_98614330f6f44f6b9d4a2d13831b96d1_large.jpg'" alt="img"/></a>
                            <img className="img2" src="//theme.hstatic.net/1000309753/1000718324/14/food01_frame_image.png?v=209" alt="img" />
                            <p className="product__name"><a href>Khoai Tây Bi Đà Lạt</a></p>
                            <b>
                                <p className="product__price">90,000₫</p>
                            </b>
                        </div>
                        <div className="seemore">
                            <button className="btn concessionary__btn">Xem thêm sản phẩm</button>
                        </div>
                    </div>
                    <div className="hot">
                        <div className="product-item">
                            <a href><img className="img1" src="https://product.hstatic.net/1000309753/product/dua-hau-1_a51dfc663ed344bca88b4e746a8b3a2f_9575d8fba3ae45b9b80ae69cdb56c9f0_large.jpg" onmouseover="this.src='https://product.hstatic.net/1000309753/product/dua-hau-6_6f6cfd3bf2be410c8b9cbc8a443dc4c9_72a8d4084b934d269888c01e588011d5_large.jpg'" onmouseout="this.src='https://product.hstatic.net/1000309753/product/dua-hau-1_a51dfc663ed344bca88b4e746a8b3a2f_9575d8fba3ae45b9b80ae69cdb56c9f0_large.jpg'" alt="img"/></a>
                            <img className="img2" src="//theme.hstatic.net/1000309753/1000718324/14/food01_frame_image.png?v=209" alt="img" />
                            <p className="product__name"><a href>Dưa Hấu Đỏ Không Hạt Long An</a></p>
                            <b>
                                <p className="product__price">20,000₫</p>
                            </b>
                        </div>
                        <div className="product-item">
                            <a href><img className="img1" src="https://dalatfarm.net/wp-content/uploads/2021/06/hat-dau-ha-lan.jpg" onmouseover="this.src='https://product.hstatic.net/1000309753/product/dau-xanh_aae15268ea214a6f86f5be014efc6dad_9cc7ba1303ed4f87aae38a8d0bd170ff_large.jpg'" onmouseout="this.src='https://dalatfarm.net/wp-content/uploads/2021/06/hat-dau-ha-lan.jpg'" alt="img"/></a>
                            <img className="img2" src="//theme.hstatic.net/1000309753/1000718324/14/food01_frame_image.png?v=209" alt="img" />
                            <p className="product__name"><a href>Đậu Hà Lan hữu cơ Rapunzel</a></p>
                            <b>
                                <p className="product__price">190,000₫</p>
                            </b>
                        </div>
                        <div className="product-item">
                            <a href><img className="img1" src="https://product.hstatic.net/1000309753/product/pro-1_fa7cc97f2c8543cda1b98279217137a1_large.jpg" onmouseover="this.src='https://product.hstatic.net/1000309753/product/pro-5_4314cbdd39b448bd821cb0a32453d611_large.jpg'" onmouseout="this.src='https://product.hstatic.net/1000309753/product/pro-1_fa7cc97f2c8543cda1b98279217137a1_large.jpg'" alt="img"/></a>
                            <img className="img2" src="//theme.hstatic.net/1000309753/1000718324/14/food01_frame_image.png?v=209" alt="img" />
                            <p className="product__name"><a href>Ferara Pasta Long Fusilli</a></p>
                            <b>
                                <p className="product__price">120,000₫</p>
                            </b>
                        </div>
                        <div className="product-item">
                            <a href><img className="img1" src="https://product.hstatic.net/1000309753/product/prosf_master.jpg" onmouseover="this.src='https://product.hstatic.net/1000309753/product/fs_master.jpg'" onmouseout="this.src='https://product.hstatic.net/1000309753/product/prosf_master.jpg'" alt="img"/></a>
                            <img className="img2" src="//theme.hstatic.net/1000309753/1000718324/14/food01_frame_image.png?v=209" alt="img" />
                            <p className="product__name"><a href>Gift Basket</a></p>
                            <b>
                                <p className="product__price">459,000₫</p>
                            </b>
                        </div>
                        <div className="product-item">
                            <a href><img className="img1" src="https://product.hstatic.net/1000309753/product/trung_076e3658a6e448bda26239b94f10e571_17d511ab207048eaa75fdde74026ad92_large.jpg" onmouseover="this.src='https://product.hstatic.net/1000309753/product/trung-4_456a260d03f8435881cec8fc7df38ec1_73c18e61bfb84c47a5ab0d88888aaa59_large.jpg'" onmouseout="this.src='https://product.hstatic.net/1000309753/product/trung_076e3658a6e448bda26239b94f10e571_17d511ab207048eaa75fdde74026ad92_large.jpg'" alt="img"/></a>
                            <img className="img2" src="//theme.hstatic.net/1000309753/1000718324/14/food01_frame_image.png?v=209" alt="img" />
                            <p className="product__name"><a href>Trứng Gà Thảo Mộc - Vỉ 10 Quả</a></p>
                            <b>
                                <p className="product__price">86,000₫</p>
                            </b>
                        </div>
                        <div className="product-item">
                            <a href><img className="img1" src="https://product.hstatic.net/1000309753/product/mt-480_product-14_large.jpg" onmouseover="this.src='https://product.hstatic.net/1000309753/product/pro-5_large.jpg'" onmouseout="this.src='https://product.hstatic.net/1000309753/product/mt-480_product-14_large.jpg'" alt="img"/></a>
                            <img className="img2" src="//theme.hstatic.net/1000309753/1000718324/14/food01_frame_image.png?v=209" alt="img" />
                            <p className="product__name"><a href>Collezione Pasta Orecchiette</a></p>
                            <b>
                                <p className="product__price"><span className="price-aft">125,000₫</span><span className="price-bef">165,000₫</span></p>
                            </b>
                        </div>
                        <div className="product-item">
                            <a href><img className="img1" src="https://product.hstatic.net/1000309753/product/ca-chua-4_25bebd7bd2484e258a4709da1971e0ae_c6faf6ea88a64713b8663fb369491eba_large.jpg" onmouseover="this.src='https://product.hstatic.net/1000309753/product/ca-chua-1_fc77722715794113ab00c5139245b176_022582e18ee944988cb8dc9c6805a624_large.jpg'" onmouseout="this.src='https://product.hstatic.net/1000309753/product/ca-chua-4_25bebd7bd2484e258a4709da1971e0ae_c6faf6ea88a64713b8663fb369491eba_large.jpg'" alt="img"/></a>
                            <img className="img2" src="//theme.hstatic.net/1000309753/1000718324/14/food01_frame_image.png?v=209" alt="img" />
                            <p className="product__name"><a href>Cà Chua Đà Lạt 500g</a></p>
                            <b>
                                <p className="product__price">10,000₫</p>
                            </b>
                        </div>
                        <div className="product-item">
                            <a href><img className="img1" src="https://product.hstatic.net/1000309753/product/khoai-tay-2_0cbaec5bb6c241d9b10b4e8350136c11_98614330f6f44f6b9d4a2d13831b96d1_large.jpg" onmouseover="this.src='https://product.hstatic.net/1000309753/product/khoai-tay-1_d6be3f665a5d41af9d4a0484d68d6aef_0808ee3bbcf0494faa5935364d8b6dd9_large.jpg'" onmouseout="this.src='https://product.hstatic.net/1000309753/product/khoai-tay-2_0cbaec5bb6c241d9b10b4e8350136c11_98614330f6f44f6b9d4a2d13831b96d1_large.jpg'" alt="img"/></a>
                            <img className="img2" src="//theme.hstatic.net/1000309753/1000718324/14/food01_frame_image.png?v=209" alt="img" />
                            <p className="product__name"><a href>Khoai Tây Bi Đà Lạt</a></p>
                            <b>
                                <p className="product__price">90,000₫</p>
                            </b>
                        </div>
                        <div className="product-item">
                            <a href><img className="img1" src="https://product.hstatic.net/1000309753/product/cookie-nut_b8022cea560e41e5a33aa4eaa2133f79_376eda5bccef4849a799084162ca6bed_large.jpg" onmouseover="this.src='https://product.hstatic.net/1000347086/product/untitled_76620851adc34cdab4f953a2690b5321_master_3a70c9ba696d4e8186e195d20101f09a_master.jpg'" onmouseout="this.src='https://product.hstatic.net/1000309753/product/cookie-nut_b8022cea560e41e5a33aa4eaa2133f79_376eda5bccef4849a799084162ca6bed_large.jpg'" alt="img"/></a>
                            <img className="img2" src="//theme.hstatic.net/1000309753/1000718324/14/food01_frame_image.png?v=209" alt="img" />
                            <p className="product__name"><a href>Bánh quy hạt dẻ</a></p>
                            <b>
                                <p className="product__price"><span className="price-aft">54,000₫</span><span className="price-bef">65,000₫</span></p>
                            </b>
                        </div>
                        <div className="product-item">
                            <a href><img className="img1" src="https://product.hstatic.net/1000309753/product/tao_9b109fb4d777472ca8bc09ce8d72119d_8a56c73eebad42339d49d203a540f87c_large.jpg" onmouseover="this.src='https://product.hstatic.net/1000309753/product/tao-do-3_09106304e44b4ce5a6baddac6465c96b_a0a93208bc7d4ff9a2acf9390f53a294_large.jpg'" onmouseout="this.src='https://product.hstatic.net/1000309753/product/tao_9b109fb4d777472ca8bc09ce8d72119d_8a56c73eebad42339d49d203a540f87c_large.jpg'" alt="img"/></a>
                            <img className="img2" src="//theme.hstatic.net/1000309753/1000718324/14/food01_frame_image.png?v=209" alt="img" />
                            <p className="product__name"><a href>Táo Juliet Hữu Cơ Pháp</a></p>
                            <b>
                                <p className="product__price">150,000₫</p>
                            </b>
                        </div>
                        <div className="product news__row3">
                            <a href><img className="img1" src="https://product.hstatic.net/1000309753/product/bong-cai-1_d79d78966b424d58a2b199ede2bc6ff5_c9f1d5de5124483fad5616cf8773837e_large.jpg" onmouseover="this.src='https://product.hstatic.net/1000309753/product/bong-cai_1958f4f940a84635a1fa968e9bdc0fe0_12398882bcc543ea9223ecafecad9760_large.jpg'" onmouseout="this.src='https://product.hstatic.net/1000309753/product/bong-cai-1_d79d78966b424d58a2b199ede2bc6ff5_c9f1d5de5124483fad5616cf8773837e_large.jpg'" alt="img"/></a>
                            <img className="img2" src="//theme.hstatic.net/1000309753/1000718324/14/food01_frame_image.png?v=209" alt="img" />
                            <p className="product__name"><a href>Bông cải xanh hữu cơ</a></p>
                            <b>
                                <p className="product__price">26,000₫</p>
                            </b>
                        </div>
                        <div className="product news__row3">
                            <a href><img className="img1" src="https://ae01.alicdn.com/kf/HTB1cx1zXLLsK1Rjy0Fbq6xSEXXai.jpg_q50.jpg" alt="img"/></a>
                            <img className="img2" src="//theme.hstatic.net/1000309753/1000718324/14/food01_frame_image.png?v=209" alt="img" />
                            <p className="product__name"><a href>Nến Sáp cục 1Kg</a></p>
                            <b>
                                <p className="product__price">12,000₫</p>
                            </b>
                        </div>
                        <div className="product news__row3">
                            <a href><img className="img1" src="https://product.hstatic.net/1000309753/product/pro-25_large.jpg" onmouseover="this.src='https://product.hstatic.net/1000309753/product/pro-23_large.jpg'" onmouseout="this.src='https://product.hstatic.net/1000309753/product/pro-25_large.jpg'" alt="img"/></a>
                            <img className="img2" src="//theme.hstatic.net/1000309753/1000718324/14/food01_frame_image.png?v=209" alt="img" />
                            <p className="product__name"><a href>Mixed Vegetables</a></p>
                            <b>
                                <p className="product__price">98,000₫</p>
                            </b>
                        </div>
                        <div className="product news__row3">
                            <a href><img className="img1" src="https://product.hstatic.net/1000309753/product/nho_c8339e97b4144cfca707f9a228c1516f_2ea36ab3f06348eebb6a10bd5176896f_large.jpg" onmouseover="this.src='https://product.hstatic.net/1000309753/product/nho-3_985431808a494cc09e210c7747acd3bf_7107061683f945588ec965613f3ec280_large.jpg'" onmouseout="this.src='https://product.hstatic.net/1000309753/product/nho_c8339e97b4144cfca707f9a228c1516f_2ea36ab3f06348eebb6a10bd5176896f_large.jpg'" alt="img"/></a>
                            <img className="img2" src="//theme.hstatic.net/1000309753/1000718324/14/food01_frame_image.png?v=209" alt="img" />
                            <p className="product__name"><a href>Nho Đỏ Crimson Úc</a></p>
                            <b>
                                <p className="product__price"><span className="price-aft">120,000₫</span><span className="price-bef">150,000₫</span></p>
                            </b>
                            <div className="product__discount">Giảm 20%</div>
                        </div>
                        <div className="product news__row3">
                            <a href><img className="img1" src="https://product.hstatic.net/1000309753/product/pro-10_large.jpg" onmouseover="this.src='https://product.hstatic.net/1000309753/product/pro-2_large.jpg'" onmouseout="this.src='https://product.hstatic.net/1000309753/product/pro-10_large.jpg'" alt="img"/></a>
                            <img className="img2" src="//theme.hstatic.net/1000309753/1000718324/14/food01_frame_image.png?v=209" alt="img" />
                            <p className="product__name"><a href>De Cecco Angel Hair Nests</a></p>
                            <b>
                                <p className="product__price"><span className="price-aft">25,000₫</span><span className="price-bef">32,000₫</span></p>
                            </b>
                            <div className="product__discount">Giảm 22%</div>
                        </div>
                    </div>
                    <div className="supero">
                        <div className="product-item">
                            <a href><img className="img1" src="https://product.hstatic.net/1000309753/product/cookie-nut_b8022cea560e41e5a33aa4eaa2133f79_376eda5bccef4849a799084162ca6bed_large.jpg" onmouseover="this.src='https://product.hstatic.net/1000347086/product/untitled_76620851adc34cdab4f953a2690b5321_master_3a70c9ba696d4e8186e195d20101f09a_master.jpg'" onmouseout="this.src='https://product.hstatic.net/1000309753/product/cookie-nut_b8022cea560e41e5a33aa4eaa2133f79_376eda5bccef4849a799084162ca6bed_large.jpg'" alt="img"/></a>
                            <img className="img2" src="//theme.hstatic.net/1000309753/1000718324/14/food01_frame_image.png?v=209" alt="img" />
                            <p className="product__name"><a href>Bánh quy hạt dẻ</a></p>
                            <b>
                                <p className="product__price"><span className="price-aft">54,000₫</span><span className="price-bef">65,000₫</span></p>
                            </b>
                            <div className="product__discount">Giảm 17%</div>
                        </div>
                        <div className="product-item">
                            <a href><img className="img1" src="https://product.hstatic.net/1000309753/product/bo-bit-tet_f71b060e07b246ce9a7c31121a8c63a3_f92c1b3ade1e4a52befb2c96447a4912_large.jpg" onmouseover="this.src='https://img.lovepik.com/free-png/20211117/lovepik-a-delicious-steak-png-image_400979545_wh1200.png'" onmouseout="this.src='https://product.hstatic.net/1000309753/product/bo-bit-tet_f71b060e07b246ce9a7c31121a8c63a3_f92c1b3ade1e4a52befb2c96447a4912_large.jpg'" alt="img"/></a>
                            <img className="img2" src="//theme.hstatic.net/1000309753/1000718324/14/food01_frame_image.png?v=209" alt="img" />
                            <p className="product__name"><a href>Bò bit tết kiểu Ý 500gr</a></p>
                            <b>
                                <p className="product__price"><span className="price-aft">250,000₫</span><span className="price-bef">300,000₫</span></p>
                            </b>
                            <div className="product__discount">Giảm 17%</div>
                        </div>
                        <div className="product-item">
                            <a href><img className="img1" src="https://product.hstatic.net/1000309753/product/anh-dao-2_ccb29fe1c4514ecb88a6f5d3a0fcab5c_c55c8907459a4e3c917f30b1fcf68bc4_large.jpg" onmouseover="this.src='https://product.hstatic.net/1000309753/product/cherry_1d1e51c3515245ce933ff609875ea357_e200984dc2a443fd8fad7614e5714083_large.jpg'" onmouseout="this.src='https://product.hstatic.net/1000309753/product/anh-dao-2_ccb29fe1c4514ecb88a6f5d3a0fcab5c_c55c8907459a4e3c917f30b1fcf68bc4_large.jpg'" alt="img"/></a>
                            <img className="img2" src="//theme.hstatic.net/1000309753/1000718324/14/food01_frame_image.png?v=209" alt="img" />
                            <p className="product__name"><a href>Cherry Đỏ Mỹ Size 9.5</a></p>
                            <b>
                                <p className="product__price"><span className="price-aft">150,000₫</span><span className="price-bef">160,000₫</span></p>
                            </b>
                            <div className="product__discount">Giảm 6%</div>
                        </div>
                        <div className="product-item">
                            <a href><img className="img1" src="https://product.hstatic.net/1000309753/product/dua-hau-1_a51dfc663ed344bca88b4e746a8b3a2f_9575d8fba3ae45b9b80ae69cdb56c9f0_large.jpg" onmouseover="this.src='https://product.hstatic.net/1000309753/product/dua-hau-6_6f6cfd3bf2be410c8b9cbc8a443dc4c9_72a8d4084b934d269888c01e588011d5_large.jpg'" onmouseout="this.src='https://product.hstatic.net/1000309753/product/dua-hau-1_a51dfc663ed344bca88b4e746a8b3a2f_9575d8fba3ae45b9b80ae69cdb56c9f0_large.jpg'" alt="img"/></a>
                            <img className="img2" src="//theme.hstatic.net/1000309753/1000718324/14/food01_frame_image.png?v=209" alt="img" />
                            <p className="product__name"><a href>Dưa Hấu Đỏ Không Hạt Long An</a></p>
                            <b>
                                <p className="product__price">20,000₫</p>
                            </b>
                        </div>
                        <div className="product-item">
                            <a href><img className="img1" src="https://product.hstatic.net/1000309753/product/nho_c8339e97b4144cfca707f9a228c1516f_2ea36ab3f06348eebb6a10bd5176896f_large.jpg" onmouseover="this.src='https://product.hstatic.net/1000309753/product/nho-3_985431808a494cc09e210c7747acd3bf_7107061683f945588ec965613f3ec280_large.jpg'" onmouseout="this.src='https://product.hstatic.net/1000309753/product/nho_c8339e97b4144cfca707f9a228c1516f_2ea36ab3f06348eebb6a10bd5176896f_large.jpg'" alt="img"/></a>
                            <img className="img2" src="//theme.hstatic.net/1000309753/1000718324/14/food01_frame_image.png?v=209" alt="img" />
                            <p className="product__name"><a href>Nho Đỏ Crimson Úc</a></p>
                            <b>
                                <p className="product__price"><span className="price-aft">120,000₫</span><span className="price-bef">150,000₫</span></p>
                            </b>
                            <div className="product__discount">Giảm 20%</div>
                        </div>
                        <div className="product-item">
                            <a href><img className="img1" src="https://product.hstatic.net/1000309753/product/tao_9b109fb4d777472ca8bc09ce8d72119d_8a56c73eebad42339d49d203a540f87c_large.jpg" onmouseover="this.src='https://product.hstatic.net/1000309753/product/tao-do-3_09106304e44b4ce5a6baddac6465c96b_a0a93208bc7d4ff9a2acf9390f53a294_large.jpg'" onmouseout="this.src='https://product.hstatic.net/1000309753/product/tao_9b109fb4d777472ca8bc09ce8d72119d_8a56c73eebad42339d49d203a540f87c_large.jpg'" alt="img"/></a>
                            <img className="img2" src="//theme.hstatic.net/1000309753/1000718324/14/food01_frame_image.png?v=209" alt="img" />
                            <p className="product__name"><a href>Táo Juliet Hữu Cơ Pháp</a></p>
                            <b>
                                <p className="product__price">150,000₫</p>
                            </b>
                        </div>
                        <div className="product-item">
                            <a href><img className="img1" src="https://www.visitsingapore.com/content/dam/desktop/global/dining-drinks-singapore/local-dishes/fish-head-curry-carousel-new-640x640.jpg" alt="img"/></a>
                            <img className="img2" src="//theme.hstatic.net/1000309753/1000718324/14/food01_frame_image.png?v=209" alt="img" />
                            <p className="product__name"><a href>Cà Ri cá Bớt Ấn Độ</a></p>
                            <b>
                                <p className="product__price"><span className="price-aft">100,000₫</span><span className="price-bef">
                                    130,000₫</span></p>
                            </b>
                            <div className="product__discount">Giảm 23%</div>
                        </div>
                        <div style={{ width: '52%', height: '10px' }} />
                    </div>
                    <div className="banners">
                        <div className="banner1">
                            <div className="banner-item banner">
                                <a href="index.html" target="_blank">
                                    <img className="banner-img" src="https://theme.hstatic.net/1000309753/1000718324/14/food01_banner_1.jpg?v=209" alt="img"/>
                                </a>
                            </div>
                            <div className="banner-item banner">
                                <a href="index.html" target="_blank">
                                    <img className="banner-img" src="https://theme.hstatic.net/1000309753/1000718324/14/food01_banner_3.jpg?v=209" alt="img"/>
                                </a>
                            </div>
                        </div>
                        <div className="banner2">
                            <div className="banner-item banner">
                                <a href="index.html" target="_blank">
                                    <img className="banner-img" src="https://theme.hstatic.net/1000309753/1000718324/14/food01_banner_2.jpg?v=209" alt="img"/>
                                </a>
                            </div>
                            <div className="banner-item banner">
                                <a href="index.html" target="_blank">
                                    <img className="banner-img" src="https://theme.hstatic.net/1000309753/1000718324/14/food01_banner_4.jpg?v=209" alt="img"/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* /* End Body* / */}

            </div>
        </>
    );
}

export default LandingPage;
