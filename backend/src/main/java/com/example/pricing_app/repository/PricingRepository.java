package com.example.pricing_app.repository;

import com.example.pricing_app.model.Pricing;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface PricingRepository extends JpaRepository<Pricing, Long> {
    Optional<Pricing> findBySubTypeAndRegion(String subType, String region);


}
