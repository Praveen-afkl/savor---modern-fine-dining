import React from 'react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-neutral-950 pt-28 pb-12 border-t border-neutral-900">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-24">

          {/* Brand */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-serif font-bold text-white mb-8 tracking-[0.1em]">SAVOR</h2>
            <p className="text-neutral-500 leading-loose mb-8 max-w-sm mx-auto md:mx-0 font-light text-sm">
              An immersive dining experience where culinary artistry meets refined elegance.
              Reservations highly recommended.
            </p>
            <div className="flex justify-center md:justify-start space-x-8">
              {['Instagram', 'Twitter', 'Facebook'].map((social) => (
                <a key={social} href="#" className="text-neutral-600 hover:text-gold-400 transition-colors text-[10px] uppercase tracking-[0.2em]">
                  {social}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="text-center">
            <h3 className="text-white font-bold uppercase tracking-[0.25em] mb-8 text-[10px] text-gold-400">Contact Us</h3>
            <p className="text-neutral-400 mb-4 font-light tracking-wide text-sm">123 Culinary Avenue, New York, NY 10012</p>
            <p className="text-neutral-400 mb-4 font-light tracking-wide text-sm">+1 (212) 555-0199</p>
            <p className="text-gold-400 font-serif italic text-lg">reservations@savor.com</p>
          </div>

          {/* Hours */}
          <div className="text-center md:text-right">
            <h3 className="text-white font-bold uppercase tracking-[0.25em] mb-8 text-[10px] text-gold-400">Opening Hours</h3>
            <div className="space-y-4 text-neutral-500 font-light text-sm">
              <p><span className="text-neutral-300">Tue - Thu:</span> 5:00 PM - 10:00 PM</p>
              <p><span className="text-neutral-300">Fri - Sat:</span> 5:00 PM - 11:00 PM</p>
              <p><span className="text-neutral-300">Sun:</span> 4:00 PM - 9:00 PM</p>
              <p className="text-neutral-700 italic mt-6 text-xs">Closed Mondays</p>
            </div>
          </div>
        </div>

        <div className="border-t border-neutral-900 pt-8 flex flex-col md:flex-row justify-between items-center text-neutral-600 text-[10px] uppercase tracking-[0.2em]">
          <p>&copy; {new Date().getFullYear()} Savor Restaurant. All rights reserved.</p>
          <div className="flex space-x-10 mt-6 md:mt-0">
            <a href="#" className="hover:text-neutral-400 transition-colors">Privacy</a>
            <a href="#" className="hover:text-neutral-400 transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
