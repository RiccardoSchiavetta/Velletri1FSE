
import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Zap, Mountain, Compass, Tent, Users, ArrowRight, CheckCircle, Heart, Phone } from "lucide-react";

export default function Guide() {
  const activities = [
    {
      title: "Vita all'Aria Aperta",
      description: "Campeggi, escursioni e vita nella natura",
      icon: "⛺"
    },
    {
      title: "Tecniche Scout",
      description: "Nodi, costruzioni, topografia e orientamento",
      icon: "🧭"
    },
    {
      title: "Gioco di Squadriglia",
      description: "Lavoro di squadra e leadership condivisa",
      icon: "👥"
    },
    {
      title: "Espressione e Creatività",
      description: "Sviluppo dei talenti personali e di gruppo",
      icon: "🎨"
    }
  ];

  const skills = [
    "Autonomia e capacità di problem-solving",
    "Leadership e spirito di servizio",
    "Sviluppo delle abilità pratiche e manuali",
    "Consapevolezza di sé e delle proprie capacità",
    "Formazione cristiana e crescita personale"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-400 to-green-600 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full"></div>
          <div className="absolute bottom-10 right-20 w-24 h-24 bg-white/10 rounded-full"></div>
        </div>
        
        <div className="relative max-w-6xl mx-auto px-4 text-center">
          <div className="text-6xl mb-6">⚜️</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Branca Guide
            <span className="block text-2xl font-normal mt-2 text-green-100">
              12 - 16 anni
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-green-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            "Estote Paratae" - Sii Preparata! Il sentiero dell'avventura per diventare 
            donne responsabili e protagoniste del domani.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#2d5016] mb-6">
                Il Sentiero dell'Avventura
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Le <strong>Guide</strong> affrontano l'avventura della crescita attraverso il sistema delle 
                <strong>Squadriglie</strong>. Ogni ragazza impara a conoscere i propri talenti e a metterli 
                al servizio del gruppo, sviluppando un forte senso di responsabilità e spirito di squadra.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                La vita all'aria aperta, i campeggi e le tecniche scout sono gli strumenti 
                privilegiati per formare il carattere, acquisire autonomia e scoprire la bellezza 
                del creato e della fraternità.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center bg-emerald-50 px-4 py-2 rounded-full">
                  <Zap className="w-5 h-5 mr-2 text-emerald-600" />
                  <span className="text-emerald-800 font-medium">Spirito di Squadriglia</span>
                </div>
                <div className="flex items-center bg-cyan-50 px-4 py-2 rounded-full">
                  <Compass className="w-5 h-5 mr-2 text-cyan-600" />
                  <span className="text-cyan-800 font-medium">Avventura e Scoperta</span>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <Card className="bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl p-8">
                <div className="text-center">
                  <div className="text-8xl mb-4"><Compass className="inline-block w-20 h-20" /></div>
                  <h3 className="text-2xl font-bold text-[#2d5016] mb-4">
                    Le Nostre Riunioni
                  </h3>
                  <div className="space-y-2 text-gray-700">
                    <p><strong>Quando:</strong> Ogni domenica</p>
                    <p><strong>Orario:</strong> 9:30 - 12:30</p>
                    <p><strong>Dove:</strong> Sede San Clemente e Natura</p>
                  </div>
                </div>
              </Card>
              <Card className="border-0 shadow-lg">
                    <CardContent className="p-6">
                        <h3 className="text-xl font-bold text-[#2d5016] mb-4 text-center">Contatti Capi Unità</h3>
                        <div className="flex items-center justify-center text-gray-700">
                            <Phone className="w-5 h-5 mr-3 text-emerald-600" />
                            <div>
                                <p className="font-semibold">Capo Riparto: +39 338 1212123</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
          </div>

          {/* Activities Grid */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-[#2d5016] text-center mb-12">
              Le Nostre Attività
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {activities.map((activity, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 border-0 shadow-md">
                  <CardContent className="p-6">
                    <div className="text-4xl mb-4">{activity.icon}</div>
                    <h3 className="text-lg font-bold text-[#2d5016] mb-3">
                      {activity.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {activity.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          {/* Skills Section */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div className="bg-gradient-to-br from-[#2d5016] to-[#15803d] text-white rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">Il Sistema delle Squadriglie</h3>
              <div className="space-y-4 text-emerald-100">
                <div className="flex items-center">
                  <Users className="w-6 h-6 mr-3 text-emerald-300" />
                  <span>Piccoli gruppi di 6-8 ragazze</span>
                </div>
                <div className="flex items-center">
                  <Mountain className="w-6 h-6 mr-3 text-emerald-300" />
                  <span>Ogni squadriglia ha la sua capo squadriglia</span>
                </div>
                <div className="flex items-center">
                  <Tent className="w-6 h-6 mr-3 text-emerald-300" />
                  <span>Autonomia nelle attività e specialità</span>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-[#2d5016] mb-8">
                Competenze e Crescita
              </h2>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-6 h-6 mr-4 text-emerald-500 flex-shrink-0" />
                    <span className="text-gray-700 text-lg">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-[#2d5016] mb-6">
              Pronta a metterti in gioco?
            </h2>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Se tua figlia ha tra i 12 e i 16 anni e vuole vivere un'avventura 
              che la farà crescere, la Branca Guide è il posto giusto per lei!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to={createPageUrl("Contatti")}>
                <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-8 py-4 text-lg rounded-xl">
                  <Heart className="w-5 h-5 mr-2" />
                  Iscrivi tua Figlia
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link to={createPageUrl("Home#branche")}>
                <Button variant="outline" size="lg" className="border-2 border-emerald-600 text-emerald-700 hover:bg-emerald-50 px-8 py-4 text-lg rounded-xl">
                  <Users className="w-5 h-5 mr-2" />
                  Scopri le Altre Branche
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
