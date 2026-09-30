package com.example.demo.model;

public class Product {

    private Long id;
    private String name;
    private double price;
    private String image;
    private Long categoryId;

    public Product() {
    }

    public Product(
            Long id,
            String name,
            double price,
            String image,
            Long categoryId) {

        this.id = id;
        this.name = name;
        this.price = price;
        this.image = image;
        this.categoryId = categoryId;
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
    // GET PRICE
    // =========================

    public double getPrice() {
        return price;
    }

    // =========================
    // SET PRICE
    // =========================

    public void setPrice(double price) {
        this.price = price;
    }

    // =========================
    // GET IMAGE
    // =========================

    public String getImage() {
        return image;
    }

    // =========================
    // SET IMAGE
    // =========================

    public void setImage(String image) {
        this.image = image;
    }

    // =========================
    // GET CATEGORY ID
    // =========================

    public Long getCategoryId() {
        return categoryId;
    }

    // =========================
    // SET CATEGORY ID
    // =========================

    public void setCategoryId(Long categoryId) {
        this.categoryId = categoryId;
    }
}