package io.swagger.routes.persona;

import org.apache.camel.Exchange;
import org.apache.camel.Processor;
import org.apache.camel.builder.RouteBuilder;
import org.apache.camel.model.dataformat.JsonLibrary;
import org.springframework.stereotype.Component;

import io.swagger.model.JsonApiBodyRequestPersona;
import io.swagger.model.JsonApiBodyResponseErrorsPersona;
import io.swagger.model.RegistrarRequestPersona;

@Component
public class listarPersonas extends RouteBuilder {

	@Override
	public void configure() throws Exception {
		try {
			from("direct:listarPersonas")
			.setHeader(Exchange.HTTP_METHOD, constant("GET"))
			.setHeader(Exchange.CONTENT_TYPE, constant("application/json"))
			.setHeader("Accept", constant("application/json"))
			//.log("the body para enviar ${body}")
			.to("http4://ofertapp-persona.us-east-2.elasticbeanstalk.com/personas/listar")
			.convertBodyTo(String.class)
			.log("Respuesta en String: ${body}")
			.unmarshal().json(JsonLibrary.Jackson, JsonApiBodyRequestPersona.class)
			.process(new Processor() {
				@Override
				public void process(Exchange exchange) throws Exception {
					JsonApiBodyRequestPersona negocios= (JsonApiBodyRequestPersona) exchange.getIn().getBody();
//					JsonApiBodyResponseErrors error =(JsonApiBodyResponseErrors) exchange.getIn().getBody();
//					System.out.println(error.toString());
				}
			})
			.endHystrix()
			.onFallback()
			.convertBodyTo(String.class)
			.unmarshal().json(JsonLibrary.Jackson,JsonApiBodyResponseErrorsPersona.class)
			.process(new Processor() {
				
				@Override
				public void process(Exchange exchange) throws Exception {
					JsonApiBodyResponseErrorsPersona error =(JsonApiBodyResponseErrorsPersona) exchange.getIn().getMandatoryBody();
					//System.out.println(exchange.getIn().getBody());
				}
			});
			//.log("The body de respuesta ${body}")
			
		} catch (Exception e) {
			
		}

}
}
