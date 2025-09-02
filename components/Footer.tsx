// components/Footer.js
const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-600 py-6 mt-16">
      <div className="max-w-7xl mx-auto px-4 text-center text-sm">
        &copy; {new Date().getFullYear()} SkillExchange. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;