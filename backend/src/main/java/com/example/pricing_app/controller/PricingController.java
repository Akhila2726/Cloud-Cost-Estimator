package com.example.pricing_app.controller;


import com.example.pricing_app.service.PricingService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/pricing")
@CrossOrigin(origins = "http://localhost:3000") // Allow React

public class PricingController {

    private final PricingService pricingService;

    public PricingController(PricingService pricingService) {
        this.pricingService = pricingService;
    }





    @PostMapping("/calculate")
    public Map<String, Object> calculate(@RequestBody List<Map<String, Object>> request) {
        double total = 0;
        StringBuilder breakdown = new StringBuilder();

        for (Map<String, Object> item : request) {
            String subType = (String) item.get("subType");
            String region = (String) item.get("selectedOpt");
            int count = (int) item.get("count");
            System.out.println(subType);
            System.out.println(region);
            System.out.println(count);
            double cost = pricingService.calculateCost(subType, region, count);
            double c= pricingService.getUnitCost(subType, region, count);


            total += cost;
            breakdown.append(subType).append(" |").append(region).append(" | $").append(c).append(" | ").append(count).append("units | $").append(cost).append("\n");
        }
        System.out.println(breakdown.toString());
        return Map.of(
                "totalCost", total,
                "breakdown", breakdown.toString()
        );
    }



}


