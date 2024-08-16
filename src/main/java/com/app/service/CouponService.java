package com.app.service;

import java.util.List;

import com.app.dto.ApiResponse;
import com.app.dto.CouponDTO;
import com.app.entities.Coupon;

public interface CouponService {

	ApiResponse createCoupon(CouponDTO dto);

	List<Coupon> getAllCoupons();

	ApiResponse removeCoupon(Long id);

}
