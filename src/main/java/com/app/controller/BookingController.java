package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.BookingDTO;
import com.app.service.BookingService;

@RestController
@RequestMapping("/bookings")
public class BookingController {
	
	@Autowired
	private BookingService service;

	
	@PostMapping
	public ResponseEntity<?> createNewBooking(@RequestBody BookingDTO dto)
	{
		
		//BookingDTO dto=httpEntity.getBody();
//		System.out.println(user.getClass());
		System.out.println(dto);
		//BookingDTO dto = httpEntity.getBody();
		//logger.info("Received BookingDTO: {}",formData );
//		System.out.println(formData.getClass());
//		System.out.println(formData);
		//return ResponseEntity.status(HttpStatus.CREATED).body(service.createBooking(formData));
		return ResponseEntity.ok(service.createBooking(dto));
	}

	@DeleteMapping("/{id}")
    public ResponseEntity<?> deleteBooking(@PathVariable Long id) {
        
        return ResponseEntity.ok(service.cancelBooking(id));
    }
	
	@GetMapping("/{id}")
	public ResponseEntity<?> getCurrentCustBookings(@PathVariable Long id){
		return ResponseEntity.ok(service.getCurrentCustBookings(id));
	}
}
