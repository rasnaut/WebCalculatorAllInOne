package com.example.j_calculator;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/j_calculator")
public class CalculatorController {
    
    @GetMapping("/add")
    public String add(@RequestParam int a, @RequestParam int b) {
        return String.valueOf(a + b);
    }

    @PostMapping("/sqrt")
    public double sqrt (@RequestParam double a) {
        if (a <= 0){
            throw new IllegalArgumentException("number has to be positive");
        }
        return Math.sqrt(a);
    }
}
