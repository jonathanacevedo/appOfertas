package io.swagger.model;

import java.util.Objects;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonCreator;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import io.swagger.model.EditRequest;
import java.util.ArrayList;
import java.util.List;
import org.springframework.validation.annotation.Validated;
import javax.validation.Valid;
import javax.validation.constraints.*;

/**
 * JsonApiBodyRequestEdit
 */
@Validated
@javax.annotation.Generated(value = "io.swagger.codegen.languages.SpringCodegen", date = "2018-08-16T13:32:22.313Z")

public class JsonApiBodyRequestEdit   {
  @JsonProperty("oferta")
  @Valid
  private List<EditRequest> oferta = new ArrayList<EditRequest>();

  public JsonApiBodyRequestEdit oferta(List<EditRequest> oferta) {
    this.oferta = oferta;
    return this;
  }

  public JsonApiBodyRequestEdit addOfertaItem(EditRequest ofertaItem) {
    this.oferta.add(ofertaItem);
    return this;
  }

  /**
   * Get oferta
   * @return oferta
  **/
  @ApiModelProperty(required = true, value = "")
  @NotNull

  @Valid

  public List<EditRequest> getOferta() {
    return oferta;
  }

  public void setOferta(List<EditRequest> oferta) {
    this.oferta = oferta;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    JsonApiBodyRequestEdit jsonApiBodyRequestEdit = (JsonApiBodyRequestEdit) o;
    return Objects.equals(this.oferta, jsonApiBodyRequestEdit.oferta);
  }

  @Override
  public int hashCode() {
    return Objects.hash(oferta);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class JsonApiBodyRequestEdit {\n");
    
    sb.append("    oferta: ").append(toIndentedString(oferta)).append("\n");
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

