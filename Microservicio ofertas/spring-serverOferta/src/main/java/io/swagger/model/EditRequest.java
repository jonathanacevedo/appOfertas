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
 * EditRequest
 */
@Validated
@javax.annotation.Generated(value = "io.swagger.codegen.languages.SpringCodegen", date = "2018-08-16T13:32:22.313Z")

public class EditRequest   {
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

  @JsonProperty("fecha_fin")
  private String fechaFin = null;

  @JsonProperty("parametro")
  private String parametro = null;
  
  @JsonProperty("tipo")
  private String tipo = null;

  public EditRequest id(String id) {
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

  public EditRequest producto(String producto) {
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

  public EditRequest detalle(String detalle) {
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

  public EditRequest valor(String valor) {
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

  public EditRequest descuento(String descuento) {
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

  public EditRequest foto(String foto) {
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

  public EditRequest idnegocio(String idnegocio) {
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

  public EditRequest fechaInicio(String fechaInicio) {
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

  public EditRequest fechaFin(String fechaFin) {
    this.fechaFin = fechaFin;
    return this;
  }

  /**
   * Get fechaFin
   * @return fechaFin
  **/
  @ApiModelProperty(required = true, value = "")
  @NotNull


  public String getFechaFin() {
    return fechaFin;
  }

  public void setFechaFin(String fechaFin) {
    this.fechaFin = fechaFin;
  }

  public EditRequest parametro(String parametro) {
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
  
  public EditRequest tipo(String tipo) {
	    this.tipo = tipo;
	    return this;
	  }

	  /**
	   * Get parametro
	   * @return parametro
	  **/
	  @ApiModelProperty(required = true, value = "")
	  @NotNull


	  public String getTipo() {
	    return tipo;
	  }

	  public void setTipo(String tipo) {
	    this.tipo = tipo;
	  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    EditRequest editRequest = (EditRequest) o;
    return Objects.equals(this.id, editRequest.id) &&
        Objects.equals(this.producto, editRequest.producto) &&
        Objects.equals(this.detalle, editRequest.detalle) &&
        Objects.equals(this.valor, editRequest.valor) &&
        Objects.equals(this.descuento, editRequest.descuento) &&
        Objects.equals(this.foto, editRequest.foto) &&
        Objects.equals(this.idnegocio, editRequest.idnegocio) &&
        Objects.equals(this.fechaInicio, editRequest.fechaInicio) &&
        Objects.equals(this.fechaFin, editRequest.fechaFin) &&
        Objects.equals(this.parametro, editRequest.parametro)&&
        Objects.equals(this.tipo, editRequest.tipo);
  }

  @Override
  public int hashCode() {
    return Objects.hash(id, producto, detalle, valor, descuento, foto, idnegocio, fechaInicio, fechaFin, parametro, tipo);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class EditRequest {\n");
    
    sb.append("    id: ").append(toIndentedString(id)).append("\n");
    sb.append("    producto: ").append(toIndentedString(producto)).append("\n");
    sb.append("    detalle: ").append(toIndentedString(detalle)).append("\n");
    sb.append("    valor: ").append(toIndentedString(valor)).append("\n");
    sb.append("    descuento: ").append(toIndentedString(descuento)).append("\n");
    sb.append("    foto: ").append(toIndentedString(foto)).append("\n");
    sb.append("    idnegocio: ").append(toIndentedString(idnegocio)).append("\n");
    sb.append("    fechaInicio: ").append(toIndentedString(fechaInicio)).append("\n");
    sb.append("    fechaFin: ").append(toIndentedString(fechaFin)).append("\n");
    sb.append("    parametro: ").append(toIndentedString(parametro)).append("\n");
    sb.append("    tipo: ").append(toIndentedString(tipo)).append("\n");
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

