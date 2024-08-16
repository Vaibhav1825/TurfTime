package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.PaymentResponse;
import com.app.service.PaymentService;

@RestController
@RequestMapping("/payment")
public class PaymentController {

    @Autowired
    private PaymentService paymentService;

    @Value("${razorpay.key_id}")
    private String key_id;
    @Value("${razorpay.key_secret}")
    private String razor_key;
    
    @GetMapping("/create-booking/{amount}")
    public PaymentResponse createOrder(@PathVariable int amount) {
        try {
        	System.out.println("in order");
            String orderId = paymentService.createOrder(amount);
            return new PaymentResponse(orderId,key_id,"");
        } catch (Exception e) {
            return new PaymentResponse("","",e.getMessage());
        }
    }
    
//    @PostMapping("/verify")
//    public ResponseEntity<Map<String, Object>> verifyPayment(@RequestBody Map<String, String> paymentData) {
//        Map<String, Object> response = new HashMap<>();
//        try {
//            
//
//            boolean isSignatureValid = PaymentUtils.verifyPaymentSignature(paymentData, razor_key);
//
//            if (isSignatureValid) {
//                response.put("status", "success");
//                return ResponseEntity.ok(response);
//            } else {
//                response.put("status", "failure");
//                return ResponseEntity.status(400).body(response);
//            }
//        } catch (Exception e) {
//            response.put("status", "failure");
//            response.put("message", e.getMessage());
//            return ResponseEntity.status(400).body(response);
//        }
//    }
            
}
