package com.app.service;

import java.time.LocalDate;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dto.ApiResponse;
import com.app.dto.CouponDTO;
import com.app.entities.Coupon;
import com.app.repository.CouponRepository;

@Service
@Transactional
public class CouponServiceImpl implements CouponService {

	@Autowired
	private CouponRepository repo;
	@Override
	public ApiResponse createCoupon(CouponDTO dto) {
		Coupon c=new Coupon();
		c.setCoupon(dto.getCoupon());
		c.setPrice(Double.parseDouble(dto.getPrice()));
		c.setExpireDate(LocalDate.parse(dto.getExpireDate()));
		repo.save(c);
		return new ApiResponse("Coupon added successfully");
	}
	@Override
	public List<Coupon> getAllCoupons() {
		
		return repo.findAll();
	}
	@Override
	public ApiResponse removeCoupon(Long id) {
		repo.deleteById(id);
		return new ApiResponse("Coupon delete successfully");
	}

}
