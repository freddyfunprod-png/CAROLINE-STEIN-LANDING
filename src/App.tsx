/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Instagram, 
  MapPin, 
  Phone, 
  MessageCircle, 
  Star, 
  ChevronRight,
  Menu,
  X,
  Sparkles,
  Heart
} from "lucide-react";
import { useState, useEffect } from "react";

const BUSINESS_NAME = "Caroline Stein Estética";
const PHONE_NUMBER = "48984555652";
const WHATSAPP_LINK = `https://wa.me/55${PHONE_NUMBER}?text=Olá!%20Gostaria%20de%20agendar%20uma%20avaliação%20com%20a%20Caroline%20Stein.`;
const INSTAGRAM_LINK = "https://www.instagram.com/estetica.carolinestein/";
const MAPS_LINK = "https://www.google.com/maps/place/Caroline+Stein+Est%C3%A9tica/data=!4m7!3m6!1s0x95273941fe270197:0x2f4045f5f5380a5f!8m2!3d-27.5968357!4d-48.5202143!16s%2Fg%2F11k9ry6b6r!19sChIJlwEn_kE5J5URXwo49fVFQC8";

const SERVICES = [
  {
    title: "Lábios",
    description: "Procedimentos para realçar e harmonizar o contorno e volume labial.",
    image: "https://i.imgur.com/mZxmZab.png"
  },
  {
    title: "Pálpebras",
    description: "Tratamentos avançados para rejuvenescimento e cuidado da área dos olhos.",
    image: "https://i.imgur.com/8pwbkRo.png"
  },
  {
    title: "Sobrancelhas",
    description: "Design personalizado para valorizar e harmonizar o seu olhar.",
    image: "https://i.imgur.com/nAjdYDR.png"
  },
  {
    title: "Harmonização",
    description: "Equilíbrio e simetria facial com resultados naturais.",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Bioestimuladores",
    description: "Estímulo natural da produção de colágeno para uma pele mais firme.",
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Saúde & Estética",
    description: "Cuidado integral para sua saúde, beleza e bem-estar.",
    image: "https://i.imgur.com/1clftZL.jpg"
  }
];

const RESULTS = [
  { title: "Resultado 1", image: "https://i.imgur.com/GESraTm.jpg" },
  { title: "Resultado 2", image: "https://i.imgur.com/KRRS9kg.jpg" },
  { title: "Resultado 3", image: "https://i.imgur.com/GESraTm.jpg" },
  { title: "Resultado 4", image: "https://i.imgur.com/KRRS9kg.jpg" },
  { title: "Resultado 5", image: "https://i.imgur.com/GESraTm.jpg" },
  { title: "Resultado 6", image: "https://i.imgur.com/KRRS9kg.jpg" }
];

const TIPS = [
  { title: "Cuidados Diários", image: "https://i.imgur.com/femYvkA.jpg", description: "Dicas essenciais para manter sua pele sempre saudável." },
  { title: "Hidratação", image: "https://i.imgur.com/oupjkH7.jpg", description: "A importância de nutrir a pele em todas as fases." },
  { title: "Bem-estar", image: "https://i.imgur.com/femYvkA.jpg", description: "Pequenos rituais que transformam sua autoestima." },
  { title: "Saúde da Pele", image: "https://i.imgur.com/oupjkH7.jpg", description: "Como cuidar da saúde reflete na sua beleza." }
];

const TESTIMONIALS = [
  {
    name: "Ana Paula",
    text: "Realizei preenchimento labial com a Caroline, o atendimento foi excelente, ela é prestativa, atenciosa e muito qualificada! Amei o resultado!"
  },
  {
    name: "Juliana Santos",
    text: "Profissionalismo e carinho em cada detalhe. Saí da clínica me sentindo renovada e confiante. Recomendo de olhos fechados!"
  },
  {
    name: "Mariana Costa",
    text: "Ambiente acolhedor, equipe atenciosa e resultado incrível! A Caroline entende exatamente o que você quer. Já indiquei para várias amigas."
  }
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    const handleMouseMove = (e: MouseEvent) => setMousePos({ x: e.clientX, y: e.clientY });
    
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const navLinks = [
    { name: "Início", href: "#home" },
    { name: "Serviços", href: "#servicos" },
    { name: "Resultados", href: "#resultados" },
    { name: "Dicas", href: "#dicas" },
    { name: "Sobre", href: "#sobre" },
    { name: "Contato", href: "#contato" },
  ];

  return (
    <div className="min-h-screen bg-[#FDFCFB] text-[#3D2E26] font-sans selection:bg-[#C4A882] selection:text-white">
      <div className="noise-overlay" />
      
      {/* Custom Cursor */}
      <div 
        className="cursor-dot hidden md:block" 
        style={{ left: mousePos.x, top: mousePos.y }} 
      />
      <div 
        className="cursor-ring hidden md:block" 
        style={{ left: mousePos.x, top: mousePos.y }} 
      />

      {/* Navigation */}
      <nav className={`fixed w-full z-[1000] transition-all duration-500 ${scrolled ? "bg-white/80 backdrop-blur-lg py-4 border-b border-black/5" : "bg-transparent py-8"}`}>
        <div className="max-w-[1800px] mx-auto px-8 md:px-12 flex justify-between items-center gap-12">
          <a href="#home" className="flex flex-col group flex-shrink-0 mr-8">
            <span className="font-script text-2xl md:text-3xl text-[#C4A882] leading-none">Caroline Stein</span>
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#8E8279] mt-1 group-hover:text-[#C4A882] transition-colors">Estética Avançada</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-[11px] uppercase tracking-[0.2em] font-medium hover:text-[#C4A882] transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#C4A882] transition-all group-hover:w-full" />
              </a>
            ))}
            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Agendar Agora
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="lg:hidden p-2 text-[#C4A882]" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:hidden bg-white absolute top-full left-0 w-full shadow-2xl p-8 space-y-6 flex flex-col items-center border-t border-black/5"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-sm uppercase tracking-widest font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full justify-center"
            >
              Agendar Agora
            </a>
          </motion.div>
        )}
      </nav>

      {/* Hero Section - Split Layout */}
      <section id="home" className="split-layout">
        <div className="flex flex-col justify-center px-8 md:px-20 lg:px-32 py-32 bg-[#F8F4F0]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <span className="section-subtitle">Caroline Stein Estética</span>
            <h1 className="section-title mb-8">
              Estética Avançada e <span className="italic text-[#C4A882]">Bem-estar</span>
            </h1>
            <p className="text-lg text-[#8E8279] mb-12 max-w-md leading-relaxed">
              Procedimentos estéticos personalizados para realçar sua beleza natural com segurança e excelência.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <MessageCircle size={18} />
                Agendar via WhatsApp
              </a>
              <a 
                href={`tel:${PHONE_NUMBER}`}
                className="btn-outline"
              >
                <Phone size={18} />
                (48) 98455-5652
              </a>
            </div>

            <div className="mt-20 grid grid-cols-2 gap-12 border-t border-black/5 pt-12">
              <div>
                <p className="font-serif text-3xl text-[#3D2E26]">10+</p>
                <p className="text-[10px] uppercase tracking-widest text-[#8E8279] mt-2">Anos de Experiência</p>
              </div>
              <div>
                <p className="font-serif text-3xl text-[#3D2E26]">5k+</p>
                <p className="text-[10px] uppercase tracking-widest text-[#8E8279] mt-2">Clientes Felizes</p>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="relative h-[60vh] lg:h-auto overflow-hidden">
          <motion.img 
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5 }}
            src="https://i.imgur.com/GTfwR2w.jpg" 
            alt="Caroline Stein Estética" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/5" />
          
          {/* Floating Badge */}
          <div className="absolute bottom-12 left-12 glass-card p-6 hidden md:block">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-[#C4A882] flex items-center justify-center text-white">
                <Star size={20} fill="currentColor" />
              </div>
              <div>
                <p className="font-serif text-xl leading-none">100%</p>
                <p className="text-[10px] uppercase tracking-widest text-[#8E8279] mt-1">Satisfação</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-32 px-8 md:px-12 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-24">
            <span className="section-subtitle">Nossos Serviços</span>
            <h2 className="section-title">Serviços</h2>
            <div className="w-20 h-[1px] bg-[#C4A882] mx-auto mt-8" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20">
            {SERVICES.map((service, index) => (
              <motion.div 
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="mb-8 overflow-hidden aspect-[4/3] bg-[#F8F4F0]">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="flex items-start gap-4 mb-4">
                  <span className="text-[10px] font-medium text-[#C4A882] tracking-widest">0{index + 1}</span>
                  <h3 className="font-serif text-2xl">{service.title}</h3>
                </div>
                <p className="text-sm text-[#8E8279] leading-relaxed mb-8 pl-8">
                  {service.description}
                </p>
                <a 
                  href={WHATSAPP_LINK} 
                  className="inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] font-bold text-[#C4A882] hover:text-[#3D2E26] transition-colors pl-8"
                >
                  Consultar <ChevronRight size={14} />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section id="resultados" className="py-32 px-8 md:px-12 bg-[#F8F4F0]">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-24">
            <span className="section-subtitle">Galeria</span>
            <h2 className="section-title">Resultados</h2>
            <p className="text-sm text-[#8E8279] mt-4 max-w-xl mx-auto">
              Confira alguns dos nossos resultados realizados com a técnica exclusiva Caroline Stein.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {RESULTS.map((result, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative overflow-hidden bg-white shadow-sm"
              >
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={result.image} 
                    alt={result.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section id="dicas" className="py-32 px-8 md:px-12 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
            <div className="max-w-2xl">
              <span className="section-subtitle">Informação</span>
              <h2 className="section-title">Dicas</h2>
              <p className="text-lg text-[#8E8279] mt-6">
                Explore nossas dicas sobre cuidados com a pele, rotina e bem-estar.
              </p>
            </div>
            <a 
              href={INSTAGRAM_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              Ver mais no Instagram
            </a>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {TIPS.map((tip, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col"
              >
                <div className="aspect-[4/5] overflow-hidden mb-6 bg-[#F8F4F0]">
                  <img 
                    src={tip.image} 
                    alt={tip.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h3 className="font-serif text-xl mb-2">{tip.title}</h3>
                <p className="text-sm text-[#8E8279] leading-relaxed">{tip.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-32 px-8 md:px-12 bg-[#F8F4F0]">
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-24 items-center">
          <div className="relative">
            <div className="aspect-[3/4] overflow-hidden">
              <img 
                src="https://i.imgur.com/4sdSrqF.jpg" 
                alt="Caroline Stein" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-[#C4A882] hidden lg:block -z-10" />
            <div className="absolute top-12 -left-12 font-script text-8xl text-[#C4A882] opacity-20 select-none">CS</div>
          </div>
          
          <div>
            <span className="section-subtitle">Sobre a Clínica</span>
            <h2 className="section-title mb-8">Cuidado com excelência e humanidade</h2>
            <p className="text-lg text-[#8E8279] mb-8 leading-relaxed">
              A Clínica Caroline Stein Estética nasceu com um propósito claro: unir ciência, estética e bem-estar em um ambiente acolhedor no coração de Santa Catarina.
            </p>
            <p className="text-lg text-[#8E8279] mb-12 leading-relaxed">
              A Caroline Stein lidera nossa equipe com expertise em procedimentos estéticos minimamente invasivos, sempre priorizando a naturalidade dos resultados e o conforto de cada paciente.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-8 mb-12">
              {[
                "Atendimento Personalizado",
                "Produtos de Alta Performance",
                "Técnicas Modernas e Seguras",
                "Ambiente Acolhedor"
              ].map((item) => (
                <div key={item} className="flex items-center gap-4">
                  <div className="w-2 h-2 rounded-full bg-[#C4A882]" />
                  <span className="text-sm font-medium tracking-wide">{item}</span>
                </div>
              ))}
            </div>

            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Agendar Consulta
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="depoimentos" className="py-32 px-8 md:px-12 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-24">
            <span className="section-subtitle">Experiências Reais</span>
            <h2 className="section-title">O que nossas pacientes dizem</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {TESTIMONIALS.map((t, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="p-12 bg-[#F8F4F0] relative group"
              >
                <div className="text-[#C4A882] mb-8">
                  <Star size={24} fill="currentColor" />
                </div>
                <p className="font-serif text-lg italic text-[#3D2E26] mb-12 leading-relaxed">
                  "{t.text}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-[1px] bg-[#C4A882]" />
                  <span className="text-[10px] uppercase tracking-[0.2em] font-bold">{t.name}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-40 px-8 md:px-12 bg-[#3D2E26] text-white text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-white" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-white" />
        </div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <span className="text-[10px] uppercase tracking-[0.4em] text-[#C4A882] mb-8 block">Transformação</span>
          <h2 className="section-title text-white mb-12">Pronta para se transformar?</h2>
          <p className="text-lg text-white/60 mb-16 max-w-xl mx-auto">
            Agende sua consulta de avaliação e descubra o tratamento ideal para você. Atendimento humanizado e resultados naturais.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <MessageCircle size={18} />
              Agendar pelo WhatsApp
            </a>
            <a 
              href="https://www.doctoralia.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm uppercase tracking-widest font-bold border-b border-white/20 pb-2 hover:border-[#C4A882] transition-all"
            >
              Agendar Online · Doctoralia
            </a>
          </div>
        </div>
      </section>

      {/* Contact & Footer */}
      <footer id="contato" className="py-32 px-8 md:px-12 bg-[#F8F4F0]">
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-20">
          <div className="lg:col-span-2">
            <a href="#home" className="flex flex-col mb-12">
              <span className="font-script text-4xl text-[#C4A882] leading-none">Caroline Stein</span>
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#8E8279] mt-2">Estética Avançada</span>
            </a>
            <p className="text-sm text-[#8E8279] max-w-sm leading-relaxed mb-12">
              Especialista em estética facial e corporal, dedicada a elevar sua autoestima com tratamentos de alta qualidade em Santa Catarina.
            </p>
            <div className="flex gap-6">
              <a href={INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center hover:bg-[#C4A882] hover:text-white transition-all">
                <Instagram size={18} />
              </a>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center hover:bg-[#C4A882] hover:text-white transition-all">
                <MessageCircle size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold mb-10">Navegação</h4>
            <ul className="space-y-6">
              {navLinks.map(link => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm text-[#8E8279] hover:text-[#C4A882] transition-colors">{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold mb-10">Onde nos encontrar</h4>
            <ul className="space-y-8">
              <li className="flex gap-4">
                <MapPin size={18} className="text-[#C4A882] shrink-0" />
                <a href={MAPS_LINK} target="_blank" rel="noopener noreferrer" className="text-sm text-[#8E8279] hover:text-[#C4A882] leading-relaxed">
                  Santa Catarina, Brasil
                </a>
              </li>
              <li className="flex gap-4">
                <Phone size={18} className="text-[#C4A882] shrink-0" />
                <div className="flex flex-col gap-2">
                  <a href={`tel:${PHONE_NUMBER}`} className="text-sm text-[#8E8279] hover:text-[#C4A882]">(48) 98455-5652</a>
                  <a href="tel:4833654239" className="text-sm text-[#8E8279] hover:text-[#C4A882]">(48) 3365-4239</a>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-[18px] h-[18px] flex items-center justify-center text-[#C4A882] font-bold text-xs shrink-0">D</div>
                <a href="https://www.doctoralia.com.br" target="_blank" rel="noopener noreferrer" className="text-sm text-[#8E8279] hover:text-[#C4A882]">doctoralia.com.br</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="max-w-[1400px] mx-auto mt-32 pt-12 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[10px] uppercase tracking-widest text-[#8E8279]">
            &copy; {new Date().getFullYear()} {BUSINESS_NAME}. Todos os direitos reservados.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-[10px] uppercase tracking-widest text-[#8E8279] hover:text-[#C4A882]">Privacidade</a>
            <a href="#" className="text-[10px] uppercase tracking-widest text-[#8E8279] hover:text-[#C4A882]">Termos</a>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a 
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-12 right-12 z-[1000] bg-[#25D366] text-white p-5 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center group"
      >
        <MessageCircle size={32} />
        <span className="absolute right-full mr-4 bg-white text-[#3D2E26] px-4 py-2 rounded-lg text-xs font-bold shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Fale Conosco
        </span>
      </a>
    </div>
  );
}
