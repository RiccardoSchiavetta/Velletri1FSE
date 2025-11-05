
import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Flame, Heart, HandHeart, GraduationCap, Users, ArrowRight, CheckCircle, Route, Phone } from "lucide-react";

export default function Scolte() {
  const activities = [
    {
      title: "Route e Cammini",
      description: "Esperienze di cammino e riflessione in autonomia",
      icon: "🚶‍♀️"
    },
    {
      title: "Servizio",
      description: "Impegno volontario in progetti sociali e nelle altre branche",
      icon: "❤️"
    },
    {
      title: "Formazione Personale",
      description: "Percorsi di crescita su temi culturali e spirituali",
      icon: "📖"
    },
    {
      title: "Vita di Fuoco",
      description: "Comunità di amicizia, confronto e sostegno reciproco",
      icon: "🔥"
    }
  ];

  const values = [
    "Costruzione del proprio progetto di vita",
    "Servizio come stile di vita",
    "Scelte consapevoli e responsabili",
    "Approfondimento della fede e della spiritualità",
    "Sviluppo di una forte identità femminile e cristiana"
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
          <div className="text-6xl mb-6">🔥</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Scolte
            <span className="block text-2xl font-normal mt-2 text-red-100">
              17 - 21 anni
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-red-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            "Servire" - Il Fuoco come comunità di donne in cammino, 
            pronte a fare scelte coraggiose per il futuro.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#2d5016] mb-6">
                Donne in Cammino
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Il cammino della Scolta offre alla ragazza un’opportunità di approfondimento della vita spirituale, 
                sociale, culturale e fisica. Tutte le tecniche imparate e le doti acquisite sono unificate nell’equilibrio 
                della persona attraverso i quattro 
                punti nei quali si articola il programma delle Scolte: <strong>comunità, strada, servizio, fede.</strong>
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Il fine è formare una donna di carattere, capace di costruire attorno a sé rapporti di 
                ollaborazione e rispetto. Fare strada, adattarsi a piccoli spazi, essere pronta: 
                dimostrano alla ragazza che può affrontare ogni sfida a fronte alta e far suoi 
                gli insegnamenti della vita all’aperto, 
                come la semplicità, l’ottimismo, la serenità e la generosità. 
                Tutte qualità che caratterizzano la Scolta.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center bg-rose-50 px-4 py-2 rounded-full">
                  <Route className="w-5 h-5 mr-2 text-rose-600" />
                  <span className="text-rose-800 font-medium">La Strada</span>
                </div>
                <div className="flex items-center bg-red-50 px-4 py-2 rounded-full">
                  <HandHeart className="w-5 h-5 mr-2 text-red-600" />
                  <span className="text-red-800 font-medium">Il Servizio</span>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <Card className="bg-gradient-to-br from-red-100 to-rose-100 rounded-2xl p-8">
                <div className="text-center">
                  <div className="text-8xl mb-4"><Flame className="inline-block w-20 h-20" /></div>
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
                        <h3 className="text-xl font-bold text-[#2d5016] mb-4 text-center">Capo Fuoco</h3>
                        <div className="flex items-center justify-center text-gray-700">
                            <div>
                                <p className="font-semibold">Camilla Mattoccia</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
          </div>

          {/* Activities Grid */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-[#2d5016] text-center mb-12">
              Il metodo Scolte
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
          
          {/* Values Section */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold text-[#2d5016] mb-8">
                Obiettivi e Formazione
              </h2>
              <div className="space-y-4">
                {values.map((value, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-6 h-6 mr-4 text-rose-500 flex-shrink-0" />
                    <span className="text-gray-700 text-lg">{value}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-[#2d5016] to-[#15803d] text-white rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">La Carta di Fuoco</h3>
              <div className="space-y-4 text-rose-100">
                <p>È il patto che lega le Scolte del Fuoco, un impegno a vivere secondo uno stile preciso. Contiene le scelte personali di ogni ragazza su:</p>
                <div className="flex items-center">
                  <GraduationCap className="w-6 h-6 mr-3 text-rose-300" />
                  <span>Fede, cultura e stile di vita</span>
                </div>
                <div className="flex items-center">
                  <HandHeart className="w-6 h-6 mr-3 text-rose-300" />
                  <span>Servizio e impegno sociale</span>
                </div>
                <div className="flex items-center">
                  <Flame className="w-6 h-6 mr-3 text-rose-300" />
                  <span>Vita comunitaria nel Fuoco</span>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-rose-50 to-red-50 rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-[#2d5016] mb-6">
              Pronta a Fare la Differenza?
            </h2>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Se hai tra i 17 e i 21 anni e senti il desiderio di metterti in gioco 
              per costruire un futuro migliore, il Fuoco ti aspetta.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to={createPageUrl("Contatti")}>
                <Button size="lg" className="bg-rose-600 hover:bg-rose-700 text-white font-semibold px-8 py-4 text-lg rounded-xl">
                  <Heart className="w-5 h-5 mr-2" />
                  Unisciti a Noi
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link to="/#branche">
                <Button variant="outline" size="lg" className="border-2 border-rose-600 text-rose-700 hover:bg-rose-50 px-8 py-4 text-lg rounded-xl">
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
