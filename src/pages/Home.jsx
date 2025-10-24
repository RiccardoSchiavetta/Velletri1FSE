import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Trees, Heart, Star, Users, ArrowRight, CheckCircle, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.substring(1);
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 0);
    }
  }, []);

  const branches = [
    {
      name: "Lupetti",
      age: "8-11 anni",
      color: "from-yellow-400 to-orange-500",
      icon: "🐺"
    },
    {
      name: "Esploratori", 
      age: "12-16 anni",
      color: "from-green-400 to-green-600",
      icon: "🏕️"
    },
    {
      name: "Rover",
      age: "17-21 anni", 
      color: "from-red-500 to-rose-600",
      icon: "🎒"
    },
    {
      name: "Coccinelle",
      age: "8-11 anni",
      color: "from-yellow-400 to-orange-500",
      icon: "🐞"
    },
    {
      name: "Guide", 
      age: "12-16 anni",
      color: "from-green-400 to-green-600",
      icon: "🧭"
    },
    {
      name: "Scolte",
      age: "17-21 anni", 
      color: "from-red-500 to-rose-600",
      icon: "🔥"
    }
  ];

  const values = [
    {
      title: "Tradizione",
      description: "Fedeli al metodo educativo di Baden-Powell e ai valori cristiani"
    },
    {
      title: "Natura",
      description: "La vita all'aria aperta come scuola di vita e crescita personale"
    },
    {
      title: "Servizio",
      description: "Impegno verso la comunità e i più bisognosi"
    },
    {
      title: "Fraternità",
      description: "Spirito di gruppo e amicizia vera tra i ragazzi"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#2d5016] via-[#15803d] to-[#166534] text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/5 rounded-full"></div>
          <div className="absolute bottom-10 right-20 w-24 h-24 bg-white/5 rounded-full"></div>
          <div className="absolute top-1/2 right-10 w-16 h-16 bg-white/5 rounded-full"></div>
        </div>
        
        <div className="relative max-w-6xl mx-auto px-4 text-center">
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 rounded-full mb-6 backdrop-blur-sm">
              <img src="/src/img/FseIcon.ico" alt="Logo FSE Velletri 1" className="w-12 h-12 object-contain" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              FSE - Velletri 1
              <span className="block text-2xl md:text-3xl text-[#4ade80] font-normal mt-2">
                Scouts d'Europa
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-stone-200 mb-8 leading-relaxed max-w-3xl mx-auto">
              Un'avventura educativa per crescere insieme, fondata sui valori autentici dello scautismo cattolico.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to={createPageUrl("Contatti")}>
              <Button size="lg" className="bg-[#4ade80] hover:bg-[#22c55e] text-[#2d5016] font-semibold px-8 py-4 text-lg rounded-xl shadow-lg">
                <Heart className="w-5 h-5 mr-2" />
                Iscrivi tuo figlio
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* FSE Method Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 lg:h-auto lg:aspect-square rounded-2xl overflow-hidden shadow-2xl group">
                <img src="/src/img/FotoGruppo.jpg" alt="Gruppo Scout FSE Velletri 1" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>
            <div>
                <div className="flex items-center gap-3 mb-4">
                    <BookOpen className="w-8 h-8 text-[#2d5016]" />
                    <h2 className="text-3xl md:text-4xl font-bold text-[#2d5016]">
                      Il Metodo FSE
                    </h2>
                </div>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Il nostro metodo si basa sull'educazione integrale della persona attraverso cinque aree di crescita: <strong>salute e forza fisica, abilità manuale, formazione del carattere, servizio del prossimo e vita di fede.</strong>
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Questi pilastri, ereditati dal fondatore <strong>Baden-Powell</strong>, guidano i nostri ragazzi in un percorso di educazione con l'obiettivo di renderli dei buoni cittadini e buoni cristiani.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Branches Section */}
      <section id="branche" className="py-20 bg-gradient-to-b from-stone-50 to-stone-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2d5016] mb-4">
              Le Nostre Branche
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Avventura, amicizia, esperienze uniche e profonde… Questo è ciò che proponiamo a ogni ragazzo e ragazza per renderli protagonisti del proprio percorso di crescita personale.
Scopri tutte le Branche FSE e unisciti a noi nel viaggio più straordinario della tua vita!
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {branches.map((branch) => (
              <Link key={branch.name} to={createPageUrl(branch.name)}>
                <Card className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 overflow-hidden">
                  <div className={`h-2 bg-gradient-to-r ${branch.color}`}></div>
                  <CardContent className="p-8 text-center">
                    <div className="text-6xl mb-4">{branch.icon}</div>
                    <h3 className="text-2xl font-bold text-[#2d5016] mb-2">
                      {branch.name}
                    </h3>
                    <div className={`font-semibold mb-4 text-lg bg-clip-text text-transparent bg-gradient-to-r ${branch.color}`}>
                      {branch.age}
                    </div>
                    <div className="flex items-center justify-center text-[#2d5016] group-hover:text-emerald-500 transition-colors">
                      <span className="font-medium">Scopri di più</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-b from-stone-50 to-stone-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2d5016] mb-4">
              I Nostri Valori
            </h2>
            <p className="text-xl text-gray-600">
              Principi che guidano la nostra azione educativa ogni giorno
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={value.title} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#2d5016] to-[#4ade80] rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#2d5016] mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#2d5016] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pronto per l'Avventura?
          </h2>
          <p className="text-xl text-stone-200 mb-8 leading-relaxed">
            Unisciti alla nostra famiglia scout e aiuta tuo figlio a crescere 
            con valori solidi e esperienze indimenticabili
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to={createPageUrl("Contatti")}>
              <Button size="lg" className="bg-[#4ade80] hover:bg-[#22c55e] text-[#2d5016] font-semibold px-8 py-4 text-lg rounded-xl">
                <Heart className="w-5 h-5 mr-2" />
                Richiedi Informazioni
              </Button>
            </Link>
            <Link to={createPageUrl("Magazzino")}>
              <Button variant="outline" size="lg" className="border-[#4ade80] text-[#4ade80] hover:bg-[#4ade80] hover:text-[#2d5016] px-8 py-4 text-lg rounded-xl">
                <Users className="w-5 h-5 mr-2" />
                Visita il Magazzino
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}