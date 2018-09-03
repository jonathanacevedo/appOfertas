package io.swagger.repository;

import java.util.List;

import org.socialsignin.spring.data.dynamodb.repository.EnableScan;
import org.springframework.data.repository.CrudRepository;
import io.swagger.model.RegistrarRequest;

@EnableScan
public interface UserRepository extends CrudRepository<RegistrarRequest, String>{
	//public List<User> findByEmail(String email);
	public Iterable<RegistrarRequest> findByIdnegocio(String idnegocio);
	public Iterable<RegistrarRequest> findById(String id);
}