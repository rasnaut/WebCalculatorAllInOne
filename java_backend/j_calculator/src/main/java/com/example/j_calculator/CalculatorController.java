package com.example.j_calculator;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/j_calculator")
public class CalculatorController {

    private static final Logger logger = LoggerFactory.getLogger(CalculatorController.class);

    @GetMapping("/add")
    public String add(@RequestParam int a, @RequestParam int b) {
        int result = a + b;
        logger.info("Received request to add: {} + {} = {}", a, b, result);
        return String.valueOf(result);
    }

    @PostMapping("/sqrt")
    public String sqrt(@RequestParam double a) {
        if (a <= 0) {
            logger.warn("Invalid input for sqrt: {}", a);
            throw new IllegalArgumentException("number has to be positive");
        }
        double result = Math.sqrt(a);
        logger.info("Received request to sqrt: sqrt({}) = {}", a, result);
        return String.valueOf(result);
    }
}