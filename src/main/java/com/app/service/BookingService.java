package com.app.service;

import java.util.List;

import com.app.dto.ApiResponse;
import com.app.dto.BookingDTO;
import com.app.entities.Booking;

public interface BookingService {
	ApiResponse createBooking(BookingDTO dto);

	ApiResponse cancelBooking(Long id);

	List<Booking> getCurrentCustBookings(Long uid);

	List<Booking> bookingsForToday();
	
	List<Booking> getAllBookings();
}
