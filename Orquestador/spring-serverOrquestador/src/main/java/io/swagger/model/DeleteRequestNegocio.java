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
 * DeleteRequestNegocio
 */
@Validated
@javax.annotation.Generated(value = "io.swagger.codegen.languages.SpringCodegen", date = "2018-08-23T20:32:20.792Z")

public class DeleteRequestNegocio   {
  @JsonProperty("idnegocio")
  private String idnegocio = null;

  @JsonProperty("parametro")
  private String parametro = null;

  public DeleteRequestNegocio idnegocio(String idnegocio) {
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

  public DeleteRequestNegocio parametro(String parametro) {
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


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    DeleteRequestNegocio deleteRequestNegocio = (DeleteRequestNegocio) o;
    return Objects.equals(this.idnegocio, deleteRequestNegocio.idnegocio) &&
        Objects.equals(this.parametro, deleteRequestNegocio.parametro);
  }

  @Override
  public int hashCode() {
    return Objects.hash(idnegocio, parametro);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class DeleteRequestNegocio {\n");
    
    sb.append("    idnegocio: ").append(toIndentedString(idnegocio)).append("\n");
    sb.append("    parametro: ").append(toIndentedString(parametro)).append("\n");
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

