package com.app.dto;

import java.time.LocalDate;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Pattern;

import com.app.entities.UserRole;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@NoArgsConstructor
@ToString
public class Signup {
	@JsonProperty(access = Access.READ_ONLY) // this property only used during ser.
	private Long id;
	@NotBlank(message = "Name required")
	private String name;
	@NotEmpty(message = "Email cannot be empty")
	@Email(message = "Invalid Email!!!")
	private String email;
	
	@JsonProperty(access = Access.WRITE_ONLY)
	@NotEmpty(message = "Password cannot be empty")
	@Pattern(regexp = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,16}$", message = "Password must be at least 8 characters long and contain an uppercase letter, a lowercase letter, a digit, and a special character.")
	private String password;

	
	@NotEmpty(message = "Contact cannot be empty")
	private String phoneNo;
	
	@JsonProperty(access = Access.READ_ONLY)
	private UserRole role;
	
	@JsonProperty(access = Access.READ_ONLY)
	private LocalDate regDate;
	
	
}
