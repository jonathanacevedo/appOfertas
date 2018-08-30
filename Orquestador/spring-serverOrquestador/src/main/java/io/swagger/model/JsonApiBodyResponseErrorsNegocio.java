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
 * JsonApiBodyResponseErrorsNegocio
 */
@Validated
@javax.annotation.Generated(value = "io.swagger.codegen.languages.SpringCodegen", date = "2018-08-23T20:32:20.792Z")

public class JsonApiBodyResponseErrorsNegocio   {
  @JsonProperty("codigo")
  private String codigo = null;

  @JsonProperty("detalle")
  private String detalle = null;

  public JsonApiBodyResponseErrorsNegocio codigo(String codigo) {
    this.codigo = codigo;
    return this;
  }

  /**
   * Get codigo
   * @return codigo
  **/
  @ApiModelProperty(required = true, value = "")
  @NotNull


  public String getCodigo() {
    return codigo;
  }

  public void setCodigo(String codigo) {
    this.codigo = codigo;
  }

  public JsonApiBodyResponseErrorsNegocio detalle(String detalle) {
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
    JsonApiBodyResponseErrorsNegocio jsonApiBodyResponseErrorsNegocio = (JsonApiBodyResponseErrorsNegocio) o;
    return Objects.equals(this.codigo, jsonApiBodyResponseErrorsNegocio.codigo) &&
        Objects.equals(this.detalle, jsonApiBodyResponseErrorsNegocio.detalle);
  }

  @Override
  public int hashCode() {
    return Objects.hash(codigo, detalle);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class JsonApiBodyResponseErrorsNegocio {\n");
    
    sb.append("    codigo: ").append(toIndentedString(codigo)).append("\n");
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

