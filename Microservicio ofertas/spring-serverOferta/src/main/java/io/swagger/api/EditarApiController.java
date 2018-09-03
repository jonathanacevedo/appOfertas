package io.swagger.api;

import io.swagger.model.EditRequest;
import io.swagger.model.JsonApiBodyRequestEdit;
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
@javax.annotation.Generated(value = "io.swagger.codegen.languages.SpringCodegen", date = "2018-08-16T13:32:22.313Z")

@Controller
public class EditarApiController implements EditarApi {

    private static final Logger log = LoggerFactory.getLogger(EditarApiController.class);

    private final ObjectMapper objectMapper;

    private final HttpServletRequest request;
    
    @Autowired
    private UserRepository repo;

    @org.springframework.beans.factory.annotation.Autowired
    public EditarApiController(ObjectMapper objectMapper, HttpServletRequest request) {
        this.objectMapper = objectMapper;
        this.request = request;
    }

    public ResponseEntity<JsonApiBodyResponseSuccess> editarPut(@ApiParam(value = "body" ,required=true )  @Valid @RequestBody JsonApiBodyRequestEdit body) {
        String accept = request.getHeader("Accept");
        if (accept != null && accept.contains("application/json")) {
            try {
            	EditRequest oferta = body.getOferta().get(0);
            	if(oferta.getIdnegocio().equals(oferta.getParametro())) {
            		RegistrarRequest ofertaObj = new RegistrarRequest();
            		ofertaObj.setId(oferta.getId());
            		ofertaObj.setFoto(oferta.getFoto());
            		ofertaObj.setDescuento(oferta.getDescuento());
            		ofertaObj.setDetalle(oferta.getDetalle());
            		ofertaObj.setFechaFin(oferta.getFechaFin());
            		ofertaObj.setFechaInicio(oferta.getFechaInicio());
            		ofertaObj.setIdnegocio(oferta.getIdnegocio());
            		ofertaObj.setProducto(oferta.getProducto());
            		ofertaObj.setValor(oferta.getValor());
                	repo.save(ofertaObj);
            	} else {
            		System.out.println("Esta oferta no pertenece a ese negocio");
            	}
                return new ResponseEntity<JsonApiBodyResponseSuccess>(objectMapper.readValue("{  \"estado\" : \"estado\",  \"id\" : \"id\",  \"nombre\" : \"nombre\"}", JsonApiBodyResponseSuccess.class), HttpStatus.OK);
            } catch (IOException e) {
                log.error("Couldn't serialize response for content type application/json", e);
                return new ResponseEntity<JsonApiBodyResponseSuccess>(HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }

        return new ResponseEntity<JsonApiBodyResponseSuccess>(HttpStatus.NOT_IMPLEMENTED);
    }

}
