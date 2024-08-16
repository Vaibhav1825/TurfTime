package com.app.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CouponDTO {

	@JsonProperty(access = Access.READ_ONLY)
	private Long cId;

	private String coupon;

	private String price;

	private String expireDate;
}
