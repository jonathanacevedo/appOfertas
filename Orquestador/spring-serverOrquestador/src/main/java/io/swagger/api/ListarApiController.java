package io.swagger.api;

import io.swagger.model.JsonApiBodyRequestNegocio;
import io.swagger.model.JsonApiBodyRequestOferta;
import io.swagger.model.JsonApiBodyRequestPersona;
import io.swagger.model.JsonApiBodyResponseErrorsNegocio;
import io.swagger.model.JsonApiBodyResponseErrorsOferta;
import io.swagger.model.JsonApiBodyResponseErrorsPersona;
import io.swagger.model.RegistrarRequestPersona;

import com.fasterxml.jackson.databind.ObjectMapper;
import io.swagger.annotations.*;

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
@javax.annotation.Generated(value = "io.swagger.codegen.languages.SpringCodegen", date = "2018-08-23T20:32:20.792Z")

@Controller
public class ListarApiController implements ListarApi {

    private static final Logger log = LoggerFactory.getLogger(ListarApiController.class);

    private final ObjectMapper objectMapper;

    private final HttpServletRequest request;
    
    @EndpointInject(uri="direct:listarPersonas")
    private FluentProducerTemplate listar_personas;

    @org.springframework.beans.factory.annotation.Autowired
    public ListarApiController(ObjectMapper objectMapper, HttpServletRequest request) {
        this.objectMapper = objectMapper;
        this.request = request;
    }

    public ResponseEntity<JsonApiBodyRequestNegocio> listarNegocioCiudadCiudadGet(@ApiParam(value = "se recibe la ciudad del negocio",required=true) @PathVariable("ciudad") String ciudad) {
        String accept = request.getHeader("Accept");
        if (accept != null && accept.contains("application/json")) {
            try {
                return new ResponseEntity<JsonApiBodyRequestNegocio>(objectMapper.readValue("{  \"negocio\" : [ {    \"idnegocio\" : \"idnegocio\",    \"tipo\" : \"tipo\",    \"foto\" : \"foto\",    \"ciudad\" : \"ciudad\",    \"nit\" : \"nit\",    \"direccion\" : \"direccion\",    \"idadmin\" : \"idadmin\",    \"telefono\" : \"telefono\",    \"nombre\" : \"nombre\",    \"email\" : \"email\",    \"detalle\" : \"detalle\"  }, {    \"idnegocio\" : \"idnegocio\",    \"tipo\" : \"tipo\",    \"foto\" : \"foto\",    \"ciudad\" : \"ciudad\",    \"nit\" : \"nit\",    \"direccion\" : \"direccion\",    \"idadmin\" : \"idadmin\",    \"telefono\" : \"telefono\",    \"nombre\" : \"nombre\",    \"email\" : \"email\",    \"detalle\" : \"detalle\"  } ]}", JsonApiBodyRequestNegocio.class), HttpStatus.NOT_IMPLEMENTED);
            } catch (IOException e) {
                log.error("Couldn't serialize response for content type application/json", e);
                return new ResponseEntity<JsonApiBodyRequestNegocio>(HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }

        return new ResponseEntity<JsonApiBodyRequestNegocio>(HttpStatus.NOT_IMPLEMENTED);
    }

    public ResponseEntity<JsonApiBodyRequestNegocio> listarNegocioIdGet(@ApiParam(value = "ID del negocio a buscar",required=true) @PathVariable("id") String id) {
        String accept = request.getHeader("Accept");
        if (accept != null && accept.contains("application/json")) {
            try {
                return new ResponseEntity<JsonApiBodyRequestNegocio>(objectMapper.readValue("{  \"negocio\" : [ {    \"idnegocio\" : \"idnegocio\",    \"tipo\" : \"tipo\",    \"foto\" : \"foto\",    \"ciudad\" : \"ciudad\",    \"nit\" : \"nit\",    \"direccion\" : \"direccion\",    \"idadmin\" : \"idadmin\",    \"telefono\" : \"telefono\",    \"nombre\" : \"nombre\",    \"email\" : \"email\",    \"detalle\" : \"detalle\"  }, {    \"idnegocio\" : \"idnegocio\",    \"tipo\" : \"tipo\",    \"foto\" : \"foto\",    \"ciudad\" : \"ciudad\",    \"nit\" : \"nit\",    \"direccion\" : \"direccion\",    \"idadmin\" : \"idadmin\",    \"telefono\" : \"telefono\",    \"nombre\" : \"nombre\",    \"email\" : \"email\",    \"detalle\" : \"detalle\"  } ]}", JsonApiBodyRequestNegocio.class), HttpStatus.NOT_IMPLEMENTED);
            } catch (IOException e) {
                log.error("Couldn't serialize response for content type application/json", e);
                return new ResponseEntity<JsonApiBodyRequestNegocio>(HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }

        return new ResponseEntity<JsonApiBodyRequestNegocio>(HttpStatus.NOT_IMPLEMENTED);
    }

    public ResponseEntity<JsonApiBodyRequestNegocio> listarNegocioIdadminIdadminGet(@ApiParam(value = "se recibe el admin del negocio",required=true) @PathVariable("idadmin") String idadmin) {
        String accept = request.getHeader("Accept");
        if (accept != null && accept.contains("application/json")) {
            try {
                return new ResponseEntity<JsonApiBodyRequestNegocio>(objectMapper.readValue("{  \"negocio\" : [ {    \"idnegocio\" : \"idnegocio\",    \"tipo\" : \"tipo\",    \"foto\" : \"foto\",    \"ciudad\" : \"ciudad\",    \"nit\" : \"nit\",    \"direccion\" : \"direccion\",    \"idadmin\" : \"idadmin\",    \"telefono\" : \"telefono\",    \"nombre\" : \"nombre\",    \"email\" : \"email\",    \"detalle\" : \"detalle\"  }, {    \"idnegocio\" : \"idnegocio\",    \"tipo\" : \"tipo\",    \"foto\" : \"foto\",    \"ciudad\" : \"ciudad\",    \"nit\" : \"nit\",    \"direccion\" : \"direccion\",    \"idadmin\" : \"idadmin\",    \"telefono\" : \"telefono\",    \"nombre\" : \"nombre\",    \"email\" : \"email\",    \"detalle\" : \"detalle\"  } ]}", JsonApiBodyRequestNegocio.class), HttpStatus.NOT_IMPLEMENTED);
            } catch (IOException e) {
                log.error("Couldn't serialize response for content type application/json", e);
                return new ResponseEntity<JsonApiBodyRequestNegocio>(HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }

        return new ResponseEntity<JsonApiBodyRequestNegocio>(HttpStatus.NOT_IMPLEMENTED);
    }

    public ResponseEntity<JsonApiBodyRequestNegocio> listarNegocioTipoTipoGet(@ApiParam(value = "se recibe el tipo de negocio",required=true) @PathVariable("tipo") String tipo) {
        String accept = request.getHeader("Accept");
        if (accept != null && accept.contains("application/json")) {
            try {
                return new ResponseEntity<JsonApiBodyRequestNegocio>(objectMapper.readValue("{  \"negocio\" : [ {    \"idnegocio\" : \"idnegocio\",    \"tipo\" : \"tipo\",    \"foto\" : \"foto\",    \"ciudad\" : \"ciudad\",    \"nit\" : \"nit\",    \"direccion\" : \"direccion\",    \"idadmin\" : \"idadmin\",    \"telefono\" : \"telefono\",    \"nombre\" : \"nombre\",    \"email\" : \"email\",    \"detalle\" : \"detalle\"  }, {    \"idnegocio\" : \"idnegocio\",    \"tipo\" : \"tipo\",    \"foto\" : \"foto\",    \"ciudad\" : \"ciudad\",    \"nit\" : \"nit\",    \"direccion\" : \"direccion\",    \"idadmin\" : \"idadmin\",    \"telefono\" : \"telefono\",    \"nombre\" : \"nombre\",    \"email\" : \"email\",    \"detalle\" : \"detalle\"  } ]}", JsonApiBodyRequestNegocio.class), HttpStatus.NOT_IMPLEMENTED);
            } catch (IOException e) {
                log.error("Couldn't serialize response for content type application/json", e);
                return new ResponseEntity<JsonApiBodyRequestNegocio>(HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }

        return new ResponseEntity<JsonApiBodyRequestNegocio>(HttpStatus.NOT_IMPLEMENTED);
    }

    public ResponseEntity<JsonApiBodyRequestNegocio> listarNegociosGet() {
        String accept = request.getHeader("Accept");
        if (accept != null && accept.contains("application/json")) {
            try {
                return new ResponseEntity<JsonApiBodyRequestNegocio>(objectMapper.readValue("{  \"negocio\" : [ {    \"idnegocio\" : \"idnegocio\",    \"tipo\" : \"tipo\",    \"foto\" : \"foto\",    \"ciudad\" : \"ciudad\",    \"nit\" : \"nit\",    \"direccion\" : \"direccion\",    \"idadmin\" : \"idadmin\",    \"telefono\" : \"telefono\",    \"nombre\" : \"nombre\",    \"email\" : \"email\",    \"detalle\" : \"detalle\"  }, {    \"idnegocio\" : \"idnegocio\",    \"tipo\" : \"tipo\",    \"foto\" : \"foto\",    \"ciudad\" : \"ciudad\",    \"nit\" : \"nit\",    \"direccion\" : \"direccion\",    \"idadmin\" : \"idadmin\",    \"telefono\" : \"telefono\",    \"nombre\" : \"nombre\",    \"email\" : \"email\",    \"detalle\" : \"detalle\"  } ]}", JsonApiBodyRequestNegocio.class), HttpStatus.NOT_IMPLEMENTED);
            } catch (IOException e) {
                log.error("Couldn't serialize response for content type application/json", e);
                return new ResponseEntity<JsonApiBodyRequestNegocio>(HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }

        return new ResponseEntity<JsonApiBodyRequestNegocio>(HttpStatus.NOT_IMPLEMENTED);
    }

    public ResponseEntity<JsonApiBodyRequestOferta> listarOfertasGet() {
        String accept = request.getHeader("Accept");
        if (accept != null && accept.contains("application/json")) {
            try {
                return new ResponseEntity<JsonApiBodyRequestOferta>(objectMapper.readValue("{  \"oferta\" : [ {    \"idnegocio\" : \"idnegocio\",    \"fecha_inicio\" : \"fecha_inicio\",    \"foto\" : \"foto\",    \"descuento\" : \"descuento\",    \"fecha_fin\" : \"fecha_fin\",    \"valor\" : \"valor\",    \"id\" : \"id\",    \"producto\" : \"producto\",    \"detalle\" : \"detalle\"  }, {    \"idnegocio\" : \"idnegocio\",    \"fecha_inicio\" : \"fecha_inicio\",    \"foto\" : \"foto\",    \"descuento\" : \"descuento\",    \"fecha_fin\" : \"fecha_fin\",    \"valor\" : \"valor\",    \"id\" : \"id\",    \"producto\" : \"producto\",    \"detalle\" : \"detalle\"  } ]}", JsonApiBodyRequestOferta.class), HttpStatus.NOT_IMPLEMENTED);
            } catch (IOException e) {
                log.error("Couldn't serialize response for content type application/json", e);
                return new ResponseEntity<JsonApiBodyRequestOferta>(HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }

        return new ResponseEntity<JsonApiBodyRequestOferta>(HttpStatus.NOT_IMPLEMENTED);
    }

    public ResponseEntity<JsonApiBodyRequestOferta> listarOfertasIdnegocioIdnegocioGet(@ApiParam(value = "se recibe el id del negocio propietario de la oferta",required=true) @PathVariable("idnegocio") String idnegocio) {
        String accept = request.getHeader("Accept");
        if (accept != null && accept.contains("application/json")) {
            try {
                return new ResponseEntity<JsonApiBodyRequestOferta>(objectMapper.readValue("{  \"oferta\" : [ {    \"idnegocio\" : \"idnegocio\",    \"fecha_inicio\" : \"fecha_inicio\",    \"foto\" : \"foto\",    \"descuento\" : \"descuento\",    \"fecha_fin\" : \"fecha_fin\",    \"valor\" : \"valor\",    \"id\" : \"id\",    \"producto\" : \"producto\",    \"detalle\" : \"detalle\"  }, {    \"idnegocio\" : \"idnegocio\",    \"fecha_inicio\" : \"fecha_inicio\",    \"foto\" : \"foto\",    \"descuento\" : \"descuento\",    \"fecha_fin\" : \"fecha_fin\",    \"valor\" : \"valor\",    \"id\" : \"id\",    \"producto\" : \"producto\",    \"detalle\" : \"detalle\"  } ]}", JsonApiBodyRequestOferta.class), HttpStatus.NOT_IMPLEMENTED);
            } catch (IOException e) {
                log.error("Couldn't serialize response for content type application/json", e);
                return new ResponseEntity<JsonApiBodyRequestOferta>(HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }

        return new ResponseEntity<JsonApiBodyRequestOferta>(HttpStatus.NOT_IMPLEMENTED);
    }

    public ResponseEntity<JsonApiBodyRequestPersona> listarPersonaEstadoEstadoGet(@ApiParam(value = "se recibe el estado del usuario",required=true) @PathVariable("estado") String estado) {
        String accept = request.getHeader("Accept");
        if (accept != null && accept.contains("application/json")) {
            try {
                return new ResponseEntity<JsonApiBodyRequestPersona>(objectMapper.readValue("{  \"persona\" : [ {    \"apellidos\" : \"apellidos\",    \"estado\" : \"estado\",    \"correo\" : \"correo\",    \"genero\" : \"genero\",    \"contrasena\" : \"contrasena\",    \"id\" : \"id\",    \"telefono\" : \"telefono\",    \"nombre\" : \"nombre\",    \"rol\" : \"rol\",    \"token\" : \"token\"  }, {    \"apellidos\" : \"apellidos\",    \"estado\" : \"estado\",    \"correo\" : \"correo\",    \"genero\" : \"genero\",    \"contrasena\" : \"contrasena\",    \"id\" : \"id\",    \"telefono\" : \"telefono\",    \"nombre\" : \"nombre\",    \"rol\" : \"rol\",    \"token\" : \"token\"  } ]}", JsonApiBodyRequestPersona.class), HttpStatus.NOT_IMPLEMENTED);
            } catch (IOException e) {
                log.error("Couldn't serialize response for content type application/json", e);
                return new ResponseEntity<JsonApiBodyRequestPersona>(HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }

        return new ResponseEntity<JsonApiBodyRequestPersona>(HttpStatus.NOT_IMPLEMENTED);
    }

    public ResponseEntity<JsonApiBodyRequestPersona> listarPersonaIdGet(@ApiParam(value = "Id de la persona a buscar",required=true) @PathVariable("id") String id) {
        String accept = request.getHeader("Accept");
        if (accept != null && accept.contains("application/json")) {
            try {
                return new ResponseEntity<JsonApiBodyRequestPersona>(objectMapper.readValue("{  \"persona\" : [ {    \"apellidos\" : \"apellidos\",    \"estado\" : \"estado\",    \"correo\" : \"correo\",    \"genero\" : \"genero\",    \"contrasena\" : \"contrasena\",    \"id\" : \"id\",    \"telefono\" : \"telefono\",    \"nombre\" : \"nombre\",    \"rol\" : \"rol\",    \"token\" : \"token\"  }, {    \"apellidos\" : \"apellidos\",    \"estado\" : \"estado\",    \"correo\" : \"correo\",    \"genero\" : \"genero\",    \"contrasena\" : \"contrasena\",    \"id\" : \"id\",    \"telefono\" : \"telefono\",    \"nombre\" : \"nombre\",    \"rol\" : \"rol\",    \"token\" : \"token\"  } ]}", JsonApiBodyRequestPersona.class), HttpStatus.NOT_IMPLEMENTED);
            } catch (IOException e) {
                log.error("Couldn't serialize response for content type application/json", e);
                return new ResponseEntity<JsonApiBodyRequestPersona>(HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }

        return new ResponseEntity<JsonApiBodyRequestPersona>(HttpStatus.NOT_IMPLEMENTED);
    }

    public ResponseEntity<JsonApiBodyRequestPersona> listarPersonaRolRolGet(@ApiParam(value = "se recibe el rol del usuario",required=true) @PathVariable("rol") String rol) {
        String accept = request.getHeader("Accept");
        if (accept != null && accept.contains("application/json")) {
            try {
                return new ResponseEntity<JsonApiBodyRequestPersona>(objectMapper.readValue("{  \"persona\" : [ {    \"apellidos\" : \"apellidos\",    \"estado\" : \"estado\",    \"correo\" : \"correo\",    \"genero\" : \"genero\",    \"contrasena\" : \"contrasena\",    \"id\" : \"id\",    \"telefono\" : \"telefono\",    \"nombre\" : \"nombre\",    \"rol\" : \"rol\",    \"token\" : \"token\"  }, {    \"apellidos\" : \"apellidos\",    \"estado\" : \"estado\",    \"correo\" : \"correo\",    \"genero\" : \"genero\",    \"contrasena\" : \"contrasena\",    \"id\" : \"id\",    \"telefono\" : \"telefono\",    \"nombre\" : \"nombre\",    \"rol\" : \"rol\",    \"token\" : \"token\"  } ]}", JsonApiBodyRequestPersona.class), HttpStatus.NOT_IMPLEMENTED);
            } catch (IOException e) {
                log.error("Couldn't serialize response for content type application/json", e);
                return new ResponseEntity<JsonApiBodyRequestPersona>(HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }

        return new ResponseEntity<JsonApiBodyRequestPersona>(HttpStatus.NOT_IMPLEMENTED);
    }

    public ResponseEntity<?> listarPersonasGet() {
        String accept = request.getHeader("Accept");
        if (accept != null && accept.contains("application/json")) {
            try {
            	JsonApiBodyRequestPersona persona = (JsonApiBodyRequestPersona) listar_personas.request();
                return new ResponseEntity<JsonApiBodyRequestPersona>(persona, HttpStatus.OK);
            } catch (Exception e) {
                log.error("Couldn't serialize response for content type application/json", e);
                //return new ResponseEntity<JsonApiBodyRequestPersona>(HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }

        return new ResponseEntity<JsonApiBodyRequestPersona>(HttpStatus.NOT_IMPLEMENTED);
    }

}
