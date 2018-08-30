package io.swagger.model;

import java.util.Objects;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonCreator;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import io.swagger.model.DeleteRequest;
import java.util.ArrayList;
import java.util.List;
import org.springframework.validation.annotation.Validated;
import javax.validation.Valid;
import javax.validation.constraints.*;

/**
 * JsonApiBodyRequestDelete
 */
@Validated
@javax.annotation.Generated(value = "io.swagger.codegen.languages.SpringCodegen", date = "2018-08-15T14:28:12.248Z")

public class JsonApiBodyRequestDelete   {
  @JsonProperty("negocio")
  @Valid
  private List<DeleteRequest> negocio = new ArrayList<DeleteRequest>();

  public JsonApiBodyRequestDelete negocio(List<DeleteRequest> negocio) {
    this.negocio = negocio;
    return this;
  }

  public JsonApiBodyRequestDelete addNegocioItem(DeleteRequest negocioItem) {
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

  public List<DeleteRequest> getNegocio() {
    return negocio;
  }

  public void setNegocio(List<DeleteRequest> negocio) {
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
    JsonApiBodyRequestDelete jsonApiBodyRequestDelete = (JsonApiBodyRequestDelete) o;
    return Objects.equals(this.negocio, jsonApiBodyRequestDelete.negocio);
  }

  @Override
  public int hashCode() {
    return Objects.hash(negocio);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class JsonApiBodyRequestDelete {\n");
    
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

