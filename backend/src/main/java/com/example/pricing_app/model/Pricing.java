package com.example.pricing_app.model;

import jakarta.persistence.*;

@Entity
@Table(name = "pricing")

public class Pricing {

        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private Long id;

        //private String resourceType;
        @Column(name = "sub_type")
        private String subType;
        @Column(name = "region")
        private String region;
        @Column(name = "price_per_unit")
        private Double pricePerUnit;

        // Getters and Setters
        public Long getId() { return id; }
        //public String getResourceType() { return resourceType; }
        //public void setResourceType(String resourceType) { this.resourceType = resourceType; }
        public String getSubType() { return subType; }
        public void setSubType(String subType) { this.subType = subType; }

        public String getRegion() { return region; }
        public void setRegion(String region) { this.region = region; }
        public Double getPricePerUnit() { return pricePerUnit; }
        public void setPricePerUnit(Double pricePerUnit) { this.pricePerUnit = pricePerUnit; }

    }





