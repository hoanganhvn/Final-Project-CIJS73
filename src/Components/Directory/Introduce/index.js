import { Paragraphs } from "./../../Directory/Introduce/Paragraph.js";
import "../style.css";

import { Link } from "react-router-dom";

export const Introduce = () => {
  return (
    <div className="title">
      <h1>
        <strong>Giới thiệu</strong>
      </h1>
      <div className="hr"></div>
      <br />
      <div>
        <p>
          Trang giới thiệu giúp khách hàng hiểu rõ hơn về cửa hàng của bạn. Hãy
          cung cấp thông tin cụ thể về việc kinh doanh, về cửa hàng, thông tin
          liên hệ. Điều này sẽ giúp khách hàng cảm thấy tin tưởng khi mua hàng
          trên website của bạn.
        </p>
        <p>Một vài gợi ý cho nội dung trang Giới thiệu:</p>
        <div>
          <Paragraphs id="Bạn là ai" />
          <Paragraphs id="Giá trị kinh doanh của bạn là gì " />
          <Paragraphs id="Địa chỉ cửa hàng" />
          <Paragraphs id="Bạn đã kinh doanh trong ngành hàng này bao lâu rồi" />
          <Paragraphs id="Bạn kinh doanh ngành hàng online được bao lâu" />
          <Paragraphs id="Đội ngũ của bạn gồm những ai" />
          <Paragraphs id="Thông tin liên hệ" />
          <Paragraphs id="Liên kết đến các trang mạng xã hội (Twitter, Facebook)" />
        </div>
      </div>
      <p>
        Bạn có thể chỉnh sửa hoặc xoá bài viết này tại{" "}
        <strong>
          <Link to="">đây</Link>
        </strong>
        hoặc thêm những bài viết mới trong phần quản lý
        <strong>
          <Link to="">Trang nội dung.</Link>
        </strong>
      </p>
    </div>
  );
};
