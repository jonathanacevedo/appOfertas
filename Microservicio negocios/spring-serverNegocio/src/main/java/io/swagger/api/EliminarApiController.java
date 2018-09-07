package io.swagger.api;

import io.swagger.model.JsonApiBodyRequestDelete;
import io.swagger.model.JsonApiBodyResponseErrors;
import io.swagger.model.JsonApiBodyResponseSuccess;
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
public class EliminarApiController implements EliminarApi {

    private static final Logger log = LoggerFactory.getLogger(EliminarApiController.class);

    private final ObjectMapper objectMapper;

    private final HttpServletRequest request;
    
    @Autowired
    private UserRepository repo;

    @org.springframework.beans.factory.annotation.Autowired
    public EliminarApiController(ObjectMapper objectMapper, HttpServletRequest request) {
        this.objectMapper = objectMapper;
        this.request = request;
    }

    public ResponseEntity<JsonApiBodyResponseSuccess> eliminarDelete(@ApiParam(value = "body" ,required=true )  @Valid @RequestBody JsonApiBodyRequestDelete body) {
        String accept = request.getHeader("Accept");
        if (accept != null && accept.contains("application/json")) {
            try {
            		repo.delete(body.getNegocio().get(0).getIdnegocio());
            		return new ResponseEntity<JsonApiBodyResponseSuccess>(objectMapper.readValue("{  \"estado\" : \"estado\",  \"id\" : \""+body.getNegocio().get(0).getIdnegocio()+"\",  \"nombre\" : \"nombre\"}", JsonApiBodyResponseSuccess.class), HttpStatus.ACCEPTED);
            	//repo.delete(body.getNegocio().get(0).getIdnegocio());
            } catch (IOException e) {
                log.error("Couldn't serialize response for content type application/json", e);
                return new ResponseEntity<JsonApiBodyResponseSuccess>(HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }
        return new ResponseEntity<JsonApiBodyResponseSuccess>(HttpStatus.NOT_IMPLEMENTED);
    }

}
