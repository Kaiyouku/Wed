/*
==========================================================
EYEWEAR - CART PAGE
File này chỉ giữ lại chú thích mô tả chức năng cần viết.
==========================================================
*/

/*
----------------------------------------------------------
KHỞI TẠO TRANG
- Chờ HTML tải xong.
- Gọi hàm hiển thị giỏ hàng.
- Gọi hàm thiết lập sự kiện cho các nút.
----------------------------------------------------------
*/

/*
----------------------------------------------------------
GET CART
- Đọc giỏ hàng từ localStorage với khóa "eyewear_cart".
- Chuyển dữ liệu JSON thành mảng.
- Nếu chưa có dữ liệu hoặc dữ liệu lỗi, trả về mảng rỗng.
----------------------------------------------------------
*/

/*
----------------------------------------------------------
SAVE CART
- Nhận mảng giỏ hàng.
- Chuyển mảng thành chuỗi JSON.
- Lưu vào localStorage.
----------------------------------------------------------
*/

/*
----------------------------------------------------------
FORMAT PRICE
- Nhận giá sản phẩm.
- Định dạng giá theo kiểu tiền Việt Nam.
- Thêm đơn vị VNĐ.
----------------------------------------------------------
*/

/*
----------------------------------------------------------
CATEGORY NAME
- Nhận mã danh mục sản phẩm.
- Đổi mã thành tên danh mục:
  1: Kính cận
  2: Kính râm
  3: Kính thời trang
  4: Kính chống ánh sáng xanh
- Nếu mã không hợp lệ, trả về "Khác".
----------------------------------------------------------
*/

/*
----------------------------------------------------------
RENDER CART
- Đọc dữ liệu giỏ hàng.
- Lấy các phần tử HTML cần cập nhật.
- Nếu giỏ hàng rỗng:
  + Hiển thị thông báo giỏ hàng trống.
  + Đặt số lượng và tiền về 0.
- Nếu có sản phẩm:
  + Hiển thị hình ảnh, tên, danh mục và giá.
  + Hiển thị nút tăng, giảm số lượng và xóa sản phẩm.
  + Tính tổng số lượng và tiền hàng.
  + Cập nhật phần tóm tắt giỏ hàng.
- Tạm thời đặt phí vận chuyển bằng 0 VNĐ.
----------------------------------------------------------
*/

/*
----------------------------------------------------------
INCREASE
- Nhận vị trí sản phẩm trong giỏ hàng.
- Kiểm tra sản phẩm có tồn tại không.
- Tăng số lượng lên 1.
- Lưu giỏ hàng và hiển thị lại.
----------------------------------------------------------
*/

/*
----------------------------------------------------------
DECREASE
- Nhận vị trí sản phẩm trong giỏ hàng.
- Kiểm tra sản phẩm có tồn tại không.
- Nếu số lượng lớn hơn 1, giảm đi 1.
- Nếu số lượng bằng 1, hỏi người dùng có muốn xóa không.
- Lưu giỏ hàng và hiển thị lại.
----------------------------------------------------------
*/

/*
----------------------------------------------------------
REMOVE
- Nhận vị trí sản phẩm trong giỏ hàng.
- Kiểm tra sản phẩm có tồn tại không.
- Hỏi người dùng xác nhận xóa.
- Nếu đồng ý, xóa sản phẩm khỏi giỏ hàng.
- Lưu giỏ hàng và hiển thị lại.
----------------------------------------------------------
*/

/*
----------------------------------------------------------
CLEAR CART
- Đọc dữ liệu giỏ hàng.
- Nếu giỏ hàng rỗng thì không làm gì.
- Hỏi xác nhận xóa toàn bộ giỏ hàng.
- Nếu đồng ý, xóa dữ liệu khỏi localStorage.
- Hiển thị lại giỏ hàng.
----------------------------------------------------------
*/

/*
----------------------------------------------------------
CART EVENTS
- Lấy nút xóa toàn bộ giỏ hàng.
- Lấy nút thanh toán.
- Gắn sự kiện click cho nút xóa giỏ hàng.
- Khi nhấn thanh toán:
  + Kiểm tra giỏ hàng có sản phẩm không.
  + Nếu rỗng, hiển thị thông báo.
  + Nếu có sản phẩm, chuyển sang checkout.html.
----------------------------------------------------------
*/