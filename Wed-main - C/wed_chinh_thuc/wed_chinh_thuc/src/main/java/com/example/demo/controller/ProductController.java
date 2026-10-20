package com.example.demo.controller;

import com.example.demo.model.Product;
import com.example.demo.service.OrganizationService;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/products")
public class ProductController {

    private final OrganizationService service;

    public ProductController(
            OrganizationService service) {

        this.service = service;
    }

    // =========================================================
    // GET ALL PRODUCTS
    // GET /api/products
    // =========================================================

    @GetMapping
    public List<Product> getAllProducts() {

        return service.getAllProducts();
    }

    // =========================================================
    // GET PRODUCT BY ID
    // GET /api/products/1
    // =========================================================

    @GetMapping("/{id}")
    public ResponseEntity<Product> getProductById(
            @PathVariable Long id) {

        return service
                .getProductById(id)
                .map(ResponseEntity::ok)
                .orElse(
                        ResponseEntity
                                .notFound()
                                .build()
                );
    }

    // =========================================================
    // GET PRODUCTS BY CATEGORY
    //
    // /api/products/category/1
    // /api/products/category/2
    // /api/products/category/3
    // /api/products/category/4
    // =========================================================

    @GetMapping("/category/{categoryId}")
    public ResponseEntity<List<Product>>
    getProductsByCategory(
            @PathVariable Long categoryId) {

        // Kiểm tra danh mục có tồn tại không
        if (service
                .getCategoryById(categoryId)
                .isEmpty()) {

            return ResponseEntity
                    .notFound()
                    .build();
        }

        return ResponseEntity.ok(
                service.getProductsByCategory(
                        categoryId
                )
        );
    }

    // =========================================================
    // CREATE
    // POST /api/products
    // =========================================================

    @PostMapping
    public ResponseEntity<Product> createProduct(
            @RequestBody Product product) {

        return service
                .createProduct(product)
                .map(created ->
                        ResponseEntity
                                .status(
                                        HttpStatus.CREATED
                                )
                                .body(created)
                )
                .orElse(
                        ResponseEntity
                                .badRequest()
                                .build()
                );
    }

    // =========================================================
    // UPDATE
    // PUT /api/products/{id}
    // =========================================================

    @PutMapping("/{id}")
    public ResponseEntity<Product> updateProduct(
            @PathVariable Long id,
            @RequestBody Product product) {

        return service
                .updateProduct(id, product)
                .map(ResponseEntity::ok)
                .orElse(
                        ResponseEntity
                                .notFound()
                                .build()
                );
    }

    // =========================================================
    // DELETE
    // DELETE /api/products/{id}
    // =========================================================

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteProduct(
            @PathVariable Long id) {

        if (service.deleteProduct(id)) {

            return ResponseEntity
                    .noContent()
                    .build();
        }

        return ResponseEntity
                .notFound()
                .build();
    }
}