package com.app.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class BookingDTO {
	
	
	private String name;
	private String email;
	
	
	private String coupon;
	private String bookingDate;
	private String slot;
	private String sport;
	private String price;
	//private Status status;

}
