package io.swagger.routes.persona;

import org.apache.camel.Exchange;
import org.apache.camel.Processor;
import org.apache.camel.builder.RouteBuilder;
import org.apache.camel.model.dataformat.JsonLibrary;
import org.springframework.stereotype.Component;

import io.swagger.model.JsonApiBodyRequestPersona;
import io.swagger.model.JsonApiBodyResponseSuccessPersona;

@Component
public class registrarPersona extends RouteBuilder {

	@Override
	public void configure() throws Exception {
		try {
			from("direct:registrarPersona")
			.setHeader(Exchange.HTTP_METHOD,constant("POST"))
			.setHeader(Exchange.CONTENT_TYPE, constant("application/json"))
			.setHeader("Accept", constant("application/json"))
			.process(new Processor() {
				
				@Override
				public void process(Exchange exchange) throws Exception {
					
					JsonApiBodyRequestPersona body = (JsonApiBodyRequestPersona) exchange.getIn().getBody();
					exchange.setProperty("nombre", body.getPersona().get(0).getNombre());
					exchange.setProperty("apellidos", body.getPersona().get(0).getApellidos());
					exchange.setProperty("correo", body.getPersona().get(0).getCorreo());
					exchange.setProperty("contrasena", body.getPersona().get(0).getContrasena());
					exchange.setProperty("telefono", body.getPersona().get(0).getTelefono());
					exchange.setProperty("genero", body.getPersona().get(0).getGenero());
					exchange.setProperty("rol", body.getPersona().get(0).getRol());
					exchange.setProperty("estado", body.getPersona().get(0).getEstado());
					exchange.setProperty("token", body.getPersona().get(0).getToken());
				}
			})
			.to("freemarker:templates/registrarPersonaPlantilla.ftl")		
			.hystrix()
			.hystrixConfiguration().executionTimeoutInMilliseconds(3000).end()
			.to("http4://localhost:8090/personas/registrar")
			.convertBodyTo(String.class)
			.unmarshal().json(JsonLibrary.Jackson,JsonApiBodyResponseSuccessPersona.class)
			.process(new Processor() {
				
				@Override
				public void process(Exchange exchange) throws Exception {
					JsonApiBodyResponseSuccessPersona exito = (JsonApiBodyResponseSuccessPersona) exchange.getIn().getBody();
					//System.out.println(exito.toString());
				}
			})
			.endHystrix()
			.onFallback()
			.convertBodyTo(String.class)
			.end()
			.process(new Processor() {	
				@Override
				public void process(Exchange exchange) throws Exception {
					System.out.println(exchange.getIn().getHeader("statusCode"));
				}
			});
		} catch (Exception e) {
			// TODO: handle exception
		}
	}
}

