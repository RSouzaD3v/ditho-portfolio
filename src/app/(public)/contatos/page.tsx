// app/contact/page.tsx
"use client";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você pode integrar com backend, EmailJS, API de envio, etc
    alert("Mensagem enviada com sucesso!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <main className="min-h-screen bg-black text-white px-4 py-20">
      <section className="max-w-3xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Entre em Contato</h1>
        <p className="text-gray-400 text-lg">
          Tem um projeto em mente ou quer tirar dúvidas? Preencha o formulário abaixo ou mande um e-mail.
        </p>
      </section>

      <section className="max-w-xl mx-auto bg-neutral-900 p-8 rounded-lg border border-neutral-700">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm mb-1 text-gray-300">
              Nome
            </label>
            <Input
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Seu nome"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm mb-1 text-gray-300">
              E-mail
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="seu@email.com"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm mb-1 text-gray-300">
              Mensagem
            </label>
            <Textarea
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Digite sua mensagem..."
              rows={5}
              required
            />
          </div>

          <Button type="submit" className="w-full bg-orange-600 hover:bg-orange-700">
            Enviar Mensagem
          </Button>
        </form>
      </section>
    </main>
  );
}
