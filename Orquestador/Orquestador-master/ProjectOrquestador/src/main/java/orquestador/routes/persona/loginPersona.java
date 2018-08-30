package orquestador.routes.persona;

import org.apache.camel.Exchange;
import org.apache.camel.Processor;
import org.apache.camel.builder.RouteBuilder;
import org.apache.camel.model.dataformat.JsonLibrary;
import org.springframework.stereotype.Component;

import orquestador.model.JsonApiBodyLogin;
import orquestador.model.JsonApiBodyRequestPersona;
import orquestador.model.JsonApiBodyResponseSuccess;

@Component
public class loginPersona extends RouteBuilder {

	@Override
	public void configure() throws Exception {
		try {
			from("direct:login-persona")
					.setHeader(Exchange.HTTP_METHOD, constant("POST"))
					.setHeader(Exchange.CONTENT_TYPE, constant("application/json"))
					.setHeader("Accept", constant("application/json")).process(new Processor() {

						@Override
						public void process(Exchange exchange) throws Exception {
							JsonApiBodyLogin TheBody = (JsonApiBodyLogin) exchange.getIn().getBody();
							exchange.setProperty("correo", TheBody.getPersona().get(0).getCorreo());
							exchange.setProperty("contrasena", TheBody.getPersona().get(0).getContrasena());
						}
					})
					.to("freemarker:templates/login.ftl")
					.log("${body}")
					.hystrix()
					.hystrixConfiguration()
					.executionTimeoutInMilliseconds(3000)
					.end()
					.to("http4://localhost:8090/personas/getLogin")
					.convertBodyTo(String.class)
					.unmarshal().json(JsonLibrary.Jackson, JsonApiBodyRequestPersona.class)
					.process(new Processor() {

						@Override
						public void process(Exchange exchange) throws Exception {
							JsonApiBodyRequestPersona exito = (JsonApiBodyRequestPersona) exchange.getIn().getBody();
							System.out.println(exito.toString());
						}
					}).endHystrix().onFallback()
					.convertBodyTo(String.class)
					.process(new Processor() {

						@Override
						public void process(Exchange exchange) throws Exception {
							System.out.println(exchange.getIn().getMessageId());

						}
					});
		} catch (Exception e) {
			System.out.println("error en login "+e.getMessage());
		}
	}

}
