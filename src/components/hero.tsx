import { ArrowRight, Download } from "lucide-react";
import { PROFILE_DATA } from "../constants";
const Hero = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center bg-slate-900 overflow-hidden pt-16"
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl opacity-50 animate-pulse"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-cyan-600/20 rounded-full blur-3xl opacity-50"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center md:text-left">
            <div className="inline-block px-4 py-2 rounded-full bg-slate-800 border border-slate-700 mb-6">
              <span className="text-indigo-400 font-medium tracking-wide text-sm">
                Xin chào, tôi là
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-slate-100 leading-tight mb-6">
              Nguyễn Kim Hoàng
            </h1>
            <h2 className="text-2xl md:text-3xl text-slate-400 font-light mb-8">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400 font-semibold">
                Web developer
              </span>
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto md:mx-0 mb-10 leading-relaxed">
              Tôi là một lập trình viên đam mê xây dựng các ứng dụng web đẹp mắt
              và hiệu suất cao.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href="#projects"
                className="group px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/30"
              >
                Xem Dự Án
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>
              <a className="px-8 py-3 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2">
                Tải CV
                <Download size={20} />
              </a>
            </div>
          </div>

          {/* Avatar Image */}
          <div className="flex-1 relative">
            <div className="relative w-72 h-72 md:w-96 md:h-96 mx-auto">
              {/* Spinning borders */}
              <div className="absolute inset-0 rounded-full border-2 border-indigo-500/30 animate-[spin_10s_linear_infinite]"></div>
              <div className="absolute inset-4 rounded-full border-2 border-cyan-500/30 animate-[spin_15s_linear_infinite_reverse]"></div>

              {/* Image */}
              <div className="absolute inset-8 rounded-full overflow-hidden shadow-2xl border-4 border-slate-800">
                <img
                  src={PROFILE_DATA.avatarUrl}
                  alt={"nguyenkimhoang"}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
