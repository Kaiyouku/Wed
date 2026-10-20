package com.example.demo.model;

import java.util.ArrayList;
import java.util.List;

public class Category {

    private Long id;
    private String name;

    private List<Product> products = new ArrayList<>();

    public Category() {
    }

    public Category(Long id, String name) {
        this.id = id;
        this.name = name;
    }

    // =========================
    // GET ID
    // =========================

    public Long getId() {
        return id;
    }

    // =========================
    // SET ID
    // =========================

    public void setId(Long id) {
        this.id = id;
    }

    // =========================
    // GET NAME
    // =========================

    public String getName() {
        return name;
    }

    // =========================
    // SET NAME
    // =========================

    public void setName(String name) {
        this.name = name;
    }

    // =========================
    // GET PRODUCTS
    // =========================

    public List<Product> getProducts() {
        return products;
    }

    // =========================
    // SET PRODUCTS
    // =========================

    public void setProducts(List<Product> products) {
        this.products = products;
    }
}