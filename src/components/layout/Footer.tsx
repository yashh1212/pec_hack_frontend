import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FooterSection title="EnviroEarn">
            <p className="text-gray-400">
              Empowering environmental change through blockchain technology.
            </p>
          </FooterSection>
          
          <FooterSection title="Quick Links">
            <FooterLink href="#about">About Us</FooterLink>
            <FooterLink href="#how-it-works">How It Works</FooterLink>
            <FooterLink href="#contact">Contact</FooterLink>
          </FooterSection>
          
          <FooterSection title="Connect With Us">
            <FooterLink href="#twitter">Twitter</FooterLink>
            <FooterLink href="#discord">Discord</FooterLink>
            <FooterLink href="#medium">Medium</FooterLink>
          </FooterSection>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} EnviroEarn. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

const FooterSection: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div>
    <h4 className="font-semibold mb-4">{title}</h4>
    {children}
  </div>
);

const FooterLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <div>
    <a href={href} className="text-gray-400 hover:text-green-400 transition-colors">
      {children}
    </a>
  </div>
);

export default Footer;