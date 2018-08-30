package orquestador.model;

import java.util.Objects;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonCreator;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import orquestador.model.GetRequestNegocio;

import java.util.ArrayList;
import java.util.List;
import org.springframework.validation.annotation.Validated;
import javax.validation.Valid;
import javax.validation.constraints.*;

/**
 * JsonApiBodyRequestGetNegocio
 */
@Validated
@javax.annotation.Generated(value = "io.swagger.codegen.languages.SpringCodegen", date = "2018-08-17T14:53:38.878-05:00")

public class JsonApiBodyRequestGetNegocio   {
  @JsonProperty("negocio")
  @Valid
  private List<GetRequestNegocio> negocio = new ArrayList<GetRequestNegocio>();

  public JsonApiBodyRequestGetNegocio negocio(List<GetRequestNegocio> negocio) {
    this.negocio = negocio;
    return this;
  }

  public JsonApiBodyRequestGetNegocio addNegocioItem(GetRequestNegocio negocioItem) {
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

  public List<GetRequestNegocio> getNegocio() {
    return negocio;
  }

  public void setNegocio(List<GetRequestNegocio> negocio) {
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
    JsonApiBodyRequestGetNegocio jsonApiBodyRequestGetNegocio = (JsonApiBodyRequestGetNegocio) o;
    return Objects.equals(this.negocio, jsonApiBodyRequestGetNegocio.negocio);
  }

  @Override
  public int hashCode() {
    return Objects.hash(negocio);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class JsonApiBodyRequestGetNegocio {\n");
    
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

