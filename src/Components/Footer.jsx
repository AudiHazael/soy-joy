import React from "react";

function Footer() {
  return (
    <section className="bg-zinc-950 text-zinc-50 p-4">
      <div className="max-w-7xl mx-auto pt-4">
        <div className="flex flex-col lg:flex-row lg:justify-between gap-8">
          {/* Logo column */}
          <div className="lg:w-1/3">
            <a href="/" className="inline-block mb-2">
              <img src="/Logo.png" alt="Logo" className="h-10 object-contain" />
            </a>
            <p>
              Experience the rich, creamy taste of health and{" "}
              <br className="hidden md:block" /> happiness in every sip.
            </p>
          </div>

          {/* Links */}
          <div className="lg:w-1/3 flex flex-col sm:flex-row gap-8">
            <ul className="flex flex-col gap-2">
              <li>
                <a href="/" className="hover:text-orange-300">
                  Home
                </a>
              </li>
              <li>
                <a href="/Faq" className="hover:text-orange-300">
                  FAQs
                </a>
              </li>
              <li>
                <a href="/gallery" className="hover:text-orange-300">
                  Gallery
                </a>
              </li>
              <li>
                <a href="/Career" className="hover:text-orange-300">
                  Careers
                </a>
              </li>
              <li>
                <a href="/shop2" className="hover:text-orange-300">
                  Shop
                </a>
              </li>
            </ul>
            <ul className="flex flex-col gap-2">
              <li>
                <a href="/#" className="hover:text-orange-300">
                  Amazon Store
                </a>
              </li>
              <li>
                <a href="/#" className="hover:text-orange-300">
                  Jumia Store
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:w-1/3">
            <p className="mb-2">
              Plot 15, Jesus Avenue, Simawa, Lukosi,{" "}
              <br className="hidden md:block" /> Sagamu, Ogun State
            </p>
            <p className="mb-2">+234 703 940 4909</p>
            <p>hazaeldevs@gmail.com</p>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-8 text-sm border-t border-zinc-800 pt-4">
          <p className="mb-0">
            © 2025 SoyJoy | Designed by{" "}
            <a
              href="https://wa.link/8k0f7s"
              target="_blank"
              rel="nofollow noopener"
              className="text-orange-600 font-medium hover:underline"
            >
              Hazael Audi
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Footer;
