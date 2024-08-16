package com.app.service;

import java.util.List;
import java.util.Optional;

import com.app.dto.ApiResponse;
import com.app.dto.TurfDTO;
import com.app.entities.Turf;

public interface TurfService {

	List<Turf> getAllTurfs();
    Optional<Turf> getTurfById(Long id);
    ApiResponse createTurf(TurfDTO turf);
    ApiResponse deleteTurf(Long id);
}
