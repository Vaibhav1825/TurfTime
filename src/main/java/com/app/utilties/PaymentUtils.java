package com.app.utilties;

import javax.crypto.Mac;
import javax.crypto.spec.SecretKeySpec;
import java.util.Map;

public class PaymentUtils {

    public static boolean verifyPaymentSignature(Map<String, String> paymentData, String secret) {
        try {
            String razorpayOrderId = paymentData.get("razorpay_order_id");
            String razorpayPaymentId = paymentData.get("razorpay_payment_id");
            String razorpaySignature = paymentData.get("razorpay_signature");

            // Create a string to verify
            String message = razorpayOrderId + "|" + razorpayPaymentId;

            // Create HMAC-SHA256 signature
            Mac sha256_HMAC = Mac.getInstance("HmacSHA256");
            SecretKeySpec secret_key = new SecretKeySpec(secret.getBytes(), "HmacSHA256");
            sha256_HMAC.init(secret_key);

            byte[] hash = sha256_HMAC.doFinal(message.getBytes());

            // Convert hash to hexadecimal string
            StringBuilder sb = new StringBuilder();
            for (byte b : hash) {
                sb.append(String.format("%02x", b));
            }
            String generatedSignature = sb.toString();

            return generatedSignature.equals(razorpaySignature);
        } catch (Exception e) {
            throw new RuntimeException("Error verifying signature", e);
        }
    }
}

