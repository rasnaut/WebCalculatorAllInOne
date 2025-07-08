package com.example.j_calculator;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.test.web.servlet.MockMvc;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest(CalculatorController.class)
@AutoConfigureMockMvc(addFilters = false)
class CalculatorControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @Test
    void cosTest() throws Exception {
        mockMvc.perform(get("/api/j_calculator/cos")
                        .param("a", "0")) // cos(0) = 1
                .andExpect(status().isOk())
                .andExpect(content().string("1.0"));
    }
}