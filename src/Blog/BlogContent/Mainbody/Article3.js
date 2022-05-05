import "./Article.css"

const Article3 = () => {
    return (
        <div className="col-md-9 col-sm-12 col-xs-12">
            <div className="new1-content">
                <div>
                    <img className="new1-img" src="https://raw.githubusercontent.com/hoanganhvn/Final-Project/master/Trang_Image/blog01_large.jpg" alt="" />
                </div>
                <h1>Công thức món tráng miệng giải ngấy dịp Tết</h1>
                <div className="new1-info">
                    <p> Người viết: Fresh Organic Food lúc 05.07.2021</p>
                </div>
                <div className="new1-table">
                    <div className="new1-table-title">Các món tráng miệng</div>
                    <div id="new1-list">
                        <ol>
                            <li><a href="#mon1">Chè đậu đỏ hạt sen thanh mát</a></li>
                            <li><a href="#mon2">Thạch ngô giòn dai</a></li>
                            <li><a href="#mon3">Pudding trà xanh lạ miệng</a></li>
                        </ol>
                    </div>
                </div>
                <div className="new1-body">
                    <p>Sau một bữa ăn đầy ắp thịt cá, còn gì tuyệt vời hơn việc được thưởng thức những món tráng miệng ngon ngọt, mát lạnh đúng không?
                        Những món tráng miệng làm từ nguyên liệu cân bằng khẩu vị như trà xanh, hạt sen sẽ giúp cơ thể “cân bằng” trở lại sau những bữa tiệc với nhiều món ăn giàu chất đạm, dầu mỡ. Dưới đây là 3 món tráng miệng ngon và dễ làm mà chị em có thể thực hiện ngay trong mùa xuân này, đảm bảo cả khách lẫn cả nhà đều vô cùng “ưng cái bụng” đấy.</p>
                    <div>
                        <ul>
                            <li><h2 id="mon1" style={{ fontSize: '18px' }}><strong>Chè đậu đỏ hạt sen thanh mát</strong></h2></li>
                        </ul>
                        <p style={{ fontSize: '15px' }}><strong>Nguyên liệu:</strong></p>
                        <ul style={{ listStyleType: '"- "' }}>
                            <li>Đậu đỏ: 300g</li>
                            <li>Hạt sen tươi hoặc khô: 200g</li>
                            <li>Bột sắn dây: 100g</li>
                            <li>Nước cốt dừa</li>
                            <li>Đường cát</li>
                        </ul>
                        <p style={{ fontSize: '15px' }}><strong>Thực hiện:</strong></p>
                        <p><strong>Bước 1:</strong> Rửa sạch đậu đỏ và hạt sen. Sau đó ngâm riêng 2 loại vào nước lạnh trong khoảng 1 tiếng.</p>
                        <p><strong>Bước 2:</strong> Cho hạt sen vào nồi hầm khoảng 10 phút, sau đó cho đậu đỏ vào hầm cùng trong 20 phút nữa rồi cho đường vào (tùy theo khẩu vị ít ngọt, ngọt vừa hay ngọt đậm thì thêm đường cho phù hợp). Hầm tiếp 10 phút nữa cho đến khi thấy hạt đậu đỏ và hạt sen mềm nhừ, nứt đôi ra.</p>
                        <p><strong>Bước 3:</strong> Cho 2 thìa bột sắn dây cùng 2 thìa nước vào nồi và khuấy đều thật nhanh tay đến khi bột sắn dây chín, trong và sóng sánh.</p>
                        <p><strong>Bước 4:</strong> Tắt bếp và múc chè ra ly, có thể cho cốt dừa vào để tăng hương vị.</p>
                    </div>
                    <div>
                        <ul>
                            <li><h2 id="mon2" style={{ fontSize: '18px' }}><strong>Thạch ngô giòn dai</strong></h2></li>
                        </ul>
                        <p style={{ fontSize: '15px' }}><strong>Nguyên liệu:</strong></p>
                        <ul style={{ listStyleType: '"- "' }}>
                            <li>1 trái ngô</li>
                            <li>1 gói bột rau câu</li>
                            <li>800ml nước</li>
                            <li>180gr đường</li>
                        </ul>
                        <p style={{ fontSize: '15px' }}><strong>Thực hiện:</strong></p>
                        <p><strong>Bước 1:</strong> Ngô lột vỏ, bỏ sạch râu ngô rồi rửa sạch sẽ, dùng dao tách lấy hạt ngô. Đường và bột thạch cho vào bát trộn đều lên.</p>
                        <p><strong>Bước 2:</strong> Cho nước vào nồi đun sôi sau đó cho ngô vừa tách hạt vào luộc tới khi ngô chín thì vớt ra.</p>
                        <p><strong>Bước 3:</strong> Cho nước vào nồi đun sôi sau đó đổ từ từ hỗn hợp đường bột thạch, vừa đổ vừa khuấy đều và nấu vài phút cho thạch trong lại thì tắt bếp.</p>
                        <p><strong>Bước 4:</strong> Múc rau câu đổ vào khuôn và đợi rau câu nguội bớt thì đem cất tủ lạnh 2 tiếng cho rau câu lạnh sẽ đông lại là hoàn thành.</p>
                    </div>
                    <div>
                        <ul>
                            <li><h2 id="mon3" style={{ fontSize: '18px' }}><strong>Pudding trà xanh lạ miệng</strong></h2></li>
                        </ul>
                        <p style={{ fontSize: '15px' }}><strong>Nguyên liệu:</strong></p>
                        <ul style={{ listStyleType: '"- "' }}>
                            <li>150gr whipping cream</li>
                            <li>10gr bột trà xanh Nhật</li>
                            <li>200ml sữa tươi</li>
                            <li>50gr đường</li>
                            <li>5 lá gelatin (loại 2gr/lá)</li>
                        </ul>
                        <p style={{ fontSize: '15px' }}><strong>Thực hiện:</strong></p>
                        <p><strong>Bước 1:</strong> Chuẩn bị sẵn lọ thủy tinh để đựng pudding. Nếu không có sẵn lọ thủy tinh các bạn có thể dùng chén hoặc ly thủy tinh để đựng pudding.</p>
                        <p><strong>Bước 2:</strong> Ngâm lá gelatine trong sữa tươi từ 5-10p cho gelatine nở mềm.</p>
                        <p><strong>Bước 3:</strong> Cho gelatin, sữa tươi, đường cùng whipping cream lên bếp, đun lửa nhỏ cho hỗn hợp tan đều thì tắt bếp. </p>
                        <p><strong>Bước 4:</strong> Hòa tan bột trà xanh với nước. Cho trà xanh vào hỗn hợp sữa đang ấm, khuấy nhẹ tay cho hỗn hợp hòa quyện.</p>
                        <p><strong>Bước 5:</strong> Rót hỗn hợp pudding vào lọ thủy tinh đã chuẩn bị sẵn, để nguội hẳn rồi cho vào tủ mát ít nhất 2 đến 3 tiếng để pudding đông lại. Khi ăn có thể trang trí thêm trái cây hoặc kem tươi cho bắt mắt và thêm phần ngon miệng.</p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export { Article3 };