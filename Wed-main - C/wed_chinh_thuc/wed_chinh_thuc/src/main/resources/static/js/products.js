/* ==========================================================
   EYEWEAR - TRANG DANH SÁCH SẢN PHẨM
   ========================================================== */

// Khai báo đường dẫn API dùng để lấy dữ liệu sản phẩm.

// Lưu toàn bộ danh sách sản phẩm lấy từ API.

// Lưu danh sách sản phẩm hiện tại sau khi tìm kiếm hoặc sắp xếp.


/* ----------------------------------------------------------
   KHỞI TẠO TRANG
   ---------------------------------------------------------- */

// Chờ trang HTML tải xong.

// Cập nhật số lượng sản phẩm trong giỏ hàng.

// Thiết lập các sự kiện lọc, sắp xếp và tìm kiếm sản phẩm.

// Lấy mã danh mục sản phẩm từ URL.

// Nếu URL có mã danh mục hợp lệ thì chọn danh mục đó trên giao diện.

// Tải danh sách sản phẩm theo danh mục đã chọn.


/* ----------------------------------------------------------
   TẢI DANH SÁCH SẢN PHẨM
   ---------------------------------------------------------- */

// Lấy phần tử HTML dùng để hiển thị danh sách sản phẩm.

// Hiển thị thông báo đang tải sản phẩm.

// Tạo đường dẫn API lấy tất cả sản phẩm.

// Nếu có mã danh mục thì lấy sản phẩm thuộc danh mục đó.

// Gửi yêu cầu GET đến API.

// Kiểm tra phản hồi từ máy chủ.

// Chuyển dữ liệu JSON nhận được thành danh sách sản phẩm.

// Lưu toàn bộ sản phẩm vào biến allProducts.

// Sao chép danh sách sản phẩm vào biến currentProducts.

// Cập nhật tiêu đề trang theo danh mục.

// Hiển thị danh sách sản phẩm.

// Nếu xảy ra lỗi thì ghi lỗi vào Console.

// Hiển thị thông báo không thể kết nối đến máy chủ.


/* ----------------------------------------------------------
   LẤY MÃ DANH MỤC TỪ URL
   ---------------------------------------------------------- */

// Đọc tham số category trên URL.

// Nếu URL không có tham số category thì trả về null.

// Chuyển giá trị danh mục thành số.

// Chỉ chấp nhận mã danh mục từ 1 đến 4.

// Nếu mã danh mục không hợp lệ thì trả về null.


/* ----------------------------------------------------------
   LẤY TÊN DANH MỤC
   ---------------------------------------------------------- */

// Chuyển mã danh mục thành tên danh mục tương ứng.

// Mã 1: Kính cận.

// Mã 2: Kính râm.

// Mã 3: Kính thời trang.

// Mã 4: Kính chống ánh sáng xanh.

// Nếu mã không hợp lệ thì trả về tên Tất cả sản phẩm.


/* ----------------------------------------------------------
   CẬP NHẬT TIÊU ĐỀ TRANG
   ---------------------------------------------------------- */

// Lấy phần tử tiêu đề trang.

// Lấy phần tử mô tả danh mục.

// Nếu có mã danh mục thì lấy tên danh mục tương ứng.

// Cập nhật tiêu đề theo tên danh mục.

// Cập nhật mô tả danh mục.

// Nếu không có danh mục thì hiển thị tiêu đề Tất cả sản phẩm.

// Hiển thị mô tả chung cho toàn bộ sản phẩm.


/* ----------------------------------------------------------
   HIỂN THỊ DANH SÁCH SẢN PHẨM
   ---------------------------------------------------------- */

// Lấy phần tử HTML chứa danh sách sản phẩm.

// Xóa danh sách sản phẩm đang hiển thị.

// Nếu không có sản phẩm thì hiển thị thông báo.

// Duyệt qua từng sản phẩm trong danh sách.

// Tạo thẻ hiển thị thông tin sản phẩm.

// Hiển thị hình ảnh sản phẩm.

// Hiển thị hình ảnh mặc định nếu ảnh sản phẩm bị lỗi.

// Hiển thị tên sản phẩm.

// Hiển thị tên danh mục sản phẩm.

// Hiển thị giá sản phẩm đã định dạng.

// Tạo nút thêm sản phẩm vào giỏ hàng.

// Gắn mã sản phẩm vào nút thêm vào giỏ hàng.


/* ----------------------------------------------------------
   ĐỊNH DẠNG GIÁ TIỀN
   ---------------------------------------------------------- */

// Chuyển giá sản phẩm thành định dạng tiền tệ Việt Nam.

// Thêm dấu phân cách hàng nghìn và đơn vị VNĐ.


/* ----------------------------------------------------------
   THIẾT LẬP SỰ KIỆN LỌC VÀ SẮP XẾP
   ---------------------------------------------------------- */

// Lấy phần tử chọn danh mục.

// Lấy phần tử chọn thứ tự sắp xếp.

// Lấy nút tìm kiếm.

// Lấy ô nhập từ khóa tìm kiếm.

// Khi người dùng thay đổi danh mục:
// - Nếu không chọn danh mục, tải tất cả sản phẩm.
// - Nếu có chọn danh mục, tải sản phẩm theo danh mục.
// - Cập nhật URL tương ứng với danh mục đã chọn.

// Khi người dùng thay đổi thứ tự sắp xếp:
// - Gọi hàm sắp xếp sản phẩm.

// Khi người dùng nhấn nút tìm kiếm:
// - Gọi hàm tìm kiếm sản phẩm.

// Khi người dùng nhấn phím Enter trong ô tìm kiếm:
// - Gọi hàm tìm kiếm sản phẩm.


/* ----------------------------------------------------------
   TÌM KIẾM SẢN PHẨM
   ---------------------------------------------------------- */

// Lấy từ khóa tìm kiếm do người dùng nhập.

// Xóa khoảng trắng thừa ở đầu và cuối từ khóa.

// Chuyển từ khóa thành chữ thường để tìm kiếm.

// Nếu từ khóa rỗng thì hiển thị lại toàn bộ sản phẩm.

// Nếu có từ khóa thì lọc sản phẩm theo tên.

// Chỉ giữ lại sản phẩm có tên chứa từ khóa tìm kiếm.

// Cập nhật danh sách sản phẩm hiện tại.

// Hiển thị kết quả tìm kiếm.


/* ----------------------------------------------------------
   SẮP XẾP SẢN PHẨM
   ---------------------------------------------------------- */

// Sao chép danh sách sản phẩm hiện tại trước khi sắp xếp.

// Sắp xếp giá từ thấp đến cao.

// Sắp xếp giá từ cao đến thấp.

// Sắp xếp tên sản phẩm theo thứ tự A đến Z.

// Sắp xếp tên sản phẩm theo thứ tự Z đến A.

// Nếu không chọn kiểu sắp xếp hợp lệ thì giữ nguyên thứ tự.

// Hiển thị danh sách sản phẩm sau khi sắp xếp.


/* ----------------------------------------------------------
   LẤY DỮ LIỆU GIỎ HÀNG
   ---------------------------------------------------------- */

// Đọc dữ liệu giỏ hàng từ localStorage.

// Sử dụng khóa eyewear_cart để lưu dữ liệu.

// Chuyển dữ liệu JSON thành danh sách giỏ hàng.

// Nếu chưa có dữ liệu hoặc xảy ra lỗi thì trả về giỏ hàng rỗng.


/* ----------------------------------------------------------
   LƯU DỮ LIỆU GIỎ HÀNG
   ---------------------------------------------------------- */

// Chuyển danh sách giỏ hàng thành chuỗi JSON.

// Lưu dữ liệu giỏ hàng vào localStorage.


/* ----------------------------------------------------------
   THÊM SẢN PHẨM VÀO GIỎ HÀNG
   ---------------------------------------------------------- */

// Nhận mã sản phẩm cần thêm vào giỏ hàng.

// Gửi yêu cầu GET đến API để lấy thông tin sản phẩm.

// Kiểm tra phản hồi từ API.

// Nếu không tìm thấy sản phẩm thì thông báo lỗi.

// Chuyển dữ liệu JSON thành đối tượng sản phẩm.

// Lấy danh sách giỏ hàng hiện tại.

// Kiểm tra sản phẩm đã tồn tại trong giỏ hàng hay chưa.

// Nếu sản phẩm đã tồn tại thì tăng số lượng lên 1.

// Nếu sản phẩm chưa tồn tại thì thêm sản phẩm mới vào giỏ hàng.

// Lưu các thông tin của sản phẩm:
// - Mã sản phẩm.
// - Tên sản phẩm.
// - Giá sản phẩm.
// - Hình ảnh sản phẩm.
// - Mã danh mục.
// - Số lượng.

// Lưu giỏ hàng mới vào localStorage.

// Cập nhật số lượng sản phẩm trên biểu tượng giỏ hàng.

// Hiển thị thông báo thêm sản phẩm thành công.

// Nếu xảy ra lỗi thì ghi lỗi vào Console.

// Hiển thị thông báo không thể thêm sản phẩm vào giỏ hàng.


/* ----------------------------------------------------------
   CẬP NHẬT SỐ LƯỢNG GIỎ HÀNG
   ---------------------------------------------------------- */

// Lấy danh sách sản phẩm trong giỏ hàng.

// Tính tổng số lượng của tất cả sản phẩm.

// Lấy phần tử hiển thị số lượng giỏ hàng.

// Nếu phần tử tồn tại thì cập nhật số lượng lên giao diện.