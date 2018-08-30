package io.swagger.model;

import java.util.Objects;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonCreator;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import io.swagger.model.EditarRequestNegocio;
import java.util.ArrayList;
import java.util.List;
import org.springframework.validation.annotation.Validated;
import javax.validation.Valid;
import javax.validation.constraints.*;

/**
 * JsonApiBodyEditNegocio
 */
@Validated
@javax.annotation.Generated(value = "io.swagger.codegen.languages.SpringCodegen", date = "2018-08-23T20:32:20.792Z")

public class JsonApiBodyEditNegocio   {
  @JsonProperty("negocio")
  @Valid
  private List<EditarRequestNegocio> negocio = new ArrayList<EditarRequestNegocio>();

  public JsonApiBodyEditNegocio negocio(List<EditarRequestNegocio> negocio) {
    this.negocio = negocio;
    return this;
  }

  public JsonApiBodyEditNegocio addNegocioItem(EditarRequestNegocio negocioItem) {
    this.negocio.add(negocioItem);
    return this;
  }

  /**
   * Get negocio
   * @return negocio
  **/
  @ApiModelProperty(required = true, value = "")
  @NotNull

  @Valid

  public List<EditarRequestNegocio> getNegocio() {
    return negocio;
  }

  public void setNegocio(List<EditarRequestNegocio> negocio) {
    this.negocio = negocio;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    JsonApiBodyEditNegocio jsonApiBodyEditNegocio = (JsonApiBodyEditNegocio) o;
    return Objects.equals(this.negocio, jsonApiBodyEditNegocio.negocio);
  }

  @Override
  public int hashCode() {
    return Objects.hash(negocio);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class JsonApiBodyEditNegocio {\n");
    
    sb.append("    negocio: ").append(toIndentedString(negocio)).append("\n");
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

