import { GraduationCap, Calendar } from "lucide-react";
import { PROFILE_DATA } from "../constants";

const Education = () => {
  return (
    <section id="education" className="py-24 bg-slate-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Học Vấn & Chứng Chỉ
          </h2>
          <div className="w-20 h-1 bg-indigo-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid gap-8">
          {PROFILE_DATA.education.map((edu, index) => (
            <div
              key={index}
              className="bg-slate-900 rounded-xl p-6 md:p-8 border border-slate-800 hover:border-indigo-500/50 transition-all duration-300 shadow-lg hover:shadow-indigo-500/10 flex flex-col md:flex-row gap-6 group"
            >
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-slate-800 flex items-center justify-center border border-slate-700 group-hover:bg-indigo-500/10 group-hover:border-indigo-500/50 transition-colors">
                  <GraduationCap
                    size={32}
                    className="text-slate-400 group-hover:text-indigo-400"
                  />
                </div>
              </div>

              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                  <h3 className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors">
                    {edu.school}
                  </h3>
                  <div className="flex items-center gap-2 text-sm font-medium text-slate-500 bg-slate-800/50 px-3 py-1 rounded-full mt-2 md:mt-0 w-fit">
                    <Calendar size={14} />
                    {edu.period}
                  </div>
                </div>

                <h4 className="text-lg font-medium text-cyan-400 mb-3">
                  {edu.degree}
                </h4>
                <p className="text-slate-400 leading-relaxed text-sm">
                  {edu.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
