import { Send } from "lucide-react";
import type { Language } from "../../data/apps";
import { contactTarget, copy } from "../../data/apps";

type ContactSectionProps = {
  language: Language;
};

export function ContactSection({ language }: ContactSectionProps) {
  const t = copy[language];

  return (
    <section className="section contact reveal" id="contacto">
      <div className="contact__copy">
        <h2>{t.contactTitle}</h2>
        <p>{t.contactText}</p>
      </div>
      <form className="contact__form" action={contactTarget} method="post">
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_subject" value="Nuevo mensaje desde Raika Lab" />
        <label>
          {t.name}
          <input name="name" type="text" autoComplete="name" required />
        </label>
        <label>
          {t.email}
          <input name="email" type="email" autoComplete="email" required />
        </label>
        <label>
          {t.subject}
          <input name="subject" type="text" required />
        </label>
        <label>
          {t.message}
          <textarea name="message" rows={5} required />
        </label>
        <button type="submit">
          <Send size={18} aria-hidden="true" />
          {t.send}
        </button>
      </form>
    </section>
  );
}
