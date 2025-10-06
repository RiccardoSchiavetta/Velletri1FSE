
import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bug, Heart, Users, Sun, Leaf, ArrowRight, CheckCircle, Phone } from "lucide-react";

export default function Coccinelle() {
  const activities = [
    {
      title: "Vita nel Bosco",
      description: "Avventure e giochi nel Bosco Incantato",
      icon: "🌳"
    },
    {
      title: "Attività Manuali",
      description: "Creazioni artistiche ispirate alla natura",
      icon: "🎨"
    },
    {
      title: "Canti e Cerchi", 
      description: "Momenti di gioia e condivisione di gruppo",
      icon: "🎶"
    },
    {
      title: "Servizio e Dono",
      description: "Piccole azioni per aiutare gli altri",
      icon: "💖"
    }
  ];

  const skills = [
    "Sviluppo della creatività e della fantasia",
    "Amore e rispetto per la natura", 
    "Capacità di vivere e giocare in gruppo",
    "Scoperta della gioia nel donare",
    "Educazione ai valori cristiani e alla preghiera"
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
          <div className="text-6xl mb-6">🐞</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Branca Coccinelle
            <span className="block text-2xl font-normal mt-2 text-yellow-100">
              8 - 11 anni
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-yellow-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            "Eccomi!" - Il Cerchio come simbolo di unione e il Bosco Incantato come 
            ambiente per crescere nella gioia e nell'amicizia.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#2d5016] mb-6">
                Benvenute nel Bosco Incantato!
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Le Coccinelle vivono la loro avventura nel <strong>Bosco Incantato</strong>, 
                un ambiente fantastico dove ogni bambina, membro del "Cerchio", 
                impara a conoscere se stessa e il mondo attraverso il gioco e la condivisione.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Guidate dalle "Vecchie Coccinelle", le bambine scoprono la bellezza della natura, 
                il valore dell'amicizia e la gioia di donare il proprio aiuto, seguendo i "sette punti" 
                della Legge del Cerchio.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center bg-red-50 px-4 py-2 rounded-full">
                  <Sun className="w-5 h-5 mr-2 text-red-600" />
                  <span className="text-red-800 font-medium">Cerchio Gioioso</span>
                </div>
                <div className="flex items-center bg-pink-50 px-4 py-2 rounded-full">
                  <Heart className="w-5 h-5 mr-2 text-pink-600" />
                  <span className="text-pink-800 font-medium">Amicizia Sincera</span>
                </div>
              </div>
            </div>
            <div className="space-y-6"> {/* Changed from relative to space-y-6 to accommodate multiple cards */}
              <Card className="bg-gradient-to-br from-yellow-100 to-orange-100 rounded-2xl p-8">
                <div className="text-center">
                  <div className="text-8xl mb-4"><Leaf className="inline-block w-20 h-20" /></div>
                  <h3 className="text-2xl font-bold text-[#2d5016] mb-4">
                    Le Nostre Riunioni
                  </h3>
                  <div className="space-y-2 text-gray-700">
                    <p><strong>Quando:</strong> Ogni domenica</p>
                    <p><strong>Orario:</strong> 9:30 - 12:30</p>
                    <p><strong>Dove:</strong> Sede San Clemente, Velletri</p>
                  </div>
                </div>
              </Card>
               <Card className="border-0 shadow-lg">
                    <CardContent className="p-6">
                        <h3 className="text-xl font-bold text-[#2d5016] mb-4 text-center">Contatti Capi Unità</h3>
                        <div className="flex items-center justify-center text-gray-700">
                            <Phone className="w-5 h-5 mr-3 text-red-600" />
                            <div>
                                <p className="font-semibold">Capo Cerchio: +39 335 4455666</p>
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
                Cosa Impareranno le Tue Figlie
              </h2>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-6 h-6 mr-4 text-red-500 flex-shrink-0" />
                    <span className="text-gray-700 text-lg">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-[#2d5016] to-[#15803d] text-white rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">La Promessa della Coccinella</h3>
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <p className="text-xl leading-relaxed text-center italic">
                  "Prometto, con l'aiuto di Gesù, di fare del mio meglio 
                  per essere fedele a Dio, alla Patria, ai miei genitori, 
                  alla Legge del Bosco, e per fare un favore a qualcuno ogni giorno."
                </p>
              </div>
              <div className="mt-6 text-center">
                <div className="text-4xl mb-2">🐞</div>
                <p className="text-red-200">
                  <em>"Eccomi!"</em>
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-red-50 to-rose-50 rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-[#2d5016] mb-6">
              Pronta per l'Avventura nel Bosco?
            </h2>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Se tua figlia ha tra gli 8 e gli 11 anni e desideri che cresca 
              in un ambiente gioioso e formativo, le Coccinelle sono perfette per lei!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to={createPageUrl("Contatti")}>
                <Button size="lg" className="bg-red-500 hover:bg-red-600 text-white font-semibold px-8 py-4 text-lg rounded-xl">
                  <Heart className="w-5 h-5 mr-2" />
                  Iscrivi tua Figlia
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link to={createPageUrl("Home#branche")}>
                <Button variant="outline" size="lg" className="border-2 border-red-500 text-red-600 hover:bg-red-50 px-8 py-4 text-lg rounded-xl">
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
