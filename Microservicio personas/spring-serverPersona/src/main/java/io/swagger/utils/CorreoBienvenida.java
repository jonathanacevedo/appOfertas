package io.swagger.utils;

import java.util.Properties;

import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.AddressException;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;

public class CorreoBienvenida {
	public void EnviarCorreo (String Destinatario) {
		Properties propiedad = new Properties();
		
		propiedad.setProperty("mail.smtp.host", "smtp.gmail.com");
        propiedad.setProperty("mail.smtp.starttls.enable", "true");
        propiedad.setProperty("mail.smtp.port", "587");
        propiedad.setProperty("mail.smtp.auth", "true");
        
        Session sesion = Session.getDefaultInstance(propiedad);
        
        String correoEnvia = "ofertappteam@gmail.com";
        String contrasena = "ofertaapp";
        String destinatario = Destinatario;
        String asunto = "Bienvenido a OfertApp " ;
     
      
        MimeMessage mail = new MimeMessage(sesion);
        
        try {
			mail.setFrom(new InternetAddress (correoEnvia));
			mail.addRecipient(Message.RecipientType.TO, new InternetAddress(destinatario));
			mail.setSubject(asunto);
			//mail.setText(mensaje);

		 mail.setContent
         ("<div style=\"width: 50%; margin: 0 auto; text-align: center; background-color: #751836; padding-top: 20px; border-radius: 5px 40px;\">"  
        		+ "<h1 style=\"color: #FFFFFF;  font-family: fantasy; letter-spacing: 1px; text-shadow: 1px 1px black;\"> "+"Bienvenido a OfertApp"+"</h1>" 
        		 + "<img style=\"width: 40%; height: 40%;\"  src=\"https://firebasestorage.googleapis.com/v0/b/appofertas-cdb19.appspot.com/o/logoOfertApp.png?alt=media&token=d13703fe-6a40-4033-b4a5-637b1f9f2de0\">"
        		 +"<div style=\"padding: 40px; width: 70%; margin: 0 auto; font-size: 1.2rem; font-family: Arial, Helvetica, sans-serif; color: #FFFFFF; \">"
        		 		+ "<p>" + "En nuestra aplicación encontraras diferentes contenidos de todo tipo que de seguro te van a encantar"
        		 				+"<strong style=\"color: #FFFFFF; font-weight: bold; \">" + " ofertas"+ "</strong>"  + "</p>"
        		 		+ "<p>" + "Ingresa lo antes posible con tu usuario y contraseñay disfruta de todo lo que tenemos para ofrecerte." + "</p>"
        		 + "</div>"
        + "</div>", 
          "text/html");
		 
//		 mail.setContent
//         ("<h1>This is a test</h1>" 
//          + "<img style=\"width: 40%; height: 40%;\" src=\"https://firebasestorage.googleapis.com/v0/b/appofertas-cdb19.appspot.com/o/logoOfertApp.png?alt=media&token=d13703fe-6a40-4033-b4a5-637b1f9f2de0\">", 
//          "text/html");
		
			Transport transporte = sesion.getTransport("smtp");
			transporte.connect(correoEnvia,contrasena);
			transporte.sendMessage(mail,mail.getRecipients(Message.RecipientType.TO));
			transporte.close();
			
			System.out.println("correo de bienvenida enviado");
		} catch (AddressException e) {
			
			e.printStackTrace();
		} catch (MessagingException e) {

			e.printStackTrace();
		}
	}
}
