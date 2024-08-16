package com.app.repository;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.app.entities.Booking;

public interface BookingRepository extends JpaRepository<Booking, Long> {

	List<Booking> findByUserEmail(String email);
	
	@Query("SELECT e FROM Booking e WHERE e.bookingDate = :currentDate")
	List<Booking> findAllByCurrentDate(@Param("currentDate") LocalDate currentDate);
}
