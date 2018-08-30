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
 * LoginRequest
 */
@Validated
@javax.annotation.Generated(value = "io.swagger.codegen.languages.SpringCodegen", date = "2018-08-17T14:53:38.878-05:00")

public class LoginRequest   {
  @JsonProperty("correo")
  private String correo = null;

  @JsonProperty("contrasena")
  private String contrasena = null;

  public LoginRequest correo(String correo) {
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

  public LoginRequest contrasena(String contrasena) {
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


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    LoginRequest loginRequest = (LoginRequest) o;
    return Objects.equals(this.correo, loginRequest.correo) &&
        Objects.equals(this.contrasena, loginRequest.contrasena);
  }

  @Override
  public int hashCode() {
    return Objects.hash(correo, contrasena);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class LoginRequest {\n");
    
    sb.append("    correo: ").append(toIndentedString(correo)).append("\n");
    sb.append("    contrasena: ").append(toIndentedString(contrasena)).append("\n");
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

