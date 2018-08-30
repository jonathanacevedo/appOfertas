package orquestador.api;

import com.fasterxml.jackson.databind.ObjectMapper;
import io.swagger.annotations.*;
import orquestador.model.JsonApiBodyRequestNegocio;
import orquestador.model.JsonApiBodyRequestOferta;
import orquestador.model.JsonApiBodyRequestPersona;
import orquestador.model.JsonApiBodyResponseErrors;
import orquestador.model.JsonApiBodyResponseSuccess;

import org.apache.camel.EndpointInject;
import org.apache.camel.FluentProducerTemplate;
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
@javax.annotation.Generated(value = "io.swagger.codegen.languages.SpringCodegen", date = "2018-08-17T14:53:38.878-05:00")

@Controller
public class RegistrarApiController implements RegistrarApi {

    private static final Logger log = LoggerFactory.getLogger(RegistrarApiController.class);

    private final ObjectMapper objectMapper;

    private final HttpServletRequest request;
    
    @EndpointInject(uri="direct:registrar-negocio")
    private FluentProducerTemplate registrar_negocio;
    
    @EndpointInject(uri="direct:registrar-persona")
    private FluentProducerTemplate registrar_persona;

    @org.springframework.beans.factory.annotation.Autowired
    public RegistrarApiController(ObjectMapper objectMapper, HttpServletRequest request) {
        this.objectMapper = objectMapper;
        this.request = request;
    }

    public ResponseEntity<JsonApiBodyResponseSuccess> registrarNegocioPost(@ApiParam(value = "body" ,required=true )  @Valid @RequestBody JsonApiBodyRequestNegocio body) {
        String accept = request.getHeader("Accept");
        if (accept != null && accept.contains("application/json")) {
            try {
            	registrar_negocio.withBody(body).request();
                return new ResponseEntity<JsonApiBodyResponseSuccess>(objectMapper.readValue("{  \"estado\" : \"estado\",  \"id\" : \"id\",  \"nombre\" : \"nombre\"}", JsonApiBodyResponseSuccess.class), HttpStatus.NOT_IMPLEMENTED);
            } catch (IOException e) {
                log.error("Couldn't serialize response for content type application/json", e);
                return new ResponseEntity<JsonApiBodyResponseSuccess>(HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }

        return new ResponseEntity<JsonApiBodyResponseSuccess>(HttpStatus.NOT_IMPLEMENTED);
    }

    public ResponseEntity<JsonApiBodyResponseSuccess> registrarOfertaPost(@ApiParam(value = "body" ,required=true )  @Valid @RequestBody JsonApiBodyRequestOferta body) {
        String accept = request.getHeader("Accept");
        if (accept != null && accept.contains("application/json")) {
            try {
                return new ResponseEntity<JsonApiBodyResponseSuccess>(objectMapper.readValue("{  \"estado\" : \"estado\",  \"id\" : \"id\",  \"nombre\" : \"nombre\"}", JsonApiBodyResponseSuccess.class), HttpStatus.NOT_IMPLEMENTED);
            } catch (IOException e) {
                log.error("Couldn't serialize response for content type application/json", e);
                return new ResponseEntity<JsonApiBodyResponseSuccess>(HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }

        return new ResponseEntity<JsonApiBodyResponseSuccess>(HttpStatus.NOT_IMPLEMENTED);
    }

    public ResponseEntity<JsonApiBodyResponseSuccess> registrarPersonaPost(@ApiParam(value = "body" ,required=true )  @Valid @RequestBody JsonApiBodyRequestPersona body) {
        String accept = request.getHeader("Accept");
        if (accept != null && accept.contains("application/json")) {
            try {
            	Object exito = registrar_persona.withBody(body).request();
            	System.out.println("el parametro resivido"+exito);
                return new ResponseEntity<JsonApiBodyResponseSuccess>(HttpStatus.OK);
            } catch (Exception e) {
                log.error("Couldn't serialize response for content type application/json", e);
                return new ResponseEntity<JsonApiBodyResponseSuccess>(HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }

        return new ResponseEntity<JsonApiBodyResponseSuccess>(HttpStatus.NOT_IMPLEMENTED);
    }

}
