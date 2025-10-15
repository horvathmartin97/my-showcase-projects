import SocialLinks from "@/components/socialLinks";
import { Mail, MapPinHouse, PhoneCall } from "lucide-react";

export default function ContactPage() {
  return (
    <section className="min-h-screen bg-gray-100 py-16 rounded-4xl">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 space-y-12">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800">Kapcsolat</h2>
          <p className="text-red-500  ">
            <strong>
              Telepünk a lentebb megjelnített térképen látható a GPS sajnos
              rossz helyre visz. Bármilyen kérdésre szívesen válaszolunk
              telefonon vagy emailben! Keressen bizalommal.
            </strong>
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="bg-white shadow-lg rounded-xl p-8 space-y-6">
            <p className="flex gap-2">
              <PhoneCall /> Telefon: +3670/930-9668 || +3670/930-9669
            </p>
            <p className="flex gap-2">
              <MapPinHouse />
              Cím: 6500,Baja Keleti Körút 20.
            </p>
            <p className="flex gap-2">
              <Mail />
              veooliver@gmail.com
            </p>
            <SocialLinks />
          </div>

          <div className="w-full h-[400px] lg:h-[500px] overflow-hidden rounded-xl shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d501.4066943313951!2d18.976608915183306!3d46.177098787346566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2shu!4v1760534648539!5m2!1sen!2shu&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps beágyazás"
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
