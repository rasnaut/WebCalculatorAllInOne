package com.example.j_calculator;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest
class JCalculatorApplicationTests {

	@Test
	void contextLoads() {
	}

	@Test
    void testAdd() {
        CalculatorController controller = new CalculatorController();
        String result = controller.add(2, 3);
        assertThat(result).isEqualTo("5");
    }

    @Test
    void testSin1(){
        CalculatorController controller = new CalculatorController();
        String actual = controller.sin(Math.PI/2);
        assertThat(actual).isEqualTo("1.0");
    }

    @Test
    void testSin2(){
        CalculatorController controller = new CalculatorController();
        String actual = controller.sin(0);
        assertThat(actual).isEqualTo("0.0");
    }

    @Test
    void testSin3(){
        CalculatorController controller = new CalculatorController();
        String actual = controller.sin(Math.PI);
        assertThat(actual).isEqualTo("0.0");
    }

    @Test
    void testSin4(){
        CalculatorController controller = new CalculatorController();
        String actual = controller.sin(3*Math.PI/2);
        assertThat(actual).isEqualTo("-1.0");
    }
}
