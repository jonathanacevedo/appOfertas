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
 * DeleteRequestNegocio
 */
@Validated
@javax.annotation.Generated(value = "io.swagger.codegen.languages.SpringCodegen", date = "2018-08-17T14:53:38.878-05:00")

public class DeleteRequestNegocio   {
  @JsonProperty("id")
  private String id = null;

  @JsonProperty("idadministrador")
  private String idadministrador = null;

  @JsonProperty("token")
  private String token = null;

  public DeleteRequestNegocio id(String id) {
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

  public DeleteRequestNegocio idadministrador(String idadministrador) {
    this.idadministrador = idadministrador;
    return this;
  }

  /**
   * Get idadministrador
   * @return idadministrador
  **/
  @ApiModelProperty(required = true, value = "")
  @NotNull


  public String getIdadministrador() {
    return idadministrador;
  }

  public void setIdadministrador(String idadministrador) {
    this.idadministrador = idadministrador;
  }

  public DeleteRequestNegocio token(String token) {
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
    DeleteRequestNegocio deleteRequestNegocio = (DeleteRequestNegocio) o;
    return Objects.equals(this.id, deleteRequestNegocio.id) &&
        Objects.equals(this.idadministrador, deleteRequestNegocio.idadministrador) &&
        Objects.equals(this.token, deleteRequestNegocio.token);
  }

  @Override
  public int hashCode() {
    return Objects.hash(id, idadministrador, token);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class DeleteRequestNegocio {\n");
    
    sb.append("    id: ").append(toIndentedString(id)).append("\n");
    sb.append("    idadministrador: ").append(toIndentedString(idadministrador)).append("\n");
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

