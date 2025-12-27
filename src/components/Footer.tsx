import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white pt-20 border-t border-gray-100">
      <div className="container mx-auto px-4 md:px-6 mb-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2">
               <div className="bg-primary text-white p-2 rounded-full">
                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
               </div>
               <span className="text-2xl font-bold text-secondary">Medi<span className="text-primary">Web</span></span>
            </Link>
            <p className="text-gray-500 leading-relaxed">
              Dedicated to providing world-class healthcare for women. Compassionate, comprehensive, and comfortable.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white transition-colors">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg text-secondary mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {["About Us", "Our Doctors", "Services", "Blog", "Contact Us"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-gray-600 hover:text-primary transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg text-secondary mb-6">Our Services</h4>
            <ul className="space-y-3">
              {["Prenatal Care", "Infertility Treatment", "Ultrasound", "Family Planning", "Wellness Exams"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-gray-600 hover:text-primary transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg text-secondary mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-600">
                <MapPin className="text-primary shrink-0" size={20} />
                <span>123 Healthcare Avenue, Medical District, City, Country</span>
              </li>
              <li className="flex items-center gap-3 text-gray-600">
                <Phone className="text-primary shrink-0" size={20} />
                <span>+1 (234) 567-8900</span>
              </li>
              <li className="flex items-center gap-3 text-gray-600">
                <Mail className="text-primary shrink-0" size={20} />
                <span>contact@mediwebclinic.com</span>
              </li>
            </ul>
          </div>

        </div>
      </div>

      <div className="py-6 border-t border-gray-100 bg-gray-50 text-center text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} MediWeb Clinic. All rights reserved.</p>
      </div>
    </footer>
  );
}
