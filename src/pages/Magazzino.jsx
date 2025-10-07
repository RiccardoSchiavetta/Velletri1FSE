import React, { useState } from "react";
import { supabase } from "../supabaseClient";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Package, Send, CheckCircle2, ShoppingCart, Minus, Plus, Shirt, Info } from "lucide-react";

const uniformProducts = {
  "Lupetti": [
    { name: "MAGLIETTA ESTIVA VERDE LUPETTO", sizes: ["5 / 6 ANNI", "6 / 7 ANNI", "7 / 8 ANNI", "9 / 10 ANNI", "11 / 12 ANNI", "13 / 14 ANNI", "XS", "S"], imageUrl: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68d1bf68b44f5b4cd1e4d2fb/61c8c35ec_image.png" },
    { name: "MAGLIONE VERDE LUPETTO", sizes: ["5 / 6 ANNI", "6 / 7 ANNI", "7 / 8 ANNI", "9 / 10 ANNI", "11 / 12 ANNI", "13 / 14 ANNI", "XS", "S"], imageUrl: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68d1bf68b44f5b4cd1e4d2fb/3c617ae57_image.png" },
    { name: "BERRETTO LUPETTO", sizes: ["XXS circonf.testa 51/52", "XS circonf.testa 53/54", "S circonf.testa 55/56", "M circonf.testa 57/58", "L circonf.testa 59/60"], imageUrl: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68d1bf68b44f5b4cd1e4d2fb/44f009acd_image.png" },
    { name: "PANTALONI VELLUTO BLU CORTI", sizes: ["32", "34", "36", "38", "40", "42", "44", "46", "48", "50", "52", "54", "56", "58", "60"], imageUrl: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68d1bf68b44f5b4cd1e4d2fb/ab9567fd7_image.png" },
    { name: "PANTALONI VELLUTO BLU LUNGHI", sizes: ["32", "34", "36", "38", "40", "42", "44", "46", "48", "50", "52", "54", "56", "58", "60"], imageUrl: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68d1bf68b44f5b4cd1e4d2fb/a2bfda177_image.png" },
    { name: "CINTURA SCOUT IN CUOIO", sizes: ["CM 80", "CM 90", "CM 100", "CM 110", "CM 120", "CM 130", "CM 140"], imageUrl: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68d1bf68b44f5b4cd1e4d2fb/713eda313_image.png" }
  ],
  "Coccinelle": [
    { name: "CAMICIA GUIDA", sizes: ["8 ANNI", "10 ANNI", "12 ANNI", "XS", "S", "M", "L", "XL", "XXL", "XXXL"], imageUrl: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68d1bf68b44f5b4cd1e4d2fb/a3802486e_image.png" },
    { name: "MAGLIONE BLU SCOUT", sizes: ["32", "34", "36", "38", "40", "42", "44", "46", "48", "50", "52", "54", "56", "58"], imageUrl: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68d1bf68b44f5b4cd1e4d2fb/695c68a4a_image.png" },
    { name: "ZUCCHETTO COCCINELLA", sizes: ["TAGLIA UNICA"], imageUrl: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68d1bf68b44f5b4cd1e4d2fb/6c0f181c7_image.png" },
    { name: "GONNA PANTALONE", sizes: ["32", "34", "36", "38", "40", "42", "44", "46", "48", "50", "52", "54", "56", "58", "60"], imageUrl: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68d1bf68b44f5b4cd1e4d2fb/22adbde7f_image.png" },
    { name: "CINTURA SCOUT IN CUOIO", sizes: ["CM 80", "CM 90", "CM 100", "CM 110", "CM 120", "CM 130", "CM 140"], imageUrl: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68d1bf68b44f5b4cd1e4d2fb/713eda313_image.png" }
  ],
  "Esploratori": [
    { name: "CAMICIA SCOUT", sizes: ["XS", "S", "M", "L", "XL", "XXL", "XXXL"], imageUrl: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68d1bf68b44f5b4cd1e4d2fb/8f9ab29a9_image.png" },
    { name: "MAGLIONE BLU SCOUT", sizes: ["32", "34", "36", "38", "40", "42", "44", "46", "48", "50", "52", "54", "56", "58"], imageUrl: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68d1bf68b44f5b4cd1e4d2fb/695c68a4a_image.png" },
    { name: "CAPPELLONE SCOUT FLEXIBLE", sizes: ["54", "55", "56", "57", "58", "59", "60", "62"], imageUrl: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68d1bf68b44f5b4cd1e4d2fb/d21be1328_image.png" },
    { name: "PANTALONI VELLUTO BLU CORTI", sizes: ["32", "34", "36", "38", "40", "42", "44", "46", "48", "50", "52", "54", "56", "58", "60"], imageUrl: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68d1bf68b44f5b4cd1e4d2fb/ab9567fd7_image.png" },
    { name: "PANTALONI VELLUTO BLU LUNGHI", sizes: ["32", "34", "36", "38", "40", "42", "44", "46", "48", "50", "52", "54", "56", "58", "60"], imageUrl: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68d1bf68b44f5b4cd1e4d2fb/a2bfda177_image.png" },
    { name: "CINTURA SCOUT IN CUOIO", sizes: ["CM 80", "CM 90", "CM 100", "CM 110", "CM 120", "CM 130", "CM 140"], imageUrl: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68d1bf68b44f5b4cd1e4d2fb/713eda313_image.png" }
  ],
  "Guide": [
    { name: "CAMICIA GUIDA", sizes: ["8 ANNI", "10 ANNI", "12 ANNI", "XS", "S", "M", "L", "XL", "XXL", "XXXL"], imageUrl: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68d1bf68b44f5b4cd1e4d2fb/a3802486e_image.png" },
    { name: "MAGLIONE BLU SCOUT", sizes: ["32", "34", "36", "38", "40", "42", "44", "46", "48", "50", "52", "54", "56", "58"], imageUrl: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68d1bf68b44f5b4cd1e4d2fb/695c68a4a_image.png" },
    { name: "CAPPELLONE GUIDA FLEXIBLE", sizes: ["54", "55", "56", "57", "58", "59", "60", "62"], imageUrl: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68d1bf68b44f5b4cd1e4d2fb/4fae304fd_image.png" },
    { name: "GONNA PANTALONE", sizes: ["32", "34", "36", "38", "40", "42", "44", "46", "48", "50", "52", "54", "56", "58", "60"], imageUrl: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68d1bf68b44f5b4cd1e4d2fb/22adbde7f_image.png" },
    { name: "CINTURA SCOUT IN CUOIO", sizes: ["CM 80", "CM 90", "CM 100", "CM 110", "CM 120", "CM 130", "CM 140"], imageUrl: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68d1bf68b44f5b4cd1e4d2fb/713eda313_image.png" }
  ],
  "Rover": [
    { name: "CAMICIA SCOUT", sizes: ["XS", "S", "M", "L", "XL", "XXL", "XXXL"], imageUrl: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68d1bf68b44f5b4cd1e4d2fb/8f9ab29a9_image.png" },
    { name: "MAGLIONE BLU SCOUT", sizes: ["32", "34", "36", "38", "40", "42", "44", "46", "48", "50", "52", "54", "56", "58"], imageUrl: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68d1bf68b44f5b4cd1e4d2fb/695c68a4a_image.png" },
    { name: "CAPPELLONE SCOUT FLEXIBLE", sizes: ["54", "55", "56", "57", "58", "59", "60", "62"], imageUrl: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68d1bf68b44f5b4cd1e4d2fb/d21be1328_image.png" },
    { name: "PANTALONI VELLUTO BLU CORTI", sizes: ["32", "34", "36", "38", "40", "42", "44", "46", "48", "50", "52", "54", "56", "58", "60"], imageUrl: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68d1bf68b44f5b4cd1e4d2fb/ab9567fd7_image.png" },
    { name: "PANTALONI VELLUTO BLU LUNGHI", sizes: ["32", "34", "36", "38", "40", "42", "44", "46", "48", "50", "52", "54", "56", "58", "60"], imageUrl: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68d1bf68b44f5b4cd1e4d2fb/a2bfda177_image.png" },
    { name: "CINTURA SCOUT IN CUOIO", sizes: ["CM 80", "CM 90", "CM 100", "CM 110", "CM 120", "CM 130", "CM 140"], imageUrl: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68d1bf68b44f5b4cd1e4d2fb/713eda313_image.png" }
  ],
  "Scolte": [
    { name: "CAMICIA GUIDA", sizes: ["8 ANNI", "10 ANNI", "12 ANNI", "XS", "S", "M", "L", "XL", "XXL", "XXXL"], imageUrl: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68d1bf68b44f5b4cd1e4d2fb/a3802486e_image.png" },
    { name: "MAGLIONE BLU SCOUT", sizes: ["32", "34", "36", "38", "40", "42", "44", "46", "48", "50", "52", "54", "56", "58"], imageUrl: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68d1bf68b44f5b4cd1e4d2fb/695c68a4a_image.png" },
    { name: "BASCO NERO", sizes: ["54", "55", "56", "57", "58", "59", "60", "62"], imageUrl: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68d1bf68b44f5b4cd1e4d2fb/4926abe71_image.png" },
    { name: "GONNA PANTALONE", sizes: ["32", "34", "36", "38", "40", "42", "44", "46", "48", "50", "52", "54", "56", "58", "60"], imageUrl: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68d1bf68b44f5b4cd1e4d2fb/22adbde7f_image.png" },
    { name: "CINTURA SCOUT IN CUOIO", sizes: ["CM 80", "CM 90", "CM 100", "CM 110", "CM 120", "CM 130", "CM 140"], imageUrl: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68d1bf68b44f5b4cd1e4d2fb/713eda313_image.png" }
  ]
};

const branchOrder = ["Lupetti", "Coccinelle", "Esploratori", "Guide", "Rover", "Scolte"];

const ItemCard = ({ item, onAddToCart }) => {
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState(item.sizes[0]);

  const handleAddToCart = () => {
    if (size) {
      onAddToCart({ ...item, quantity, size, id: `${item.name}-${size}` });
    }
  };

  return (
    <Card className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group">
      <div className="overflow-hidden">
        <img 
            src={item.imageUrl} 
            alt={item.name} 
            className="w-full h-56 object-contain bg-white p-2 transition-transform duration-300 group-hover:scale-110" 
        />
      </div>
      <CardContent className="p-4 flex-grow">
        <h3 className="font-bold text-md text-[#2d5016]">{item.name}</h3>
      </CardContent>
      <CardFooter className="p-4 bg-gray-50 flex flex-col items-start space-y-3">
        <div className="w-full flex items-center justify-between">
            <label className="text-sm font-medium">Taglia:</label>
            <Select onValueChange={setSize} defaultValue={size}>
              <SelectTrigger className="w-[150px]">
                <SelectValue placeholder="Seleziona" />
              </SelectTrigger>
              <SelectContent>
                {item.sizes.map(s => <SelectItem key={s} value={s}>{s}</SelectItem>)}
              </SelectContent>
            </Select>
        </div>
        <div className="w-full flex items-center justify-between">
           <label className="text-sm font-medium">Quantità:</label>
          <div className="flex items-center gap-2">
            <Button size="icon" variant="outline" onClick={() => setQuantity(Math.max(1, quantity - 1))}>
              <Minus className="h-4 w-4" />
            </Button>
            <span className="w-8 text-center font-bold text-lg">{quantity}</span>
            <Button size="icon" variant="outline" onClick={() => setQuantity(quantity + 1)}>
              <Plus className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <Button onClick={handleAddToCart} className="w-full bg-[#15803d] hover:bg-[#2d5016]">
          <ShoppingCart className="w-4 h-4 mr-2" /> Aggiungi al Carrello
        </Button>
      </CardFooter>
    </Card>
  );
};


export default function Magazzino() {
  const [cart, setCart] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [error, setError] = useState(null);
  const [userInfo, setUserInfo] = useState({ name: "", email: "", phone: "" });
  const [activeBranches, setActiveBranches] = useState(branchOrder);
  
  const handleAddToCart = (itemToAdd) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === itemToAdd.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === itemToAdd.id
            ? { ...item, quantity: item.quantity + itemToAdd.quantity }
            : item
        );
      }
      return [...prevCart, itemToAdd];
    });
  };

  const handleRemoveFromCart = (itemId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== itemId));
  };
  
  const handleUserInfoChange = (field, value) => {
    setUserInfo(prev => ({ ...prev, [field]: value }));
  };

  const generateOrderDetails = () => {
    return cart
      .map(item => `- ${item.quantity} x ${item.name} (Taglia: ${item.size})`)
      .join("\n");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const orderDetails = generateOrderDetails();
    if (cart.length === 0) {
      setError("Il carrello è vuoto. Aggiungi almeno un articolo.");
      return;
    }
    
    setIsSubmitting(true);
    setError(null);
    setShowSuccess(false);

    try {
      const { error: dbError } = await supabase
        .from('order_requests')
        .insert({
          name: userInfo.name,
          email: userInfo.email,
          phone: userInfo.phone,
          order_details: orderDetails,
        });

      if (dbError) throw dbError;

      setShowSuccess(true);
      setCart([]);
      setUserInfo({ name: "", email: "", phone: "" });
    } catch (err) {
      setError("Si è verificato un errore durante l'invio dell'ordine. Riprova più tardi.");
      console.error(err);
    }
    setIsSubmitting(false);
  };

  const toggleBranch = (branch) => {
    setActiveBranches(prev => 
      prev.includes(branch) 
        ? prev.filter(b => b !== branch)
        : [...prev, branch]
    );
  };
  
  return (
    <div className="min-h-screen bg-stone-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-block p-4 bg-gradient-to-br from-[#2d5016] to-[#4ade80] rounded-full mb-4">
            <Package className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#2d5016] mb-4">
            Magazzino Uniformi
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Seleziona i prodotti per la tua branca, aggiungili al carrello e invia il tuo ordine.
          </p>
        </div>

        <div className="flex justify-center mb-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {branchOrder.map(branch => (
              <Button
                key={branch}
                variant={activeBranches.includes(branch) ? "default" : "outline"}
                onClick={() => toggleBranch(branch)}
                className={activeBranches.includes(branch) ? "bg-[#2d5016] hover:bg-[#15803d]" : ""}
              >
                {branch}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
             <div className="space-y-12">
              {branchOrder
                .filter(branch => activeBranches.includes(branch))
                .map(branch => (
                <div key={branch}>
                  <h2 className="text-2xl font-bold text-[#2d5016] mb-4 border-b-2 border-[#4ade80] pb-2">{branch}</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {uniformProducts[branch].map(item => (
                      <ItemCard 
                        key={item.name} 
                        item={item} 
                        onAddToCart={handleAddToCart}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
             <Alert className="mt-8 bg-blue-50 border-blue-200">
                <Info className="h-4 w-4 text-blue-600" />
                <AlertTitle className="text-blue-800">Distintivi e insegne</AlertTitle>
                <AlertDescription className="text-blue-700">
                    Per l'acquisto di distintivi di branca, specialità e insegne varie, è necessario recarsi direttamente al magazzino in sede durante gli orari di apertura.
                </AlertDescription>
            </Alert>
          </div>
        
          <div className="lg:col-span-1">
            <Card className="shadow-2xl border-0 sticky top-28">
              <CardHeader className="bg-gradient-to-r from-[#2d5016] to-[#15803d] text-white rounded-t-lg">
                <CardTitle className="text-2xl flex items-center">
                  <ShoppingCart className="w-6 h-6 mr-3" />
                  Riepilogo Ordine
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                {showSuccess && (
                  <Alert className="mb-4 border-green-200 bg-green-50 text-green-800">
                    <CheckCircle2 className="w-4 h-4" />
                    <AlertDescription>Ordine inviato! Sarai ricontattato a breve.</AlertDescription>
                  </Alert>
                )}
                {error && (
                  <Alert variant="destructive" className="mb-4">
                    <AlertDescription>{error}</AlertDescription>
                  </Alert>
                )}

                <div className="space-y-3 mb-6 max-h-60 overflow-y-auto pr-2">
                  {cart.length > 0 ? (
                    cart.map(item => (
                      <div key={item.id} className="flex justify-between items-center text-sm">
                        <div>
                          <p className="font-semibold text-gray-800">{item.name}</p>
                          <p className="text-gray-600">Q.tà: {item.quantity} - Taglia: {item.size}</p>
                        </div>
                        <Button variant="ghost" size="icon" className="text-red-500 hover:text-red-700" onClick={() => handleRemoveFromCart(item.id)}>
                          <Minus className="h-4 w-4" />
                        </Button>
                      </div>
                    ))
                  ) : (
                    <p className="text-center text-gray-500 py-4">Il tuo carrello è vuoto.</p>
                  )}
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                   <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">Nome e Cognome *</label>
                      <Input required value={userInfo.name} onChange={(e) => handleUserInfoChange("name", e.target.value)} placeholder="Es. Mario Rossi" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">Email *</label>
                      <Input type="email" required value={userInfo.email} onChange={(e) => handleUserInfoChange("email", e.target.value)} placeholder="mario.rossi@email.com" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">Telefono</label>
                      <Input type="tel" value={userInfo.phone} onChange={(e) => handleUserInfoChange("phone", e.target.value)} placeholder="Opzionale" />
                    </div>
                  <Button type="submit" disabled={isSubmitting || cart.length === 0} className="w-full bg-[#2d5016] hover:bg-[#15803d] text-white font-semibold py-3 text-base">
                    {isSubmitting ? "Invio..." : <><Send className="w-5 h-5 mr-2" /> Invia Ordine</>}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

      </div>
    </div>
  );
}