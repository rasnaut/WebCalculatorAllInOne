package com.example.j_calculator;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/calculator")
public class CalculatorController {

    @GetMapping("/add")
    public String add(@RequestParam int a, @RequestParam int b) {
        return String.valueOf(a + b);
    }

    @GetMapping("/sub")
    public String sub(@RequestParam double a, @RequestParam double b) {
        return String.valueOf(a - b);
    }

    @PostMapping("/sqrt")
    public String sqrt(@RequestParam double a) {
        if (a <= 0) {
            throw new IllegalArgumentException("number has to be positive");
        }
        return String.valueOf(Math.sqrt(a));
    }

    @PostMapping("/prcnt")
    public String percentOf(@RequestParam double a, @RequestParam double b) {
        return String.valueOf(a*b*0.01);
    }
  
    @PostMapping("/log")
    public String log(@RequestParam double a) {
        if (a <= 0) {
            throw new IllegalArgumentException("number has to be positive");
        }
        return String.valueOf(Math.log10(a));
    }

    @PostMapping("/pow2")
    public String power_2(@RequestParam double a) {
        return String.valueOf(Math.pow(a, 2));
    }

    @PostMapping("/sin")
    public String sin (@RequestParam double a) {
        return String.format(java.util.Locale.US,"%.1f", Math.sin(a));
    }
}
