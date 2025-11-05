
import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Heart, Users, TreePine, PawPrint, ArrowRight, CheckCircle, Phone } from "lucide-react";

export default function Lupetti() {
  const activities = [
    {
      title: "Giochi nella Giungla",
      description: "Avventure ispirate al Libro della Giungla",
      icon: "🐺"
    },
    {
      title: "Attività Manuali",
      description: "Costruzioni, nodi e lavoretti creativi",
      icon: "🎨"
    },
    {
      title: "Vita all'Aria Aperta", 
      description: "Uscite, giochi nel bosco e osservazione della natura",
      icon: "🌲"
    },
    {
      title: "Canti e Danze",
      description: "Tradizionali canti scout e danze di gruppo",
      icon: "🎵"
    }
  ];

  const skills = [
    "Conoscenza della natura e degli animali",
    "Sviluppo della manualità e creatività", 
    "Apprendimento del gioco di squadra",
    "Primi rudimenti di vita scout",
    "Educazione ai valori cristiani"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-yellow-400 to-orange-500 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full"></div>
          <div className="absolute bottom-10 right-20 w-24 h-24 bg-white/10 rounded-full"></div>
        </div>
        
        <div className="relative max-w-6xl mx-auto px-4 text-center">
          <div className="text-6xl mb-6">🐺</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Lupetti
            <span className="block text-2xl font-normal mt-2 text-yellow-100">
              8 - 11 anni
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-yellow-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            "Del nostro meglio" - Il mondo della Giungla di Mowgli come ambiente fantastico 
            per la crescita e l'educazione dei più piccoli
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#2d5016] mb-6">
                Benvenuti nella Giungla!
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Proponiamo di <strong>giocare insieme</strong>, all’aperto, imparando ad avere 
                <strong>fiducia in se stessi</strong> e vivendo in un clima di <strong>Famiglia 
                Felice</strong> lo spirito di cristiana letizia e <strong>comunione fraterna</strong>. I Lupetti, immersi nelle storie di <strong>Mowgli</strong>, imparano a 
                fare del loro meglio per superare ostacoli di difficoltà progressivamente crescente. Con la pratica della 
                Buona Azione quotidiana iniziano a comprendere la gioia del Servizio al prossimo.
                
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                <strong>La Legge del Branco</strong> dice “Il lupetto ascolta il Vecchi Lupo, 
                il lupetto non ascolta se stesso”.Guidati dall’esempio dei <strong>Vecchi Lupi</strong>, loro fratelli maggiori, 
                i Lupetti imparano che per giocare e vivere bene occorre <strong>rispettare 
                le regole e i propri compagni</strong>. Con canti gioiosi, seguono la strada indicata 
                da <strong>S. Francesco</strong>, loro patrono, per avvicinarsi all’amicizia con Gesù.
                
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center bg-yellow-50 px-4 py-2 rounded-full">
                  <Star className="w-5 h-5 mr-2 text-yellow-600" />
                  <span className="text-yellow-800 font-medium">Famiglia Felice</span>
                </div>
                <div className="flex items-center bg-orange-50 px-4 py-2 rounded-full">
                  <Heart className="w-5 h-5 mr-2 text-orange-600" />
                  <span className="text-orange-800 font-medium">Branco Leale</span>
                </div>
              </div>
            </div>
            <div className="space-y-6">
                <Card className="bg-gradient-to-br from-yellow-100 to-orange-100 rounded-2xl p-8">
                    <div className="text-center">
                    <div className="text-8xl mb-4"><PawPrint className="inline-block w-20 h-20" /></div>
                    <h3 className="text-2xl font-bold text-[#2d5016] mb-4">
                        Le Nostre Riunioni
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
                        <h3 className="text-xl font-bold text-[#2d5016] mb-4 text-center">Akela</h3>
                        <div className="flex items-center justify-center text-gray-700">
                            <div>
                                <p className="font-semibold">Marco Molteni</p>
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
            <div>
              <h2 className="text-3xl font-bold text-[#2d5016] mb-8">
                Cosa Impareranno i Tuoi Figli
              </h2>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-6 h-6 mr-4 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 text-lg">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-[#2d5016] to-[#15803d] text-white rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">La Promessa del Lupetto</h3>
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <p className="text-xl leading-relaxed text-center italic">
                  "Con l’aiuto di Dio,
                  prometto di fare del mio meglio
                  per essere fedele a Dio, ai miei genitori, alla mia Patria;
                  per osservare la Legge del Branco
                  e fare una buona azione a vantaggio di qualcuno ogni giorno."
                </p>
              </div>
              <div className="mt-6 text-center">
                <div className="text-4xl mb-2">🐺</div>
                <p className="text-yellow-200">
                  <em>"Del nostro meglio!"</em>
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-[#2d5016] mb-6">
              Pronto per l'Avventura nella Giungla?
            </h2>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Se tuo figlio ha tra gli 8 e gli 11 anni e ami vederlo crescere 
              in un ambiente sano e stimolante, i Lupetti sono quello che fa per lui!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to={createPageUrl("Contatti")}>
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 text-lg rounded-xl">
                  <Heart className="w-5 h-5 mr-2" />
                  Iscrivi tuo Figlio
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link to={"/#branche"}>
                <Button variant="outline" size="lg" className="border-2 border-orange-500 text-orange-600 hover:bg-orange-50 px-8 py-4 text-lg rounded-xl">
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
