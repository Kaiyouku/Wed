// ==================== KHỞI TẠO TRANG ====================
// Chờ trang HTML tải xong.
// Tải danh sách sản phẩm nổi bật.
// Cập nhật số lượng sản phẩm trong giỏ hàng.
// Thiết lập chức năng tìm kiếm.

// ==================== API SẢN PHẨM ====================
// Khai báo đường dẫn API dùng để lấy thông tin sản phẩm.

// ==================== LẤY DANH SÁCH SẢN PHẨM ====================
// Gửi yêu cầu GET đến API để lấy toàn bộ sản phẩm.
// Kiểm tra lỗi khi kết nối với API.
// Trả về danh sách sản phẩm nhận được.

// ==================== HIỂN THỊ SẢN PHẨM NỔI BẬT ====================
// Lấy danh sách sản phẩm từ API.
// Hiển thị thông báo trong khi tải dữ liệu.
// Kiểm tra danh sách sản phẩm có rỗng hay không.
// Lấy 4 sản phẩm đầu tiên để hiển thị.
// Gọi hàm hiển thị sản phẩm.

// ==================== HIỂN THỊ DANH SÁCH SẢN PHẨM ====================
// Tạo giao diện thẻ sản phẩm.
// Hiển thị hình ảnh sản phẩm.
// Hiển thị tên, danh mục và giá sản phẩm.
// Tạo nút thêm sản phẩm vào giỏ hàng.
// Hiển thị thông báo nếu không có sản phẩm.

// ==================== LẤY TÊN DANH MỤC ====================
// Chuyển mã danh mục thành tên danh mục tương ứng.
// 1: Kính cận.
// 2: Kính râm.
// 3: Kính thời trang.
// 4: Kính chống ánh sáng xanh.

// ==================== ĐỊNH DẠNG GIÁ TIỀN ====================
// Chuyển giá sản phẩm thành chuỗi tiền tệ Việt Nam.
// Thêm dấu phân cách hàng nghìn và đơn vị VNĐ.

// ==================== THIẾT LẬP TÌM KIẾM ====================
// Lắng nghe sự kiện nhấn nút tìm kiếm.
// Cho phép tìm kiếm khi nhấn phím Enter.
// Gọi hàm tìm kiếm khi người dùng nhập từ khóa.

// ==================== TÌM KIẾM SẢN PHẨM ====================
// Lấy từ khóa người dùng nhập.
// Lấy danh sách sản phẩm từ API.
// Lọc sản phẩm theo tên có chứa từ khóa.
// Hiển thị danh sách sản phẩm phù hợp.
// Hiển thị thông báo nếu không tìm thấy sản phẩm.
// Cuộn trang đến khu vực danh sách sản phẩm.

// ==================== LẤY GIỎ HÀNG ====================
// Lấy dữ liệu giỏ hàng từ localStorage.
// Sử dụng khóa eyewear_cart để lưu giỏ hàng.
// Trả về giỏ hàng rỗng nếu chưa có dữ liệu.

// ==================== CẬP NHẬT SỐ LƯỢNG GIỎ HÀNG ====================
// Lấy danh sách sản phẩm trong giỏ hàng.
// Tính tổng số lượng sản phẩm.
// Cập nhật số lượng trên biểu tượng giỏ hàng.

// ==================== THÊM SẢN PHẨM VÀO GIỎ HÀNG ====================
// Nhận mã sản phẩm cần thêm.
// Gửi yêu cầu GET đến API để lấy thông tin sản phẩm.
// Kiểm tra sản phẩm đã tồn tại trong giỏ hàng hay chưa.
// Nếu đã tồn tại, tăng số lượng sản phẩm.
// Nếu chưa tồn tại, thêm sản phẩm mới vào giỏ hàng.
// Lưu thông tin giỏ hàng vào localStorage.
// Cập nhật số lượng sản phẩm trên biểu tượng giỏ hàng.
// Hiển thị thông báo kết quả cho người dùng.
// Xử lý lỗi khi không lấy được thông tin sản phẩm.