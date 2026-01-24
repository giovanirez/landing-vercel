/**
 * Landing Page de Alta Conversão - Produto Digital Educacional
 * Design: Brutalismo Político Contemporâneo Refinado
 * Melhorias: Hierarquia visual aprimorada, animações sofisticadas, layout assimétrico, tipografia dinâmica
 * Alteração: Tema Azul Global, com exceção da seção de Problema (Vermelho)
 * Atualização: Substituição de Emojis por Ícones Font Awesome Coloridos
 */

import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
// Importando ícones do Font Awesome (versão 5/6 via react-icons)
import { 
  FaExclamationTriangle, 
  FaBrain, 
  FaTimes, 
  FaTimesCircle, 
  FaBook, 
  FaBookOpen, 
  FaCheck, 
  FaUser, 
  FaHourglassHalf, 
  FaCommentDots, 
  FaMoneyBillWave, 
  FaDownload, 
  FaLock, 
  FaCircle,
  FaQuoteLeft
} from "react-icons/fa";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Reveal sections on scroll
      const sections = document.querySelectorAll("[data-section]");
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.75) {
          setVisibleSections((prev) => new Set(prev).add(section.id));
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const checkoutURL = "https://pay.kirvano.com/6d5227c5-8fef-42b6-b06a-7a1d7fb4b5af";

  const handleCheckout = () => {
    window.location.href = checkoutURL;
  };

  const scrollToOffer = () => {
    const offerSection = document.getElementById("offer");
    if (offerSection) {
      offerSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white overflow-hidden">
      {/* HERO SECTION - IMMEDIATE ATTENTION */}
      <section 
        id="hero"
        data-section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          {/* IMAGEM CENTRALIZADA AQUI: Adicionado object-center */}
          <img
            src="/images/brasilia-hero.jpg"
            alt="Congresso Nacional em Brasília sob atmosfera sombria e misteriosa"
            className="w-full h-full object-cover object-center opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a]/40 via-[#1a1a1a]/70 to-[#1a1a1a]" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#2563eb]/10 to-transparent rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 container max-w-6xl px-6 py-20">
          <div className="text-center space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.85] text-white">
                A Esquerda
              </h1>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.85] text-white">
                Não Vence
              </h1>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.85]">
                <span className="text-[#2563eb] relative">
                  no Voto.
                  <span className="absolute bottom-0 left-0 w-full h-2 bg-[#ffd700]" />
                </span>
              </h1>
            </div>

            <div className="pt-8">
              <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-white/90 leading-tight">
                O jogo é outro —<br />
                <span className="text-[#ffd700]">e você precisa entender antes que seja tarde demais.</span>
              </p>
            </div>

            <div className="max-w-2xl mx-auto pt-8 space-y-6">
              <div className="border-l-6 border-[#2563eb] pl-6 py-4">
                <p className="text-lg md:text-xl text-white/95 font-medium">
                  Este material é para quem é de direita<br />
                  e não quer ver a esquerda vencer as eleições mais uma vez.
                </p>
              </div>
              
              <div className="space-y-3 text-white/80">
                <p className="text-lg leading-relaxed">
                  Porque entender o jogo é a única forma de não ser surpreendido de novo.
                </p>
              </div>
            </div>

            <div className="pt-12 flex justify-center">
              <Button
                onClick={scrollToOffer}
                className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-black text-lg md:text-xl px-12 md:px-16 py-6 md:py-8 h-auto transition-all duration-200 relative group overflow-hidden"
              >
                <span className="absolute inset-0 bg-[#ffd700] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                <span className="relative z-10 flex items-center gap-3">
                  <span>ENTENDA O JOGO POR</span>
                  <span className="text-2xl font-black">R$17,90</span>
                </span>
              </Button>
            </div>

            {/* Trust badge - Ticks AZUL */}
            <div className="pt-8 flex justify-center gap-6 text-sm text-white/60">
              <div className="flex items-center gap-2">
                {/* Ícone substituído: Check */}
                <FaCheck className="text-[#2563eb] w-4 h-4" />
                <span>Acesso imediato</span>
              </div>
              <div className="flex items-center gap-2">
                <FaCheck className="text-[#2563eb] w-4 h-4" />
                <span>Leitura privada</span>
              </div>
              <div className="flex items-center gap-2">
                <FaCheck className="text-[#2563eb] w-4 h-4" />
                <span>Sem compromisso</span>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex flex-col items-center gap-3">
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-center justify-center group">
              <div className="w-1 h-3 bg-white/30 rounded-full group-hover:bg-[#2563eb] transition-all animate-pulse" />
            </div>
          </div>
        </div>
      </section>

      {/* IDENTIFICATION & ALERT SECTION */}
      <section 
        id="alert"
        data-section
        className={`py-24 md:py-32 bg-[#1a1a1a] border-t-8 border-[#2563eb] transition-all duration-1000 ${
          visibleSections.has("alert") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="container max-w-4xl">
          <div className="space-y-12">
            <div className="flex items-start gap-6">
              {/* Ícone substituído: Warning (Amarelo Ouro) */}
              <div className="flex-shrink-0">
                <FaExclamationTriangle className="text-6xl md:text-7xl text-yellow-500" />
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-white leading-tight">
                Se você é de direita,<br />
                <span className="text-[#ffd700]">ignore isso por sua conta e risco</span>
              </h2>
            </div>

            <div className="space-y-8 pl-0 md:pl-24">
              <p className="text-lg md:text-xl text-white/90 font-medium">
                Se você é de direita e acredita que eleições se decidem apenas:
              </p>

              <div className="space-y-4">
                {[
                  "no debate",
                  "na campanha oficial",
                  "ou no dia da votação"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4 group cursor-pointer">
                    <div className="w-12 h-12 bg-[#2563eb] flex items-center justify-center font-black text-white group-hover:bg-[#ffd700] group-hover:text-[#1a1a1a] transition-all">
                      {idx + 1}
                    </div>
                    <span className="text-xl text-white/90 group-hover:text-white transition-colors">{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-8 space-y-6 border-l-6 border-[#ffd700] pl-6">
                <p className="text-xl md:text-2xl font-bold text-white leading-snug">
                  então você está olhando apenas para a última etapa do processo.
                </p>

                <p className="text-lg md:text-xl text-white/90">
                  <span className="text-white font-bold">Quando o voto acontece,</span><br />
                  muita coisa já foi decidida.
                </p>

                <p className="text-lg text-white/80">
                  E quem não entende isso,<br />
                  <span className="text-white font-bold">costuma perceber tarde demais.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AUTHORITY & ANALYSIS SECTION */}
      <section 
        id="authority"
        data-section
        className={`py-24 md:py-32 bg-gradient-to-b from-[#0d0d0d] to-[#1a1a1a] transition-all duration-1000 ${
          visibleSections.has("authority") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="container max-w-7xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-10 order-2 md:order-1">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  {/* Ícone substituído: Cérebro (Rosa/Fúcsia para lembrar a cor do emoji) */}
                  <FaBrain className="text-4xl text-pink-500" />
                  <h2 className="text-3xl md:text-5xl font-black text-white leading-tight">
                    O erro estratégico que a direita repete
                  </h2>
                </div>
                <p className="text-xl text-[#ffd700] font-bold">— e a esquerda não</p>
              </div>

              <div className="space-y-8">
                <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                  Historicamente, a esquerda entendeu algo fundamental:
                </p>

                <div className="bg-[#1a1a1a] border-l-8 border-[#2563eb] p-6 md:p-8">
                  <p className="text-xl md:text-2xl font-bold text-white leading-snug">
                    Eleições não são vencidas apenas convencendo eleitores, mas moldando o ambiente onde a decisão acontece.
                  </p>
                </div>

                <div className="space-y-6">
                  <p className="text-white/90 font-medium">
                    Antes do período eleitoral, o trabalho já está em andamento:
                  </p>

                  <div className="space-y-4">
                    {[
                      "na linguagem que se torna 'aceitável'",
                      "nas pautas que dominam o debate",
                      "nos rótulos aplicados a quem discorda",
                      "no que pode ou não ser questionado"
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start gap-4 group">
                        <div className="w-8 h-8 bg-[#2563eb] flex items-center justify-center flex-shrink-0 group-hover:bg-[#ffd700] transition-colors">
                          <span className="text-white group-hover:text-[#1a1a1a] font-bold">▸</span>
                        </div>
                        <span className="text-lg text-white/90 pt-1">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 space-y-3">
                  <p className="text-white font-bold text-lg">
                    Nada disso é aleatório.
                  </p>
                  <p className="text-white/80">
                    E quase nunca é percebido por quem só reage.
                  </p>
                </div>
              </div>
            </div>

            <div className="order-1 md:order-2 relative group">
              <div className="absolute inset-0 bg-[#2563eb] opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
              <img
                src="/images/strategy-image.png"
                alt="Estratégia e planejamento em camadas"
                className="w-full h-auto border-8 border-[#2563eb] group-hover:shadow-2xl transition-all duration-300"
              />
            </div>
          </div>
        </div>
        <div className="pt-12 flex justify-center">
              <Button
                onClick={scrollToOffer}
                className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-black text-lg md:text-xl px-12 md:px-16 py-6 md:py-8 h-auto transition-all duration-200 relative group overflow-hidden"
              >
                <span className="absolute inset-0 bg-[#ffd700] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                <span className="relative z-10 flex items-center gap-3">
                  <span>ENTENDA O JOGO POR</span>
                  <span className="text-2xl font-black">R$17,90</span>
                </span>
              </Button>
            </div>
      </section>

      {/* PROBLEM SECTION */}
      <section 
        id="problem"
        data-section
        className={`py-24 md:py-32 bg-[#1a1a1a] border-t-8 border-white/10 transition-all duration-1000 ${
          visibleSections.has("problem") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="container max-w-4xl">
          <div className="space-y-12">
            <div className="flex items-start gap-6">
              {/* Ícone substituído: X Mark Circle (Vermelho Intenso) */}
              <div className="flex-shrink-0">
                <FaTimesCircle className="text-6xl md:text-7xl text-[#c41e3a]" />
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-white leading-tight">
                Por que a direita<br />
                <span className="text-[#c41e3a]">quase sempre chega atrasada</span>
              </h2>
            </div>

            <div className="space-y-6 pl-0 md:pl-24">
              <p className="text-lg md:text-xl text-white/90 font-medium">
                A direita, muitas vezes:
              </p>

              <div className="space-y-5">
                {[
                  "entra tarde na disputa",
                  "reage em vez de antecipar",
                  "discute fatos enquanto o jogo é emocional",
                  "acredita que 'a verdade se impõe sozinha'"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-6 group">
                    {/* Ícone substituído: X simples (Vermelho) */}
                    <div className="flex-shrink-0 pt-1">
                      <FaTimes className="text-4xl text-[#c41e3a] group-hover:text-[#ffd700] transition-colors" />
                    </div>
                    <span className="text-xl text-white/90 group-hover:text-white transition-colors pt-1">{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-12 space-y-6 border-t-2 border-white/20 pt-12">
                <p className="text-2xl md:text-3xl font-bold text-white leading-snug">
                  Enquanto isso, a narrativa já foi construída.
                </p>
                
                <p className="text-lg md:text-xl text-white/90">
                  <span className="text-white font-bold text-2xl">o voto vira apenas o ato final.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-12 flex justify-center">
              <Button
                onClick={scrollToOffer}
                className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-black text-lg md:text-xl px-12 md:px-16 py-6 md:py-8 h-auto transition-all duration-200 relative group overflow-hidden"
              >
                <span className="absolute inset-0 bg-[#ffd700] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                <span className="relative z-10 flex items-center gap-3">
                  <span>VIRE O JOGO POR</span>
                  <span className="text-2xl font-black">R$17,90</span>
                </span>
              </Button>
            </div>
      </section>

      {/* PRODUCT EXPLANATION SECTION */}
      <section 
        id="product"
        data-section
        className={`py-24 md:py-32 bg-gradient-to-b from-[#0d0d0d] to-[#1a1a1a] transition-all duration-1000 ${
          visibleSections.has("product") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="container max-w-6xl">
          <div className="bg-[#1a1a1a] border-8 border-[#2563eb] p-8 md:p-16 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#2563eb]/5 rounded-full blur-3xl group-hover:bg-[#2563eb]/10 transition-all duration-300" />

            <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
              <div className="flex justify-center order-2 md:order-1">
                <img
                  src="/images/product-mockup.png"
                  alt="Material digital educacional"
                  className="w-full max-w-sm h-auto transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="space-y-8 order-1 md:order-2">
                <h2 className="text-3xl md:text-4xl font-black text-white flex items-center gap-4">
                  {/* Ícone substituído: Livro (Azul) */}
                  <FaBook className="text-blue-600" />
                  <span>
                    O que você vai<br />
                    <span className="text-[#ffd700]">acessar exatamente</span>
                  </span>
                </h2>

                <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                  <span className="font-bold text-white">"A Esquerda Não Ganha Eleições no Voto"</span> é um material analítico e direto, criado para pessoas de direita que:
                </p>

                <div className="space-y-4">
                  {[
                    "não querem ver a esquerda vencer novamente",
                    "sentem que 'tem algo acontecendo' antes das eleições",
                    "querem entender como a vantagem é construída",
                    "não aceitam mais ser surpreendidas no final"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-4 group/item">
                      <div className="w-10 h-10 bg-[#2563eb] flex items-center justify-center flex-shrink-0 group-hover/item:bg-[#ffd700] transition-all">
                        {/* Ícone substituído: Check (Branco/Preto no hover) */}
                        <FaCheck className="text-white group-hover/item:text-[#1a1a1a] text-lg" />
                      </div>
                      <span className="text-lg text-white/90 group-hover/item:text-white transition-colors pt-1">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-8 space-y-4 bg-[#0d0d0d] p-6 border-l-6 border-[#ffd700]">
                  <p className="text-sm text-white/60">
                    <span className="font-semibold text-white/80">Disclaimer:</span> Este material não diz em quem votar, não promove campanhas e não ensina mobilização política.
                  </p>
                  <p className="text-white font-bold text-lg">
                    Ele entrega clareza.<br />
                    <span className="text-[#ffd700]">E clareza muda tudo.</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT & BENEFITS SECTION */}
      <section 
        id="benefits"
        data-section
        className={`py-24 md:py-32 bg-[#1a1a1a] border-t-8 border-white/10 transition-all duration-1000 ${
          visibleSections.has("benefits") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="container max-w-4xl">
          <div className="flex items-center gap-4 mb-16">
            {/* Ícone substituído: Livros Abertos (Laranja/Dourado) */}
            <FaBookOpen className="text-5xl md:text-6xl text-orange-500 flex-shrink-0" />
            <h2 className="text-3xl md:text-5xl font-black text-white">
              O que você vai enxergar<br />
              <span className="text-[#ffd700]">depois de ler este material</span>
            </h2>
          </div>

          <div className="space-y-4">
            {[
              "Por que a eleição começa antes do ano eleitoral",
              "Como a esquerda constrói vantagem fora do período oficial",
              "Como narrativas se tornam consenso",
              "O papel da mídia, da repetição e da pressão social",
              "Por que discutir só 'fatos' quase nunca funciona",
              "Como identificar padrões antes que seja tarde"
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-4 text-lg md:text-xl text-white bg-[#0d0d0d] p-6 md:p-8 border-l-8 border-[#2563eb] group hover:bg-[#1a1a1a] transition-all duration-300 cursor-pointer transform hover:translate-x-2"
              >
                {/* Ícone substituído: Check (Dourado -> Azul) */}
                <FaCheck className="text-2xl md:text-3xl text-[#ffd700] flex-shrink-0 group-hover:text-[#2563eb] transition-colors" />
                <span className="group-hover:text-[#ffd700] transition-colors">{item}</span>
              </div>
            ))}
          </div>

          <div className="pt-16 text-center">
            <p className="text-2xl md:text-3xl font-black text-white leading-snug">
              Depois disso, você nunca mais<br />
              <span className="text-[#ffd700]">olha para eleições da mesma forma.</span>
            </p>
          </div>
        </div>
      </section>
      
      <div className="pt-12 flex justify-center">
        <Button
          onClick={scrollToOffer}
          className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-black text-lg md:text-xl px-12 md:px-16 py-6 md:py-8 h-auto transition-all duration-200 relative group overflow-hidden"
        >
          <span className="absolute inset-0 bg-[#ffd700] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          <span className="relative z-10 flex items-center gap-3">
            <span>ACESSAR AGORA POR</span>
            <span className="text-2xl font-black">R$17,90</span>
          </span>
        </Button>
      </div>

      {/* WHO IT IS FOR / NOT FOR SECTION */}
      <section 
        id="qualification"
        data-section
        className={`py-24 md:py-32 bg-gradient-to-b from-[#0d0d0d] to-[#1a1a1a] transition-all duration-1000 ${
          visibleSections.has("qualification") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="container max-w-5xl">
          <div className="flex flex-col items-center mb-16">
            {/* Ícone substituído: Usuário (Azul Claro) */}
            <FaUser className="text-6xl text-blue-400 mb-6" />
            <h2 className="text-3xl md:text-5xl font-black text-white text-center">
              Este material é para você<br />
              <span className="text-[#ffd700]">— e não é para todo mundo</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#1a1a1a] p-8 md:p-10 border-8 border-[#2563eb] group hover:shadow-2xl transition-all duration-300">
              <h3 className="text-2xl md:text-3xl font-black text-[#2563eb] mb-8 group-hover:text-[#ffd700] transition-colors">
                É para você, se:
              </h3>
              <ul className="space-y-5">
                {[
                  "você é de direita",
                  "você não quer ver a esquerda ganhar de novo",
                  "você quer entender o jogo antes, não reclamar depois",
                  "você prefere leitura crítica a torcida cega"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 group/item">
                    {/* Ícone substituído: Check (Azul -> Dourado) */}
                    <FaCheck className="text-[#2563eb] text-2xl flex-shrink-0 group-hover/item:text-[#ffd700] transition-colors" />
                    <span className="text-lg text-white/90 group-hover/item:text-white transition-colors pt-1">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[#0d0d0d] p-8 md:p-10 border-8 border-white/20 group hover:border-white/40 transition-all duration-300">
              <h3 className="text-2xl md:text-3xl font-black text-white/70 mb-8 group-hover:text-white transition-colors">
                Não é para:
              </h3>
              <ul className="space-y-5">
                {[
                  "quem busca briga",
                  "slogans",
                  "militância vazia"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 group/item">
                    {/* Ícone substituído: Times (Branco/Cinza -> Azul) */}
                    <FaTimes className="text-white/40 text-2xl flex-shrink-0 group-hover/item:text-[#2563eb] transition-colors" />
                    <span className="text-lg text-white/60 group-hover/item:text-white/80 transition-colors pt-1">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* URGENCY SECTION */}
      <section 
        id="urgency"
        data-section
        className={`py-24 md:py-32 bg-[#1a1a1a] border-t-8 border-[#ffd700] transition-all duration-1000 ${
          visibleSections.has("urgency") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="container max-w-5xl">
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
            <div className="flex-shrink-0 group">
              <img
                src="/images/urgency-icon.png"
                alt="Urgência temporal"
                className="w-40 h-40 md:w-56 md:h-56 group-hover:scale-110 transition-transform duration-300"
              />
            </div>

            <div className="space-y-8 flex-1">
              <div className="flex items-start gap-4">
                {/* Ícone substituído: Ampulheta (Âmbar/Areia) */}
                <FaHourglassHalf className="text-5xl text-amber-500 flex-shrink-0 mt-1" />
                <h2 className="text-3xl md:text-5xl font-black text-white leading-tight">
                  Por que ignorar isso agora<br />
                  <span className="text-[#ffd700]">cobra um preço depois</span>
                </h2>
              </div>

              <div className="space-y-6">
                <div className="bg-[#0d0d0d] p-8 border-l-8 border-[#2563eb]">
                  <p className="text-xl text-white/90 leading-relaxed">
                    Toda eleição parece diferente.<br />
                    <span className="text-white font-bold text-2xl">Mas os métodos se repetem.</span>
                  </p>
                </div>

                <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
                  Quem entende o jogo enquanto ele acontece,<br />
                  <span className="text-white font-bold">não precisa se perguntar depois:</span>
                </p>

                <div className="bg-[#2563eb] p-8 md:p-10">
                  <p className="text-2xl md:text-3xl font-black text-white">
                    "como isso aconteceu de novo?"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF SECTION */}
      <section 
        id="social-proof"
        data-section
        className={`py-24 md:py-32 bg-gradient-to-b from-[#0d0d0d] to-[#1a1a1a] transition-all duration-1000 ${
          visibleSections.has("social-proof") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="container max-w-6xl">
          <div className="flex justify-center items-center gap-4 mb-16">
            {/* Ícone substituído: Balão de Fala (Azul Claro) */}
            <FaCommentDots className="text-5xl text-blue-300" />
            <h2 className="text-3xl md:text-5xl font-black text-white text-center">
              O que leitores dizem<br />
              <span className="text-[#ffd700]">depois de entender o jogo</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              "Isso explica exatamente por que a direita sempre parece chegar atrasada.",
              "Depois que você entende o padrão, não tem como desver.",
              "Não é sobre raiva. É sobre entender o jogo."
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-[#1a1a1a] p-8 md:p-10 border-8 border-white/10 relative group hover:border-[#2563eb] transition-all duration-300 hover:shadow-2xl"
              >
                {/* Ícone substituído: Aspas (Azul) */}
                <FaQuoteLeft className="text-5xl text-[#2563eb] opacity-20 absolute top-4 left-4 group-hover:opacity-40 transition-opacity" />
                <p className="text-lg md:text-xl text-white/90 leading-relaxed relative z-10 pt-8 group-hover:text-white transition-colors">
                  {testimonial}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OFFER SECTION */}
      <section 
        id="offer"
        data-section
        className={`py-24 md:py-32 bg-[#1a1a1a] border-t-8 border-white/10 transition-all duration-1000 ${
          visibleSections.has("offer") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="container max-w-5xl">
          <div className="bg-gradient-to-br from-[#0d0d0d] to-[#1a1a1a] border-8 border-[#2563eb] p-8 md:p-16 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-[#2563eb]/5 via-transparent to-[#ffd700]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="relative z-10 space-y-12">
              <div className="flex flex-col items-center gap-4">
                {/* Ícone substituído: Dinheiro (Verde Dólar) */}
                <FaMoneyBillWave className="text-6xl text-green-500" />
                <h2 className="text-3xl md:text-5xl font-black text-white text-center leading-tight">
                  Acesso completo por<br />
                  <span className="text-[#ffd700]">um valor simbólico</span>
                </h2>
              </div>

              <p className="text-lg md:text-xl text-white/90 text-center leading-relaxed max-w-3xl mx-auto">
                Todo esse conteúdo foi organizado para entregar clareza antes que o jogo termine — não para elitizar informação.
              </p>

              <div className="flex justify-center">
                <div className="bg-[#2563eb] border-8 border-[#ffd700] p-8 md:p-12 text-center group/price hover:bg-[#1d4ed8] transition-all duration-300">
                  <p className="text-white/80 text-lg md:text-xl mb-2">Acesso completo por apenas</p>
                  <p className="text-white font-black text-7xl md:text-8xl leading-none">R$17,90</p>
                  <p className="text-white/70 text-sm md:text-base mt-4 font-medium">Menos do que uma refeição fora de casa</p>
                </div>
              </div>

              {/* Features com Ícones Coloridos */}
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { icon: <FaBook className="text-[#2563eb]" />, text: "Conteúdo direto e organizado" },
                  { icon: <FaDownload className="text-[#ffd700]" />, text: "Acesso digital imediato" },
                  { icon: <FaLock className="text-green-500" />, text: "Leitura privada e segura" }
                ].map((feature, index) => (
                  <div key={index} className="text-center group/feature flex flex-col items-center">
                    <div className="text-5xl mb-4 group-hover/feature:scale-125 transition-transform duration-300">
                      {feature.icon}
                    </div>
                    <p className="text-white font-semibold group-hover/feature:text-[#ffd700] transition-colors">{feature.text}</p>
                  </div>
                ))}
              </div>

              <div className="flex justify-center pt-8">
                <Button
                  onClick={handleCheckout}
                  className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-black text-lg md:text-2xl px-12 md:px-20 py-8 md:py-10 h-auto transition-all duration-200 relative group/btn overflow-hidden border-4 border-[#ffd700]"
                >
                  <span className="absolute inset-0 bg-[#ffd700] transform scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-300 origin-left" />
                  <span className="relative z-10 group-hover/btn:text-[#1a1a1a] transition-colors">
                    Acessar agora por R$17,90
                  </span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section 
        id="final-cta"
        data-section
        className={`py-24 md:py-32 bg-gradient-to-b from-[#0d0d0d] to-[#1a1a1a] transition-all duration-1000 ${
          visibleSections.has("final-cta") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="container max-w-4xl text-center">
          <div className="flex justify-center mb-6">
            {/* Ícone substituído: Círculo/Alerta (Vermelho) */}
            <FaCircle className="text-4xl text-red-600 animate-pulse" />
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-[#2563eb] mb-12">
            Entender agora ou<br />
            <span className="text-white">se surpreender depois</span>
          </h2>

          <div className="space-y-8 mb-16">
            <p className="text-3xl md:text-4xl font-black text-white leading-tight">
              A Esquerda Não Ganha Eleições no Voto.
            </p>
            <p className="text-2xl md:text-3xl font-bold text-white/90">
              Entenda o jogo antes que ele termine.
            </p>
            <div className="bg-[#1a1a1a] border-l-8 border-[#ffd700] p-8 md:p-10">
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
                Se você é de direita<br />
                e não quer ser pego de surpresa novamente,<br />
                <span className="text-white font-bold text-2xl md:text-3xl">o acesso está liberado agora por apenas R$17,90.</span>
              </p>
            </div>
          </div>

          <Button
            onClick={scrollToOffer}
            className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-black text-lg md:text-2xl px-12 md:px-20 py-8 md:py-10 h-auto transition-all duration-200 relative group/btn overflow-hidden border-4 border-[#ffd700]"
          >
            <span className="absolute inset-0 bg-[#ffd700] transform scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-300 origin-left" />
            <span className="relative z-10 group-hover/btn:text-[#1a1a1a] transition-colors">
              Clique aqui para acessar por R$17,90
            </span>
          </Button>
        </div>
      </section>

      {/* LEGAL DISCLAIMER */}
      <section className="py-12 bg-[#0d0d0d] border-t-2 border-white/10">
        <div className="container max-w-4xl text-center">
          <p className="text-xs md:text-sm text-white/40 leading-relaxed">
            Este conteúdo tem caráter educacional e analítico, voltado à compreensão crítica do processo eleitoral.
          </p>
        </div>
      </section>
    </div>
  );
}