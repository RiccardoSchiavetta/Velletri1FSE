import React, { useState } from "react";
import { supabase } from "../supabaseClient";  // Assumi path corretto al tuo supabaseClient.js
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, Heart } from "lucide-react";

export default function Contatti() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    child_age: "",
    branch_interest: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      // Salva in Supabase
      const { error: dbError } = await supabase
        .from('contact_requests')
        .insert({
          ...formData,
          child_age: parseInt(formData.child_age) || null
        });

      if (dbError) throw dbError;

      setShowSuccess(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        child_age: "",
        branch_interest: "",
        message: ""
      });
    } catch (err) {
      setError("Errore nell'invio della richiesta. Riprova più tardi.");
      console.error(err);
    }

    setIsSubmitting(false);
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-50 to-stone-100 py-12">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold text-[#2d5016] mb-4">
            Contattaci
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Interessato al nostro gruppo scout? Compila il modulo per ricevere 
            tutte le informazioni sull'iscrizione e sulle nostre attività
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <Card className="shadow-xl border-0">
              <CardHeader className="bg-gradient-to-r from-[#2d5016] to-[#15803d] text-white rounded-t-lg">
                <CardTitle className="text-2xl flex items-center">
                  <Heart className="w-6 h-6 mr-3" />
                  Richiedi Informazioni
                </CardTitle>
                <p className="text-stone-200">
                  Compila tutti i campi per ricevere una risposta completa
                </p>
              </CardHeader>
              <CardContent className="p-8">
                {showSuccess && (
                  <Alert className="mb-6 border-green-200 bg-green-50">
                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                    <AlertDescription className="text-green-800">
                      Richiesta inviata con successo! Ti contatteremo entro 24 ore.
                    </AlertDescription>
                  </Alert>
                )}

                {error && (
                  <Alert className="mb-6 border-red-200 bg-red-50">
                    <AlertDescription className="text-red-800">
                      {error}
                    </AlertDescription>
                  </Alert>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Nome Famiglia *
                      </label>
                      <Input
                        required
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        placeholder="Es. Famiglia Rossi"
                        className="border-2 focus:border-[#4ade80] rounded-xl"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Email *
                      </label>
                      <Input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        placeholder="famiglia@email.com"
                        className="border-2 focus:border-[#4ade80] rounded-xl"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Telefono *
                      </label>
                      <Input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        placeholder="+39 123 456 7890"
                        className="border-2 focus:border-[#4ade80] rounded-xl"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Età del bambino/ragazzo
                      </label>
                      <Input
                        type="number"
                        min="6"
                        max="21"
                        value={formData.child_age}
                        onChange={(e) => handleInputChange("child_age", e.target.value)}
                        placeholder="Es. 10"
                        className="border-2 focus:border-[#4ade80] rounded-xl"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Branca di Interesse
                    </label>
                    <Select
                      value={formData.branch_interest}
                      onValueChange={(value) => handleInputChange("branch_interest", value)}
                    >
                      <SelectTrigger className="border-2 focus:border-[#4ade80] rounded-xl">
                        <SelectValue placeholder="Seleziona una branca" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="lupetti">Lupetti (8-11 anni)</SelectItem>
                        <SelectItem value="coccinelle">Coccinelle (8-11 anni)</SelectItem>
                        <SelectItem value="esploratori">Esploratori (12-16 anni)</SelectItem>
                        <SelectItem value="guide">Guide (12-16 anni)</SelectItem>
                        <SelectItem value="rover">Rover (17-21 anni)</SelectItem>
                        <SelectItem value="scolte">Scolte (17-21 anni)</SelectItem>
                        <SelectItem value="generale">Informazioni generali</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Messaggio *
                    </label>
                    <Textarea
                      required
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      placeholder="Descrici le tue domande o richieste specifiche..."
                      className="border-2 focus:border-[#4ade80] rounded-xl min-h-32"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#2d5016] hover:bg-[#15803d] text-white font-semibold py-4 rounded-xl text-lg transition-all duration-300"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                        Invio in corso...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-3" />
                        Invia Richiesta
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            {/* Office Info */}
            <Card className="shadow-xl border-0">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-[#2d5016] mb-6 flex items-center">
                  <MapPin className="w-6 h-6 mr-3 text-[#4ade80]" />
                  La Nostra Sede
                </h3>
                <div className="space-y-4 text-gray-700">
                  <div className="flex items-start">
                    <MapPin className="w-5 h-5 mr-3 text-[#4ade80] mt-1" />
                    <div>
                      <p className="font-semibold">Parrocchia di San Clemente</p>
                      <p>Velletri (RM)</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 mr-3 text-[#4ade80]" />
                    <span>069632239</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 mr-3 text-[#4ade80]" />
                    <span>velletri_1@fse.it</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Meeting Times */}
            <Card className="shadow-xl border-0">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-[#2d5016] mb-6 flex items-center">
                  <Clock className="w-6 h-6 mr-3 text-[#4ade80]" />
                  Orario Riunioni
                </h3>
                <div className="p-4 bg-gradient-to-r from-green-50 to-green-100 rounded-xl text-center">
                  <p className="font-semibold text-lg text-[#2d5016]">Domenica</p>
                  <p className="text-gray-700 text-lg">9:30 - 12:30</p>
                  <p className="text-sm text-gray-600 mt-2">(Tutte le branche)</p>
                </div>
              </CardContent>
            </Card>

            {/* Quick Info */}
            <Card className="shadow-xl border-0 bg-gradient-to-br from-[#2d5016] to-[#15803d] text-white">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">
                  Risposta Garantita
                </h3>
                <p className="text-stone-200 leading-relaxed">
                  Ti contatteremo il prima possibile per fornirti 
                  tutte le informazioni necessarie e organizzare un incontro conoscitivo.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}