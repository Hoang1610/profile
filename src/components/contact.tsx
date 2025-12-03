import { Mail, MapPin, Phone, Github, ExternalLink } from "lucide-react";
import { PROFILE_DATA } from "../constants";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-b from-slate-900 to-slate-950"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Liên Hệ
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Tôi luôn sẵn sàng cho các cơ hội hợp tác mới. Hãy liên hệ với tôi
            qua email hoặc số điện thoại bên dưới.
          </p>
          <div className="w-20 h-1 bg-indigo-500 mx-auto rounded-full mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Email */}
          <a
            href={`mailto:${PROFILE_DATA.email}`}
            className="flex flex-col items-center justify-center p-8 bg-slate-800/50 border border-slate-700 rounded-2xl hover:bg-slate-800 hover:border-indigo-500 hover:-translate-y-1 transition-all duration-300 group"
          >
            <div className="w-16 h-16 bg-slate-900 rounded-full flex items-center justify-center mb-6 group-hover:bg-indigo-500/20 group-hover:scale-110 transition-all duration-300">
              <Mail size={32} className="text-indigo-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Email</h3>
            <p className="text-slate-400 text-center group-hover:text-indigo-300 transition-colors">
              {PROFILE_DATA.email}
            </p>
          </a>

          {/* Phone */}
          <a
            href={`tel:${PROFILE_DATA.phone.replace(/\D/g, "")}`}
            className="flex flex-col items-center justify-center p-8 bg-slate-800/50 border border-slate-700 rounded-2xl hover:bg-slate-800 hover:border-cyan-500 hover:-translate-y-1 transition-all duration-300 group"
          >
            <div className="w-16 h-16 bg-slate-900 rounded-full flex items-center justify-center mb-6 group-hover:bg-cyan-500/20 group-hover:scale-110 transition-all duration-300">
              <Phone size={32} className="text-cyan-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Điện Thoại</h3>
            <p className="text-slate-400 text-center group-hover:text-cyan-300 transition-colors">
              {PROFILE_DATA.phone}
            </p>
          </a>

          {/* Location */}
          <div className="flex flex-col items-center justify-center p-8 bg-slate-800/50 border border-slate-700 rounded-2xl hover:bg-slate-800 hover:border-purple-500 hover:-translate-y-1 transition-all duration-300 group cursor-default">
            <div className="w-16 h-16 bg-slate-900 rounded-full flex items-center justify-center mb-6 group-hover:bg-purple-500/20 group-hover:scale-110 transition-all duration-300">
              <MapPin size={32} className="text-purple-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Địa Điểm</h3>
            <p className="text-slate-400 text-center group-hover:text-purple-300 transition-colors">
              {PROFILE_DATA.location}
            </p>
          </div>
        </div>

        {/* Social Links */}
        <div className="mt-16 flex justify-center gap-6">
          <a
            href={PROFILE_DATA.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-slate-800 text-white rounded-lg border border-slate-700 hover:bg-slate-700 hover:border-white transition-all duration-300"
          >
            <Github size={20} />
            <span>GitHub</span>
            <ExternalLink size={14} className="opacity-50" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
