package orquestador.routes.negocio;

import org.apache.camel.Exchange;
import org.apache.camel.Processor;
import org.apache.camel.builder.RouteBuilder;
import org.apache.camel.model.dataformat.JsonLibrary;
import org.springframework.stereotype.Component;


import orquestador.model.JsonApiBodyRequestNegocio;
import orquestador.model.JsonApiBodyRequestPersona;
import orquestador.model.JsonApiBodyResponseSuccess;

@Component
public class registrarNegocio extends RouteBuilder {

	@Override
	public void configure() throws Exception {
		try {
			from("direct:registrar-negocio")
			.setHeader(Exchange.HTTP_METHOD,constant("POST"))
			.setHeader(Exchange.CONTENT_TYPE, constant("application/json"))
			.setHeader("Accept", constant("application/json"))
			.process(new Processor() {
				
				@Override
				public void process(Exchange exchange) throws Exception {
					JsonApiBodyRequestNegocio TheBody=(JsonApiBodyRequestNegocio) exchange.getIn().getBody();
					exchange.setProperty("nombre", TheBody.getNegocio().get(0).getNombre());
					exchange.setProperty("nit", TheBody.getNegocio().get(0).getNit());
					exchange.setProperty("foto", TheBody.getNegocio().get(0).getFoto());
					exchange.setProperty("detalle", TheBody.getNegocio().get(0).getDetalle());
					exchange.setProperty("tipo", TheBody.getNegocio().get(0).getTipo());
					exchange.setProperty("ubicacion", TheBody.getNegocio().get(0).getUbicacion());
					exchange.setProperty("id_administrador", TheBody.getNegocio().get(0).getIdAdministrador());
					exchange.setProperty("token", TheBody.getNegocio().get(0).getToken()	);
					
				}
			})
			.to("freemarker:templates/registrarNegocio.ftl")	
			.log("${body}")
			.hystrix()
			.hystrixConfiguration().executionTimeoutInMilliseconds(3000).end()
			.to("http4://localhost:8091/negocios/registrar")
			.convertBodyTo(String.class)
			.unmarshal().json(JsonLibrary.Jackson,JsonApiBodyResponseSuccess.class)
			.process(new Processor() {
				
				@Override
				public void process(Exchange exchange) throws Exception {
					JsonApiBodyResponseSuccess exito = (JsonApiBodyResponseSuccess) exchange.getIn().getBody();
					System.out.println(exito.toString());
				}
			})
			.endHystrix()
			.onFallback()
			.convertBodyTo(String.class)
//			.end().
			.process(new Processor() {
				
				@Override
				public void process(Exchange exchange) throws Exception {
					System.out.println(exchange.getIn().getHeader("statusCode"));
					
				}
			})
			;
		} catch (Exception e) {
			System.out.println("error al registrar negocio"+e.getMessage());
		}
		
	}
	
}
