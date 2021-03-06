package io.swagger.api;

import io.swagger.model.JsonApiBodyRequest;
import io.swagger.model.JsonApiBodyResponseErrors;
import io.swagger.model.JsonApiBodyResponseSuccess;
import io.swagger.model.RegistrarRequest;
import io.swagger.repository.UserRepository;
import io.swagger.utils.CorreoBienvenida;

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
import java.util.List;
@javax.annotation.Generated(value = "io.swagger.codegen.languages.SpringCodegen", date = "2018-08-10T21:05:58.647Z")

@Controller
public class RegistrarApiController implements RegistrarApi {

    private static final Logger log = LoggerFactory.getLogger(RegistrarApiController.class);

    private final ObjectMapper objectMapper;

    private final HttpServletRequest request;
    CorreoBienvenida enviarCorreo = new CorreoBienvenida();
    @Autowired
    private UserRepository repo;

    @org.springframework.beans.factory.annotation.Autowired
    public RegistrarApiController(ObjectMapper objectMapper, HttpServletRequest request) {
        this.objectMapper = objectMapper;
        this.request = request;
    }

    public ResponseEntity<?> registrarPost(@ApiParam(value = "body" ,required=true )  @Valid @RequestBody JsonApiBodyRequest body) {
        String accept = request.getHeader("Accept");
        if (accept != null && accept.contains("application/json")) {
            try {
            	RegistrarRequest persona = body.getPersona().get(0);
            	
            	if (persona.getNombre()=="") {
            		JsonApiBodyResponseErrors valor =  new JsonApiBodyResponseErrors();
            		valor.setCodigo("404");
            		valor.setDetalle("El campo del nombre esta vacio");
                    return new ResponseEntity<JsonApiBodyResponseErrors>(valor, HttpStatus.OK);
				} else if(!(repo.findByCorreo(body.getPersona().get(0).getCorreo())).isEmpty()) {
	                JsonApiBodyResponseErrors valor =  new JsonApiBodyResponseErrors();
	            	valor.setCodigo("404");
	            	valor.setDetalle("El correo ya esta registrado");
	                return new ResponseEntity<JsonApiBodyResponseErrors>(valor, HttpStatus.OK);
				} else if(persona.getApellidos()=="") {
	                JsonApiBodyResponseErrors valor =  new JsonApiBodyResponseErrors();
	            	valor.setCodigo("404");
	            	valor.setDetalle("El campo de apellido está vacio");
	                return new ResponseEntity<JsonApiBodyResponseErrors>(valor, HttpStatus.OK);
				} else if(persona.getContrasena()=="") {
	                JsonApiBodyResponseErrors valor =  new JsonApiBodyResponseErrors();
	            	valor.setCodigo("404");
	            	valor.setDetalle("El campo de contraseña está vacio");
	                return new ResponseEntity<JsonApiBodyResponseErrors>(valor, HttpStatus.OK);
				} else if(persona.getRol()=="") {
	                JsonApiBodyResponseErrors valor =  new JsonApiBodyResponseErrors();
	            	valor.setCodigo("404");
	            	valor.setDetalle("Debe seleccionar un rol antes de registrarse.");
	                return new ResponseEntity<JsonApiBodyResponseErrors>(valor, HttpStatus.OK);
				} else {
            		repo.save(body.getPersona().get(0));
            		enviarCorreo.EnviarCorreo(body.getPersona().get(0).getCorreo());
            		return new ResponseEntity<JsonApiBodyResponseSuccess>(objectMapper.readValue("{  \"estado\" : \""+body.getPersona().get(0).getEstado()+"\",  \"id\" : \""+body.getPersona().get(0).getId()+"\",  \"nombre\" : \""+body.getPersona().get(0).getNombre()+"\"}", JsonApiBodyResponseSuccess.class), HttpStatus.OK);
            	}
            	            	
            } catch (IOException e) {
                log.error("Couldn't serialize response for content type application/json", e);
                return new ResponseEntity<JsonApiBodyResponseSuccess>(HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }
        return new ResponseEntity<JsonApiBodyResponseSuccess>(HttpStatus.NOT_IMPLEMENTED);
    }
}
