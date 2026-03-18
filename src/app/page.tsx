'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Bot, 
  Workflow, 
  Code2, 
  ArrowRight, 
  CheckCircle2, 
  Plus, 
  Minus,
  Github,
  Linkedin,
  Twitter,
  Mail,
  ExternalLink
} from 'lucide-react';

// Importando ícones de marcas populares
import { 
  SiOpenai, 
  SiPython, 
  SiReact, 
  SiNextdotjs, 
  SiVercel, 
  SiPostgresql, 
  SiTailwindcss, 
  SiN8N,
  SiJavascript,
  SiTypescript,
  SiDocker
} from 'react-icons/si';
import { TbMessageChatbot, TbDatabaseSearch } from 'react-icons/tb';

// --- Components ---

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-light border-b border-blue-600/5 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
        <div className="flex items-center gap-2 group cursor-pointer shrink-0">
          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-600 rounded-lg sm:rounded-xl flex items-center justify-center font-bold text-lg sm:text-2xl text-white group-hover:bg-blue-500 transition-all shadow-lg shadow-blue-600/20">A</div>
          <span className="text-xl sm:text-2xl font-black tracking-tight text-slate-900">ayolabs</span>
        </div>
        
        <div className="hidden lg:flex items-center gap-8 text-sm font-bold text-slate-600">
          <a href="#servicos" className="hover:text-blue-600 transition-colors">Serviços</a>
          <a href="#tecnologias" className="hover:text-blue-600 transition-colors">Tecnologias</a>
          <a href="#processo" className="hover:text-blue-600 transition-colors">Processo</a>
          <a href="#faq" className="hover:text-blue-600 transition-colors">FAQ</a>
        </div>
        
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 sm:px-7 sm:py-3 rounded-full text-xs sm:text-sm font-black transition-all hover:scale-105 shadow-xl shadow-blue-600/30 active:scale-95 shrink-0">
          <span className="hidden xs:inline">Agendar Consultoria</span>
          <span className="xs:hidden font-bold">Contato</span>
        </button>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-32 pb-16 sm:pt-48 sm:pb-32 overflow-hidden bg-blue-soft">
      {/* Background Shapes */}
      <div className="absolute top-0 right-0 w-[300px] h-[300px] sm:w-[600px] sm:h-[600px] bg-blue-100/30 rounded-full blur-[80px] sm:blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] sm:w-[600px] sm:h-[600px] bg-sky-100/30 rounded-full blur-[80px] sm:blur-[120px] -z-10 -translate-x-1/2 translate-y-1/2" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block px-4 py-1.5 sm:px-5 sm:py-2 mb-6 sm:mb-8 text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] border border-blue-600/10 rounded-full bg-blue-600/5 text-blue-600">
            IA & Automação Sênior
          </span>
          <h1 className="text-4xl xs:text-5xl md:text-7xl lg:text-8xl font-black mb-6 sm:mb-10 leading-[1.1] tracking-tight text-slate-900">
            Escalabilidade com <br />
            <span className="text-gradient-blue text-balance">IA Sob Medida</span>
          </h1>
          <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-2xl text-slate-500 font-medium mb-10 sm:mb-14 leading-relaxed px-2">
            Estratégias de IA focadas em reduzir custos e maximizar a 
            capacidade produtiva da sua empresa.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 px-4">
            <button className="w-full sm:w-auto px-8 py-4 sm:px-12 sm:py-6 bg-blue-600 hover:bg-blue-700 rounded-2xl sm:rounded-3xl font-black flex items-center justify-center gap-3 transition-all hover:scale-105 shadow-2xl shadow-blue-600/40 text-white text-base sm:text-lg">
              Agendar Consultoria <ArrowRight size={20} strokeWidth={3} />
            </button>
            <button className="w-full sm:w-auto px-8 py-4 sm:px-12 sm:py-6 border-2 border-slate-200 bg-white hover:bg-slate-50 rounded-2xl sm:rounded-3xl font-black transition-all text-slate-900 text-base sm:text-lg shadow-sm">
              Ver Cases
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: "Fullstack Engineering",
      description: "Desenvolvimento de ecossistemas robustos (SaaS, Dashboards) com foco em arquitetura limpa e alta disponibilidade.",
      icon: <Code2 className="text-blue-600" size={32} />,
      features: ["Next.js & Node.js", "Microsserviços", "Cloud Native"]
    },
    {
      title: "Agentes de IA (RAG)",
      description: "Arquiteturas RAG que permitem que a IA responda com base em documentos técnicos com precisão cirúrgica.",
      icon: <Bot className="text-sky-500" size={32} />,
      features: ["Busca Semântica", "Pinecone/Supabase", "OpenAI & Claude"]
    },
    {
      title: "Automação Workflow",
      description: "Orquestração de processos complexos via Make/n8n ou código customizado para escala empresarial.",
      icon: <Workflow className="text-indigo-600" size={32} />,
      features: ["Integração de APIs", "Zero Tasks Manuais", "Foco em ROI"]
    },
    {
      title: "Consultoria Técnica",
      description: "Mentoria e desenho de solução para empresas que precisam implementar IA de forma segura.",
      icon: <ExternalLink className="text-blue-600" size={32} />,
      features: ["Code Review Sênior", "Roadmap Tech", "Segurança"]
    }
  ];

  return (
    <section id="servicos" className="py-20 sm:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16 sm:mb-24">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black mb-6 sm:mb-8 text-slate-900 leading-tight">Engenharia de <br /><span className="text-blue-600">Nível Sênior</span></h2>
          <p className="text-slate-500 text-base sm:text-xl md:text-2xl font-medium max-w-3xl mx-auto">Soluções arquitetadas para suportar o crescimento do seu negócio.</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="card-white p-8 sm:p-10 rounded-[2rem] sm:rounded-[2.5rem] flex flex-col group border-slate-100 h-full"
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-blue-50 rounded-xl sm:rounded-2xl flex items-center justify-center mb-6 sm:mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-sm">
                {service.icon}
              </div>
              <h3 className="text-xl sm:text-2xl font-black mb-4 text-slate-900 leading-tight">{service.title}</h3>
              <p className="text-slate-500 mb-6 sm:mb-8 flex-grow leading-relaxed font-medium text-sm sm:text-base">{service.description}</p>
              <ul className="space-y-3 sm:space-y-4 border-t border-slate-100 pt-6 sm:pt-8">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-xs sm:text-sm font-bold text-slate-700">
                    <CheckCircle2 size={16} className="text-blue-600 shrink-0" strokeWidth={3} />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const TechMarquee = () => {
  const techs = [
    { name: "OpenAI", icon: <SiOpenai size={28} /> },
    { name: "LangChain", icon: <TbMessageChatbot size={28} /> },
    { name: "Pinecone", icon: <TbDatabaseSearch size={28} /> },
    { name: "Python", icon: <SiPython size={28} /> },
    { name: "React", icon: <SiReact size={28} /> },
    { name: "Next.js", icon: <SiNextdotjs size={28} /> },
    { name: "Vercel", icon: <SiVercel size={28} /> },
    { name: "n8n", icon: <SiN8N size={28} /> },
    { name: "PostgreSQL", icon: <SiPostgresql size={28} /> },
    { name: "Tailwind", icon: <SiTailwindcss size={28} /> },
    { name: "Docker", icon: <SiDocker size={28} /> },
    { name: "TypeScript", icon: <SiTypescript size={28} /> }
  ];
  
  return (
    <section id="tecnologias" className="py-16 sm:py-24 border-y border-slate-100 overflow-hidden bg-slate-50 relative">
      <div className="absolute inset-y-0 left-0 w-20 sm:w-40 bg-gradient-to-r from-slate-50 to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-20 sm:w-40 bg-gradient-to-l from-slate-50 to-transparent z-10" />
      
      <div className="max-w-7xl mx-auto px-4 mb-10 sm:mb-16 text-center">
        <p className="text-[10px] sm:text-xs font-black uppercase tracking-[0.3em] text-blue-600">Nossa Toolbox</p>
      </div>
      <div className="animate-marquee gap-10 sm:gap-20 flex px-10">
        {[...techs, ...techs].map((tech, i) => (
          <div key={i} className="flex items-center gap-3 sm:gap-5 group">
            <div className="text-slate-400 group-hover:text-blue-600 transition-colors transform group-hover:scale-110">
              {tech.icon}
            </div>
            <span className="text-xl sm:text-4xl lg:text-5xl font-black text-slate-300 group-hover:text-slate-900 transition-all cursor-default whitespace-nowrap">
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

const Process = () => {
  const steps = [
    {
      num: "01",
      title: "Diagnóstico",
      description: "Mapeamos onde a IA trará o maior retorno financeiro para o seu negócio."
    },
    {
      num: "02",
      title: "Arquitetura",
      description: "Desenvolvemos a estrutura focando em segurança e facilidade de uso."
    },
    {
      num: "03",
      title: "Implementação",
      description: "Soluções em produção com suporte contínuo para garantir resultados."
    }
  ];

  return (
    <section id="processo" className="py-20 sm:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div>
            <h2 className="text-3xl sm:text-5xl lg:text-7xl font-black mb-8 leading-tight text-slate-900 text-balance">
              Metodologia <br />
              <span className="text-blue-600">Ágil & Pragmática</span>
            </h2>
            <p className="text-slate-500 text-base sm:text-xl lg:text-2xl font-medium mb-10 sm:mb-14 leading-relaxed">
              Não fazemos pesquisa acadêmica. Nós entregamos resultados de engenharia que reduzem custos reais.
            </p>
            <button className="w-full sm:w-auto px-8 py-4 sm:px-10 sm:py-5 border-2 border-slate-900 rounded-2xl sm:rounded-[2rem] hover:bg-slate-900 hover:text-white transition-all flex items-center justify-center gap-3 font-black text-slate-900 text-base sm:text-lg">
              Baixar Playbook <ExternalLink size={20} strokeWidth={3} />
            </button>
          </div>
          <div className="space-y-6 sm:space-y-8">
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="flex gap-6 sm:gap-10 items-start p-6 sm:p-10 card-white rounded-2xl sm:rounded-[2.5rem]"
              >
                <span className="text-4xl sm:text-6xl font-black text-blue-600/10 leading-none">{step.num}</span>
                <div>
                  <h4 className="text-xl sm:text-2xl font-black mb-2 sm:mb-4 text-slate-900">{step.title}</h4>
                  <p className="text-slate-500 font-medium leading-relaxed text-sm sm:text-lg">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  const faqs = [
    {
      q: "A IA terá acesso aos meus dados?",
      a: "Toda a implementação segue padrões de conformidade Enterprise. Seus dados não são usados para treinamento de modelos públicos."
    },
    {
      q: "Em quanto tempo vejo retorno?",
      a: "Projetos de automação costumam se pagar em 3 a 6 meses através da redução de erros e horas humanas."
    },
    {
      q: "Vocês dão manutenção?",
      a: "Sim, oferecemos planos de suporte contínuo para garantir que as soluções acompanhem o seu crescimento."
    }
  ];

  return (
    <section id="faq" className="py-20 sm:py-32 bg-slate-50 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black mb-12 sm:mb-20 text-center text-slate-900">FAQ</h2>
        <div className="space-y-4 sm:space-y-6">
          {faqs.map((faq, i) => (
            <div key={i} className="card-white rounded-2xl sm:rounded-[2.5rem] overflow-hidden">
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full px-6 py-6 sm:px-10 sm:py-10 flex items-center justify-between text-left font-black text-base sm:text-xl text-slate-900 transition-colors"
              >
                <span className="pr-4">{faq.q}</span>
                {openIndex === i ? <Minus size={20} className="shrink-0" strokeWidth={3} /> : <Plus size={20} className="shrink-0" strokeWidth={3} />}
              </button>
              {openIndex === i && (
                <div className="px-6 pb-6 sm:px-10 sm:pb-10 text-slate-500 text-sm sm:text-lg font-medium leading-relaxed animate-in fade-in slide-in-from-top-2 border-t border-slate-50 pt-6">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section className="py-24 sm:py-40 relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
        <div className="card-white p-8 sm:p-16 md:p-32 rounded-[2rem] sm:rounded-[4rem] border-blue-600/10 bg-gradient-to-b from-white to-blue-50/50">
          <h2 className="text-3xl sm:text-5xl lg:text-8xl font-black mb-6 sm:mb-10 leading-tight text-slate-900">Pronto para <br />Escalar?</h2>
          <p className="text-slate-500 mb-10 sm:mb-16 max-w-2xl mx-auto text-base sm:text-lg md:text-2xl font-medium px-2">
            Agende uma reunião e descubra o potencial da sua operação.
          </p>
          <form className="max-w-lg mx-auto space-y-4 sm:space-y-6" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Seu e-mail profissional" 
              className="w-full px-6 py-4 sm:px-10 sm:py-6 rounded-2xl sm:rounded-3xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-blue-600 transition-all font-bold text-slate-900 text-sm sm:text-lg placeholder:text-slate-400"
            />
            <button className="w-full py-4 sm:py-6 bg-blue-600 hover:bg-blue-700 rounded-2xl sm:rounded-3xl font-black text-base sm:text-xl transition-all shadow-2xl shadow-blue-600/30 text-white">
              Solicitar Diagnóstico
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 sm:py-20 border-t border-slate-100 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="w-8 h-8 sm:w-11 sm:h-11 bg-blue-600 rounded-lg sm:rounded-xl flex items-center justify-center font-bold text-lg sm:text-2xl text-white shadow-lg shadow-blue-600/20">A</div>
          <span className="text-xl sm:text-2xl font-black tracking-tight text-slate-900">ayolabs</span>
        </div>
        <div className="flex gap-8 sm:gap-12 text-slate-400">
          <Github className="hover:text-blue-600 cursor-pointer transition-all hover:scale-125" size={24} />
          <Linkedin className="hover:text-blue-600 cursor-pointer transition-all hover:scale-125" size={24} />
          <Twitter className="hover:text-blue-600 cursor-pointer transition-all hover:scale-125" size={24} />
          <Mail className="hover:text-blue-600 cursor-pointer transition-all hover:scale-125" size={24} />
        </div>
        <p className="text-slate-400 text-[10px] sm:text-xs font-bold uppercase tracking-widest text-center">
          &copy; {new Date().getFullYear()} ayolabs. AI Engineering.
        </p>
      </div>
    </footer>
  );
};

// --- Page Main ---

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Services />
      <TechMarquee />
      <Process />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
