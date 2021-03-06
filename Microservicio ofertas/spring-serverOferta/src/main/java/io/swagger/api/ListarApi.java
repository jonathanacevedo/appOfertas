/**
 * NOTE: This class is auto generated by the swagger code generator program (2.3.1).
 * https://github.com/swagger-api/swagger-codegen
 * Do not edit the class manually.
 */
package io.swagger.api;

import io.swagger.model.JsonApiBodyRequest;
import io.swagger.model.JsonApiBodyResponseErrors;
import io.swagger.model.RegistrarRequest;
import io.swagger.annotations.*;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.multipart.MultipartFile;

import javax.validation.Valid;
import javax.validation.constraints.*;
import java.util.List;
@javax.annotation.Generated(value = "io.swagger.codegen.languages.SpringCodegen", date = "2018-08-16T13:32:22.313Z")

@Api(value = "listar", description = "the listar API")
public interface ListarApi {

    @CrossOrigin(origins = "*")
    @ApiOperation(value = "buscar", nickname = "listarGet", notes = "devuelve todos las ofertas que esten almacenadas", response = JsonApiBodyRequest.class, tags={ "ofertas", })
    @ApiResponses(value = { 
        @ApiResponse(code = 200, message = "ofertas encontradas", response = JsonApiBodyRequest.class),
        @ApiResponse(code = 404, message = "datos incompletos o incorrectos", response = JsonApiBodyResponseErrors.class) })
    @RequestMapping(value = "/listar",
        produces = { "application/json" }, 
        method = RequestMethod.GET)
    ResponseEntity<Iterable<RegistrarRequest>> listarGet();
    
    @CrossOrigin(origins = "*")
    @ApiOperation(value = "buscar una oferta por la id del negocio", nickname = "listarOfertaNegocioGet", notes = "", response = JsonApiBodyRequest.class, tags={ "ofertas", })
    @ApiResponses(value = { 
        @ApiResponse(code = 200, message = "negocio encontrado", response = JsonApiBodyRequest.class),
        @ApiResponse(code = 404, message = "datos imcompletos o incorrectos", response = JsonApiBodyResponseErrors.class) })
    @RequestMapping(value = "/listar/negocio/{idnegocio}",
        produces = { "application/json" }, 
        method = RequestMethod.GET)
    ResponseEntity<Iterable<RegistrarRequest>> listarOfertaNegocioGet(@ApiParam(value = "se recibe el id del negocio",required=true) @PathVariable("idnegocio") String idnegocio);
    
    @CrossOrigin(origins = "*")
    @ApiOperation(value = "buscar una oferta por la id de la oferta", nickname = "listarOfertaNegocioGet", notes = "", response = JsonApiBodyRequest.class, tags={ "ofertas", })
    @ApiResponses(value = { 
        @ApiResponse(code = 200, message = "oferta encontrada", response = JsonApiBodyRequest.class),
        @ApiResponse(code = 404, message = "datos imcompletos o incorrectos", response = JsonApiBodyResponseErrors.class) })
    @RequestMapping(value = "/listar/oferta/{id}",
        produces = { "application/json" }, 
        method = RequestMethod.GET)
    ResponseEntity<Iterable<RegistrarRequest>> listarOfertaIdGet(@ApiParam(value = "se recibe el id de la oferta ",required=true) @PathVariable("id") String id);
    
}
