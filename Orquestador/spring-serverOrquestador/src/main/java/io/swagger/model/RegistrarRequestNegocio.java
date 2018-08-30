package io.swagger.model;

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
@javax.annotation.Generated(value = "io.swagger.codegen.languages.SpringCodegen", date = "2018-08-23T20:32:20.792Z")

public class RegistrarRequestNegocio   {
  @JsonProperty("nit")
  private String nit = null;

  @JsonProperty("nombre")
  private String nombre = null;

  @JsonProperty("email")
  private String email = null;

  @JsonProperty("idnegocio")
  private String idnegocio = null;

  @JsonProperty("idadmin")
  private String idadmin = null;

  @JsonProperty("ciudad")
  private String ciudad = null;

  @JsonProperty("telefono")
  private String telefono = null;

  @JsonProperty("tipo")
  private String tipo = null;

  @JsonProperty("direccion")
  private String direccion = null;

  @JsonProperty("foto")
  private String foto = null;

  @JsonProperty("detalle")
  private String detalle = null;

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

  public RegistrarRequestNegocio email(String email) {
    this.email = email;
    return this;
  }

  /**
   * Get email
   * @return email
  **/
  @ApiModelProperty(required = true, value = "")
  @NotNull


  public String getEmail() {
    return email;
  }

  public void setEmail(String email) {
    this.email = email;
  }

  public RegistrarRequestNegocio idnegocio(String idnegocio) {
    this.idnegocio = idnegocio;
    return this;
  }

  /**
   * Get idnegocio
   * @return idnegocio
  **/
  @ApiModelProperty(required = true, value = "")
  @NotNull


  public String getIdnegocio() {
    return idnegocio;
  }

  public void setIdnegocio(String idnegocio) {
    this.idnegocio = idnegocio;
  }

  public RegistrarRequestNegocio idadmin(String idadmin) {
    this.idadmin = idadmin;
    return this;
  }

  /**
   * Get idadmin
   * @return idadmin
  **/
  @ApiModelProperty(required = true, value = "")
  @NotNull


  public String getIdadmin() {
    return idadmin;
  }

  public void setIdadmin(String idadmin) {
    this.idadmin = idadmin;
  }

  public RegistrarRequestNegocio ciudad(String ciudad) {
    this.ciudad = ciudad;
    return this;
  }

  /**
   * Get ciudad
   * @return ciudad
  **/
  @ApiModelProperty(required = true, value = "")
  @NotNull


  public String getCiudad() {
    return ciudad;
  }

  public void setCiudad(String ciudad) {
    this.ciudad = ciudad;
  }

  public RegistrarRequestNegocio telefono(String telefono) {
    this.telefono = telefono;
    return this;
  }

  /**
   * Get telefono
   * @return telefono
  **/
  @ApiModelProperty(required = true, value = "")
  @NotNull


  public String getTelefono() {
    return telefono;
  }

  public void setTelefono(String telefono) {
    this.telefono = telefono;
  }

  public RegistrarRequestNegocio tipo(String tipo) {
    this.tipo = tipo;
    return this;
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

  public RegistrarRequestNegocio direccion(String direccion) {
    this.direccion = direccion;
    return this;
  }

  /**
   * Get direccion
   * @return direccion
  **/
  @ApiModelProperty(required = true, value = "")
  @NotNull


  public String getDireccion() {
    return direccion;
  }

  public void setDireccion(String direccion) {
    this.direccion = direccion;
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


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    RegistrarRequestNegocio registrarRequestNegocio = (RegistrarRequestNegocio) o;
    return Objects.equals(this.nit, registrarRequestNegocio.nit) &&
        Objects.equals(this.nombre, registrarRequestNegocio.nombre) &&
        Objects.equals(this.email, registrarRequestNegocio.email) &&
        Objects.equals(this.idnegocio, registrarRequestNegocio.idnegocio) &&
        Objects.equals(this.idadmin, registrarRequestNegocio.idadmin) &&
        Objects.equals(this.ciudad, registrarRequestNegocio.ciudad) &&
        Objects.equals(this.telefono, registrarRequestNegocio.telefono) &&
        Objects.equals(this.tipo, registrarRequestNegocio.tipo) &&
        Objects.equals(this.direccion, registrarRequestNegocio.direccion) &&
        Objects.equals(this.foto, registrarRequestNegocio.foto) &&
        Objects.equals(this.detalle, registrarRequestNegocio.detalle);
  }

  @Override
  public int hashCode() {
    return Objects.hash(nit, nombre, email, idnegocio, idadmin, ciudad, telefono, tipo, direccion, foto, detalle);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class RegistrarRequestNegocio {\n");
    
    sb.append("    nit: ").append(toIndentedString(nit)).append("\n");
    sb.append("    nombre: ").append(toIndentedString(nombre)).append("\n");
    sb.append("    email: ").append(toIndentedString(email)).append("\n");
    sb.append("    idnegocio: ").append(toIndentedString(idnegocio)).append("\n");
    sb.append("    idadmin: ").append(toIndentedString(idadmin)).append("\n");
    sb.append("    ciudad: ").append(toIndentedString(ciudad)).append("\n");
    sb.append("    telefono: ").append(toIndentedString(telefono)).append("\n");
    sb.append("    tipo: ").append(toIndentedString(tipo)).append("\n");
    sb.append("    direccion: ").append(toIndentedString(direccion)).append("\n");
    sb.append("    foto: ").append(toIndentedString(foto)).append("\n");
    sb.append("    detalle: ").append(toIndentedString(detalle)).append("\n");
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

