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
 * RegistrarRequestPersona
 */
@Validated
@javax.annotation.Generated(value = "io.swagger.codegen.languages.SpringCodegen", date = "2018-08-17T14:53:38.878-05:00")

public class RegistrarRequestPersona   {
  @JsonProperty("id")
  private String id = null;

  @JsonProperty("nombre")
  private String nombre = null;

  @JsonProperty("apellidos")
  private String apellidos = null;

  @JsonProperty("correo")
  private String correo = null;

  @JsonProperty("contrasena")
  private String contrasena = null;

  @JsonProperty("telefono")
  private String telefono = null;

  @JsonProperty("genero")
  private String genero = null;

  @JsonProperty("rol")
  private String rol = null;

  @JsonProperty("estado")
  private String estado = null;

  @JsonProperty("token")
  private String token = null;

  public RegistrarRequestPersona id(String id) {
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

  public RegistrarRequestPersona nombre(String nombre) {
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

  public RegistrarRequestPersona apellidos(String apellidos) {
    this.apellidos = apellidos;
    return this;
  }

  /**
   * Get apellido
   * @return apellido
  **/
  @ApiModelProperty(required = true, value = "")
  @NotNull


  public String getApellidos() {
    return apellidos;
  }

  public void setApellidos(String apellidos) {
    this.apellidos = apellidos;
  }

  public RegistrarRequestPersona correo(String correo) {
    this.correo = correo;
    return this;
  }

  /**
   * Get correo
   * @return correo
  **/
  @ApiModelProperty(required = true, value = "")
  @NotNull


  public String getCorreo() {
    return correo;
  }

  public void setCorreo(String correo) {
    this.correo = correo;
  }

  public RegistrarRequestPersona contrasena(String contrasena) {
    this.contrasena = contrasena;
    return this;
  }

  /**
   * Get contrasena
   * @return contrasena
  **/
  @ApiModelProperty(required = true, value = "")
  @NotNull


  public String getContrasena() {
    return contrasena;
  }

  public void setContrasena(String contrasena) {
    this.contrasena = contrasena;
  }

  public RegistrarRequestPersona telefono(String telefono) {
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

  public RegistrarRequestPersona genero(String genero) {
    this.genero = genero;
    return this;
  }

  /**
   * Get genero
   * @return genero
  **/
  @ApiModelProperty(required = true, value = "")
  @NotNull


  public String getGenero() {
    return genero;
  }

  public void setGenero(String genero) {
    this.genero = genero;
  }

  public RegistrarRequestPersona rol(String rol) {
    this.rol = rol;
    return this;
  }

  /**
   * Get rol
   * @return rol
  **/
  @ApiModelProperty(required = true, value = "")
  @NotNull


  public String getRol() {
    return rol;
  }

  public void setRol(String rol) {
    this.rol = rol;
  }

  public RegistrarRequestPersona estado(String estado) {
    this.estado = estado;
    return this;
  }

  /**
   * Get estado
   * @return estado
  **/
  @ApiModelProperty(required = true, value = "")
  @NotNull


  public String getEstado() {
    return estado;
  }

  public void setEstado(String estado) {
    this.estado = estado;
  }

  public RegistrarRequestPersona token(String token) {
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
    RegistrarRequestPersona registrarRequestPersona = (RegistrarRequestPersona) o;
    return Objects.equals(this.id, registrarRequestPersona.id) &&
        Objects.equals(this.nombre, registrarRequestPersona.nombre) &&
        Objects.equals(this.apellidos, registrarRequestPersona.apellidos) &&
        Objects.equals(this.correo, registrarRequestPersona.correo) &&
        Objects.equals(this.contrasena, registrarRequestPersona.contrasena) &&
        Objects.equals(this.telefono, registrarRequestPersona.telefono) &&
        Objects.equals(this.genero, registrarRequestPersona.genero) &&
        Objects.equals(this.rol, registrarRequestPersona.rol) &&
        Objects.equals(this.estado, registrarRequestPersona.estado) &&
        Objects.equals(this.token, registrarRequestPersona.token);
  }

  @Override
  public int hashCode() {
    return Objects.hash(id, nombre, apellidos, correo, contrasena, telefono, genero, rol, estado, token);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class RegistrarRequestPersona {\n");
    
    sb.append("    id: ").append(toIndentedString(id)).append("\n");
    sb.append("    nombre: ").append(toIndentedString(nombre)).append("\n");
    sb.append("    apellido: ").append(toIndentedString(apellidos)).append("\n");
    sb.append("    correo: ").append(toIndentedString(correo)).append("\n");
    sb.append("    contrasena: ").append(toIndentedString(contrasena)).append("\n");
    sb.append("    telefono: ").append(toIndentedString(telefono)).append("\n");
    sb.append("    genero: ").append(toIndentedString(genero)).append("\n");
    sb.append("    rol: ").append(toIndentedString(rol)).append("\n");
    sb.append("    estado: ").append(toIndentedString(estado)).append("\n");
    sb.append("    token: ").append(toIndentedString(token)).append("\n");
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

