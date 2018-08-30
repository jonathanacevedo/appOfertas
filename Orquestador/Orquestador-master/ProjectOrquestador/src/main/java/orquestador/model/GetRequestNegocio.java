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
 * GetRequestNegocio
 */
@Validated
@javax.annotation.Generated(value = "io.swagger.codegen.languages.SpringCodegen", date = "2018-08-17T14:53:38.878-05:00")

public class GetRequestNegocio   {
  @JsonProperty("tipoConsulta")
  private String tipoConsulta = null;

  @JsonProperty("parametro")
  private String parametro = null;

  @JsonProperty("token")
  private String token = null;

  public GetRequestNegocio tipoConsulta(String tipoConsulta) {
    this.tipoConsulta = tipoConsulta;
    return this;
  }

  /**
   * Get tipoConsulta
   * @return tipoConsulta
  **/
  @ApiModelProperty(required = true, value = "")
  @NotNull


  public String getTipoConsulta() {
    return tipoConsulta;
  }

  public void setTipoConsulta(String tipoConsulta) {
    this.tipoConsulta = tipoConsulta;
  }

  public GetRequestNegocio parametro(String parametro) {
    this.parametro = parametro;
    return this;
  }

  /**
   * Get parametro
   * @return parametro
  **/
  @ApiModelProperty(required = true, value = "")
  @NotNull


  public String getParametro() {
    return parametro;
  }

  public void setParametro(String parametro) {
    this.parametro = parametro;
  }

  public GetRequestNegocio token(String token) {
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
    GetRequestNegocio getRequestNegocio = (GetRequestNegocio) o;
    return Objects.equals(this.tipoConsulta, getRequestNegocio.tipoConsulta) &&
        Objects.equals(this.parametro, getRequestNegocio.parametro) &&
        Objects.equals(this.token, getRequestNegocio.token);
  }

  @Override
  public int hashCode() {
    return Objects.hash(tipoConsulta, parametro, token);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class GetRequestNegocio {\n");
    
    sb.append("    tipoConsulta: ").append(toIndentedString(tipoConsulta)).append("\n");
    sb.append("    parametro: ").append(toIndentedString(parametro)).append("\n");
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

