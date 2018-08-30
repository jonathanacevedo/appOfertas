package orquestador.routes.persona;

import org.apache.camel.Exchange;
import org.apache.camel.Processor;
import org.apache.camel.builder.RouteBuilder;
import org.apache.camel.model.dataformat.JsonLibrary;
import org.springframework.stereotype.Component;

import orquestador.model.JsonApiBodyRequestGetNegocio;
import orquestador.model.JsonApiBodyRequestNegocio;
import orquestador.model.JsonApiBodyRequestPersona;
import orquestador.model.JsonApiBodyResponseErrors;

@Component
public class listarPersona extends RouteBuilder{

	@Override
	public void configure() throws Exception {
		try {
			from("direct:listar-personas")
			.setHeader(Exchange.HTTP_METHOD, constant("GET"))
			.setHeader(Exchange.CONTENT_TYPE, constant("application/json"))
			.setHeader("Accept", constant("application/json"))
			//.log("the body para enviar ${body}")
			.hystrix()
			.hystrixConfiguration().executionTimeoutInMilliseconds(2000).end()
			.to("http4://localhost:8090/personas/listar")
			.convertBodyTo(String.class)
			.unmarshal().json(JsonLibrary.Jackson,JsonApiBodyRequestPersona.class)
			.process(new Processor() {
				
				@Override
				public void process(Exchange exchange) throws Exception {
					JsonApiBodyRequestPersona negocios= (JsonApiBodyRequestPersona) exchange.getIn().getBody();
					System.out.println("este el el objeto ya parciado "+negocios.getPersona());
//					JsonApiBodyResponseErrors error =(JsonApiBodyResponseErrors) exchange.getIn().getBody();
//					System.out.println(error.toString());
				}
			})
			.endHystrix()
			.onFallback()
			.convertBodyTo(String.class)
			.unmarshal().json(JsonLibrary.Jackson,JsonApiBodyResponseErrors.class)
			.process(new Processor() {
				
				@Override
				public void process(Exchange exchange) throws Exception {
					JsonApiBodyResponseErrors error =(JsonApiBodyResponseErrors) exchange.getIn().getMandatoryBody();
					
					//System.out.println(exchange.getIn().getBody());
				}
			})
			//.log("The body de respuesta ${body}")
			;

		} catch (Exception e) {
			
		}
		
	}

}
