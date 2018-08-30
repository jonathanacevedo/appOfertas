package orquestador.model;

import java.util.Objects;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonCreator;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import orquestador.model.LoginRequest;

import java.util.ArrayList;
import java.util.List;
import org.springframework.validation.annotation.Validated;
import javax.validation.Valid;
import javax.validation.constraints.*;

/**
 * JsonApiBodyLogin
 */
@Validated
@javax.annotation.Generated(value = "io.swagger.codegen.languages.SpringCodegen", date = "2018-08-17T14:53:38.878-05:00")

public class JsonApiBodyLogin   {
  @JsonProperty("persona")
  @Valid
  private List<LoginRequest> persona = new ArrayList<LoginRequest>();

  public JsonApiBodyLogin persona(List<LoginRequest> persona) {
    this.persona = persona;
    return this;
  }

  public JsonApiBodyLogin addPersonaItem(LoginRequest personaItem) {
    this.persona.add(personaItem);
    return this;
  }

  /**
   * Get persona
   * @return persona
  **/
  @ApiModelProperty(required = true, value = "")
  @NotNull

  @Valid

  public List<LoginRequest> getPersona() {
    return persona;
  }

  public void setPersona(List<LoginRequest> persona) {
    this.persona = persona;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    JsonApiBodyLogin jsonApiBodyLogin = (JsonApiBodyLogin) o;
    return Objects.equals(this.persona, jsonApiBodyLogin.persona);
  }

  @Override
  public int hashCode() {
    return Objects.hash(persona);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class JsonApiBodyLogin {\n");
    
    sb.append("    persona: ").append(toIndentedString(persona)).append("\n");
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

