package io.swagger.api;

import io.swagger.model.JsonApiBodyEditNegocio;
import io.swagger.model.JsonApiBodyRequestEditOferta;
import io.swagger.model.JsonApiBodyRequestPersona;
import io.swagger.model.JsonApiBodyResponseErrorsNegocio;
import io.swagger.model.JsonApiBodyResponseErrorsOferta;
import io.swagger.model.JsonApiBodyResponseErrorsPersona;
import io.swagger.model.JsonApiBodyResponseSuccessNegocio;
import io.swagger.model.JsonApiBodyResponseSuccessOferta;
import io.swagger.model.JsonApiBodyResponseSuccessPersona;
import com.fasterxml.jackson.databind.ObjectMapper;
import io.swagger.annotations.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
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
@javax.annotation.Generated(value = "io.swagger.codegen.languages.SpringCodegen", date = "2018-08-23T20:32:20.792Z")

@Controller
public class EditarApiController implements EditarApi {

    private static final Logger log = LoggerFactory.getLogger(EditarApiController.class);

    private final ObjectMapper objectMapper;

    private final HttpServletRequest request;

    @org.springframework.beans.factory.annotation.Autowired
    public EditarApiController(ObjectMapper objectMapper, HttpServletRequest request) {
        this.objectMapper = objectMapper;
        this.request = request;
    }

    public ResponseEntity<JsonApiBodyResponseSuccessNegocio> editarNegocioPut(@ApiParam(value = "body" ,required=true )  @Valid @RequestBody JsonApiBodyEditNegocio body) {
        String accept = request.getHeader("Accept");
        if (accept != null && accept.contains("application/json")) {
            try {
                return new ResponseEntity<JsonApiBodyResponseSuccessNegocio>(objectMapper.readValue("{  \"estado\" : \"estado\",  \"id\" : \"id\",  \"nombre\" : \"nombre\"}", JsonApiBodyResponseSuccessNegocio.class), HttpStatus.NOT_IMPLEMENTED);
            } catch (IOException e) {
                log.error("Couldn't serialize response for content type application/json", e);
                return new ResponseEntity<JsonApiBodyResponseSuccessNegocio>(HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }

        return new ResponseEntity<JsonApiBodyResponseSuccessNegocio>(HttpStatus.NOT_IMPLEMENTED);
    }

    public ResponseEntity<JsonApiBodyResponseSuccessOferta> editarOfertaPut(@ApiParam(value = "body" ,required=true )  @Valid @RequestBody JsonApiBodyRequestEditOferta body) {
        String accept = request.getHeader("Accept");
        if (accept != null && accept.contains("application/json")) {
            try {
                return new ResponseEntity<JsonApiBodyResponseSuccessOferta>(objectMapper.readValue("{  \"estado\" : \"estado\",  \"id\" : \"id\",  \"nombre\" : \"nombre\"}", JsonApiBodyResponseSuccessOferta.class), HttpStatus.NOT_IMPLEMENTED);
            } catch (IOException e) {
                log.error("Couldn't serialize response for content type application/json", e);
                return new ResponseEntity<JsonApiBodyResponseSuccessOferta>(HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }

        return new ResponseEntity<JsonApiBodyResponseSuccessOferta>(HttpStatus.NOT_IMPLEMENTED);
    }

    public ResponseEntity<JsonApiBodyResponseSuccessPersona> editarPersonaPut(@ApiParam(value = "body" ,required=true )  @Valid @RequestBody JsonApiBodyRequestPersona body) {
        String accept = request.getHeader("Accept");
        if (accept != null && accept.contains("application/json")) {
            try {
                return new ResponseEntity<JsonApiBodyResponseSuccessPersona>(objectMapper.readValue("{  \"estado\" : \"estado\",  \"id\" : \"id\",  \"nombre\" : \"nombre\"}", JsonApiBodyResponseSuccessPersona.class), HttpStatus.NOT_IMPLEMENTED);
            } catch (IOException e) {
                log.error("Couldn't serialize response for content type application/json", e);
                return new ResponseEntity<JsonApiBodyResponseSuccessPersona>(HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }

        return new ResponseEntity<JsonApiBodyResponseSuccessPersona>(HttpStatus.NOT_IMPLEMENTED);
    }

}
