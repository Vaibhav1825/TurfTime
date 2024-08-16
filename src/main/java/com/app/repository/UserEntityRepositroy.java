package com.app.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.UserEntity;
import com.app.entities.UserRole;

public interface UserEntityRepositroy extends JpaRepository<UserEntity,Long>{
//derived finder 
	Optional<UserEntity> findByEmail(String email);
	 List<UserEntity> findByRole(UserRole role);
}
