package orquestador.routes.negocio;

import org.apache.camel.Exchange;
import org.apache.camel.Processor;
import org.apache.camel.builder.RouteBuilder;
import org.apache.camel.model.dataformat.JsonLibrary;
import org.springframework.stereotype.Component;

import orquestador.model.JsonApiBodyLogin;
import orquestador.model.JsonApiBodyRequestDeleteNegocio;
import orquestador.model.JsonApiBodyRequestDeletePersona;
import orquestador.model.JsonApiBodyRequestGetNegocio;
import orquestador.model.JsonApiBodyRequestNegocio;
import orquestador.model.JsonApiBodyRequestPersona;
import orquestador.model.JsonApiBodyResponseErrors;
import orquestador.model.JsonApiBodyResponseSuccess;

@Component
public class eliminarNegocio extends RouteBuilder{

	@Override
	public void configure() throws Exception {
		try {
			from("direct:eliminar-negocio")
			.setHeader(Exchange.HTTP_METHOD, constant("POST"))
			.setHeader(Exchange.CONTENT_TYPE, constant("application/json"))
			.setHeader("Accept", constant("application/json"))
			.process(new Processor() {

				@Override
				public void process(Exchange exchange) throws Exception {
					JsonApiBodyRequestDeleteNegocio body = (JsonApiBodyRequestDeleteNegocio) exchange.getIn().getBody();
					exchange.setProperty("id", body.getNegocio().get(0).getId());
					exchange.setProperty("parametro", body.getNegocio().get(0).getIdadministrador());
					exchange.setProperty("token", body.getNegocio().get(0).getToken());
				}
			})
			.to("freemarker:templates/eliminarNegocio.ftl")
			.log("${body}")
			.hystrix()
			.hystrixConfiguration()
			.executionTimeoutInMilliseconds(3000)
			.end()
			.to("http4://localhost:8091/negocios/eliminar")
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
			
		}

		
	}

}
