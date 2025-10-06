import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { User, Users, Shield, Award, Heart } from 'lucide-react';

export default function ChiSiamo() {
  const staff = [
    { name: "Mario Rossi", role: "Capo Gruppo", avatar: "https://placehold.co/100x100/E2E8F0/4A5568?text=MR" },
    { name: "Luisa Bianchi", role: "Aiuto Capo Gruppo", avatar: "https://placehold.co/100x100/E2E8F0/4A5568?text=LB" },
    { name: "Paolo Verdi", role: "Akela (Capo Unità Lupetti)", avatar: "https://placehold.co/100x100/E2E8F0/4A5568?text=PV" },
    { name: "Laura Gialli", role: "Capo Cerchio (Capo Unità Coccinelle)", avatar: "https://placehold.co/100x100/E2E8F0/4A5568?text=LG" },
    { name: "Giovanni Neri", role: "Capo Riparto Esploratori", avatar: "https://placehold.co/100x100/E2E8F0/4A5568?text=GN" },
    { name: "Chiara Marroni", role: "Capo Riparto Guide", avatar: "https://placehold.co/100x100/E2E8F0/4A5568?text=CM" },
    { name: "Luca Bruno", role: "Capo Clan (Capo Unità Rover)", avatar: "https://placehold.co/100x100/E2E8F0/4A5568?text=LB" },
    { name: "Anna Azzurri", role: "Capo Fuoco (Capo Unità Scolte)", avatar: "https://placehold.co/100x100/E2E8F0/4A5568?text=AA" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-50 to-stone-100 py-12">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block p-4 bg-gradient-to-br from-[#2d5016] to-[#4ade80] rounded-full mb-4">
            <Users className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#2d5016] mb-4">
            Chi Siamo
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Lo staff educativo del gruppo FSE Velletri 1, al servizio dei ragazzi.
          </p>
        </div>

        <Card className="mb-12 shadow-xl border-0 bg-white">
          <CardHeader>
            <CardTitle className="text-2xl text-[#2d5016] flex items-center">
              <Shield className="w-6 h-6 mr-3 text-[#4ade80]" />
              La Nostra Missione
            </CardTitle>
          </CardHeader>
          <CardContent className="text-lg text-gray-700 leading-relaxed">
            <p>
              In linea con i principi della Federazione Scouts d'Europa, il nostro obiettivo è contribuire alla crescita dei giovani come cittadini responsabili e cristiani impegnati. Attraverso il metodo scout ideato da Baden-Powell, offriamo un'avventura educativa che si sviluppa in cinque aree fondamentali: salute e forza fisica, abilità manuale, formazione del carattere, servizio del prossimo e senso di Dio. La nostra Comunità Capi si impegna a guidare i ragazzi in questo percorso, offrendo loro un ambiente sereno, stimolante e fraterno.
            </p>
          </CardContent>
        </Card>

        <div>
          <h2 className="text-3xl font-bold text-[#2d5016] text-center mb-10">La Comunità Capi (Co.Ca.)</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {staff.map((capo) => (
              <div key={capo.name} className="text-center flex flex-col items-center">
                <img
                  src={capo.avatar}
                  alt={`Foto di ${capo.name}`}
                  className="w-32 h-32 rounded-full mb-4 shadow-lg border-4 border-white"
                />
                <h3 className="text-xl font-bold text-[#2d5016]">{capo.name}</h3>
                <p className="text-gray-600">{capo.role}</p>
              </div>
            ))}
          </div>
           <p className="text-center text-gray-500 mt-8 italic">
              I nomi e le foto sono a scopo illustrativo. Saranno sostituiti con i dati reali.
            </p>
        </div>
      </div>
    </div>
  );
}