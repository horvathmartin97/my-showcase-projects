import SocialLinks from "@/components/socialLinks";

export default function ContactPage() {
  return (
    <div>
      <SocialLinks />
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d690.6698303533237!2d18.97718549724503!3d46.17703889260469!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2shu!4v1759766140958!5m2!1sen!2shu"
        width="600"
        height="450"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Maps beágyazás"
      ></iframe>
    </div>
  );
}
