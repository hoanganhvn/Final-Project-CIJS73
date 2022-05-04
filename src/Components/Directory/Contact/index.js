import "../style.css";
import "./index.css";
// import { Link } from "react-router-dom";

export const Contact = () => {
  return (
    <div>
      <div>
        <div className="title">
          <h1>
            <strong>Liên hệ</strong>
          </h1>
          <div className="hr"></div>
          <br />
        </div>
        <p>Địa chỉ chúng tôi</p>
        <b>
          Tầng 4, tòa nhà Flemington, số 182, đường Lê Đại Hành, phường 15, quận
          11, Tp. Hồ Chí Minh.
        </b>
        <br />
        <br />
        <iframe
          title=""
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.615593436863!2d106.65415201477133!3d10.76408024232994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752eec7752c743%3A0xd832d71bd12b6a15!2zRmxlbWluZ3RvbiBUb3dlciwgMTgyIEzDqiDEkOG6oWkgSMOgbmgsIHBoxrDhu51uZyAxNSwgUXXhuq1uIDExLCBI4buTIENow60gTWluaCwgVmlldG5hbQ!5e0!3m2!1sen!2s!4v1521530731757"
          style={{
            width: "100%",
            height: 300,
            frameBorder: "0",
            border: "0",
            allowfullScreen: "",
          }}
        ></iframe>
        <br />
        <p>Email chúng tôi</p>
        <b>hi@haravan.com</b>
        <br />
        <p>Điện thoại</p>
        <b>1900.636.099</b>
        <br />
        <br />
        <p>Thời gian làm việc</p>
        <b>
          Thứ 2 đến Thứ 6 từ 8h đến 18h; Thứ 7 và Chủ nhật từ 8h00 đến 17h00
        </b>
        <br />
        <br />
        <br />
        <h2>
          <b id="ques">Gửi thắc mắc cho chúng tôi</b>
        </h2>
        <div id="hr"></div>
        <br />
        <div>
          <input id="name" type="text" placeholder="Tên của bạn" />
        </div>
        <br />
        <div>
          <input id="email" type="text" placeholder="Email của bạn" />
          <input id="number" type="tel" placeholder="Số điện thoại của bạn" />
        </div>
        <br />
        <div>
          <textarea
            id="content"
            rows="6"
            cols="83"
            placeholder="Nội dung"
          ></textarea>
        </div>
        <br />
        <div id="policies">
          <p>
            This site is protected by reCAPTCHA and the Google
            <a className="google" href="https://policies.google.com/privacy">
              Privacy Policy
            </a>
            and
            <a className="google" href="https://policies.google.com/terms">
              Terms of Service
            </a>
            apply.
          </p>
        </div>
        <button className="btn">
          <b>GỬI CHO CHÚNG TÔI</b>
        </button>
      </div>
    </div>
  );
};
