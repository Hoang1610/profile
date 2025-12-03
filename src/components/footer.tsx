const Footer = () => {
  return (
    <footer className="bg-slate-950 py-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-slate-500 text-sm">
          © {new Date().getFullYear()} Nguyễn Kim Hoàng. All rights reserved.
        </p>
        <p className="text-slate-600 text-xs flex items-center gap-1">
          Built with React, Tailwind & Gemini AI
        </p>
      </div>
    </footer>
  );
};

export default Footer;
