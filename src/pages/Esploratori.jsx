
import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trees, Mountain, Compass, Tent, Users, ArrowRight, CheckCircle, Heart, Phone } from "lucide-react";

export default function Esploratori() {
  const activities = [
    {
      title: "Vita all'Aria Aperta",
      description: "Campeggi, escursioni e vita nella natura",
      icon: "⛺"
    },
    {
      title: "Tecniche Scout",
      description: "Pionieristica, pronto soccorso, espressione scout e topografia",
      icon: "🧭"
    },
    {
      title: "Vita di Squadriglia",
      description: "Lavoro di squadra e leadership condivisa",
      icon: "👥"
    },
    {
      title: "Servizio",
      description: "Impegno verso il prossimo con la buona azione quotidiana",
      icon: "🤝"
    }
  ];

  const skills = [
    "Autonomia nella vita all'aperto",
    "Leadership e spirito di squadra",
    "Tecniche di sopravvivenza e orientamento",
    "Responsabilità e senso del servizio",
    "Formazione cristiana approfondita"
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
          <div className="text-6xl mb-6">🏕️</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Esploratori
            <span className="block text-2xl font-normal mt-2 text-green-100">
              12 - 16 anni
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-green-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            "Estote Parati" - Siate Pronti! La grande avventura della vita all'aria aperta 
            e della formazione del carattere
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#2d5016] mb-6">
                L'Avventura della Crescita
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                In ogni Riparto sono presenti dei piccoli gruppi di amici, chiamati Squadriglie, 
                dove ognuno ha un incarico di responsabilità: nelle Squadriglie gli Esploratori 
                vivono la magnifica avventura dello scautismo. Nello spirito della Legge e della Promessa 
                fanno della vita all’aperto la loro palestra di vita per <strong>sviluppare il carattere, aiutare il prossimo</strong> e, 
                attraverso la contemplazione del Creato, scoprire l’Amore di Dio per loro.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Organizzati in <strong>Squadriglie</strong>, piccoli gruppi di 6-8 ragazzi, 
                vivono l'avventura della vita all'aria aperta, dormire in un rifugio costruito dalla propria Squadriglia,
                 o un preparare un pranzo sul fuoco… sono queste alcune delle attività che caratterizzano la vita di un Esploratore. 
                 Il continuo “<strong>imparare facendo</strong>”, grazie all’esempio e al servizio degli esploratori più grandi, 
                permette ad un ragazzo adolescente di vivere avventure solo apparentemente 
                “im-possibili”, rivelandogli così la bellezza del Creato.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center bg-green-50 px-4 py-2 rounded-full">
                  <Trees className="w-5 h-5 mr-2 text-green-600" />
                  <span className="text-green-800 font-medium">Vita nel Bosco</span>
                </div>
                <div className="flex items-center bg-blue-50 px-4 py-2 rounded-full">
                  <Compass className="w-5 h-5 mr-2 text-blue-600" />
                  <span className="text-blue-800 font-medium">Spirito di Avventura</span>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <Card className="bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl p-8">
                <div className="text-center">
                  <div className="text-8xl mb-4"><Tent className="inline-block w-20 h-20" /></div>
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
                        <h3 className="text-xl font-bold text-[#2d5016] mb-4 text-center">Contatti Capo Unità</h3>
                        <div className="flex items-center justify-center text-gray-700">
                            <Phone className="w-5 h-5 mr-3 text-green-600" />
                            <div>
                                <p className="font-semibold">Capo Riparto: +39 333 7788999</p>
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

          {/* Method Section */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div className="bg-gradient-to-br from-[#2d5016] to-[#15803d] text-white rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">Il Sistema delle Squadriglie</h3>
              <div className="space-y-4 text-green-100">
                <div className="flex items-center">
                  <Users className="w-6 h-6 mr-3 text-green-300" />
                  <span>Piccoli gruppi di 6-8 esploratori</span>
                </div>
                <div className="flex items-center">
                  <Mountain className="w-6 h-6 mr-3 text-green-300" />
                  <span>Ogni squadriglia ha il suo capo squadriglia</span>
                </div>
                <div className="flex items-center">
                  <Tent className="w-6 h-6 mr-3 text-green-300" />
                  <span>Autonomia nelle attività e nei campeggi</span>
                </div>
              </div>
              <div className="mt-6 bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                <p className="text-center italic">
                  “Il sistema delle squadriglie non è uno dei metodi con cui si può fare lo Scautismo. È l’unico metodo.”
                </p>
                <p className="text-center text-sm mt-2 text-green-200">- Baden Powell</p>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-[#2d5016] mb-8">
                Competenze e Crescita
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
          </div>

          {/* Promise Section */}
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-12 mb-16">
            <h2 className="text-3xl font-bold text-[#2d5016] text-center mb-8">
              La Promessa Scout
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-xl p-8 shadow-md">
                <p className="text-xl text-center leading-relaxed text-gray-800 italic">
                  "Con l'aiuto di Dio prometto sul mio onore di fare del mio meglio:<br/><br/>
                  - per servide Dio, la Chiesa, la Patria e l'Europa<br/>
                  - per aiutare il prossimo in ogni circostanza<br/>
                  - per osservare la Legge Scout"
                </p>
              </div>
              <div className="text-center mt-6">
                <div className="text-4xl mb-2">🏕️</div>
                <p className="text-green-700 font-semibold">
                  <em>"Estote Parati - Siate Pronti"</em>
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-[#2d5016] mb-6">
              Pronto per la Grande Avventura?
            </h2>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Se tuo figlio ha tra i 12 e i 16 anni e sogna l'avventura nella natura, 
              gli Esploratori sono la strada giusta per la sua formazione!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to={createPageUrl("Contatti")}>
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-4 text-lg rounded-xl">
                  <Heart className="w-5 h-5 mr-2" />
                  Iscrivi tuo Figlio
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link to="/#branche">
                <Button variant="outline" size="lg" className="border-2 border-green-600 text-green-700 hover:bg-green-50 px-8 py-4 text-lg rounded-xl">
                  <Trees className="w-5 h-5 mr-2" />
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
