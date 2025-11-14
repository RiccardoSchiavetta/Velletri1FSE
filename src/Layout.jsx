import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Mail, Package, Home, Users, PawPrint, MapPin, Phone, Circle, Menu, ChevronDown, Bug, Tent, Compass, Backpack, Flame, Trees } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

export default function Layout({ children, currentPageName }) {
  const location = useLocation();

  useEffect(() => {
    // Scroll to top on page change, except for hash links on the same page
    if (!location.hash) {
      window.scrollTo(0, 0);
    }
  }, [location.pathname, location.hash]);

  const branchItems = [
    { title: "Lupetti", url: createPageUrl("Lupetti"), icon: PawPrint },
    { title: "Coccinelle", url: createPageUrl("Coccinelle"), icon: Bug },
    { title: "Esploratori", url: createPageUrl("Esploratori"), icon: Tent },
    { title: "Guide", url: createPageUrl("Guide"), icon: Compass },
    { title: "Rover", url: createPageUrl("Rover"), icon: Backpack },
    { title: "Scolte", url: createPageUrl("Scolte"), icon: Flame },
  ];

  const mainNavItems = [
    { title: "Magazzino", url: createPageUrl("Magazzino"), icon: Package },
    { title: "Contatti", url: createPageUrl("Contatti"), icon: Mail }
  ];
  
  const allNavItems = [ ...mainNavItems, ...branchItems ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-50 to-stone-100">
      <style>
        {`
          :root {
            --scout-green: #2d5016;
            --scout-beige: #d4b896;
            --scout-blue: #1e3a8a;
            --scout-light-green: #4ade80;
            --scout-dark-green: #15803d;
          }
        `}
      </style>
      
      <header className="bg-white shadow-lg sticky top-0 z-50 border-b-4 border-[#2d5016]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            <Link to="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">  {/* Changed to "/" */}
              <div className="w-12 h-12 flex items-center justify-center">
                 <img src="/src/img/FseIcon.ico" alt="Logo FSE Velletri 1" className="w-10 h-10 object-contain" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-[#2d5016]">FSE - Velletri 1</h1>
                <p className="text-sm text-gray-600">Scouts d'Europa</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-2">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="flex items-center px-4 py-2 rounded-xl transition-all duration-300 font-medium text-gray-700 hover:bg-stone-100 data-[state=open]:bg-stone-100">
                    <Users className="w-4 h-4 mr-2" />
                    Branche
                    <ChevronDown className="w-4 h-4 ml-1" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  {branchItems.map((item) => (
                    <DropdownMenuItem key={item.title} asChild>
                      <Link to={item.url} className="flex items-center">
                        <item.icon className="w-4 h-4 mr-2" />
                        {item.title}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              {mainNavItems.map((item) => (
                <Link
                  key={item.title}
                  to={item.url}
                  className={`flex items-center px-4 py-2 rounded-xl transition-all duration-300 font-medium ${
                    location.pathname === item.url
                      ? 'bg-[#2d5016] text-white shadow-md'
                      : 'text-gray-700 hover:bg-stone-100'
                  }`}
                >
                  <item.icon className="w-4 h-4 mr-2" />
                  {item.title}
                </Link>
              ))}
            </nav>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="w-6 h-6 text-[#2d5016]" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <p className="px-2 py-1.5 text-sm font-semibold text-gray-500">Branche</p>
                  {branchItems.map((item) => (
                    <DropdownMenuItem key={item.title} asChild>
                      <Link to={item.url} className="flex items-center">
                        <item.icon className="w-4 h-4 mr-2" />
                        {item.title}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                  <DropdownMenuSeparator />
                   {mainNavItems.map(item => (
                     <DropdownMenuItem key={item.title} asChild>
                       <Link to={item.url} className="flex items-center">
                         <item.icon className="w-4 h-4 mr-2" />
                         {item.title}
                       </Link>
                     </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-[#2d5016] text-white">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <MapPin className="w-5 h-5 mr-2" />
                Contatti
              </h3>
              <div className="space-y-3 text-[#d4b896]">
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2 text-[#4ade80]" />
                  <a href="https://maps.app.goo.gl/DgBQB22ssFTFob2t9" target="_blank" rel="noopener noreferrer" className="block text-[#d4b896] hover:text-white transition-colors">
                  Cattedrale di San Clemente, Velletri (RM)
                </a>
                </div>
                <div className="flex items-center">
                  <Phone className="w-4 h-4 mr-2 text-[#4ade80]" />
                  <a href="tel: 069632239"> 069632239</a>
                </div>
                <div className="flex items-center">
                  <Mail className="w-4 h-4 mr-2 text-[#4ade80]" />
                  <a href="mailto:velletri1fse@gmail.com">velletri1fse@gmail.com</a>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Link Utili</h3>
              <div className="space-y-2">
                <Link to={createPageUrl("ChiSiamo")} className="block text-[#d4b896] hover:text-white transition-colors">
                  Chi Siamo
                </Link>
                <Link to={createPageUrl("Contatti")} className="block text-[#d4b896] hover:text-white transition-colors">
                  Come Iscriversi
                </Link>
                <Link to={createPageUrl("Magazzino")} className="block text-[#d4b896] hover:text-white transition-colors">
                  Acquista l'uniforme
                </Link>
                <a href="https://www.fse.it" target="_blank" rel="noopener noreferrer" className="block text-[#d4b896] hover:text-white transition-colors">
                  FSE Italia
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">La Nostra Missione</h3>
              <p className="text-[#d4b896] leading-relaxed">
                Educare i giovani attraverso i valori scout, sviluppando carattere, cittadinanza e forma fisica per costruire un mondo migliore.
              </p>
            </div>
          </div>

          <div className="border-t border-[#4ade80] mt-12 pt-8 text-center">
            <p className="text-[#d4b896]">
              © {new Date().getFullYear()} FSE - Gruppo Velletri 1. Tutti i diritti riservati.
            </p>
            <p className="text-sm text-[#4ade80] mt-2">
              &quot;Lasciare il mondo un po' migliore di come lo abbiamo trovato&quot; - Baden Powell
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}