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
import java.util.List;
@javax.annotation.Generated(value = "io.swagger.codegen.languages.SpringCodegen", date = "2018-08-15T14:28:12.248Z")

@Controller
public class ListarApiController implements ListarApi {

    private static final Logger log = LoggerFactory.getLogger(ListarApiController.class);

    private final ObjectMapper objectMapper;

    private final HttpServletRequest request;
    
    @Autowired
    private UserRepository repo;
  

    @org.springframework.beans.factory.annotation.Autowired
    public ListarApiController(ObjectMapper objectMapper, HttpServletRequest request) {
        this.objectMapper = objectMapper;
        this.request = request;
    }

    public ResponseEntity<Iterable<RegistrarRequest>> listarGet() {
        String accept = request.getHeader("Accept");
        if (accept != null && accept.contains("application/json")) {
            try {
                return new ResponseEntity<Iterable<RegistrarRequest>>(repo.findAll(),HttpStatus.ACCEPTED);
            } catch (Exception e) {
                log.error("Couldn't serialize response for content type application/json", e);
                return new ResponseEntity<Iterable<RegistrarRequest>>(HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }
        return new ResponseEntity<Iterable<RegistrarRequest>>(HttpStatus.NOT_IMPLEMENTED);
    }

    public ResponseEntity<?> listarIdGet(@ApiParam(value = "ID of pet that needs to be fetched",required=true) @PathVariable("id") String id) {
        String accept = request.getHeader("Accept");
        if (accept != null && accept.contains("application/json")) {
            try {
            	RegistrarRequest negocio = repo.findOne(id);
            	if(negocio==null) {
            		JsonApiBodyResponseErrors valor =  new JsonApiBodyResponseErrors();
            		valor.setCodigo("404");
            		valor.setDetalle("El usuario no existe");
                    return new ResponseEntity<JsonApiBodyResponseErrors>(valor, HttpStatus.BAD_REQUEST);
            	} else {
            		 return new ResponseEntity<JsonApiBodyRequest>(objectMapper.readValue("{  \"negocio\" : [ {    \"idnegocio\" : \""+negocio.getIdnegocio()+"\",    \"tipo\" : \""+negocio.getTipo()+"\",    \"foto\" : \""+negocio.getFoto()+"\",    \"ciudad\" : \""+negocio.getCiudad()+"\",    \"nit\" : \""+negocio.getNit()+"\",    \"direccion\" : \""+negocio.getDireccion()+"\",    \"idadmin\" : \""+negocio.getIdadmin()+"\",    \"telefono\" : \""+negocio.getTelefono()+"\",    \"nombre\" : \""+negocio.getNombre()+"\",    \"email\" : \""+negocio.getEmail()+"\",    \"detalle\" : \""+negocio.getDetalle()+"\"  }]}", JsonApiBodyRequest.class), HttpStatus.ACCEPTED);
            	}
            } catch (IOException e) {
                log.error("Couldn't serialize response for content type application/json", e);
                return new ResponseEntity<JsonApiBodyResponseErrors>(HttpStatus.BAD_REQUEST);
            }
        }

        return new ResponseEntity<JsonApiBodyRequest>(HttpStatus.NOT_IMPLEMENTED);
    }

    public ResponseEntity<Iterable<RegistrarRequest>> listarNegocioTipoGet(@ApiParam(value = "se recibe el tipo de negocio",required=true) @PathVariable("tipo") String tipo) {
        String accept = request.getHeader("Accept");
        if (accept != null && accept.contains("application/json")) {
            try {
                return new ResponseEntity<Iterable<RegistrarRequest>>(repo.findByTipo(tipo), HttpStatus.OK);
            } catch (Exception e) {
                log.error("Couldn't serialize response for content type application/json", e);
                return new ResponseEntity<Iterable<RegistrarRequest>>(HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }
        return new ResponseEntity<Iterable<RegistrarRequest>>(HttpStatus.NOT_IMPLEMENTED);
    }
    
    public ResponseEntity<Iterable<RegistrarRequest>> listarNegocioCiudadGet(@ApiParam(value = "se recibe la ciudad del negocio",required=true) @PathVariable("ciudad") String ciudad) {
        String accept = request.getHeader("Accept");
        if (accept != null && accept.contains("application/json")) {
            try {
                return new ResponseEntity<Iterable<RegistrarRequest>>(repo.findByCiudad(ciudad), HttpStatus.ACCEPTED);
            } catch (Exception e) {
                log.error("Couldn't serialize response for content type application/json", e);
                return new ResponseEntity<Iterable<RegistrarRequest>>(HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }
        return new ResponseEntity<Iterable<RegistrarRequest>>(HttpStatus.NOT_IMPLEMENTED);
    }
    
    public ResponseEntity<Iterable<RegistrarRequest>> listarNegocioAdminGet(@ApiParam(value = "se recibe la ciudad del negocio",required=true) @PathVariable("idadmin") String idadmin) {
        String accept = request.getHeader("Accept");
        if (accept != null && accept.contains("application/json")) {
            try {
                return new ResponseEntity<Iterable<RegistrarRequest>>(repo.findByIdadmin(idadmin), HttpStatus.ACCEPTED);
            } catch (Exception e) {
                log.error("Couldn't serialize response for content type application/json", e);
                return new ResponseEntity<Iterable<RegistrarRequest>>(HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }
        return new ResponseEntity<Iterable<RegistrarRequest>>(HttpStatus.NOT_IMPLEMENTED);
    }

}
