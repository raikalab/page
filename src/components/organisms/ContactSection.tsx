import { Mail, Send } from "lucide-react";
import { supportEmail } from "../../data/apps";

export function ContactSection() {
  return (
    <section className="section contact" id="contacto">
      <div className="contact__copy">
        <span>Contacto</span>
        <h2>Soporte, dudas o colaboraciones</h2>
        <p>
          Para cualquier duda relacionada con Raika Lab, soporte de apps o una nueva idea,
          escribenos a traves del formulario.
        </p>
        <a href={`mailto:${supportEmail}`}>
          <Mail size={18} aria-hidden="true" />
          {supportEmail}
        </a>
      </div>
      <form className="contact__form" action={`mailto:${supportEmail}`} method="post">
        <label>
          Nombre
          <input name="name" type="text" autoComplete="name" placeholder="Tu nombre" required />
        </label>
        <label>
          Email
          <input name="email" type="email" autoComplete="email" placeholder="tu@email.com" required />
        </label>
        <label>
          Asunto
          <input name="subject" type="text" placeholder="Soporte, colaboracion o duda" required />
        </label>
        <label>
          Mensaje
          <textarea name="message" placeholder="Cuentanos como podemos ayudarte" rows={5} required />
        </label>
        <button type="submit">
          <Send size={18} aria-hidden="true" />
          Enviar mensaje
        </button>
      </form>
    </section>
  );
}
