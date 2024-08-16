package com.app.controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.CouponDTO;
import com.app.dto.Signup;
import com.app.dto.TurfDTO;
import com.app.entities.UserRole;
import com.app.service.BookingService;
import com.app.service.CouponService;
import com.app.service.TurfService;
import com.app.service.UserService;

@RestController
@RequestMapping("/admin")
public class AdminController {
	@Autowired
	private BookingService service;
	@Autowired
	private TurfService turfService;
	
	@Autowired
	private UserService userService;
	
	@Autowired
	private CouponService couponService;
	
	@GetMapping("/bookingsForToday")
	public ResponseEntity<?> bookingsForToday(){
		return ResponseEntity.ok(service.bookingsForToday());
	}
	@GetMapping("/allBookings")
	public ResponseEntity<?> getAllBookings(){
		return ResponseEntity.ok(service.getAllBookings());
	}
	
	@GetMapping("/turfs")
	public ResponseEntity<?> getAllTurfs(){
		return ResponseEntity.ok(turfService.getAllTurfs());
		
	}
	
	@PostMapping("/turfs")
	public ResponseEntity<?> createTurf(@Valid @RequestBody TurfDTO turf){
		return ResponseEntity.status(HttpStatus.CREATED).body(turfService.createTurf(turf));
	}
	
	@DeleteMapping("/turfs/{id}")
	public ResponseEntity<?> deleteTurf(@PathVariable Long id) {
    	return ResponseEntity.ok(turfService.deleteTurf(id));
    }
	
	@PostMapping
	public ResponseEntity<?> addNewAdmin(@RequestBody @Valid Signup dto){
		dto.setRole(UserRole.ROLE_ADMIN);
		return ResponseEntity.status(HttpStatus.CREATED).body(userService.userRegistration(dto));
	}
	
	@GetMapping("/all")
    public ResponseEntity<?> allAdmin(){
		return ResponseEntity.ok(userService.allAdmin());
	}
	
	@DeleteMapping("/{id}")
	
	public ResponseEntity<?> deleteAdmin(@PathVariable Long id){
		return ResponseEntity.ok(userService.removeAdmin(id));
	}
	@PostMapping("/coupons")
	public ResponseEntity<?> createNewCoupon(@RequestBody CouponDTO dto){
		return ResponseEntity.status(HttpStatus.CREATED).body(couponService.createCoupon(dto));
		
	}
	
	@GetMapping("/coupons")
	public ResponseEntity<?> showAllCoupons(){
		return ResponseEntity.ok(couponService.getAllCoupons());
	}
	
	@DeleteMapping("/coupons/{id}")
	
	public ResponseEntity<?> deleteCoupon(@PathVariable Long id){
		
		return ResponseEntity.ok(couponService.removeCoupon(id));
	}

}
