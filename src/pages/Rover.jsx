
import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Backpack, Heart, HandHeart, GraduationCap, Users, ArrowRight, CheckCircle, Target, Phone } from "lucide-react";

export default function Rover() {
  const activities = [
    {
      title: "Strada",
      description: "Uscite a piedi alla scoperta di sé e della natura",
      icon: "🎒"
    },
    {
      title: "Comunità",
      description: "Comunità fraterna di crescita e condivisione",
      icon: "🤝"
    },
    {
      title: "Servizio",
      description: "Impegno concreto verso i più bisognosi e le altre branche",
      icon: "❤️"
    },
    {
      title: "Vita di Fede",
      description: "Crescita spirituale e impegno cristiano presente in tutte le attività",
      icon: "🙏"
    }
  ];

  const values = [
    "Preparazione alla vita adulta responsabile",
    "Servizio disinteressato verso il prossimo",
    "Formazione cristiana matura e consapevole",
    "Costruzione di relazioni autentiche e durature"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-red-500 to-rose-600 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full"></div>
          <div className="absolute bottom-10 right-20 w-24 h-24 bg-white/10 rounded-full"></div>
        </div>
        
        <div className="relative max-w-6xl mx-auto px-4 text-center">
          <div className="text-6xl mb-6">
            <Backpack className="w-16 h-16 inline-block" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Rover
            <span className="block text-2xl font-normal mt-2 text-red-100">
              17 - 21 anni
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-red-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            "Servire" - La strada verso l'età adulta attraverso il servizio, 
            la formazione e la costruzione del proprio progetto di vita
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#2d5016] mb-6">
                La Strada verso l'Età Adulta
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Lungo la <strong>strada</strong> il Rover matura le sue scelte di vita per divenire un Uomo 
                nel significato completo e cristiano della parola. Con la cerimonia della <strong>Partenza</strong>, 
                coronamento della Promessa Scout e conclusione del cammino in Clan, il Rover 
                s’impegna a realizzare i più alti valori di vita e a svolgere un <strong>servizio</strong> continuativo 
                e disinteressato, coerente con la sua vita di fede.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Strada come metafora di vita ma anche come strada fisica, 
                si dice “il Roverismo entra dai piedi”. Nella <strong>Comunità</strong> di Clan 
                si mescolano i singoli pregi e difetti dei singoli al fine di crescere 
                assieme. Il Servizio inteso come scelta di vita porterà il Rover a diventare 
                uomo per gli altri. La <strong>Fede</strong> permea ogni momento della vita del Rover, sia esso Strada Comunità o Servizio
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center bg-blue-50 px-4 py-2 rounded-full">
                  <Target className="w-5 h-5 mr-2 text-blue-600" />
                  <span className="text-blue-800 font-medium">Progetto di Vita</span>
                </div>
                <div className="flex items-center bg-red-50 px-4 py-2 rounded-full">
                  <HandHeart className="w-5 h-5 mr-2 text-red-600" />
                  <span className="text-red-800 font-medium">Servizio</span>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <Card className="bg-gradient-to-br from-red-100 to-rose-100 rounded-2xl p-8">
                <div className="text-center">
                  <div className="text-8xl mb-4"><Backpack className="inline-block w-20 h-20" /></div>
                  <h3 className="text-2xl font-bold text-[#2d5016] mb-4">
                    I Nostri Incontri
                  </h3>
                  <div className="space-y-2 text-gray-700">
                    <p><strong>Quando:</strong> Ogni domenica</p>
                    <p><strong>Orario:</strong> 9:30 - 12:30</p>
                    <p><strong>Dove:</strong> Cattedrale di San Clemente</p>
                  </div>
                </div>
              </Card>
              <Card className="border-0 shadow-lg">
                    <CardContent className="p-6">
                      <div className="text-5xl mb-6 flex items-center justify-center">👤</div>
                        <h3 className="text-xl font-bold text-[#2d5016] mb-4 text-center">Capo Clan</h3>
                        <div className="flex items-center justify-center text-gray-700">
                            <div>
                                <p className="font-semibold">Simone Sabbatini</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
          </div>

          {/* Activities Grid */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-[#2d5016] text-center mb-12">
              Il metodo Rover
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

          {/* Route Section */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold text-[#2d5016] mb-8">
                Obiettivi e Formazione
              </h2>
              <div className="space-y-4">
                {values.map((value, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-6 h-6 mr-4 text-blue-500 flex-shrink-0" />
                    <span className="text-gray-700 text-lg">{value}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-[#2d5016] to-[#15803d] text-white rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">La Vita del Rover</h3>
              <div className="space-y-4 text-blue-100">
                <div className="flex items-center">
                  <Backpack className="w-6 h-6 mr-3 text-blue-300" />
                  <span>Cammini di più giorni in autonomia</span>
                </div>
                <div className="flex items-center">
                  <GraduationCap className="w-6 h-6 mr-3 text-blue-300" />
                  <span>Approfondimento culturale e spirituale</span>
                </div>
                <div className="flex items-center">
                  <Heart className="w-6 h-6 mr-3 text-blue-300" />
                  <span>Incontro con realtà sociali significative</span>
                </div>
              </div>
              <div className="mt-6 bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                <p className="text-center italic">
                  "La Srada non è solo un cammino fisico, ma soprattutto interiore"
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-[#2d5016] mb-6">
              Pronto a Servire?
            </h2>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Se hai tra i 17 e i 21 anni e vuoi crescere attraverso il servizio 
              e la costruzione del tuo progetto di vita, il Clan Rover ti aspetta!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to={createPageUrl("Contatti")}>
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 text-lg rounded-xl">
                  <Heart className="w-5 h-5 mr-2" />
                  Unisciti a Noi
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link to="/#branche">
                <Button variant="outline" size="lg" className="border-2 border-blue-600 text-blue-700 hover:bg-blue-50 px-8 py-4 text-lg rounded-xl">
                  <Backpack className="w-5 h-5 mr-2" />
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
