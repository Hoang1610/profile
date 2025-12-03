import { Code2, Server, Database, Layout } from "lucide-react";
import { PROFILE_DATA } from "../constants";

const About = () => {
  const getIcon = (category: string) => {
    if (category.includes("Core"))
      return <Code2 className="text-indigo-400" size={32} />;
    if (category.includes("Frontend"))
      return <Layout className="text-cyan-400" size={32} />;
    if (category.includes("Backend"))
      return <Server className="text-purple-400" size={32} />;
    return <Database className="text-slate-400" size={32} />;
  };

  return (
    <section id="skills" className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Kỹ Năng Chuyên Môn
          </h2>
          <div className="w-20 h-1 bg-indigo-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PROFILE_DATA.skills.map((skillGroup, index) => (
            <div
              key={index}
              className="bg-slate-800/50 rounded-xl p-8 border border-slate-700 hover:border-indigo-500/50 transition-all duration-300 hover:bg-slate-800 group"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-slate-900 rounded-lg group-hover:scale-110 transition-transform duration-300">
                  {getIcon(skillGroup.category)}
                </div>
                <h3 className="text-xl font-bold text-white">
                  {skillGroup.category}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((item, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-slate-700/50 text-slate-300 rounded-full text-sm font-medium border border-slate-600 hover:border-indigo-500 hover:text-indigo-300 transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
