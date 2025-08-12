package com.example.pricing_app.service;

import com.example.pricing_app.model.Pricing;
import com.example.pricing_app.repository.PricingRepository;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class PricingService {

    private final PricingRepository pricingRepository;

    public PricingService(PricingRepository pricingRepository) {
        this.pricingRepository = pricingRepository;
    }

public double calculateCost(String subType, String region, int units) {
    Optional<Pricing> pricing = pricingRepository.findBySubTypeAndRegion(subType, region);
    if (pricing.isPresent()) {
        return pricing.get().getPricePerUnit() * units;
    }
    return 0.0;
}
    public double getUnitCost(String subType, String region, int units) {
        Optional<Pricing> pricing = pricingRepository.findBySubTypeAndRegion(subType, region);
        if (pricing.isPresent()) {
            return pricing.get().getPricePerUnit() ;
        }
        return 0.0;
    }


}


