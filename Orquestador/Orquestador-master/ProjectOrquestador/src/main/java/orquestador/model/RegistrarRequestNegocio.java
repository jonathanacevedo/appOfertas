package orquestador.model;

import java.util.Objects;
import com.fasterxml.jackson.annotation.JsonProperty;

import com.fasterxml.jackson.annotation.JsonCreator;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import org.springframework.validation.annotation.Validated;
import javax.validation.Valid;
import javax.validation.constraints.*;

/**
 * RegistrarRequestNegocio
 */
@Validated
@javax.annotation.Generated(value = "io.swagger.codegen.languages.SpringCodegen", date = "2018-08-17T14:53:38.878-05:00")

public class RegistrarRequestNegocio   {
  @JsonProperty("id")
  private String id = null;

  @JsonProperty("nombre")
  private String nombre = null;

  @JsonProperty("nit")
  private String nit = null;

  @JsonProperty("foto")
  private String foto = null;
  
  @JsonProperty("detalle")
  private String detalle = null;

  @JsonProperty("tipo")
  private String tipo = null;

  @JsonProperty("ubicacion")
  private String ubicacion = null;

  @JsonProperty("id_administrador")
  private String idAdministrador = null;
  
  @JsonProperty("token")
  private String token = null;

  public RegistrarRequestNegocio id(String id) {
    this.id = id;
    return this;
  }

  /**
   * Get id
   * @return id
  **/
  @ApiModelProperty(required = true, value = "")
  @NotNull


  public String getId() {
    return id;
  }

  public void setId(String id) {
    this.id = id;
  }

  public RegistrarRequestNegocio nombre(String nombre) {
    this.nombre = nombre;
    return this;
  }

  /**
   * Get nombre
   * @return nombre
  **/
  @ApiModelProperty(required = true, value = "")
  @NotNull


  public String getNombre() {
    return nombre;
  }

  public void setNombre(String nombre) {
    this.nombre = nombre;
  }

  public RegistrarRequestNegocio nit(String nit) {
    this.nit = nit;
    return this;
  }

  /**
   * Get nit
   * @return nit
  **/
  @ApiModelProperty(required = true, value = "")
  @NotNull


  public String getNit() {
    return nit;
  }

  public void setNit(String nit) {
    this.nit = nit;
  }

  public RegistrarRequestNegocio foto(String foto) {
    this.foto = foto;
    return this;
  }

  /**
   * Get foto
   * @return foto
  **/
  @ApiModelProperty(required = true, value = "")
  @NotNull


  public String getFoto() {
    return foto;
  }

  public void setFoto(String foto) {
    this.foto = foto;
  }

  public RegistrarRequestNegocio tipo(String tipo) {
    this.tipo = tipo;
    return this;
  }
  public RegistrarRequestNegocio detalle(String detalle) {
	    this.detalle = detalle;
	    return this;
	  }
  
  /**
   * Get detalle
   * @return detalle
  **/
  @ApiModelProperty(required = true, value = "")
  @NotNull
  public String getDetalle() {
    return detalle;
  }

  public void setDetalle(String detalle) {
    this.detalle = detalle;
  }


  /**
   * Get tipo
   * @return tipo
  **/
  @ApiModelProperty(required = true, value = "")
  @NotNull


  public String getTipo() {
    return tipo;
  }

  public void setTipo(String tipo) {
    this.tipo = tipo;
  }

  public RegistrarRequestNegocio ubicacion(String ubicacion) {
    this.ubicacion = ubicacion;
    return this;
  }

  /**
   * Get ubicacion
   * @return ubicacion
  **/
  @ApiModelProperty(required = true, value = "")
  @NotNull


  public String getUbicacion() {
    return ubicacion;
  }

  public void setUbicacion(String ubicacion) {
    this.ubicacion = ubicacion;
  }

  public RegistrarRequestNegocio idAdministrador(String idAdministrador) {
    this.idAdministrador = idAdministrador;
    return this;
  }

  /**
   * Get idAdministrador
   * @return idAdministrador
  **/
  @ApiModelProperty(required = true, value = "")
  @NotNull


  public String getIdAdministrador() {
    return idAdministrador;
  }

  public void setIdAdministrador(String idAdministrador) {
    this.idAdministrador = idAdministrador;
  }
  public RegistrarRequestNegocio token(String token) {
	    this.token = token;
	    return this;
	  }
  
  /**
   * Get token
   * @return token
  **/
  @ApiModelProperty(required = true, value = "")
  @NotNull


  public String getToken() {
    return token;
  }

  public void setToken(String token) {
    this.token = token;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    RegistrarRequestNegocio registrarRequestNegocio = (RegistrarRequestNegocio) o;
    return Objects.equals(this.id, registrarRequestNegocio.id) &&
        Objects.equals(this.nombre, registrarRequestNegocio.nombre) &&
        Objects.equals(this.nit, registrarRequestNegocio.nit) &&
        Objects.equals(this.foto, registrarRequestNegocio.foto) &&
        Objects.equals(this.tipo, registrarRequestNegocio.tipo) &&
        Objects.equals(this.ubicacion, registrarRequestNegocio.ubicacion) &&
        Objects.equals(this.idAdministrador, registrarRequestNegocio.idAdministrador);
  }

  @Override
  public int hashCode() {
    return Objects.hash(id, nombre, nit, foto, tipo, ubicacion, idAdministrador);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class RegistrarRequestNegocio {\n");
    
    sb.append("    id: ").append(toIndentedString(id)).append("\n");
    sb.append("    nombre: ").append(toIndentedString(nombre)).append("\n");
    sb.append("    nit: ").append(toIndentedString(nit)).append("\n");
    sb.append("    foto: ").append(toIndentedString(foto)).append("\n");
    sb.append("    tipo: ").append(toIndentedString(tipo)).append("\n");
    sb.append("    ubicacion: ").append(toIndentedString(ubicacion)).append("\n");
    sb.append("    idAdministrador: ").append(toIndentedString(idAdministrador)).append("\n");
    sb.append("}");
    return sb.toString();
  }

  /**
   * Convert the given object to string with each line indented by 4 spaces
   * (except the first line).
   */
  private String toIndentedString(java.lang.Object o) {
    if (o == null) {
      return "null";
    }
    return o.toString().replace("\n", "\n    ");
  }
}

