"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Phone,
  Mail,
  MapPin,
  Instagram,
  CheckCircle,
  Building2,
  Calculator,
  FileText,
  Shield,
  Users,
  Zap,
  Award,
  Target,
  Menu,
  X,
  ArrowRight,
  Star,
  TrendingUp,
  Clock,
  Globe,
  MessageCircle,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect, useRef } from "react"

// Adicionar após os imports, antes do componente principal
const useScrollAnimation = () => {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  return [ref, isVisible] as const
}

// Hook para contador animado
const useCountUp = (end: number, duration = 2000) => {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
        }
      },
      { threshold: 0.5 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [isVisible])

  useEffect(() => {
    if (!isVisible) return

    let startTime: number
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      setCount(Math.floor(progress * end))

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [isVisible, end, duration])

  return [ref, count] as const
}

export default function AlthaContabilidade() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [heroRef, heroVisible] = useScrollAnimation()
  const [aboutRef, aboutVisible] = useScrollAnimation()
  const [servicesRef, servicesVisible] = useScrollAnimation()
  const [differentialsRef, differentialsVisible] = useScrollAnimation()
  const [clientsRef, clientsVisible] = useScrollAnimation()

  // Contadores animados
  const [clientsCountRef, clientsCount] = useCountUp(500)
  const [yearsCountRef, yearsCount] = useCountUp(10)
  const [satisfactionCountRef, satisfactionCount] = useCountUp(98)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-[#001f3f]/95 backdrop-blur-md shadow-xl" : "bg-[#001f3f]"
        }`}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Image
                src="/logo.png"
                alt="Altha Contabilidade"
                width={200}
                height={80}
                className="h-14 w-auto transition-all duration-300 hover:scale-105"
              />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-8">
              <Link href="#inicio" className="text-white hover:text-[#f26b00] transition-colors font-medium">
                Início
              </Link>
              <Link href="#sobre" className="text-white hover:text-[#f26b00] transition-colors font-medium">
                Sobre
              </Link>
              <Link href="#servicos" className="text-white hover:text-[#f26b00] transition-colors font-medium">
                Serviços
              </Link>
              <Link href="#diferenciais" className="text-white hover:text-[#f26b00] transition-colors font-medium">
                Diferenciais
              </Link>
              <Link href="#contato" className="text-white hover:text-[#f26b00] transition-colors font-medium">
                Contato
              </Link>
            </nav>

            {/* CTA Button */}
            <div className="hidden md:flex items-center space-x-4">
              <Button
                className="bg-[#f26b00] hover:bg-[#e55a00] text-white font-semibold px-6 py-2 transition-all duration-300 hover:scale-105 shadow-lg"
                asChild
              >
                <a href="https://wa.me/5598984379959?text=Ol%C3%A1%2C%20Gostaria%20de%20ter%20mais%20informa%C3%A7%C3%B5es%20sobre%20seus%20sevi%C3%A7os">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Entre em Contato
                </a>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button className="lg:hidden text-white p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden mt-4 pb-4 border-t border-gray-700">
              <nav className="flex flex-col space-y-4 mt-4">
                <Link href="#inicio" className="text-white hover:text-[#f26b00] transition-colors font-medium">
                  Início
                </Link>
                <Link href="#sobre" className="text-white hover:text-[#f26b00] transition-colors font-medium">
                  Sobre
                </Link>
                <Link href="#servicos" className="text-white hover:text-[#f26b00] transition-colors font-medium">
                  Serviços
                </Link>
                <Link href="#diferenciais" className="text-white hover:text-[#f26b00] transition-colors font-medium">
                  Diferenciais
                </Link>
                <Link href="#contato" className="text-white hover:text-[#f26b00] transition-colors font-medium">
                  Contato
                </Link>
                <Button className="bg-[#f26b00] hover:bg-[#e55a00] text-white w-full mt-4" asChild>
                  <a href="https://wa.me/5598984379959?text=Ol%C3%A1%2C%20Gostaria%20de%20ter%20mais%20informa%C3%A7%C3%B5es%20sobre%20seus%20sevi%C3%A7os">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Entre em Contato
                  </a>
                </Button>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="inicio"
        ref={heroRef}
        className="relative bg-gradient-to-br from-[#001f3f] via-[#002a5c] to-[#003366] text-white pt-24 pb-20 overflow-hidden"
      >
        {/* Background Pattern com animação */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute top-0 left-0 w-full h-full animate-pulse"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>

        {/* Elementos flutuantes animados */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#f26b00]/30 rounded-full animate-bounce"
            style={{ animationDelay: "0s", animationDuration: "3s" }}
          ></div>
          <div
            className="absolute top-1/3 right-1/4 w-1 h-1 bg-white/20 rounded-full animate-bounce"
            style={{ animationDelay: "1s", animationDuration: "4s" }}
          ></div>
          <div
            className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-blue-500/20 rounded-full animate-bounce"
            style={{ animationDelay: "2s", animationDuration: "5s" }}
          ></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div
              className={`space-y-8 transition-all duration-1000 ${heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              {/* Badge com animação de entrada */}
              <div
                className={`inline-flex items-center px-4 py-2 bg-[#f26b00]/20 border border-[#f26b00]/30 rounded-full text-[#f26b00] text-sm font-medium transition-all duration-700 ${heroVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
                style={{ transitionDelay: "200ms" }}
              >
                <Star className="w-4 h-4 mr-2 animate-spin" style={{ animationDuration: "3s" }} />
                Mais de 10 anos de experiência
              </div>

              <div className="space-y-6">
                <h1
                  className={`text-4xl md:text-6xl lg:text-7xl font-bold leading-tight transition-all duration-1000 ${heroVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
                  style={{ transitionDelay: "400ms" }}
                >
                  Alta performance em{" "}
                  <span className="text-[#f26b00] relative">
                    contabilidade
                    <div
                      className={`absolute -bottom-2 left-0 h-1 bg-[#f26b00]/30 rounded transition-all duration-1000 ${heroVisible ? "w-full" : "w-0"}`}
                      style={{ transitionDelay: "800ms" }}
                    ></div>
                  </span>
                </h1>
                <p
                  className={`text-xl md:text-2xl text-gray-300 leading-relaxed max-w-2xl transition-all duration-1000 ${heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
                  style={{ transitionDelay: "600ms" }}
                >
                  Soluções completas e estratégicas para empresas que buscam excelência fiscal e crescimento sustentável
                </p>
              </div>

              <div
                className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 ${heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
                style={{ transitionDelay: "800ms" }}
              >
                <Button
                  size="lg"
                  className="bg-[#f26b00] hover:bg-[#e55a00] text-white px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-xl group relative overflow-hidden"
                  asChild
                >
                  <a href="https://wa.me/5598984379959?text=Ol%C3%A1%2C%20Gostaria%20de%20ter%20mais%20informa%C3%A7%C3%B5es%20sobre%20seus%20sevi%C3%A7os">
                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Entre em Contato
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-[#001f3f] px-8 py-4 text-lg font-semibold bg-transparent transition-all duration-300 hover:scale-105 hover:shadow-xl group"
                  asChild
                >
                  <a href="#servicos">
                    <span className="group-hover:animate-pulse">Conheça Nossos Serviços</span>
                  </a>
                </Button>
              </div>

              {/* Stats com contadores animados */}
              <div
                className={`grid grid-cols-3 gap-6 pt-8 border-t border-gray-700 transition-all duration-1000 ${heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
                style={{ transitionDelay: "1000ms" }}
              >
                <div className="text-center group">
                  <div
                    ref={clientsCountRef}
                    className="text-3xl font-bold text-[#f26b00] group-hover:scale-110 transition-transform duration-300"
                  >
                    {clientsCount}+
                  </div>
                  <div className="text-sm text-gray-400">Clientes Ativos</div>
                </div>
                <div className="text-center group">
                  <div
                    ref={yearsCountRef}
                    className="text-3xl font-bold text-[#f26b00] group-hover:scale-110 transition-transform duration-300"
                  >
                    {yearsCount}+
                  </div>
                  <div className="text-sm text-gray-400">Anos de Mercado</div>
                </div>
                <div className="text-center group">
                  <div
                    ref={satisfactionCountRef}
                    className="text-3xl font-bold text-[#f26b00] group-hover:scale-110 transition-transform duration-300"
                  >
                    {satisfactionCount}%
                  </div>
                  <div className="text-sm text-gray-400">Satisfação</div>
                </div>
              </div>
            </div>

            <div
              className={`relative transition-all duration-1000 ${heroVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
              style={{ transitionDelay: "600ms" }}
            >
              <div className="relative z-10 group">
                <Image
                  src="/team-photo.jpg"
                  alt="Equipe Altha Contabilidade"
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-2xl transition-all duration-500 group-hover:scale-105 group-hover:shadow-3xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#001f3f]/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              {/* Decorative elements com animação */}
              <div
                className="absolute -top-4 -right-4 w-24 h-24 bg-[#f26b00]/20 rounded-full blur-xl animate-pulse"
                style={{ animationDuration: "4s" }}
              ></div>
              <div
                className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-500/20 rounded-full blur-xl animate-pulse"
                style={{ animationDuration: "6s", animationDelay: "2s" }}
              ></div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 bg-gray-50 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="flex items-center space-x-2">
              <Shield className="w-6 h-6 text-[#f26b00]" />
              <span className="text-sm font-medium text-gray-600">Certificado CRC</span>
            </div>
            <div className="flex items-center space-x-2">
              <Award className="w-6 h-6 text-[#f26b00]" />
              <span className="text-sm font-medium text-gray-600">ISO 9001</span>
            </div>
            <div className="flex items-center space-x-2">
              <Globe className="w-6 h-6 text-[#f26b00]" />
              <span className="text-sm font-medium text-gray-600">Receita Federal</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-6 h-6 text-[#f26b00]" />
              <span className="text-sm font-medium text-gray-600">LGPD Compliance</span>
            </div>
          </div>
        </div>
      </section>

      {/* Quem Somos */}
      <section id="sobre" ref={aboutRef} className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div
              className={`space-y-8 transition-all duration-1000 ${aboutVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
            >
              <div className="space-y-6">
                <div
                  className={`inline-flex items-center px-4 py-2 bg-[#f26b00]/10 rounded-full text-[#f26b00] text-sm font-medium transition-all duration-700 ${aboutVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
                  style={{ transitionDelay: "200ms" }}
                >
                  <Building2 className="w-4 h-4 mr-2 animate-pulse" />
                  Sobre a Altha Contabilidade
                </div>
                <h2
                  className={`text-4xl md:text-5xl font-bold text-[#001f3f] leading-tight transition-all duration-1000 ${aboutVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
                  style={{ transitionDelay: "400ms" }}
                >
                  Excelência contábil que impulsiona seu negócio
                </h2>
                <p
                  className={`text-lg text-gray-700 leading-relaxed transition-all duration-1000 ${aboutVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
                  style={{ transitionDelay: "600ms" }}
                >
                  Somos uma empresa de contabilidade comprometida com a excelência no atendimento e resultados reais.
                  Atuamos com foco em desburocratizar a rotina contábil, oferecendo agilidade, transparência e suporte
                  completo para empresas de todos os portes.
                </p>
                <p
                  className={`text-lg text-gray-700 leading-relaxed transition-all duration-1000 ${aboutVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
                  style={{ transitionDelay: "800ms" }}
                >
                  Nossa missão é ser o parceiro estratégico que sua empresa precisa para crescer de forma sustentável e
                  em conformidade com todas as obrigações fiscais e trabalhistas.
                </p>
              </div>

              <div
                className={`grid grid-cols-2 gap-8 transition-all duration-1000 ${aboutVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                style={{ transitionDelay: "1000ms" }}
              >
                <div className="text-center p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-lg group">
                  <div className="text-4xl font-bold text-[#f26b00] mb-2 group-hover:animate-bounce">500+</div>
                  <div className="text-gray-600 font-medium">Empresas Atendidas</div>
                </div>
                <div className="text-center p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-lg group">
                  <div className="text-4xl font-bold text-[#f26b00] mb-2 group-hover:animate-bounce">10+</div>
                  <div className="text-gray-600 font-medium">Anos de Experiência</div>
                </div>
              </div>

              <Button
                className={`bg-[#f26b00] hover:bg-[#e55a00] text-white px-8 py-3 font-semibold group relative overflow-hidden transition-all duration-1000 ${aboutVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
                style={{ transitionDelay: "1200ms" }}
                asChild
              >
                <a href="https://wa.me/5598984379959?text=Ol%C3%A1%2C%20Gostaria%20de%20ter%20mais%20informa%C3%A7%C3%B5es%20sobre%20seus%20sevi%C3%A7os">
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Converse com Nossos Especialistas
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>

            <div
              className={`relative transition-all duration-1000 ${aboutVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
              style={{ transitionDelay: "400ms" }}
            >
              <div className="relative z-10 group">
                <Image
                  src="/professional-woman.jpg"
                  alt="Profissional Altha Contabilidade"
                  width={500}
                  height={600}
                  className="rounded-2xl shadow-2xl transition-all duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#f26b00]/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div
                className="absolute -top-6 -right-6 w-32 h-32 bg-[#f26b00]/10 rounded-2xl animate-pulse"
                style={{ animationDuration: "3s" }}
              ></div>
              <div
                className="absolute -bottom-6 -left-6 w-24 h-24 bg-blue-500/10 rounded-2xl animate-pulse"
                style={{ animationDuration: "4s", animationDelay: "1s" }}
              ></div>
            </div>
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section id="servicos" ref={servicesRef} className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div
            className={`text-center mb-16 transition-all duration-1000 ${servicesVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="inline-flex items-center px-4 py-2 bg-[#f26b00]/10 rounded-full text-[#f26b00] text-sm font-medium mb-4 animate-pulse">
              <Target className="w-4 h-4 mr-2" />
              Nossos Serviços
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#001f3f] mb-6">Soluções completas para sua empresa</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Oferecemos um portfólio abrangente de serviços contábeis, sempre com foco na excelência e no crescimento
              do seu negócio
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Building2,
                title: "Abertura de Empresas",
                description: "Processo completo de constituição empresarial",
                features: [
                  "Planejamento tributário inicial",
                  "Registro na Junta Comercial",
                  "Receita Federal e Prefeitura",
                  "Consultoria de enquadramento",
                ],
              },
              {
                icon: Calculator,
                title: "Contabilidade Completa",
                description: "Gestão contábil e fiscal integrada",
                features: [
                  "Escrituração contábil e fiscal",
                  "Apuração de impostos",
                  "Folha de pagamento e eSocial",
                  "Demonstrações financeiras",
                ],
              },
              {
                icon: Target,
                title: "Consultoria Tributária",
                description: "Otimização fiscal estratégica",
                features: [
                  "Planejamento tributário",
                  "Enquadramento correto do CNAE",
                  "Revisão de impostos pagos",
                  "Recuperação de créditos",
                ],
              },
              {
                icon: FileText,
                title: "Regularizações",
                description: "Solução para pendências empresariais",
                features: [
                  "CNPJ inativo ou irregular",
                  "Alterações contratuais",
                  "Mudança de endereço e sócios",
                  "Baixa de empresas",
                ],
              },
              {
                icon: Shield,
                title: "Certificado Digital",
                description: "Segurança digital para sua empresa",
                features: ["Emissão e renovação", "e-CPF e e-CNPJ", "Certificado A1 e A3", "Suporte técnico completo"],
              },
              {
                icon: Users,
                title: "Imposto de Renda",
                description: "Declarações com máxima restituição",
                features: [
                  "Pessoa Física e Jurídica",
                  "Planejamento e restituição",
                  "Atendimento 100% digital",
                  "Acompanhamento processual",
                ],
              },
            ].map((service, index) => (
              <Card
                key={index}
                className={`group border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 bg-white transform ${servicesVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-8 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#f26b00]/5 to-transparent rounded-bl-3xl transform translate-x-6 -translate-y-6 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500"></div>
                  <div className="mb-6 relative z-10">
                    <div className="w-16 h-16 bg-[#f26b00]/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-[#f26b00]/20 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                      <service.icon className="w-8 h-8 text-[#f26b00] group-hover:animate-pulse" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#001f3f] mb-3 group-hover:text-[#f26b00] transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                  </div>
                  <ul className="space-y-3 relative z-10">
                    {service.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-start space-x-3 group-hover:translate-x-1 transition-transform duration-300"
                        style={{ transitionDelay: `${idx * 50}ms` }}
                      >
                        <CheckCircle
                          className="w-5 h-5 text-[#f26b00] mt-0.5 flex-shrink-0 group-hover:animate-spin"
                          style={{ animationDuration: "2s" }}
                        />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section id="diferenciais" className="py-24 bg-[#001f3f] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#001f3f] to-[#003366]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-[#f26b00]/20 border border-[#f26b00]/30 rounded-full text-[#f26b00] text-sm font-medium mb-4">
              <Award className="w-4 h-4 mr-2" />
              Nossos Diferenciais
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Por que escolher a Altha Contabilidade?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Combinamos experiência, tecnologia e atendimento personalizado para oferecer o melhor em serviços
              contábeis
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "Atendimento Personalizado",
                description:
                  "Cada cliente recebe atenção exclusiva com soluções sob medida para suas necessidades específicas",
              },
              {
                icon: Award,
                title: "Preços Competitivos",
                description: "Valores justos e transparentes, sem abrir mão da qualidade e excelência no atendimento",
              },
              {
                icon: TrendingUp,
                title: "Equipe Especializada",
                description: "Profissionais qualificados e sempre atualizados com as últimas mudanças na legislação",
              },
              {
                icon: Clock,
                title: "Suporte Ágil",
                description: "Atendimento rápido via WhatsApp, e-mail, telefone e sistema online integrado",
              },
              {
                icon: Target,
                title: "Foco em Resultados",
                description: "Comprometimento total com o crescimento e sucesso sustentável do seu negócio",
              },
              {
                icon: Zap,
                title: "Tecnologia Avançada",
                description: "Sistemas integrados e seguros para máxima eficiência e precisão nos processos",
              },
            ].map((diferencial, index) => (
              <div key={index} className="group">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 h-full hover:bg-white/10 transition-all duration-300">
                  <div className="w-16 h-16 bg-[#f26b00]/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#f26b00]/30 transition-colors">
                    <diferencial.icon className="w-8 h-8 text-[#f26b00]" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{diferencial.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{diferencial.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clientes Atendidos */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-[#f26b00]/10 rounded-full text-[#f26b00] text-sm font-medium mb-4">
              <Building2 className="w-4 h-4 mr-2" />
              Segmentos Atendidos
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#001f3f] mb-6">
              Soluções para todos os portes de empresa
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Atendemos empresas de diversos segmentos com soluções personalizadas para cada necessidade
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Building2,
                title: "MEIs e Microempresas",
                description: "Soluções simplificadas para pequenos negócios",
              },
              { icon: Users, title: "Comércio", description: "Varejista e atacadista com gestão completa" },
              {
                icon: FileText,
                title: "Prestadores de Serviços",
                description: "Diversos segmentos de serviços especializados",
              },
              {
                icon: Award,
                title: "Profissionais Liberais",
                description: "Médicos, advogados, dentistas e consultores",
              },
              {
                icon: Building2,
                title: "Construção Civil",
                description: "Construtoras e empreiteiras com regime especial",
              },
              { icon: Zap, title: "Transportadoras", description: "Logística e transporte com compliance fiscal" },
            ].map((cliente, index) => (
              <Card
                key={index}
                className="group border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-[#f26b00]/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-[#f26b00]/20 transition-colors">
                    <cliente.icon className="w-8 h-8 text-[#f26b00]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#001f3f] mb-3">{cliente.title}</h3>
                  <p className="text-gray-600">{cliente.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-[#f26b00] to-[#e55a00] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Pronto para transformar a gestão contábil da sua empresa?
            </h2>
            <p className="text-xl md:text-2xl opacity-90 leading-relaxed">
              Entre em contato conosco e descubra como podemos ajudar sua empresa a crescer com segurança fiscal e
              eficiência operacional
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
              <Button
                size="lg"
                className="bg-white text-[#f26b00] hover:bg-gray-100 px-10 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-xl group"
                asChild
              >
                <a href="https://wa.me/5598984379959?text=Ol%C3%A1%2C%20Gostaria%20de%20ter%20mais%20informa%C3%A7%C3%B5es%20sobre%20seus%20sevi%C3%A7os">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Entre em Contato: (98) 98437-9959
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-[#f26b00] px-10 py-4 text-lg font-semibold bg-transparent transition-all duration-300 hover:scale-105 group"
                asChild
              >
                <a href="mailto:contato@althacontabilidade.com.br">
                  <Mail className="w-5 h-5 mr-2" />
                  Enviar E-mail
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-[#f26b00]/10 rounded-full text-[#f26b00] text-sm font-medium mb-4">
              <Phone className="w-4 h-4 mr-2" />
              Entre em Contato
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#001f3f] mb-6">Fale com nossos especialistas</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Estamos prontos para atender você com excelência. Escolha a forma de contato que preferir
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Phone,
                title: "Telefone",
                info: "(98) 98437-9959",
                action: "Ligar Agora",
                href: "tel:+5598984379959",
              },
              {
                icon: Mail,
                title: "E-mail",
                info: "contato@althacontabilidade.com.br",
                action: "Enviar E-mail",
                href: "mailto:contato@althacontabilidade.com.br",
              },
              {
                icon: MapPin,
                title: "Endereço",
                info: "Av. Contorno Sul, nº 57 – Cohatrac I – São Luís/MA",
                action: "Ver no Mapa",
                href: "https://www.google.com/maps/place/Altha+Contabilidade/data=!4m2!3m1!1s0x0:0xb1985f728e57e97?sa=X&ved=1t:2428&ictx=111",
              },
              {
                icon: Instagram,
                title: "Instagram",
                info: "@althacontabilidade",
                action: "Seguir",
                href: "https://instagram.com/althacontabilidade",
              },
            ].map((contact, index) => (
              <Card
                key={index}
                className="group border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white"
              >
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-[#f26b00]/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-[#f26b00]/20 transition-colors">
                    <contact.icon className="w-8 h-8 text-[#f26b00]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#001f3f] mb-3">{contact.title}</h3>
                  <p className="text-gray-600 text-sm mb-6 min-h-[40px] flex items-center justify-center">
                    {contact.info}
                  </p>
                  <Button
                    className="bg-[#f26b00] hover:bg-[#e55a00] text-white w-full font-semibold transition-all duration-300 hover:scale-105"
                    asChild
                  >
                    <a
                      href={contact.href}
                      target={contact.href.startsWith("http") ? "_blank" : undefined}
                      rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    >
                      {contact.action}
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#001f3f] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="space-y-6">
              <Image src="/logo.png" alt="Altha Contabilidade" width={200} height={80} className="h-16 w-auto" />
              <p className="text-gray-300 leading-relaxed">
                Soluções completas em contabilidade para empresas que buscam excelência e crescimento sustentável.
              </p>
              <div className="flex space-x-4">
                <Link
                  href="https://instagram.com/althacontabilidade"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-[#f26b00]/20 rounded-full flex items-center justify-center text-[#f26b00] hover:bg-[#f26b00] hover:text-white transition-all duration-300"
                >
                  <Instagram className="w-5 h-5" />
                </Link>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold">Serviços</h3>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <Link href="#servicos" className="hover:text-[#f26b00] transition-colors">
                    Abertura de Empresas
                  </Link>
                </li>
                <li>
                  <Link href="#servicos" className="hover:text-[#f26b00] transition-colors">
                    Contabilidade Completa
                  </Link>
                </li>
                <li>
                  <Link href="#servicos" className="hover:text-[#f26b00] transition-colors">
                    Consultoria Tributária
                  </Link>
                </li>
                <li>
                  <Link href="#servicos" className="hover:text-[#f26b00] transition-colors">
                    Certificado Digital
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold">Empresa</h3>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <Link href="#sobre" className="hover:text-[#f26b00] transition-colors">
                    Sobre Nós
                  </Link>
                </li>
                <li>
                  <Link href="#diferenciais" className="hover:text-[#f26b00] transition-colors">
                    Diferenciais
                  </Link>
                </li>
                <li>
                  <Link href="#contato" className="hover:text-[#f26b00] transition-colors">
                    Contato
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold">Contato</h3>
              <div className="space-y-3 text-gray-300">
                <p className="flex items-center">
                  <Phone className="w-4 h-4 mr-3 text-[#f26b00]" />
                  (98) 98437-9959
                </p>
                <p className="flex items-center">
                  <Mail className="w-4 h-4 mr-3 text-[#f26b00]" />
                  contato@althacontabilidade.com.br
                </p>
                <p className="flex items-start">
                  <MapPin className="w-4 h-4 mr-3 mt-1 text-[#f26b00]" />
                  Av. Contorno Sul, nº 57
                  <br />
                  Cohatrac I – São Luís/MA
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8 text-center text-gray-300">
            <p className="mb-2">&copy; {new Date().getFullYear()} Altha Contabilidade. Todos os direitos reservados.</p>
            <p className="text-sm text-gray-400">Desenvolvido por Pedro Cutrim</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
