package orquestador.routes.persona;

import org.apache.camel.Exchange;
import org.apache.camel.Processor;
import org.apache.camel.builder.RouteBuilder;
import org.apache.camel.model.dataformat.JsonLibrary;
import org.springframework.stereotype.Component;

import orquestador.model.JsonApiBodyRequestDeletePersona;
import orquestador.model.JsonApiBodyRequestPersona;
import orquestador.model.JsonApiBodyResponseSuccess;

@Component
public class eliminarPersona extends RouteBuilder{

	@Override
	public void configure() throws Exception {
		try {
			from("direct:eliminar-persona")
			.setHeader(Exchange.HTTP_METHOD, constant("POST"))
			.setHeader(Exchange.CONTENT_TYPE, constant("application/json"))
			.setHeader("Accept", constant("application/json"))
			.process(new Processor() {

				@Override
				public void process(Exchange exchange) throws Exception {
					JsonApiBodyRequestDeletePersona body = (JsonApiBodyRequestDeletePersona) exchange.getIn().getBody();
					exchange.setProperty("id", body.getPersona().get(0).getId());
					exchange.setProperty("token", body.getPersona().get(0).getToken());
					
				}
			})
			.to("freemarker:templates/eliminarPersona.ftl")
			.log("${body}")
			.hystrix()
			.hystrixConfiguration()
			.executionTimeoutInMilliseconds(3000)
			.end()
			.to("http://localhost:8090/personas/eliminar")
			.convertBodyTo(String.class)
			.unmarshal().json(JsonLibrary.Jackson, JsonApiBodyResponseSuccess.class)
			.process(new Processor() {

				@Override
				public void process(Exchange exchange) throws Exception {
					JsonApiBodyResponseSuccess exito = (JsonApiBodyResponseSuccess) exchange.getIn().getBody();
					//System.out.println(exito.toString());
				}
			}).endHystrix().onFallback()
			.convertBodyTo(String.class)
			.end()
			.process(new Processor() {

				@Override
				public void process(Exchange exchange) throws Exception {
					System.out.println(exchange.getIn().getMessageId());

				}
			});
		} catch (Exception e) {
			System.out.println("error"+e.getMessage());
		}
	}

}
