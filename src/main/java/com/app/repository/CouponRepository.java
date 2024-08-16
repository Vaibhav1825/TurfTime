package com.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.Coupon;

public interface CouponRepository extends JpaRepository<Coupon, Long> {

}
