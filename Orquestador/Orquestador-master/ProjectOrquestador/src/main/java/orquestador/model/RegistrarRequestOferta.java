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
 * RegistrarRequestOferta
 */
@Validated
@javax.annotation.Generated(value = "io.swagger.codegen.languages.SpringCodegen", date = "2018-08-17T14:53:38.878-05:00")

public class RegistrarRequestOferta   {
  @JsonProperty("id")
  private String id = null;

  @JsonProperty("producto")
  private String producto = null;

  @JsonProperty("detalle")
  private String detalle = null;

  @JsonProperty("valor")
  private String valor = null;

  @JsonProperty("descuento")
  private String descuento = null;

  @JsonProperty("foto")
  private String foto = null;

  @JsonProperty("idnegocio")
  private String idnegocio = null;

  @JsonProperty("fecha_inicio")
  private String fechaInicio = null;

  @JsonProperty("fecha_final")
  private String fechaFinal = null;

  public RegistrarRequestOferta id(String id) {
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

  public RegistrarRequestOferta producto(String producto) {
    this.producto = producto;
    return this;
  }

  /**
   * Get producto
   * @return producto
  **/
  @ApiModelProperty(required = true, value = "")
  @NotNull


  public String getProducto() {
    return producto;
  }

  public void setProducto(String producto) {
    this.producto = producto;
  }

  public RegistrarRequestOferta detalle(String detalle) {
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

  public RegistrarRequestOferta valor(String valor) {
    this.valor = valor;
    return this;
  }

  /**
   * Get valor
   * @return valor
  **/
  @ApiModelProperty(required = true, value = "")
  @NotNull


  public String getValor() {
    return valor;
  }

  public void setValor(String valor) {
    this.valor = valor;
  }

  public RegistrarRequestOferta descuento(String descuento) {
    this.descuento = descuento;
    return this;
  }

  /**
   * Get descuento
   * @return descuento
  **/
  @ApiModelProperty(required = true, value = "")
  @NotNull


  public String getDescuento() {
    return descuento;
  }

  public void setDescuento(String descuento) {
    this.descuento = descuento;
  }

  public RegistrarRequestOferta foto(String foto) {
    this.foto = foto;
    return this;
  }

  /**
   * Get foto
   * @return foto
  **/
  @ApiModelProperty(required = true, value = "")
  @NotNull


  public String getFoto() {
    return foto;
  }

  public void setFoto(String foto) {
    this.foto = foto;
  }

  public RegistrarRequestOferta idnegocio(String idnegocio) {
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

  public RegistrarRequestOferta fechaInicio(String fechaInicio) {
    this.fechaInicio = fechaInicio;
    return this;
  }

  /**
   * Get fechaInicio
   * @return fechaInicio
  **/
  @ApiModelProperty(required = true, value = "")
  @NotNull


  public String getFechaInicio() {
    return fechaInicio;
  }

  public void setFechaInicio(String fechaInicio) {
    this.fechaInicio = fechaInicio;
  }

  public RegistrarRequestOferta fechaFinal(String fechaFinal) {
    this.fechaFinal = fechaFinal;
    return this;
  }

  /**
   * Get fechaFinal
   * @return fechaFinal
  **/
  @ApiModelProperty(required = true, value = "")
  @NotNull


  public String getFechaFinal() {
    return fechaFinal;
  }

  public void setFechaFinal(String fechaFinal) {
    this.fechaFinal = fechaFinal;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    RegistrarRequestOferta registrarRequestOferta = (RegistrarRequestOferta) o;
    return Objects.equals(this.id, registrarRequestOferta.id) &&
        Objects.equals(this.producto, registrarRequestOferta.producto) &&
        Objects.equals(this.detalle, registrarRequestOferta.detalle) &&
        Objects.equals(this.valor, registrarRequestOferta.valor) &&
        Objects.equals(this.descuento, registrarRequestOferta.descuento) &&
        Objects.equals(this.foto, registrarRequestOferta.foto) &&
        Objects.equals(this.idnegocio, registrarRequestOferta.idnegocio) &&
        Objects.equals(this.fechaInicio, registrarRequestOferta.fechaInicio) &&
        Objects.equals(this.fechaFinal, registrarRequestOferta.fechaFinal);
  }

  @Override
  public int hashCode() {
    return Objects.hash(id, producto, detalle, valor, descuento, foto, idnegocio, fechaInicio, fechaFinal);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class RegistrarRequestOferta {\n");
    
    sb.append("    id: ").append(toIndentedString(id)).append("\n");
    sb.append("    producto: ").append(toIndentedString(producto)).append("\n");
    sb.append("    detalle: ").append(toIndentedString(detalle)).append("\n");
    sb.append("    valor: ").append(toIndentedString(valor)).append("\n");
    sb.append("    descuento: ").append(toIndentedString(descuento)).append("\n");
    sb.append("    foto: ").append(toIndentedString(foto)).append("\n");
    sb.append("    idnegocio: ").append(toIndentedString(idnegocio)).append("\n");
    sb.append("    fechaInicio: ").append(toIndentedString(fechaInicio)).append("\n");
    sb.append("    fechaFinal: ").append(toIndentedString(fechaFinal)).append("\n");
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

