package com.example.demo.controller;

import com.example.demo.model.Category;
import com.example.demo.service.OrganizationService;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/categories")
public class CategoryController {

    private final OrganizationService service;

    public CategoryController(
            OrganizationService service) {

        this.service = service;
    }

    // =========================================================
    // GET ALL CATEGORIES
    // GET /api/categories
    // =========================================================

    @GetMapping
    public List<Category> getAllCategories() {

        return service.getAllCategories();
    }

    // =========================================================
    // GET CATEGORY BY ID
    // GET /api/categories/1
    // =========================================================

    @GetMapping("/{id}")
    public ResponseEntity<Category> getCategoryById(
            @PathVariable Long id) {

        return service
                .getCategoryById(id)
                .map(ResponseEntity::ok)
                .orElse(
                        ResponseEntity
                                .notFound()
                                .build()
                );
    }
}