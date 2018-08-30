package orquestador.api;

import com.fasterxml.jackson.databind.ObjectMapper;
import io.swagger.annotations.*;
import orquestador.model.JsonApiBodyRequestDeleteNegocio;
import orquestador.model.JsonApiBodyRequestDeleteOferta;
import orquestador.model.JsonApiBodyRequestDeletePersona;
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
public class EliminarApiController implements EliminarApi {

    private static final Logger log = LoggerFactory.getLogger(EliminarApiController.class);

    private final ObjectMapper objectMapper;

    private final HttpServletRequest request;
    
    @EndpointInject(uri="direct:eliminar-negocio")
    private FluentProducerTemplate eliminar_negocio;
    
    @EndpointInject(uri="direct:eliminar-persona")
    private FluentProducerTemplate eliminar_persona;
    
    JsonApiBodyResponseSuccess exito = new JsonApiBodyResponseSuccess();
    JsonApiBodyResponseErrors error = new JsonApiBodyResponseErrors();

    @org.springframework.beans.factory.annotation.Autowired
    public EliminarApiController(ObjectMapper objectMapper, HttpServletRequest request) {
        this.objectMapper = objectMapper;
        this.request = request;
    }

    public ResponseEntity<?> eliminarNegocioDelete(@ApiParam(value = "body" ,required=true )  @Valid @RequestBody JsonApiBodyRequestDeleteNegocio body) {
        String accept = request.getHeader("Accept");
        if (accept != null && accept.contains("application/json")) {
            try {
            	 exito = (JsonApiBodyResponseSuccess)eliminar_negocio.withBody(body).request();
                //System.out.println(exito);
            	return new ResponseEntity<JsonApiBodyResponseSuccess>(exito,HttpStatus.OK);
            } catch (Exception e) {
                error.setCodigo("03");
                error.setDetalle("No se pudo eliminar negocio");
                return new ResponseEntity<JsonApiBodyResponseErrors>(error,HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }

        return new ResponseEntity<JsonApiBodyResponseSuccess>(HttpStatus.NOT_IMPLEMENTED);
    }

    public ResponseEntity<JsonApiBodyResponseSuccess> eliminarOfertaDelete(@ApiParam(value = "body" ,required=true )  @Valid @RequestBody JsonApiBodyRequestDeleteOferta body) {
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

    public ResponseEntity<?> eliminarPersonaDelete(@ApiParam(value = "body" ,required=true )  @Valid @RequestBody JsonApiBodyRequestDeletePersona body) {
        String accept = request.getHeader("Accept");
        if (accept != null && accept.contains("application/json")) {
            try {
            	 exito = (JsonApiBodyResponseSuccess)eliminar_persona.withBody(body).request();
                return new ResponseEntity<JsonApiBodyResponseSuccess>(exito,HttpStatus.OK);
            } catch (Exception e) {
                error.setCodigo("03");
                error.setDetalle("No se pudo eliminar persona");
                return new ResponseEntity<JsonApiBodyResponseErrors>(error,HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }

        return new ResponseEntity<JsonApiBodyResponseSuccess>(HttpStatus.NOT_IMPLEMENTED);
    }

}
