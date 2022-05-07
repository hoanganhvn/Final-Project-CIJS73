import { Link } from "react-router-dom";

export const Links = () => {
  return (
    <div style={{ lineHeight: "200%" }}>
      <Link to="/gioi-thieu/introduce"> Giới thiệu </Link> <br />
      <Link to="/gioi-thieu/search"> Tìm kiếm </Link> <br />
      <Link to="/gioi-thieu/restore"> Chính sách đổi trả </Link> <br />
      <Link to="/gioi-thieu/privacy"> Chính sách bảo mật </Link> <br />
      <Link to="/gioi-thieu/service"> ĐIều khoản dịch vụ </Link> <br />
      <Link to="/gioi-thieu/contact"> Liên hệ </Link> <br />
    </div>
  );
};
