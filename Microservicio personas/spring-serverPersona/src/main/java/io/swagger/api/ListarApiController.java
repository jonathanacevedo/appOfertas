package io.swagger.api;

import io.swagger.model.JsonApiBodyRequest;
import io.swagger.model.JsonApiBodyResponseErrors;
import io.swagger.model.RegistrarRequest;
import io.swagger.repository.UserRepository;

import com.fasterxml.jackson.databind.ObjectMapper;
import io.swagger.annotations.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.multipart.MultipartFile;

import javax.validation.constraints.*;
import javax.validation.Valid;
import javax.servlet.http.HttpServletRequest;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
@javax.annotation.Generated(value = "io.swagger.codegen.languages.SpringCodegen", date = "2018-08-10T21:05:58.647Z")

@Controller
public class ListarApiController implements ListarApi {

    private static final Logger log = LoggerFactory.getLogger(ListarApiController.class);

    private final ObjectMapper objectMapper;

    private final HttpServletRequest request;
    
    ArrayList<UserRepository> lista = new ArrayList<UserRepository>();

        
    @Autowired
    private UserRepository repo;

    @org.springframework.beans.factory.annotation.Autowired
    public ListarApiController(ObjectMapper objectMapper, HttpServletRequest request) {
        this.objectMapper = objectMapper;
        this.request = request;
    }

    public ResponseEntity<Iterable<RegistrarRequest>> listarEstadoEstadoGet(@ApiParam(value = "se recibe el rol del usuario",required=true) @PathVariable("estado") String estado) {
        String accept = request.getHeader("Accept");
        if (accept != null && accept.contains("application/json")) {
            try {  	
                return new ResponseEntity<Iterable<RegistrarRequest>>(repo.findByEstado(estado), HttpStatus.ACCEPTED);
            } catch (Exception e) {
                log.error("Couldn't serialize response for content type application/json", e);
                return new ResponseEntity<Iterable<RegistrarRequest>>(HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }

        return new ResponseEntity<Iterable<RegistrarRequest>>(HttpStatus.NOT_IMPLEMENTED);
    }

    public ResponseEntity<?> listarGet() {
        String accept = request.getHeader("Accept");
        if (accept != null && accept.contains("application/json")) {
            try {
            	JsonApiBodyRequest resp = new JsonApiBodyRequest();
            	List<RegistrarRequest> reg;
            	reg = (List<RegistrarRequest>) repo.findAll();
            	resp.setPersona(reg);
            	return new ResponseEntity<JsonApiBodyRequest>(resp, HttpStatus.OK);
                //return new ResponseEntity<Iterable<RegistrarRequest>>(repo.findAll(),HttpStatus.ACCEPTED);
            	//return new ResponseEntity<JsonApiBodyRequest>(objectMapper.readValue("{  \"persona\" : [ {    \"apellidos\" : \"apellidos\",    \"estado\" : \"estado\",    \"correo\" : \"correo\",    \"genero\" : \"genero\",    \"contrasena\" : \"contrasena\",    \"id\" : \"id\",    \"telefono\" : \"telefono\",    \"nombre\" : \"nombre\",    \"rol\" : \"rol\",    \"token\" : \"token\"  }, {    \"apellidos\" : \"apellidos\",    \"estado\" : \"estado\",    \"correo\" : \"correo\",    \"genero\" : \"genero\",    \"contrasena\" : \"contrasena\",    \"id\" : \"id\",    \"telefono\" : \"telefono\",    \"nombre\" : \"nombre\",    \"rol\" : \"rol\",    \"token\" : \"token\"  } ]}", JsonApiBodyRequest.class), HttpStatus.NOT_IMPLEMENTED);
            } catch (Exception e) {
                log.error("Couldn't serialize response for content type application/json", e);
                return new ResponseEntity<JsonApiBodyRequest>(HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }

        return new ResponseEntity<JsonApiBodyRequest>(HttpStatus.NOT_IMPLEMENTED);
    }

    public ResponseEntity<JsonApiBodyRequest> listarIdGet(@ApiParam(value = "ID of pet that needs to be fetched",required=true) @PathVariable("id") String id) {
        String accept = request.getHeader("Accept");
        if (accept != null && accept.contains("application/json")) {
            try {
            	RegistrarRequest usuario = repo.findOne(id);
            	 return new ResponseEntity<JsonApiBodyRequest>(objectMapper.readValue("{  \"persona\" : [ {    \"apellidos\" : \""+usuario.getApellidos()+"\",    \"estado\" : \""+usuario.getEstado()+"\",    \"correo\" : \""+usuario.getCorreo()+"\",    \"genero\" : \""+usuario.getGenero()+"\",    \"contrasena\" : \""+usuario.getContrasena()+"\",    \"id\" : \""+usuario.getId()+"\",    \"telefono\" : \""+usuario.getTelefono()+"\",    \"nombre\" : \""+usuario.getNombre()+"\",    \"rol\" : \""+usuario.getRol()+"\",    \"token\" : \""+usuario.getToken()+"\"  }]}", JsonApiBodyRequest.class), HttpStatus.ACCEPTED);
            	//return new ResponseEntity<JsonApiBodyRequest>(objectMapper.readValue("{  \"persona\" : [ {    \"apellidos\" : \"apellidos\",    \"estado\" : \"estado\",    \"correo\" : \"correo\",    \"genero\" : \"genero\",    \"contrasena\" : \"contrasena\",    \"id\" : \"id\",    \"telefono\" : \"telefono\",    \"nombre\" : \"nombre\",    \"rol\" : \"rol\",    \"token\" : \"token\"  }, {    \"apellidos\" : \"apellidos\",    \"estado\" : \"estado\",    \"correo\" : \"correo\",    \"genero\" : \"genero\",    \"contrasena\" : \"contrasena\",    \"id\" : \"id\",    \"telefono\" : \"telefono\",    \"nombre\" : \"nombre\",    \"rol\" : \"rol\",    \"token\" : \"token\"  } ]}", JsonApiBodyRequest.class), HttpStatus.NOT_IMPLEMENTED);
            } catch (IOException e) {
                log.error("Couldn't serialize response for content type application/json", e);
                return new ResponseEntity<JsonApiBodyRequest>(HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }
        return new ResponseEntity<JsonApiBodyRequest>(HttpStatus.NOT_IMPLEMENTED);
    }

    public ResponseEntity<Iterable<RegistrarRequest>> listarRolRolGet(@ApiParam(value = "se recibe el rol del usuario",required=true) @PathVariable("rol") String rol) {
        String accept = request.getHeader("Accept");
        if (accept != null && accept.contains("application/json")) {
            try {
                return new ResponseEntity<Iterable<RegistrarRequest>>(repo.findByRol(rol), HttpStatus.ACCEPTED);
                //return new ResponseEntity<JsonApiBodyRequest>(objectMapper.readValue("{  \"persona\" : [ {    \"apellidos\" : \"apellidos\",    \"estado\" : \"estado\",    \"correo\" : \"correo\",    \"genero\" : \"genero\",    \"contrasena\" : \"contrasena\",    \"id\" : \"id\",    \"telefono\" : \"telefono\",    \"nombre\" : \"nombre\",    \"rol\" : \"rol\",    \"token\" : \"token\"  }, {    \"apellidos\" : \"apellidos\",    \"estado\" : \"estado\",    \"correo\" : \"correo\",    \"genero\" : \"genero\",    \"contrasena\" : \"contrasena\",    \"id\" : \"id\",    \"telefono\" : \"telefono\",    \"nombre\" : \"nombre\",    \"rol\" : \"rol\",    \"token\" : \"token\"  } ]}", JsonApiBodyRequest.class), HttpStatus.NOT_IMPLEMENTED);
            } catch (Exception e) {
                log.error("Couldn't serialize response for content type application/json", e);
                return new ResponseEntity<Iterable<RegistrarRequest>>(HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }

        return new ResponseEntity<Iterable<RegistrarRequest>>(HttpStatus.NOT_IMPLEMENTED);
    }

}
