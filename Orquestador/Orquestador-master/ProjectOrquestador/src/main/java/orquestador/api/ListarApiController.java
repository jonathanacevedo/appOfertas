package orquestador.api;

import com.fasterxml.jackson.databind.ObjectMapper;
import io.swagger.annotations.*;
import orquestador.model.JsonApiBodyRequestGetNegocio;
import orquestador.model.JsonApiBodyRequestNegocio;
import orquestador.model.JsonApiBodyRequestOferta;
import orquestador.model.JsonApiBodyRequestPersona;
import orquestador.model.JsonApiBodyResponseErrors;
import springfox.documentation.spring.web.json.Json;

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
public class ListarApiController implements ListarApi {

    private static final Logger log = LoggerFactory.getLogger(ListarApiController.class);

    private final ObjectMapper objectMapper;

    private final HttpServletRequest request;
    
    @EndpointInject(uri="direct:listar-negocio-idtrabajador")
    private FluentProducerTemplate listar_negocio_id_trabajador;
    
    @EndpointInject(uri="direct:listar-personas")
    private FluentProducerTemplate listar_personas;
    

    @org.springframework.beans.factory.annotation.Autowired
    public ListarApiController(ObjectMapper objectMapper, HttpServletRequest request) {
        this.objectMapper = objectMapper;
        this.request = request;
    }

    public ResponseEntity<JsonApiBodyRequestNegocio> listarNegocioIdtrabajadorPost(@ApiParam(value = "body" ,required=true )  @Valid @RequestBody JsonApiBodyRequestGetNegocio body) {
        String accept = request.getHeader("Accept");
        if (accept != null && accept.contains("application/json")) {
            try {
            	JsonApiBodyRequestNegocio negocios =(JsonApiBodyRequestNegocio)listar_negocio_id_trabajador.withBody(body).request();
            	System.out.println("este es el object"+negocios.toString());
            	
                return new ResponseEntity<JsonApiBodyRequestNegocio>(negocios,HttpStatus.OK);
            } catch (Exception e) {
                
                return new ResponseEntity<JsonApiBodyRequestNegocio>(HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }

        return new ResponseEntity<JsonApiBodyRequestNegocio>(HttpStatus.NOT_IMPLEMENTED);
    }

    public ResponseEntity<JsonApiBodyRequestNegocio> listarNegocioTipoPost(@ApiParam(value = "body" ,required=true )  @Valid @RequestBody JsonApiBodyRequestGetNegocio body) {
        String accept = request.getHeader("Accept");
        if (accept != null && accept.contains("application/json")) {
            try {
                return new ResponseEntity<JsonApiBodyRequestNegocio>(objectMapper.readValue("{  \"negocio\" : [ {    \"tipo\" : \"tipo\",    \"ubicacion\" : \"ubicacion\",    \"foto\" : \"foto\",    \"nit\" : \"nit\",    \"id\" : \"id\",    \"nombre\" : \"nombre\",    \"id_administrador\" : \"id_administrador\"  }, {    \"tipo\" : \"tipo\",    \"ubicacion\" : \"ubicacion\",    \"foto\" : \"foto\",    \"nit\" : \"nit\",    \"id\" : \"id\",    \"nombre\" : \"nombre\",    \"id_administrador\" : \"id_administrador\"  } ]}", JsonApiBodyRequestNegocio.class), HttpStatus.NOT_IMPLEMENTED);
            } catch (IOException e) {
                log.error("Couldn't serialize response for content type application/json", e);
                return new ResponseEntity<JsonApiBodyRequestNegocio>(HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }

        return new ResponseEntity<JsonApiBodyRequestNegocio>(HttpStatus.NOT_IMPLEMENTED);
    }

    public ResponseEntity<JsonApiBodyRequestOferta> listarOfertaGet() {
        String accept = request.getHeader("Accept");
        if (accept != null && accept.contains("application/json")) {
            try {
                return new ResponseEntity<JsonApiBodyRequestOferta>(objectMapper.readValue("{  \"oferta\" : [ {    \"idnegocio\" : \"idnegocio\",    \"fecha_inicio\" : \"fecha_inicio\",    \"foto\" : \"foto\",    \"fecha_final\" : \"fecha_final\",    \"descuento\" : \"descuento\",    \"valor\" : \"valor\",    \"id\" : \"id\",    \"producto\" : \"producto\",    \"detalle\" : \"detalle\"  }, {    \"idnegocio\" : \"idnegocio\",    \"fecha_inicio\" : \"fecha_inicio\",    \"foto\" : \"foto\",    \"fecha_final\" : \"fecha_final\",    \"descuento\" : \"descuento\",    \"valor\" : \"valor\",    \"id\" : \"id\",    \"producto\" : \"producto\",    \"detalle\" : \"detalle\"  } ]}", JsonApiBodyRequestOferta.class), HttpStatus.NOT_IMPLEMENTED);
            } catch (IOException e) {
                log.error("Couldn't serialize response for content type application/json", e);
                return new ResponseEntity<JsonApiBodyRequestOferta>(HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }

        return new ResponseEntity<JsonApiBodyRequestOferta>(HttpStatus.NOT_IMPLEMENTED);
    }

    public ResponseEntity<JsonApiBodyRequestPersona> listarPersonaEstadoEstadoGet(@ApiParam(value = "estado de la persona que se esta buscando",required=true) @PathVariable("estado") String estado) {
        String accept = request.getHeader("Accept");
        if (accept != null && accept.contains("application/json")) {
            try {
                return new ResponseEntity<JsonApiBodyRequestPersona>(objectMapper.readValue("{  \"persona\" : [ {    \"estado\" : \"estado\",    \"apellido\" : \"apellido\",    \"correo\" : \"correo\",    \"genero\" : \"genero\",    \"contrasena\" : \"contrasena\",    \"id\" : \"id\",    \"telefono\" : \"telefono\",    \"nombre\" : \"nombre\",    \"rol\" : \"rol\",    \"token\" : \"token\"  }, {    \"estado\" : \"estado\",    \"apellido\" : \"apellido\",    \"correo\" : \"correo\",    \"genero\" : \"genero\",    \"contrasena\" : \"contrasena\",    \"id\" : \"id\",    \"telefono\" : \"telefono\",    \"nombre\" : \"nombre\",    \"rol\" : \"rol\",    \"token\" : \"token\"  } ]}", JsonApiBodyRequestPersona.class), HttpStatus.NOT_IMPLEMENTED);
            } catch (IOException e) {
                log.error("Couldn't serialize response for content type application/json", e);
                return new ResponseEntity<JsonApiBodyRequestPersona>(HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }

        return new ResponseEntity<JsonApiBodyRequestPersona>(HttpStatus.NOT_IMPLEMENTED);
    }

    public ResponseEntity<JsonApiBodyRequestPersona> listarPersonaGet() {
        String accept = request.getHeader("Accept");
        if (accept != null && accept.contains("application/json")) {
            try {
            	JsonApiBodyRequestPersona persona = (JsonApiBodyRequestPersona)listar_personas.request();
                return new ResponseEntity<JsonApiBodyRequestPersona>(persona,HttpStatus.OK);
            } catch (Exception e) {
                log.error("Couldn't serialize response for content type application/json", e);
                return new ResponseEntity<JsonApiBodyRequestPersona>(HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }

        return new ResponseEntity<JsonApiBodyRequestPersona>(HttpStatus.NOT_IMPLEMENTED);
    }

    public ResponseEntity<JsonApiBodyRequestPersona> listarPersonaIdGet(@ApiParam(value = "id de la persona que se esta buscando",required=true) @PathVariable("id") String id) {
        String accept = request.getHeader("Accept");
        if (accept != null && accept.contains("application/json")) {
            try {
                return new ResponseEntity<JsonApiBodyRequestPersona>(objectMapper.readValue("{  \"persona\" : [ {    \"estado\" : \"estado\",    \"apellido\" : \"apellido\",    \"correo\" : \"correo\",    \"genero\" : \"genero\",    \"contrasena\" : \"contrasena\",    \"id\" : \"id\",    \"telefono\" : \"telefono\",    \"nombre\" : \"nombre\",    \"rol\" : \"rol\",    \"token\" : \"token\"  }, {    \"estado\" : \"estado\",    \"apellido\" : \"apellido\",    \"correo\" : \"correo\",    \"genero\" : \"genero\",    \"contrasena\" : \"contrasena\",    \"id\" : \"id\",    \"telefono\" : \"telefono\",    \"nombre\" : \"nombre\",    \"rol\" : \"rol\",    \"token\" : \"token\"  } ]}", JsonApiBodyRequestPersona.class), HttpStatus.NOT_IMPLEMENTED);
            } catch (IOException e) {
                log.error("Couldn't serialize response for content type application/json", e);
                return new ResponseEntity<JsonApiBodyRequestPersona>(HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }

        return new ResponseEntity<JsonApiBodyRequestPersona>(HttpStatus.NOT_IMPLEMENTED);
    }

    public ResponseEntity<JsonApiBodyRequestPersona> listarPersonaRolRolGet(@ApiParam(value = "rol de la persona que se esta buscando",required=true) @PathVariable("rol") String rol) {
        String accept = request.getHeader("Accept");
        if (accept != null && accept.contains("application/json")) {
            try {
                return new ResponseEntity<JsonApiBodyRequestPersona>(objectMapper.readValue("{  \"persona\" : [ {    \"estado\" : \"estado\",    \"apellido\" : \"apellido\",    \"correo\" : \"correo\",    \"genero\" : \"genero\",    \"contrasena\" : \"contrasena\",    \"id\" : \"id\",    \"telefono\" : \"telefono\",    \"nombre\" : \"nombre\",    \"rol\" : \"rol\",    \"token\" : \"token\"  }, {    \"estado\" : \"estado\",    \"apellido\" : \"apellido\",    \"correo\" : \"correo\",    \"genero\" : \"genero\",    \"contrasena\" : \"contrasena\",    \"id\" : \"id\",    \"telefono\" : \"telefono\",    \"nombre\" : \"nombre\",    \"rol\" : \"rol\",    \"token\" : \"token\"  } ]}", JsonApiBodyRequestPersona.class), HttpStatus.NOT_IMPLEMENTED);
            } catch (IOException e) {
                log.error("Couldn't serialize response for content type application/json", e);
                return new ResponseEntity<JsonApiBodyRequestPersona>(HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }

        return new ResponseEntity<JsonApiBodyRequestPersona>(HttpStatus.NOT_IMPLEMENTED);
    }

}
