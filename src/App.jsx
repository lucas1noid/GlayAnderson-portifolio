import React, { useState } from 'react';
import './App.css';

// Componente para o Logotipo estilizado enquanto estiver sem logotipo original (gerado com IA)
const LogoGA = () => (
  <svg width="42" height="42" viewBox="0 0 100 100" className="ga-logo-svg">
    {/* Anel Externo Quadriculado (Padrão Xadrez/Táxi Executivo) */}
    <circle cx="50" cy="50" r="45" fill="none" stroke="#f97316" strokeWidth="6" strokeDasharray="7 5" />
    {/* Anel Interno Dourado */}
    <circle cx="50" cy="50" r="37" fill="#0b0d0f" stroke="#eab308" strokeWidth="3" />
    {/* Sigla GA */}
    <text x="50" y="62" textAnchor="middle" fill="#ffffff" fontSize="38" fontWeight="900" fontFamily="Inter, sans-serif">GA</text>
  </svg>
);

export default function App() {
  const [formData, setFormData] = useState({
    nome: '',
    telefone: '',
    data: '',
    detalhes: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Solicitação enviada com sucesso!');
  };

  return (
    <div className="app-container">
      {/* NAVBAR */}
      <header className="navbar">
        <div className="navbar-container">
          <a href="#" className="logo-container">
            <LogoGA />
            <div className="logo-text-box">
              <span className="logo-text">GLAY ANDERSON</span>
              <span className="logo-subtext">MOTORISTA EXECUTIVO · TAXI </span>
            </div>
          </a>

          <nav className="nav-links">
            <a href="#sobre">Sobre</a>
            <a href="#servicos">Serviços</a>
            <a href="#diferenciais">#Diferenciais#</a>
            <a href="#depoimentos">#Depoimentos#</a>
          </nav>

          <div className="nav-actions">
            {/* Botão contato */}
            <a href="#contato" className="btn-orange-header">
              Contato
            </a>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="badge-tag">
            <span className="badge-icon">✓</span> MOTORISTA EXECUTIVO PREMIUM
          </div>
          <h1 className="hero-title">
            Excelência em<br />
            <span className="text-orange">Transporte</span><br />
            <span className="text-orange">Executivo</span>
          </h1>
          <p className="hero-description">
            Glay Anderson oferece um serviço de transporte premium com foco absoluto em segurança,
            pontualidade e discrição para executivos e clientes exigentes.
          </p>
          <div className="hero-buttons">
            <a href="https://wa.me/5584998169229" target="_blank" rel="noopener noreferrer" className="btn-orange">
              <span className="btn-icon">💬</span> Agende via WhatsApp
            </a>
            <a href="tel:+5584998169229" className="btn-outline">
              <span className="btn-icon">📞</span> Ligar Agora
            </a>
          </div>
        </div>
      </section>

      {/* SEÇÃO SOBRE (EXPERIÊNCIA E CONFIANÇA) */}
      <section id="sobre" className="about-section">
        <div className="about-container">
          <div className="about-image-card">
            <img 
              src="/images/glay-sobre.png" 
              alt="Glay Anderson - Motorista Executivo" 
              className="about-image"
            />
          </div>

          <div className="about-content">
            <h2>Experiência e <span className="text-orange">Confiança</span></h2>
            <p>
              Com anos de experiência no mercado de transporte executivo, Glay Anderson construiu uma reputação baseada em três pilares fundamentais: <strong>Segurança, Pontualidade e Conforto.</strong>
            </p>
            <p>
              Cada viagem é planejada meticulosamente para garantir que você chegue ao seu destino sem preocupações. Nosso compromisso é proporcionar uma experiência tranquila, permitindo que você relaxe ou continue seu trabalho com total privacidade.
            </p>

            <ul className="about-list">
              <li>
                <span className="check-icon">✓</span>
                <span><strong>Profissionalismo e Discrição</strong></span>
              </li>
              <li>
                <span className="check-icon">✓</span>
                <span><strong>Conhecimento profundo das rotas</strong></span>
              </li>
              <li>
                <span className="check-icon">✓</span>
                <span><strong>Atendimento bilíngue (sob consulta)</strong></span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* SEÇÃO SERVIÇOS ESPECIALIZADOS */}
      <section id="servicos" className="services-section">
        <div className="section-header-center">
          <span className="section-subtitle-orange">NOSSAS SOLUÇÕES</span>
          <h2 className="section-title-dark">
            <span className="text-gray">Serviços</span> <span className="text-orange-heading">Especializados</span>
          </h2>
        </div>

        <div className="services-grid">
          {/* Card 1 */}
          <div className="service-card">
            <div className="service-icon-box">🚗</div>
            <h3>Transporte Executivo</h3>
            <p>
              Deslocamento corporativo diário com total conforto e privacidade para reuniões e compromissos.
            </p>
          </div>

          {/* Card 2 */}
          <div className="service-card">
            <div className="service-icon-box">🗺️</div>
            <h3>Viagens Intermunicipais</h3>
            <p>
              Viagens seguras e tranquilas entre cidades, ideais para negócios ou lazer prolongado.
            </p>
          </div>

          {/* Card 3 */}
          <div className="service-card">
            <div className="service-icon-box">🛫</div>
            <h3>Traslados Aeroporto</h3>
            <p>
              Recepção no aeroporto com monitoramento de voos para garantir pontualidade no embarque e desembarque.
            </p>
          </div>

          {/* Card 4 */}
          <div className="service-card">
            <div className="service-icon-box">🏢</div>
            <h3>Eventos e Empresas</h3>
            <p>
              Soluções logísticas para eventos corporativos, congressos e transporte de delegações empresariais.
            </p>
          </div>
        </div>
      </section>

      {/* SEÇÃO CONTATO / COTAÇÃO + CARTÃO DIGITAL INTEGRADO */}
      <section id="contato" className="booking-section">
        <div className="booking-container">
          <div className="booking-info">
            <span className="section-subtitle-orange uppercase">AGENDE SUA VIAGEM</span>
            <h2 className="booking-title">
              Pronto para uma experiência <br />
              <span className="text-orange">Premium?</span>
            </h2>
            <p className="booking-description">
              Entre em contato para orçamentos, disponibilidade e reservas. Respondemos prontamente.
            </p>

            <div className="contact-cards">
              <div className="contact-card">
                <div className="contact-icon-box green">💬</div>
                <div className="contact-card-text">
                  <span className="contact-label">WhatsApp</span>
                  <span className="contact-val">(84) 99816-9229</span>
                </div>
              </div>

              <div className="contact-card">
                <div className="contact-icon-box orange">✉️</div>
                <div className="contact-card-text">
                  <span className="contact-label">E-mail</span>
                  <span className="contact-val">contato@glayanderson.com</span>
                </div>
              </div>
            </div>

            {/* REPRODUÇÃO DO CARTÃO FÍSICO DO CLIENTE NO SITE */}
            <div className="business-card-widget">
              <div className="bc-main">
                <div className="bc-header">
                  <h4>GLAY ANDERSON</h4>
                  <span>MOTORISTA EXECUTIVO - TÁXI</span>
                </div>
                <div className="bc-body">
                  <p className="bc-phone">📞 (84) 99816.9229</p>
                  <div className="qr-code-box">
                    {/* Placeholder visual do QR Code do cartão */}
                    <img 
                      src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://wa.me/5584998169229" 
                      alt="QR Code WhatsApp Glay Anderson" 
                    />
                    <span>Escaneie para chamar</span>
                  </div>
                </div>
              </div>
              <div className="bc-stripe">
                <LogoGA />
                <div className="checkered-pattern-accent"></div>
              </div>
            </div>

          </div>

          <div id="agendar" className="booking-form-card">
            <h3>Solicitar Cotação</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Nome Completo</label>
                <input 
                  type="text" 
                  name="nome"
                  placeholder="Seu nome" 
                  value={formData.nome}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Telefone / WhatsApp</label>
                  <input 
                    type="text" 
                    name="telefone"
                    placeholder="(84) 99816-9229" 
                    value={formData.telefone}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Data da Viagem</label>
                  <input 
                    type="text" 
                    name="data"
                    placeholder="dd/mm/aaaa" 
                    value={formData.data}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Detalhes do Trajeto</label>
                <textarea 
                  name="detalhes"
                  placeholder="Origem, destino, número de passageiros..." 
                  rows="4"
                  value={formData.detalhes}
                  onChange={handleChange}
                ></textarea>
              </div>

              <button type="submit" className="btn-submit-orange">
                Enviar Solicitação
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-col-main">
            <div className="logo-container">
              <LogoGA />
              <div className="logo-text-box">
                <span className="logo-text">Glay Anderson</span>
                <span className="logo-subtext">Motorista Executivo</span>
              </div>
            </div>
            <p className="footer-description">
              Excelência em transporte executivo. Segurança, pontualidade e luxo para suas viagens corporativas e pessoais.
            </p>
          </div>

          <div className="footer-col">
            <h4>Links Rápidos</h4>
            <ul>
              <li><a href="#sobre">Sobre</a></li>
              <li><a href="#servicos">Serviços</a></li>
              <li><a href="#contato">Contato</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Legal</h4>
            <ul>
              <li><a href="#privacy">Privacy Policy</a></li>
              <li><a href="#terms">Terms of Service</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2024 Glay Anderson Executive Chauffeur. All rights reserved. Precision. Reliability. Luxury.</p>
          <p className="developer-credit">Developed by Lucas Lopes</p>
        </div>
      </footer>
    </div>
  );
}