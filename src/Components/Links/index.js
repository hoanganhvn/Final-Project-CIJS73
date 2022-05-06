import { Link } from "react-router-dom";

export const Links = () => {
  return (
    <div style={{ lineHeight: "200%" }}>
      <Link to="/Introduce"> Giới thiệu </Link> <br />
      <Link to="/Search"> Tìm kiếm </Link> <br />
      <Link to="/Restore"> Chính sách đổi trả </Link> <br />
      <Link to="/Privacy"> Chính sách bảo mật </Link> <br />
      <Link to="/Service"> ĐIều khoản dịch vụ </Link> <br />
      <Link to="/Contact"> Liên hệ </Link> <br />
    </div>
  );
};
