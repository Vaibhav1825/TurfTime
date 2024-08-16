package com.app.service;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dto.ApiResponse;
import com.app.dto.TurfDTO;
import com.app.entities.Turf;
import com.app.repository.TurfRepository;
@Service
@Transactional
public class TurfServiceImpl implements TurfService {

	@Autowired
    private TurfRepository turfRepository;

	@Autowired
	private ModelMapper mapper;
	@Override
	public List<Turf> getAllTurfs() {
		
		return turfRepository.findAll();
	}

	@Override
	public Optional<Turf> getTurfById(Long id) {
		
		return turfRepository.findById(id);
	}

	@Override
	public ApiResponse createTurf(TurfDTO turf) {
		System.out.println(turf.getName());
		Turf newTurf=mapper.map(turf, Turf.class);
		turfRepository.save(newTurf);
		return new ApiResponse("Turf added successfully");
	}

	@Override
	public ApiResponse deleteTurf(Long id) {
		turfRepository.deleteById(id);

		return new ApiResponse("Turf deleted successfully");
		
	}

}
