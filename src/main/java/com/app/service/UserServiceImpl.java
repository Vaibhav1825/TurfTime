package com.app.service;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.custom_exceptions.ResourceNotFoundException;
import com.app.dto.ApiResponse;
import com.app.dto.Signup;
import com.app.entities.UserEntity;
import com.app.entities.UserRole;
import com.app.repository.UserEntityRepositroy;

@Service
@Transactional
public class UserServiceImpl implements UserService {
	//dep : dao layer i/f
	@Autowired
	private UserEntityRepositroy userDao;
	//dep
	@Autowired
	private ModelMapper mapper;
	//dep 
	@Autowired
	private PasswordEncoder encoder;
	

	@Override
	public Signup userRegistration(Signup reqDTO) {
		//dto --> entity
		UserEntity user=mapper.map(reqDTO, UserEntity.class);
		user.setPassword(encoder.encode(user.getPassword()));//pwd : encrypted using SHA
		return mapper.map(userDao.save(user), Signup.class);
	}

	@Override
	public ApiResponse updateCust(String id, Signup dto) {
String msg="Updation failed!!";
		
		UserEntity user=userDao.findByEmail(id).orElseThrow(
				()-> new ResourceNotFoundException("Invalid id,record does not exist"));
		
		UserEntity updatedUser=mapper.map(dto, UserEntity.class);
		user.setName(updatedUser.getName());
		user.setEmail(updatedUser.getEmail());
		user.setPassword(encoder.encode(updatedUser.getPassword()));
		user.setPhoneNo(updatedUser.getPhoneNo());
		msg="Details updated successfully";
		
		return new ApiResponse(msg);
	}

	@Override
	public ApiResponse deleteCust(Long id) {
//		userDao.delete(userDao.findById(id).orElseThrow(
//				()-> new ResourceNotFoundException("Invalid id,failed to delete")));
//		
		userDao.deleteById(id);
		return new ApiResponse("Deletion sucessful");
	}

	@Override
	
	public List<UserEntity> allAdmin() {
        return userDao.findByRole(UserRole.ROLE_ADMIN);
    }

	@Override
	public ApiResponse removeAdmin(Long id) {
		userDao.deleteById(id);
		
		return new ApiResponse("Delete sucessfull");
	}

}
