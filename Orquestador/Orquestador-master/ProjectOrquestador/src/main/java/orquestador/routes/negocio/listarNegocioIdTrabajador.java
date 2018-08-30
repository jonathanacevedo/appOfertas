package orquestador.routes.negocio;

import org.apache.camel.Exchange;
import org.apache.camel.Processor;
import org.apache.camel.builder.RouteBuilder;
import org.apache.camel.model.dataformat.JsonLibrary;
import org.springframework.stereotype.Component;

import orquestador.model.JsonApiBodyRequestGetNegocio;
import orquestador.model.JsonApiBodyRequestNegocio;
import orquestador.model.JsonApiBodyResponseErrors;



@Component
public class listarNegocioIdTrabajador extends RouteBuilder {

	@Override
	public void configure() throws Exception {
		try {
			from("direct:listar-negocio-idtrabajador")
			.setHeader(Exchange.HTTP_METHOD, constant("POST"))
			.setHeader(Exchange.CONTENT_TYPE, constant("application/json"))
			.setHeader("Accept", constant("application/json"))
			.process(new Processor() {

				@Override
				public void process(Exchange exchange) throws Exception {
					JsonApiBodyRequestGetNegocio TheBody = (JsonApiBodyRequestGetNegocio) exchange.getIn().getBody();
					exchange.setProperty("id", TheBody.getNegocio().get(0).getTipoConsulta());
					exchange.setProperty("parametro", TheBody.getNegocio().get(0).getParametro());
					exchange.setProperty("token", TheBody.getNegocio().get(0).getToken());

				}
			})
			.to("freemarker:templates/listarNegocioIdTrabajador.ftl")		
			//.log("the body para enviar ${body}")
			.hystrix()
			.hystrixConfiguration().executionTimeoutInMilliseconds(2000).end()
			.to("http://localhost:8091/negocios/listar/idtrabajador")
			.convertBodyTo(String.class)
			.unmarshal().json(JsonLibrary.Jackson,JsonApiBodyRequestNegocio.class)
			.process(new Processor() {
				
				@Override
				public void process(Exchange exchange) throws Exception {
					JsonApiBodyRequestNegocio negocios= (JsonApiBodyRequestNegocio) exchange.getIn().getBody();
					System.out.println("este el el objeto ya parciado "+negocios.getNegocio().get(0));
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
			System.out.println("error obtener negocio"+e.getMessage());
		}
	}

}
