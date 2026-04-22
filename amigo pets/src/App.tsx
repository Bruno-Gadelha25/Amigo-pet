/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Phone, 
  MapPin, 
  Clock, 
  Bath, 
  Scissors, 
  ShoppingBag, 
  Calendar, 
  CheckCircle2, 
  Star,
  Menu,
  X,
  MessageCircle
} from "lucide-react";
import { useState, useEffect } from "react";

const SERVICES = [
  {
    title: "Banho",
    description: "Limpeza profunda com produtos de alta qualidade para deixar seu pet cheiroso.",
    icon: <Bath className="w-8 h-8 text-brand-orange" />,
    image: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&q=80&w=400"
  },
  {
    title: "Tosa",
    description: "Cortes especializados que respeitam a raça e o conforto do seu animal.",
    icon: <Scissors className="w-8 h-8 text-brand-orange" />,
    image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&q=80&w=400"
  },
  {
    title: "Produtos",
    description: "As melhores marcas de ração, brinquedos e acessórios para seu pet.",
    icon: <ShoppingBag className="w-8 h-8 text-brand-orange" />,
    image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=400"
  },
  {
    title: "Consulta",
    description: "Acompanhamento profissional para garantir que a saúde esteja em dia.",
    icon: <Calendar className="w-8 h-8 text-brand-orange" />,
    image: "https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?auto=format&fit=crop&q=80&w=400"
  }
];

const DIFFERENTIALS = [
  {
    title: "Atendimento Especializado",
    description: "Nossa equipe é formada por apaixonados por animais e profissionais capacitados.",
    icon: <CheckCircle2 className="w-6 h-6" />
  },
  {
    title: "Ambiente Seguro",
    description: "Instalações modernas e higienizadas para o total bem-estar do seu pet.",
    icon: <CheckCircle2 className="w-6 h-6" />
  },
  {
    title: "Amor pelos Animais",
    description: "Cada pet é tratado como se fosse parte da nossa própria família.",
    icon: <CheckCircle2 className="w-6 h-6" />
  }
];

const TESTIMONIALS = [
  {
    name: "Mariana Silva",
    text: "O Amigo Pet é sensacional! Meu cachorro sempre volta feliz e muito cheiroso do banho.",
    pet: "Thor (Golden Retriever)",
    rating: 5
  },
  {
    name: "Ricardo Oliveira",
    text: "Confio de olhos fechados. A tosa higiênica é feita com muito cuidado e atenção.",
    pet: "Luna (Shitzu)",
    rating: 5
  },
  {
    name: "Cláudia Santos",
    text: "Produtos de primeira e um atendimento que nos faz sentir em casa. Recomendo muito!",
    pet: "Bento (Gato SRD)",
    rating: 5
  }
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    initial: {},
    whileInView: {
      transition: {
        staggerChildren: 0.2
      }
    },
    viewport: { once: true }
  };

  return (
    <div className="min-h-screen bg-brand-beige relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-paw-pattern opacity-[0.03] pointer-events-none"></div>
      {/* Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white shadow-md py-3 border-b border-brand-beige-border" : "bg-white/80 backdrop-blur-sm py-5 border-b border-brand-beige-border/50 shadow-sm"}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-brand-orange rounded-full">
              <Bath className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-extrabold text-brand-orange tracking-tight">AMIGO PET</span>
          </div>

          <div className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
            <a href="#inicio" className="hover:text-brand-orange transition-colors">Início</a>
            <a href="#sobre" className="hover:text-brand-orange transition-colors">Sobre</a>
            <a href="#servicos" className="hover:text-brand-orange transition-colors">Serviços</a>
            <a href="#contato" className="hover:text-brand-orange transition-colors">Contato</a>
            <button className="bg-brand-orange text-white px-6 py-2.5 rounded-full font-bold hover:bg-brand-orange-soft transition-all shadow-lg hover:shadow-brand-orange/20 active:scale-95">
              WhatsApp
            </button>
          </div>

          <button className="md:hidden text-brand-orange" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4 shadow-lg text-lg font-semibold"
          >
            <a href="#inicio" onClick={() => setIsMenuOpen(false)} className="py-2 text-gray-800">Início</a>
            <a href="#sobre" onClick={() => setIsMenuOpen(false)} className="py-2 text-gray-800">Sobre</a>
            <a href="#servicos" onClick={() => setIsMenuOpen(false)} className="py-2 text-gray-800">Serviços</a>
            <a href="#contato" onClick={() => setIsMenuOpen(false)} className="py-2 text-gray-800">Contato</a>
            <button className="bg-brand-orange text-white px-6 py-3 rounded-xl font-bold w-full shadow-md">
              Falar no WhatsApp
            </button>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="relative pt-32 pb-20 md:pt-48 md:pb-40 overflow-hidden bg-brand-beige/30">
        <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 text-center md:text-left mb-12 md:mb-0 bg-white/60 backdrop-blur-md p-6 sm:p-10 rounded-3xl md:rounded-[40px] border border-white shadow-2xl relative z-10">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-brand-orange font-bold tracking-widest text-sm uppercase mb-4 block">Bem-vindo à Amigo Pet</span>
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-brand-dark leading-[1.1] mb-6">
                Cuidado e carinho para o seu <span className="text-brand-orange">melhor amigo</span>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-10 max-w-lg leading-relaxed text-balance mx-auto md:mx-0">
                Banho, tosa e atenção que seu pet merece. Somos especialistas em transformar o dia do seu animalzinho em um momento de pura alegria.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <button className="bg-brand-orange text-white px-10 py-4 rounded-2xl text-lg font-bold hover:scale-105 active:scale-95 transition-all shadow-xl shadow-brand-orange/20 flex items-center justify-center gap-2">
                  <MessageCircle className="w-6 h-6" />
                  Falar no WhatsApp
                </button>
                <button className="bg-white text-brand-orange border-2 border-brand-orange px-10 py-4 rounded-2xl text-lg font-bold hover:bg-brand-orange/5 transition-all flex items-center justify-center active:scale-95">
                  Nossos Planos
                </button>
              </div>
            </motion.div>
          </div>
          <div className="w-full md:w-1/2 relative px-4 md:px-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-brand-yellow rounded-full blur-3xl opacity-30 -z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&q=80&w=800" 
                alt="Pets felizes" 
                className="rounded-[40px] shadow-2xl object-cover w-full aspect-[4/3] border-4 border-white md:transform md:rotate-3"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl hidden sm:flex items-center gap-3">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                  <Star fill="currentColor" />
                </div>
                <div>
                  <div className="font-bold text-gray-900">100% Satisfeitos</div>
                  <div className="text-sm text-gray-500">Mais de 500 pets cuidados</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sobre Section */}
      <section id="sobre" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <motion.div 
              {...fadeIn}
              className="md:w-1/2"
            >
              <img 
                src="https://images.unsplash.com/photo-1534361960057-19889db9621e?auto=format&fit=crop&q=80&w=800" 
                alt="Profissional cuidando de um pet" 
                className="rounded-3xl shadow-xl w-full"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <motion.div 
              {...fadeIn}
              className="md:w-1/2"
            >
              <h2 className="text-orange-500 font-bold uppercase tracking-widest text-sm mb-4">Sobre Nós</h2>
              <h3 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
                Cuidado e Confiança em cada detalhe
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                No Amigo Pet, acreditamos que cada animal é único. Nascemos da paixão por proporcionar um serviço de 
                alta qualidade, unindo técnicas modernas a um tratamento humanizado e carinhoso.
              </p>
              <div className="space-y-4">
                {DIFFERENTIALS.map((diff, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 bg-brand-beige/20 rounded-2xl border border-brand-beige/50">
                    <div className="text-brand-orange mt-1">{diff.icon}</div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg mb-1">{diff.title}</h4>
                      <p className="text-gray-600">{diff.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.div {...fadeIn}>
              <h2 className="text-orange-500 font-bold uppercase tracking-widest text-sm mb-4">O que fazemos</h2>
              <h3 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
                Serviços completos para seu amigo
              </h3>
              <p className="text-lg text-gray-600">
                Oferecemos uma gama completa de cuidados para garantir que seu pet esteja sempre saudável, bonito e feliz.
              </p>
            </motion.div>
          </div>
          
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {SERVICES.map((service, index) => (
              <motion.div 
                key={index}
                variants={fadeIn}
                className="bg-white rounded-3xl overflow-hidden shadow-md shadow-brand-orange/5 border border-brand-orange/5 hover:bg-brand-orange hover:text-white transition-all duration-500 group cursor-default"
              >
                <div className="h-40 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-8">
                  <div className="w-12 h-12 bg-brand-orange-soft/20 group-hover:bg-white/20 rounded-xl flex items-center justify-center mb-6 text-brand-orange group-hover:text-white transition-colors">
                    {service.icon}
                  </div>
                  <h4 className="text-2xl font-bold mb-2 transition-colors">{service.title}</h4>
                  <p className="text-gray-600 group-hover:text-white/90 text-sm leading-relaxed transition-colors">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-brand-orange overflow-hidden relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-yellow/20 rounded-full -ml-32 -mb-32 blur-3xl"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <motion.h2 {...fadeIn} className="text-white font-bold uppercase tracking-widest text-sm mb-4">Depoimentos</motion.h2>
            <motion.h3 {...fadeIn} className="text-4xl md:text-5xl font-extrabold text-white mb-6">Quem ama, confia</motion.h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((testimonial, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-3xl shadow-xl"
              >
                <div className="flex gap-1 mb-4 text-brand-yellow">
                  {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
                </div>
                <p className="text-gray-700 italic mb-6 leading-relaxed">"{testimonial.text}"</p>
                <div>
                  <h5 className="font-bold text-gray-900">{testimonial.name}</h5>
                  <p className="text-brand-orange text-sm font-medium">{testimonial.pet}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div {...fadeIn}>
              <h2 className="text-orange-500 font-bold uppercase tracking-widest text-sm mb-4">Contato</h2>
              <h3 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-8">Onde nos encontrar</h3>
              
              <div className="space-y-8">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 bg-brand-orange/10 rounded-xl flex items-center justify-center flex-shrink-0 text-brand-orange">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-1">WhatsApp e Telefone</h4>
                    <p className="text-gray-600 text-lg">(11) 99999-9999</p>
                    <p className="text-gray-600 text-lg">(11) 4444-4444</p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 bg-brand-orange/10 rounded-xl flex items-center justify-center flex-shrink-0 text-brand-orange">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-1">Horário de Funcionamento</h4>
                    <p className="text-gray-600 text-lg">Segunda a Sexta: 08h às 18h</p>
                    <p className="text-gray-600 text-lg">Sábado: 08h às 14h</p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 bg-brand-orange/10 rounded-xl flex items-center justify-center flex-shrink-0 text-brand-orange">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-1">Localização</h4>
                    <p className="text-gray-600 text-lg">Av. Principal dos Pets, 123 - Centro</p>
                    <p className="text-gray-600 text-lg">São Paulo - SP</p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <button className="bg-brand-orange text-white px-10 py-5 rounded-2xl w-full text-xl font-bold shadow-xl shadow-brand-orange/30 flex items-center justify-center gap-3 hover:scale-[1.02] active:scale-95 transition-all">
                  <MessageCircle className="w-7 h-7" />
                  Agendar via WhatsApp
                </button>
              </div>
            </motion.div>

            <motion.div 
              {...fadeIn}
              className="h-full min-h-[400px] rounded-3xl overflow-hidden border-8 border-brand-beige relative shadow-lg"
            >
              {/* Map Placeholder */}
              <div className="absolute inset-0 bg-gray-200 flex items-center justify-center flex-col p-8 text-center text-gray-500">
                <MapPin size={48} className="mb-4 opacity-30" />
                <p className="text-xl font-medium">Mapa Interativo</p>
                <p className="text-sm">Aqui será exibido o mapa com a nossa localização exata.</p>
              </div>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1972879555137!2d-46.6586071!3d-23.561413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da536cbd%3A0x103130283b7ea844!2sAv.%20Paulista%20-%20São%20Paulo%2C%20SP!5e0!3m2!1spt-BR!2sbr!4v1714101234567!5m2!1spt-BR!2sbr" 
                className="w-full h-full border-0 absolute top-0 left-0"
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12 text-gray-400">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 pb-12 border-b border-gray-800">
            <div className="flex items-center gap-2">
              <div className="p-1.5 bg-brand-orange rounded-full">
                <Bath className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-extrabold text-white">AMIGO PET</span>
            </div>
            <div className="flex gap-8 text-sm">
              <a href="#inicio" className="underline underline-offset-4 hover:text-white transition-colors">Política de Privacidade</a>
              <a href="#inicio" className="underline underline-offset-4 hover:text-white transition-colors">Termos de Uso</a>
            </div>
          </div>
          <div className="pt-8 text-center text-sm">
            <p>© 2024 Amigo Pet. Todos os direitos reservados.</p>
            <p className="mt-2">Desenvolvido com carinho para todos os pets.</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/5511999999999" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-[60] bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all group overflow-hidden flex items-center gap-0 hover:gap-3 px-4"
      >
        <MessageCircle size={32} />
        <span className="max-w-0 group-hover:max-w-[200px] transition-all duration-500 overflow-hidden whitespace-nowrap font-bold text-lg">
          Agendar Banho
        </span>
      </a>
    </div>
  );
}
