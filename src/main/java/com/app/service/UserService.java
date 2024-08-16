package com.app.service;

import java.util.List;

import com.app.dto.ApiResponse;
import com.app.dto.Signup;
import com.app.entities.UserEntity;

public interface UserService {
//sign up
	Signup userRegistration(Signup reqDTO);

	ApiResponse updateCust(String id, Signup dto);

	ApiResponse deleteCust(Long id);

	List<UserEntity> allAdmin();

	ApiResponse removeAdmin(Long id);

}
