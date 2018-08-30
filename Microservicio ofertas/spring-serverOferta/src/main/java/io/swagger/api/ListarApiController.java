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
@javax.annotation.Generated(value = "io.swagger.codegen.languages.SpringCodegen", date = "2018-08-16T13:32:22.313Z")

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
                return new ResponseEntity<Iterable<RegistrarRequest>>(repo.findAll(), HttpStatus.ACCEPTED);
            } catch (Exception e) {
                log.error("Couldn't serialize response for content type application/json", e);
                return new ResponseEntity<Iterable<RegistrarRequest>>(HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }
        return new ResponseEntity<Iterable<RegistrarRequest>>(HttpStatus.NOT_IMPLEMENTED);
    }
    
    public ResponseEntity<Iterable<RegistrarRequest>> listarOfertaNegocioGet(@ApiParam(value = "se recibe el id del negocio",required=true) @PathVariable("idnegocio") String idnegocio) {
        String accept = request.getHeader("Accept");
        if (accept != null && accept.contains("application/json")) {
            try {
            	System.out.println("Listando... "+repo.findByIdnegocio(idnegocio));
                return new ResponseEntity<Iterable<RegistrarRequest>>(repo.findByIdnegocio(idnegocio), HttpStatus.ACCEPTED);
            } catch (Exception e) {
                log.error("Couldn't serialize response for content type application/json", e);
                return new ResponseEntity<Iterable<RegistrarRequest>>(HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }
        return new ResponseEntity<Iterable<RegistrarRequest>>(HttpStatus.NOT_IMPLEMENTED);
    }

}
