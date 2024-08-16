package com.app.service;

import com.razorpay.Order;
import com.razorpay.RazorpayClient;

import javax.annotation.PostConstruct;
//import javax.transaction.Transactional;

import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@Service
public class PaymentService {
    private RazorpayClient razorpayClient;

    @Value("${razorpay.key_id}")
    private String razorpayKeyId;

    @Value("${razorpay.key_secret}")
    private String razorpayKeySecret;

    @PostConstruct
    public void init() throws Exception {
        if (razorpayKeyId == null || razorpayKeySecret == null) {
            throw new IllegalArgumentException("Razorpay Key ID or Secret is null");
        }
        this.razorpayClient = new RazorpayClient(razorpayKeyId, razorpayKeySecret);
    }

    public String createOrder(int amount) throws Exception {
        JSONObject orderRequest = new JSONObject();
        orderRequest.put("amount", amount * 100); // amount in paise
        orderRequest.put("currency", "INR");
        orderRequest.put("receipt", "order_rcptid_11");

        Order order = razorpayClient.orders.create(orderRequest);
        return order.get("id");
    }
}
