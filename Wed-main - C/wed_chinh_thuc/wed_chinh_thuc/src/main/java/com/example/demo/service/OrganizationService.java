package com.example.demo.service;

import com.example.demo.model.Category;
import com.example.demo.model.Product;

import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.concurrent.atomic.AtomicLong;

@Service
public class OrganizationService {

    // =========================================================
    // DANH SÁCH DANH MỤC
    // =========================================================

    private final List<Category> categoryList = new ArrayList<>();

    // =========================================================
    // BỘ ĐẾM ID SẢN PHẨM
    // =========================================================

    private final AtomicLong productIdCounter =
            new AtomicLong(1);

    // =========================================================
    // KHỞI TẠO DỮ LIỆU
    // =========================================================

    public OrganizationService() {

        // -----------------------------------------------------
        // 1. TẠO 4 DANH MỤC
        // -----------------------------------------------------

        categoryList.add(
                new Category(
                        1L,
                        "Kính cận"
                )
        );

        categoryList.add(
                new Category(
                        2L,
                        "Kính râm"
                )
        );

        categoryList.add(
                new Category(
                        3L,
                        "Kính thời trang"
                )
        );

        categoryList.add(
                new Category(
                        4L,
                        "Kính chống ánh sáng xanh"
                )
        );

        // -----------------------------------------------------
        // 2. KÍNH CẬN
        // categoryId = 1
        // -----------------------------------------------------

        createProduct(
                new Product(
                        null,
                        "Kính cận Classic Black",
                        350000,
                        "/images/kinh-can-1.jpg",
                        1L
                )
        );

        createProduct(
                new Product(
                        null,
                        "Kính cận Premium",
                        450000,
                        "/images/kinh-can-2.jpg",
                        1L
                )
        );

        createProduct(
                new Product(
                        null,
                        "Kính cận Basic",
                        300000,
                        "/images/kinh-can-3.jpg",
                        1L
                )
        );

        // -----------------------------------------------------
        // 3. KÍNH RÂM
        // categoryId = 2
        // -----------------------------------------------------

        createProduct(
                new Product(
                        null,
                        "Kính râm Black Style",
                        550000,
                        "/images/kinh-ram-1.jpg",
                        2L
                )
        );

        createProduct(
                new Product(
                        null,
                        "Kính râm UV Protection",
                        650000,
                        "/images/kinh-ram-2.jpg",
                        2L
                )
        );

        createProduct(
                new Product(
                        null,
                        "Kính râm Classic",
                        450000,
                        "/images/kinh-ram-3.jpg",
                        2L
                )
        );

        // -----------------------------------------------------
        // 4. KÍNH THỜI TRANG
        // categoryId = 3
        // -----------------------------------------------------

        createProduct(
                new Product(
                        null,
                        "Kính thời trang Luxury",
                        750000,
                        "/images/kinh-thoi-trang-1.jpg",
                        3L
                )
        );

        createProduct(
                new Product(
                        null,
                        "Kính thời trang Modern",
                        680000,
                        "/images/kinh-thoi-trang-2.jpg",
                        3L
                )
        );

        createProduct(
                new Product(
                        null,
                        "Kính thời trang Elegant",
                        720000,
                        "/images/kinh-thoi-trang-3.jpg",
                        3L
                )
        );

        // -----------------------------------------------------
        // 5. KÍNH CHỐNG ÁNH SÁNG XANH
        // categoryId = 4
        // -----------------------------------------------------

        createProduct(
                new Product(
                        null,
                        "Kính chống ánh sáng xanh Basic",
                        400000,
                        "/images/kinh-anh-sang-xanh-1.jpg",
                        4L
                )
        );

        createProduct(
                new Product(
                        null,
                        "Kính chống ánh sáng xanh Premium",
                        550000,
                        "/images/kinh-anh-sang-xanh-2.jpg",
                        4L
                )
        );

        createProduct(
                new Product(
                        null,
                        "Kính chống ánh sáng xanh Pro",
                        650000,
                        "/images/kinh-anh-sang-xanh-3.jpg",
                        4L
                )
        );
    }

    // =========================================================
    // CATEGORY
    // =========================================================

    // Lấy tất cả danh mục
    public List<Category> getAllCategories() {

        return new ArrayList<>(categoryList);
    }

    // Tìm danh mục theo ID
    public Optional<Category> getCategoryById(Long id) {

        return categoryList
                .stream()
                .filter(category ->
                        category.getId().equals(id))
                .findFirst();
    }

    // =========================================================
    // PRODUCT
    // =========================================================

    // Lấy tất cả sản phẩm
    public List<Product> getAllProducts() {

        List<Product> products =
                new ArrayList<>();

        for (Category category : categoryList) {

            products.addAll(
                    category.getProducts()
            );
        }

        return products;
    }

    // =========================================================
    // LẤY SẢN PHẨM THEO DANH MỤC
    // =========================================================

    public List<Product> getProductsByCategory(
            Long categoryId) {

        Optional<Category> categoryOpt =
                getCategoryById(categoryId);

        // Nếu không tìm thấy danh mục
        if (categoryOpt.isEmpty()) {

            return new ArrayList<>();
        }

        // Trả về danh sách kính của danh mục
        return new ArrayList<>(
                categoryOpt
                        .get()
                        .getProducts()
        );
    }

    // =========================================================
    // LẤY SẢN PHẨM THEO ID
    // =========================================================

    public Optional<Product> getProductById(
            Long productId) {

        for (Category category : categoryList) {

            for (Product product :
                    category.getProducts()) {

                if (product.getId()
                        .equals(productId)) {

                    return Optional.of(product);
                }
            }
        }

        return Optional.empty();
    }

    // =========================================================
    // THÊM SẢN PHẨM
    // =========================================================

    public Optional<Product> createProduct(
            Product product) {

        Optional<Category> categoryOpt =
                getCategoryById(
                        product.getCategoryId()
                );

        // Danh mục không tồn tại
        if (categoryOpt.isEmpty()) {

            return Optional.empty();
        }

        // Tự động tạo ID
        product.setId(
                productIdCounter
                        .getAndIncrement()
        );

        // Thêm sản phẩm vào danh mục
        categoryOpt
                .get()
                .getProducts()
                .add(product);

        return Optional.of(product);
    }

    // =========================================================
    // CẬP NHẬT SẢN PHẨM
    // =========================================================

    public Optional<Product> updateProduct(
            Long id,
            Product updatedProduct) {

        // Kiểm tra category mới có tồn tại không
        Optional<Category> newCategoryOpt =
                getCategoryById(
                        updatedProduct.getCategoryId()
                );

        if (newCategoryOpt.isEmpty()) {

            return Optional.empty();
        }

        // Tìm sản phẩm
        for (Category category : categoryList) {

            List<Product> products =
                    category.getProducts();

            for (int i = 0;
                 i < products.size();
                 i++) {

                Product existing =
                        products.get(i);

                if (existing.getId()
                        .equals(id)) {

                    // Giữ nguyên ID
                    updatedProduct.setId(id);

                    // Nếu đổi danh mục
                    if (!existing
                            .getCategoryId()
                            .equals(
                                    updatedProduct
                                            .getCategoryId()
                            )) {

                        // Xóa khỏi danh mục cũ
                        products.remove(i);

                        // Thêm vào danh mục mới
                        newCategoryOpt
                                .get()
                                .getProducts()
                                .add(updatedProduct);

                    } else {

                        // Cập nhật tại vị trí cũ
                        products.set(
                                i,
                                updatedProduct
                        );
                    }

                    return Optional.of(
                            updatedProduct
                    );
                }
            }
        }

        return Optional.empty();
    }

    // =========================================================
    // XÓA SẢN PHẨM
    // =========================================================

    public boolean deleteProduct(
            Long productId) {

        for (Category category :
                categoryList) {

            boolean removed =
                    category
                            .getProducts()
                            .removeIf(
                                    product ->
                                            product
                                                    .getId()
                                                    .equals(
                                                            productId
                                                    )
                            );

            if (removed) {

                return true;
            }
        }

        return false;
    }
}