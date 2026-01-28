/**
 * Landing Page de Alta Conversão - Produto Digital Educacional
 * Design: Patriota Moderno
 * Atualizações: 
 * - Texto "Não Vence" agora em VERDE (#00c24a) para maior destaque.
 * - Mantidos todos os ajustes anteriores (Botões verdes, Imagem hero, Seção "Não é para" em vermelho).
 */

import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
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
  FaQuoteLeft,
  FaFlag,
  FaGift,
  FaMapMarkedAlt,
  FaClipboardCheck,
  FaNewspaper,
  FaCheckCircle
} from "react-icons/fa";

export default function Home() {
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());

  useEffect(() => {
    const handleScroll = () => {
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
    // @ts-ignore 
    if (typeof window.fbq === 'function') {
       // @ts-ignore
       window.fbq('track', 'InitiateCheckout'); 
    }
    window.location.href = checkoutURL;
  };

  const scrollToOffer = () => {
    const offerSection = document.getElementById("offer");
    if (offerSection) {
      offerSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white overflow-hidden font-sans selection:bg-[#00c24a] selection:text-black">
      
      {/* HERO SECTION */}
      <section 
        id="hero"
        data-section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          {/* IMAGEM BRASÍLIA: Opacidade ajustada para visibilidade ideal */}
          <img
            src="/images/brasilia-hero.jpg"
            alt="Congresso Nacional em Brasília"
            className="w-full h-full object-cover object-center opacity-40 grayscale-0"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/60 via-[#050505]/80 to-[#050505]" />
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#002776]/20 rounded-full blur-[120px]" />
        </div>

        <div className="relative z-10 container max-w-6xl px-6 py-20">
          <div className="text-center space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#00c24a]/30 bg-[#00c24a]/10 backdrop-blur-md mb-4 shadow-[0_0_15px_rgba(0,196,59,0.2)]">
              <FaFlag className="text-[#00c24a]" />
              <span className="text-[#00c24a] font-bold text-sm tracking-widest uppercase">Estratégia Política</span>
            </div>

            <div className="space-y-2">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9] text-white drop-shadow-xl">
                A Esquerda
              </h1>
              {/* MUDANÇA AQUI: Cor alterada de white/50 para verde (#00c24a) */}
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9] text-[#00c24a] drop-shadow-[0_0_20px_rgba(0,196,59,0.3)]">
                Não Vence
              </h1>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9]">
                <span className="text-gradient-brasil relative inline-block drop-shadow-[0_0_10px_rgba(0,196,59,0.5)]">
                  no Voto.
                </span>
              </h1>
            </div>

            <div className="pt-8 max-w-3xl mx-auto">
              <p className="text-2xl md:text-3xl font-medium text-white/90 leading-tight">
                O jogo é outro —<br className="md:hidden" /> e você precisa entender <br className="hidden md:block" />
                <span className="text-[#ffdf00] font-bold underline decoration-[#00c24a] decoration-4 underline-offset-4">antes que seja tarde demais.</span>
              </p>
            </div>

            <div className="max-w-2xl mx-auto pt-8 space-y-6">
              <div className="glass-card rounded-2xl p-6 border-l-4 border-l-[#00c24a]">
                <p className="text-lg md:text-xl text-white font-medium">
                  Este material é para quem é de direita e não quer ver a esquerda vencer as eleições mais uma vez.
                </p>
              </div>
            </div>


            <div className="pt-8 flex flex-wrap justify-center gap-6 text-sm text-white/50 font-medium">
              <div className="flex items-center gap-2">
                <FaCheck className="text-[#00c24a]" /> <span>Acesso imediato</span>
              </div>
              <div className="flex items-center gap-2">
                <FaCheck className="text-[#00c24a]" /> <span>Leitura privada</span>
              </div>
              <div className="flex items-center gap-2">
                <FaCheck className="text-[#00c24a]" /> <span>Sem compromisso</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* IDENTIFICATION & ALERT SECTION */}
      <section 
        id="alert"
        data-section
        className={`py-24 relative overflow-hidden transition-all duration-1000 ${
          visibleSections.has("alert") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="container max-w-4xl relative z-10">
          <div className="glass-card p-8 md:p-12 rounded-3xl border border-[#ffdf00]/20 shadow-[0_0_50px_rgba(255,223,0,0.05)]">
            <div className="flex flex-col md:flex-row items-start gap-8 mb-10">
              <div className="p-4 bg-[#ffdf00]/10 rounded-2xl border border-[#ffdf00]/20">
                <FaExclamationTriangle className="text-5xl text-[#ffdf00]" />
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-white leading-tight">
                Se você é de direita,<br />
                <span className="text-[#ffdf00]">ignore isso por sua conta e risco</span>
              </h2>
            </div>

            <div className="space-y-8">
              <p className="text-xl text-white/80 font-medium">
                Se você é de direita e acredita que eleições se decidem apenas:
              </p>

              <div className="grid md:grid-cols-3 gap-4">
                {["no debate", "na campanha oficial", "no dia da votação"].map((item, idx) => (
                  <div key={idx} className="bg-[#121212] p-4 rounded-xl border border-white/5 flex items-center justify-center gap-3 group hover:border-[#00c24a]/50 transition-colors cursor-pointer">
                    <span className="w-8 h-8 rounded-full bg-[#00c24a]/20 text-[#00c24a] flex items-center justify-center font-bold text-sm border border-[#00c24a]/30">{idx + 1}</span>
                    <span className="font-bold text-white group-hover:text-[#00c24a] transition-colors">{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-8 space-y-6 border-l-4 border-[#ffdf00] pl-6">
                <p className="text-xl md:text-2xl font-bold text-white leading-snug">
                  então você está olhando apenas para a última etapa do processo.
                </p>
                <p className="text-lg md:text-xl text-white/70">
                  <span className="text-white font-bold">Quando o voto acontece,</span><br />
                  muita coisa já foi decidida.
                </p>
                <p className="text-lg text-white/60">
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
        className={`py-24 relative transition-all duration-1000 ${
          visibleSections.has("authority") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505] to-[#0a0a0a]" />
        
        <div className="container max-w-7xl relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-10 order-2 md:order-1">
              <div className="space-y-4">
                <div className="flex items-center gap-3 mb-4">
                  <FaBrain className="text-4xl text-[#00c24a]" />
                  <span className="text-[#00c24a] font-bold tracking-wider text-sm uppercase">Análise Estratégica</span>
                </div>
                <h2 className="text-4xl md:text-6xl font-black text-white leading-tight">
                  O erro estratégico que a direita repete
                </h2>
                <p className="text-xl text-[#ffdf00] font-bold italic">— e a esquerda não</p>
              </div>

              <div className="space-y-8">
                <p className="text-lg md:text-xl text-white/80 leading-relaxed">
                  Historicamente, a esquerda entendeu algo fundamental:
                </p>
                
                <div className="glass-card p-8 rounded-2xl border-l-4 border-l-[#00c24a]">
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
                      <div key={idx} className="flex items-start gap-4 group p-2 hover:bg-white/5 rounded-lg transition-colors">
                        <div className="w-6 h-6 rounded-full bg-[#00c24a]/20 flex items-center justify-center flex-shrink-0 mt-1">
                          <span className="text-[#00c24a] text-xs">▸</span>
                        </div>
                        <span className="text-lg text-white/80 group-hover:text-white transition-colors">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 space-y-3">
                  <p className="text-white font-bold text-lg">
                    Nada disso é aleatório.
                  </p>
                  <p className="text-white/60">
                    E quase nunca é percebido por quem só reage.
                  </p>
                </div>
              </div>
            </div>

            <div className="order-1 md:order-2 relative group">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#00c24a] to-[#ffdf00] opacity-20 blur-3xl group-hover:opacity-30 transition-opacity" />
              <img
                src="/images/strategy-image.png"
                alt="Estratégia e planejamento"
                className="relative w-full h-auto rounded-2xl border border-white/10 shadow-2xl rotate-2 group-hover:rotate-0 transition-transform duration-500"
              />
            </div>
          </div>
          
          <div className="pt-16 flex justify-center">
            <Button
              onClick={scrollToOffer}
              className="bg-[#00c24a] hover:bg-[#009c3b] text-white font-black text-xl px-12 py-8 h-auto rounded-xl shadow-[0_0_20px_rgba(0,196,59,0.4)] transition-all hover:scale-105"
            >
              <span className="relative z-10 flex items-center gap-3">
                <span>ENTENDA O JOGO POR</span>
                <span className="bg-black/20 px-2 py-1 rounded text-[#ffdf00]">R$17,90</span>
              </span>
            </Button>
          </div>
        </div>
      </section>

      {/* PROBLEM SECTION */}
      <section 
        id="problem"
        data-section
        className={`py-24 bg-[#080808] relative overflow-hidden transition-all duration-1000 ${
          visibleSections.has("problem") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-900/10 via-transparent to-transparent opacity-40" />
        
        <div className="container max-w-4xl relative z-10">
          <div className="space-y-12">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 p-4 bg-red-900/10 rounded-2xl border border-red-900/20">
                <FaTimesCircle className="text-5xl text-[#c41e3a]" />
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-white leading-tight">
                Por que a direita<br />
                <span className="text-[#c41e3a] drop-shadow-[0_0_15px_rgba(196,30,58,0.4)]">quase sempre chega atrasada</span>
              </h2>
            </div>

            <div className="space-y-6 pl-0 md:pl-24">
              <p className="text-lg md:text-xl text-white/80 font-medium">
                A direita, muitas vezes:
              </p>

              <div className="grid gap-4">
                {[
                  "entra tarde na disputa",
                  "reage em vez de antecipar",
                  "discute fatos enquanto o jogo é emocional",
                  "acredita que 'a verdade se impõe sozinha'"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-6 group bg-[#121212] p-4 rounded-xl border border-white/5 hover:border-[#c41e3a]/40 transition-colors">
                    <FaTimes className="text-2xl text-[#c41e3a] flex-shrink-0" />
                    <span className="text-xl text-white/80 group-hover:text-white transition-colors">{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-12 space-y-6 border-t border-white/10 mt-12">
                <p className="text-2xl md:text-3xl font-bold text-white leading-snug">
                  Enquanto isso, a narrativa já foi construída.
                </p>
                <p className="text-lg md:text-xl text-white/60">
                  <span className="text-white font-bold text-2xl">o voto vira apenas o ato final.</span>
                </p>
              </div>
            </div>
          </div>
          
          <div className="pt-12 flex justify-center">
            <Button
              onClick={scrollToOffer}
              className="bg-[#00c24a] hover:bg-[#009c3b] text-white font-black text-xl px-12 py-8 h-auto rounded-xl shadow-[0_0_20px_rgba(0,196,59,0.4)] transition-all hover:scale-105"
            >
              <span className="relative z-10 flex items-center gap-3">
                <span>VIRE O JOGO POR</span>
                <span className="bg-black/20 px-2 py-1 rounded text-[#ffdf00]">R$17,90</span>
              </span>
            </Button>
          </div>
        </div>
      </section>

      {/* PRODUCT EXPLANATION SECTION */}
      <section 
        id="product"
        data-section
        className={`py-24 transition-all duration-1000 ${
          visibleSections.has("product") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="container max-w-6xl">
          <div className="glass-card rounded-3xl p-8 md:p-16 relative overflow-hidden group border-[#00c24a]/30">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-b from-[#00c24a]/10 to-transparent rounded-full blur-3xl pointer-events-none" />

            <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
              <div className="flex justify-center order-2 md:order-1">
                <img
                  src="/images/product-mockup.png"
                  alt="Material digital educacional"
                  className="w-full max-w-sm h-auto drop-shadow-[0_0_30px_rgba(0,196,59,0.3)] transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="space-y-8 order-1 md:order-2">
                <div className="space-y-2">
                  <h2 className="text-3xl md:text-4xl font-black text-white flex items-center gap-4">
                    <FaBook className="text-[#00c24a]" />
                    <span>
                      O que você vai<br />
                      <span className="text-[#ffdf00]">acessar exatamente</span>
                    </span>
                  </h2>
                </div>

                <p className="text-lg md:text-xl text-white/80 leading-relaxed">
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
                      <div className="w-8 h-8 rounded-lg bg-[#00c24a]/20 flex items-center justify-center flex-shrink-0">
                        <FaCheck className="text-[#00c24a]" />
                      </div>
                      <span className="text-lg text-white/90 group-hover/item:text-white transition-colors pt-1">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-8 space-y-4 bg-[#0a0a0a]/60 p-6 border-l-4 border-[#ffdf00] rounded-r-xl">
                  <p className="text-sm text-white/50">
                    <span className="font-semibold text-white/80">Disclaimer:</span> Este material não diz em quem votar, não promove campanhas e não ensina mobilização política.
                  </p>
                  <p className="text-white font-bold text-lg">
                    Ele entrega clareza.<br />
                    <span className="text-[#ffdf00]">E clareza muda tudo.</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
                  {/* BONUS SECTION */}
      <section 
        id="bonus"
        data-section
        className={`py-24 relative overflow-hidden transition-all duration-1000 ${
          visibleSections.has("bonus") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Elemento decorativo de fundo */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#00c24a]/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="container max-w-6xl relative z-10">
          <div className="flex flex-col items-center text-center mb-16 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#ffdf00]/30 bg-[#ffdf00]/10 backdrop-blur-md shadow-[0_0_15px_rgba(255,223,0,0.2)]">
              <FaGift className="text-[#ffdf00]" />
              <span className="text-[#ffdf00] font-bold text-sm tracking-widest uppercase">Acesso Gratuito</span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-black text-white">
              Bônus Exclusivos<br />
              <span className="text-[#00c24a]">Liberados Gratuitamente</span>
            </h2>
            
            <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
              Ao acessar o material principal, você também recebe conteúdos gratuitos que ampliam sua leitura do jogo — <span className="text-white font-bold">sem pagar nada a mais.</span>
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* BÔNUS 1 */}
            <div className="group glass-card p-8 rounded-3xl border border-white/10 hover:border-[#00c24a] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(0,196,59,0.15)] flex flex-col">
              <div className="w-16 h-16 rounded-2xl bg-[#00c24a]/10 flex items-center justify-center mb-6 group-hover:bg-[#00c24a]/20 transition-colors">
                <FaMapMarkedAlt className="text-3xl text-[#00c24a]" />
              </div>
              <h3 className="text-xl md:text-2xl font-black text-white mb-4">
                O Mapa do Jogo da Esquerda
              </h3>
              <p className="text-white/70 mb-8 flex-grow">
                Veja, em uma única visão, como a esquerda constrói vantagem antes do voto — da pauta à narrativa.
              </p>
              <div className="mt-auto pt-6 border-t border-white/5 flex items-center gap-3">
                <FaCheckCircle className="text-[#00c24a] text-xl" />
                <span className="text-[#00c24a] font-bold text-sm uppercase tracking-wide">Bônus Incluso</span>
              </div>
            </div>

            {/* BÔNUS 2 */}
            <div className="group glass-card p-8 rounded-3xl border border-white/10 hover:border-[#ffdf00] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(255,223,0,0.15)] flex flex-col">
              <div className="w-16 h-16 rounded-2xl bg-[#ffdf00]/10 flex items-center justify-center mb-6 group-hover:bg-[#ffdf00]/20 transition-colors">
                <FaClipboardCheck className="text-3xl text-[#ffdf00]" />
              </div>
              <h3 className="text-xl md:text-2xl font-black text-white mb-4">
                Checklist: Como Saber se a Esquerda Já Está na Frente
              </h3>
              <p className="text-white/70 mb-8 flex-grow">
                Identifique sinais claros de quando o jogo já começou e quando o cenário já está sendo moldado.
              </p>
              <div className="mt-auto pt-6 border-t border-white/5 flex items-center gap-3">
                <FaCheckCircle className="text-[#00c24a] text-xl" />
                <span className="text-[#00c24a] font-bold text-sm uppercase tracking-wide">Bônus Incluso</span>
              </div>
            </div>

            {/* BÔNUS 3 */}
            <div className="group glass-card p-8 rounded-3xl border border-white/10 hover:border-[#00c24a] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(0,196,59,0.15)] flex flex-col">
              <div className="w-16 h-16 rounded-2xl bg-[#00c24a]/10 flex items-center justify-center mb-6 group-hover:bg-[#00c24a]/20 transition-colors">
                <FaNewspaper className="text-3xl text-[#00c24a]" />
              </div>
              <h3 className="text-xl md:text-2xl font-black text-white mb-4">
                Guia Simples para Entender Notícias
              </h3>
              <p className="text-white/70 mb-8 flex-grow">
                Aprenda a ler notícias com mais critério e separar informação de narrativa em períodos eleitorais.
              </p>
              <div className="mt-auto pt-6 border-t border-white/5 flex items-center gap-3">
                <FaCheckCircle className="text-[#00c24a] text-xl" />
                <span className="text-[#00c24a] font-bold text-sm uppercase tracking-wide">Bônus Incluso</span>
              </div>
            </div>
          </div>

          <div className="pt-16 flex justify-center">
             <Button
                onClick={scrollToOffer}
                className="bg-transparent border border-[#00c24a] hover:bg-[#00c24a]/10 text-[#00c24a] font-bold text-lg px-10 py-6 h-auto rounded-xl transition-all"
              >
                QUERO GARANTIR MEUS BÔNUS
              </Button>
          </div>
        </div>
      </section>
      {/* CONTENT & BENEFITS SECTION */}
      <section 
        id="benefits"
        data-section
        className={`py-24 transition-all duration-1000 ${
          visibleSections.has("benefits") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="container max-w-4xl">
          <div className="flex items-center gap-6 mb-16">
            <FaBookOpen className="text-5xl md:text-6xl text-[#ffdf00] flex-shrink-0 drop-shadow-[0_0_15px_rgba(255,223,0,0.4)]" />
            <h2 className="text-3xl md:text-5xl font-black text-white">
              O que você vai enxergar<br />
              <span className="text-[#ffdf00]">depois de ler este material</span>
            </h2>
          </div>

          <div className="grid gap-4">
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
                className="flex items-center gap-4 text-lg md:text-xl text-white bg-[#121212] p-6 md:p-8 border-l-4 border-[#00c24a] group hover:bg-[#1a1a1a] transition-all duration-300 transform hover:translate-x-2 rounded-r-xl border-y border-r border-white/5"
              >
                <FaCheck className="text-2xl md:text-3xl text-[#ffdf00] flex-shrink-0 group-hover:text-[#00c24a] transition-colors" />
                <span className="group-hover:text-[#ffdf00] transition-colors">{item}</span>
              </div>
            ))}
          </div>

          <div className="pt-16 text-center">
            <p className="text-2xl md:text-3xl font-black text-white leading-snug">
              Depois disso, você nunca mais<br />
              <span className="text-[#ffdf00]">olha para eleições da mesma forma.</span>
            </p>
          </div>
        </div>
        
        <div className="pt-12 flex justify-center">
          <Button
            onClick={scrollToOffer}
            className="bg-[#00c24a] hover:bg-[#009c3b] text-white font-black text-xl px-12 py-8 h-auto rounded-xl shadow-[0_0_20px_rgba(0,196,59,0.4)] transition-all hover:scale-105"
          >
            <span className="relative z-10 flex items-center gap-3">
              <span>ACESSAR AGORA POR</span>
              <span className="bg-black/20 px-2 py-1 rounded text-[#ffdf00]">R$17,90</span>
            </span>
          </Button>
        </div>
      </section>

      {/* WHO IT IS FOR / NOT FOR SECTION */}
      <section 
        id="qualification"
        data-section
        className={`py-24 bg-[#0a0a0a] transition-all duration-1000 ${
          visibleSections.has("qualification") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="container max-w-5xl">
          <div className="flex flex-col items-center mb-16">
            <FaUser className="text-6xl text-[#00c24a] mb-6" />
            <h2 className="text-3xl md:text-5xl font-black text-white text-center">
              Este material é para você<br />
              <span className="text-[#ffdf00]">— e não é para todo mundo</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass-card p-8 md:p-10 border border-[#00c24a]/30 rounded-3xl group hover:shadow-[0_0_30px_rgba(0,196,59,0.1)] transition-all">
              <h3 className="text-2xl md:text-3xl font-black text-[#00c24a] mb-8 group-hover:text-[#ffdf00] transition-colors">
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
                    <FaCheck className="text-[#00c24a] text-xl flex-shrink-0 group-hover/item:text-[#ffdf00] transition-colors" />
                    <span className="text-lg text-white/80 group-hover/item:text-white transition-colors">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* SEÇÃO "NÃO É PARA" EM VERMELHO PERMANENTE */}
            <div className="bg-[#050505] p-8 md:p-10 border border-red-900/40 rounded-3xl shadow-[0_0_20px_rgba(220,38,38,0.05)]">
              <h3 className="text-2xl md:text-3xl font-black text-red-600 mb-8">
                Não é para:
              </h3>
              <ul className="space-y-5">
                {[
                  "quem busca briga",
                  "slogans",
                  "militância vazia"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <FaTimes className="text-red-600 text-xl flex-shrink-0 mt-1" />
                    <span className="text-lg text-red-500 font-bold opacity-90">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF SECTION */}
      <section 
        id="social-proof"
        data-section
        className={`py-24 transition-all duration-1000 ${
          visibleSections.has("social-proof") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="container max-w-6xl">
          <div className="flex justify-center items-center gap-4 mb-16">
            <FaCommentDots className="text-5xl text-[#00c24a]" />
            <h2 className="text-3xl md:text-5xl font-black text-white text-center">
              O que leitores dizem<br />
              <span className="text-[#ffdf00]">depois de entender o jogo</span>
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
                className="bg-[#121212] p-8 md:p-10 border border-white/10 rounded-2xl relative group hover:border-[#00c24a] transition-all duration-300 hover:shadow-2xl"
              >
                <FaQuoteLeft className="text-5xl text-[#00c24a] opacity-10 absolute top-4 left-4 group-hover:opacity-30 transition-opacity" />
                <p className="text-lg md:text-xl text-white/80 leading-relaxed relative z-10 pt-8 group-hover:text-white transition-colors">
                  {testimonial}
                </p>
                <div className="mt-6 flex items-center gap-2">
                   <div className="w-2 h-2 rounded-full bg-[#00c24a]"></div>
                   <span className="text-sm text-white/40 uppercase tracking-widest">Leitor Verificado</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OFFER SECTION */}
      <section 
        id="offer"
        data-section
        className={`py-24 transition-all duration-1000 ${
          visibleSections.has("offer") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="container max-w-5xl">
          <div className="rounded-[2.5rem] p-1 bg-gradient-to-br from-[#00c24a] via-[#ffdf00] to-[#002776]">
            <div className="bg-[#0a0a0a] rounded-[2.3rem] p-8 md:p-16 relative overflow-hidden group">
              {/* Background Effects */}
              <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00c24a]/5 rounded-full blur-[100px]" />
              
              {/* ACORDA BRASIL - MARCA D'ÁGUA DE FUNDO */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none z-0">
                 <span className="text-[5rem] md:text-[9rem] font-black text-white/5 leading-none whitespace-nowrap blur-[2px] block">
                   ACORDA BRASIL
                 </span>
              </div>

              <div className="relative z-10 space-y-12">
                <div className="flex flex-col items-center gap-4">
                  <FaMoneyBillWave className="text-6xl text-[#00c24a]" />
                  <h2 className="text-3xl md:text-5xl font-black text-white text-center leading-tight">
                    Acesso completo por<br />
                    <span className="text-[#ffdf00]">um valor simbólico</span>
                  </h2>
                </div>

                <p className="text-lg md:text-xl text-white/70 text-center leading-relaxed max-w-3xl mx-auto">
                  Todo esse conteúdo foi organizado para entregar clareza antes que o jogo termine — não para elitizar informação.
                </p>

                <div className="flex justify-center flex-col items-center">
                  {/* ACORDA BRASIL - SELO DE ALERTA */}
                  <div className="mb-[-20px] z-20 rotate-[-2deg]">
                    <span className="bg-[#ffdf00] text-black text-2xl md:text-4xl font-black px-6 py-2 border-4 border-black shadow-[5px_5px_0px_rgba(0,0,0,1)] inline-block">
                      ACORDA BRASIL!
                    </span>
                  </div>

                  <div className="w-full max-w-md bg-[#121212] border border-[#00c24a]/30 rounded-2xl p-8 md:p-12 pt-12 text-center group/price hover:border-[#ffdf00] transition-all duration-300 relative">
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#00c24a] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider hidden">Oportunidade</div>
                    <p className="text-white/60 text-lg md:text-xl mb-2 line-through">De R$97,90</p>
                    <p className="text-white/80 text-lg md:text-xl mb-2">Por apenas</p>
                    <div className="flex items-center justify-center gap-1">
                      <span className="text-2xl text-[#00c24a]">R$</span>
                      <p className="text-white font-black text-7xl md:text-8xl leading-none text-gradient-brasil">17,90</p>
                    </div>
                    <p className="text-white/50 text-sm md:text-base mt-4 font-medium">Pagamento único. Acesso vitalício.</p>
                  </div>
                </div>

                {/* Features com Ícones Coloridos */}
                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    { icon: <FaBook className="text-[#00c24a]" />, text: "Conteúdo direto e organizado" },
                    { icon: <FaDownload className="text-[#ffdf00]" />, text: "Acesso digital imediato" },
                    { icon: <FaLock className="text-[#00c24a]" />, text: "Leitura privada e segura" }
                  ].map((feature, index) => (
                    <div key={index} className="text-center group/feature flex flex-col items-center">
                      <div className="text-4xl mb-4 group-hover/feature:scale-125 transition-transform duration-300 bg-[#1a1a1a] w-16 h-16 rounded-full flex items-center justify-center border border-white/5">
                        {feature.icon}
                      </div>
                      <p className="text-white font-semibold group-hover/feature:text-[#ffdf00] transition-colors">{feature.text}</p>
                    </div>
                  ))}
                </div>

                <div className="flex justify-center pt-8">
                  <Button
                    onClick={handleCheckout}
                    className="bg-[#00c24a] hover:bg-[#009c3b] text-white font-black text-lg md:text-2xl px-12 md:px-20 py-10 h-auto rounded-xl shadow-[0_0_30px_rgba(0,196,59,0.4)] hover:shadow-[0_0_50px_rgba(0,196,59,0.6)] transition-all hover:scale-105"
                  >
                    <span className="relative z-10 flex items-center gap-3">
                      <span>ACESSAR AGORA POR</span>
                      <span className="text-3xl">R$17,90</span>
                    </span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section 
        id="final-cta"
        data-section
        className={`py-24 md:py-32 pb-48 md:pb-40 relative overflow-hidden transition-all duration-1000 ${
          visibleSections.has("final-cta") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-[#00c24a]/10 to-transparent pointer-events-none" />
        
        <div className="container max-w-4xl text-center relative z-10">
          <div className="flex justify-center mb-6">
            <FaCircle className="text-4xl text-[#c41e3a] animate-pulse drop-shadow-[0_0_10px_rgba(196,30,58,0.8)]" />
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-[#00c24a] mb-12">
            Entender agora ou<br />
            <span className="text-white">se surpreender depois</span>
          </h2>

          <div className="space-y-8 mb-16">
            <p className="text-3xl md:text-4xl font-black text-white leading-tight">
              A Esquerda Não Ganha Eleições no Voto.
            </p>
            <p className="text-2xl md:text-3xl font-bold text-white/80">
              Entenda o jogo antes que ele termine.
            </p>
            <div className="glass-card p-8 md:p-10 rounded-2xl border-l-4 border-[#ffdf00]">
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
                Se você é de direita<br />
                e não quer ser pego de surpresa novamente,<br />
                <span className="text-white font-bold text-2xl md:text-3xl">o acesso está liberado agora por apenas R$17,90.</span>
              </p>
            </div>
          </div>

          <Button
            onClick={scrollToOffer}
            className="bg-[#00c24a] hover:bg-[#009c3b] text-white font-black text-lg md:text-2xl px-12 md:px-20 py-10 h-auto rounded-xl shadow-[0_0_30px_rgba(0,196,59,0.4)] transition-all hover:scale-105"
          >
            SAIA DA BOLHA POR R$17,90
          </Button>
        </div>
      </section>

      {/* LEGAL DISCLAIMER */}
      <section className="py-12 bg-[#020202] border-t border-white/5">
        <div className="container max-w-4xl text-center">
          <p className="text-xs md:text-sm text-white/30 leading-relaxed">
            Este conteúdo tem caráter educacional e analítico, voltado à compreensão crítica do processo eleitoral.
          </p>
        </div>
      </section>
    </div>
  );
}