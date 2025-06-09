import React from "react";
import { Instagram, MapPin, Phone } from "lucide-react";

export default function OnigiriSanSPA() {
  return (
    <div className="min-h-screen bg-white text-gray-800 px-4 py-8 md:px-12 lg:px-24">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-2">🍙 Onigiri San</h1>
        <p className="text-lg">Onigiris caseros en Jujuy, Argentina</p>
        <p className="text-md text-gray-600">Pedidos de lunes a jueves | Entregas viernes a domingo</p>
        <div className="flex justify-center gap-4 mt-4">
          <a href="https://www.instagram.com/onigiri_san_jujuy" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-blue-600 hover:underline">
            <Instagram size={20} /> Instagram
          </a>
          <a href="https://wa.me/5493880000000" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-green-600 hover:underline">
            <Phone size={20} /> WhatsApp
          </a>
        </div>
      </header>

      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6 text-center">Menú de la semana</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            { title: "Combo Clásico", desc: "3 onigiris a elección + salsa de soja casera", price: "$3000" },
            { title: "Combo XL", desc: "5 onigiris + salsa + detalle sorpresa", price: "$4500" },
            { title: "Sorpresa San", desc: "3 onigiris sorpresa seleccionados por el chef", price: "$2800" },
          ].map((item, idx) => (
            <div key={idx} className="rounded-2xl shadow-md p-4 border">
              <h3 className="text-xl font-bold mb-1">{item.title}</h3>
              <p className="text-gray-700 mb-2">{item.desc}</p>
              <p className="text-lg font-semibold">{item.price}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="text-center mb-20">
        <h2 className="text-2xl font-semibold mb-4">¿Querés hacer tu pedido?</h2>
        <p className="mb-4">Completá el formulario o escribinos por WhatsApp 📲</p>
        <a href="https://forms.gle/ejemplo-formulario-onigiri" target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-full text-lg px-6 py-3">
          Hacer Pedido
        </a>
      </section>

      <footer className="text-center text-gray-600 border-t pt-6">
        <p>&copy; 2025 Onigiri San - Jujuy, Argentina</p>
        <p className="flex justify-center items-center gap-1 mt-2">
          <MapPin size={16} /> San Salvador de Jujuy
        </p>
      </footer>
    </div>
  );
}
