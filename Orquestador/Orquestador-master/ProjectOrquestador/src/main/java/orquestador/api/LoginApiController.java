package orquestador.api;

import com.fasterxml.jackson.databind.ObjectMapper;
import io.swagger.annotations.*;
import orquestador.model.JsonApiBodyLogin;
import orquestador.model.JsonApiBodyRequestPersona;
import orquestador.model.JsonApiBodyResponseErrors;

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
public class LoginApiController implements LoginApi {

    private static final Logger log = LoggerFactory.getLogger(LoginApiController.class);

    private final ObjectMapper objectMapper;

    private final HttpServletRequest request;
    
    @EndpointInject(uri="direct:login-persona")
    private FluentProducerTemplate login_persona;
    
    @org.springframework.beans.factory.annotation.Autowired
    public LoginApiController(ObjectMapper objectMapper, HttpServletRequest request) {
        this.objectMapper = objectMapper;
        this.request = request;
    }

    public ResponseEntity<JsonApiBodyRequestPersona> loginPersonaPost(@ApiParam(value = "body" ,required=true )  @Valid @RequestBody JsonApiBodyLogin body) {
        String accept = request.getHeader("Accept");
        if (accept != null && accept.contains("application/json")) {
            try {
            	JsonApiBodyRequestPersona persona = (JsonApiBodyRequestPersona)login_persona.withBody(body).request();
                System.out.println(persona.toString());
            	return new ResponseEntity<JsonApiBodyRequestPersona>(persona,HttpStatus.OK);
            } catch (Exception e) {
                log.error("Couldn't serialize response for content type application/json", e);
                return new ResponseEntity<JsonApiBodyRequestPersona>(HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }

        return new ResponseEntity<JsonApiBodyRequestPersona>(HttpStatus.NOT_IMPLEMENTED);
    }

}
