package com.example.j_calculator;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/j_calculator")
public class CalculatorController {
    
    @GetMapping("/add")
    public String add(@RequestParam int a, @RequestParam int b) {
        return String.valueOf(a + b);
    }

    @GetMapping("/power")
    public String power(
            @RequestParam double number,
            @RequestParam double power
    ) {
        return String.valueOf(Math.pow(number, power));
    }
}
