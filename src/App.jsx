import React from 'react';
import './App.css';

const LogoGA = () => (
  <img
    src="/images/logotipo.png"
    alt="Logo Glay Anderson"
    className="brand-logo-img"
  />
);

export default function App() {
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
              {/* AINDA NAO IMPLEMENTADOS 
              <a href="#diferenciais">#Diferenciais#</a>
              <a href="#depoimentos">#Depoimentos#</a>
              */}

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
            <span className="badge-icon">✓</span> ATENDO TODA A GRANDE NATAL
          </div>
          <h1 className="hero-title">
            Um transporte de <br />
            <span className="text-orange" >Excelência</span><br />

          </h1>
          <p className="hero-description">
            Olá! Me chamo <strong>Glay Anderson</strong> e ofereço um serviço de transporte premium com foco absoluto em segurança,
            pontualidade e agilidade para clientes exigentes e/ou executivos.
          </p>
          <div className="hero-buttons">
            <a
              href="https://wa.me/5584998169229?text=Ol%C3%A1%2C%20Anderson!%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento%20%2F%20agendar%20uma%20viagem%20com%20voc%C3%AA."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-green"
            >
              <img src="/icons/zap.svg" alt="WhatsApp" className="btn-svg-icon" />
              WhatsApp
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
              Credenciado como taxista pelo município de São Gonçalo do Amarante - RN, com mais de 15 anos de experiência no mercado como taxista e motorista executivo, construí uma reputação baseada em três pilares fundamentais: <strong>Segurança, Pontualidade e Conforto.</strong>
            </p>
            <p>
              Cada viagem é planejada para garantir que você chegue ao seu destino sem preocupações e da melhor forma possível. Meu compromisso é proporcionar uma experiência tranquila, permitindo que você relaxe ou continue seu trabalho durante a viagem.
            </p>

            <ul className="about-list">
              <li>
                <span className="check-icon">✓</span>
                <span><strong>Profissionalismo e seriedade</strong></span>
              </li>
              <li>
                <span className="check-icon">✓</span>
                <span><strong>Conhecimento profundo das rotas de toda a grande Natal</strong></span>
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
          <span className="section-subtitle-black">COMO POSSO TE AJUDAR?</span>
          <h2 className="section-title-dark">
            <span className="text-orange-heading">Serviços Prestados</span>
          </h2>
        </div>

        <div className="services-grid">
          {/* Card 1 */}
          <div className="service-card">
            <div className="service-icon-box">🚕</div>
            <h3>TAXI de Qualidade</h3>
            <p>
              Deslocamentos diários com conforto, segurança e privacidade para reuniões, compromissos e eventos.
            </p>
          </div>

          {/* Card 2 */}
          <div className="service-card">
            <div className="service-icon-box">🗺️</div>
            <h3>Viagens Intermunicipais</h3>
            <p>
                Viaje com tranquilidade entre cidades, aproveitando um serviço executivo que une conforto, segurança e excelência.
            </p>
          </div>

          {/* Card 3 */}
          <div className="service-card">
            <div className="service-icon-box">🤵‍♂️</div>
            <h3>Motorista Particular</h3>
            <p>
              Motorista particular à sua disposição pelo tempo que precisar, garantindo conforto, segurança e uma experiência de alto padrão.
            </p>
          </div>

          {/* Card 4 */}
          <div className="service-card">
            <div className="service-icon-box">🛫</div>
            <h3>Traslado Aeroporto</h3>
            <p>
              Recepção e traslado para o aeroporto, com pontualidade e tranquilidade em cada embarque e desembarque.
            </p>
          </div>
        </div>
      </section>

      {/* SEÇÃO CONTATO CENTRALIZADA */}
      <section id="contato" className="booking-section">
        <div className="booking-container-centered">
          <div className="booking-info-centered">
            <span className="section-subtitle-orange uppercase">AGENDE JÁ A SUA VIAGEM</span>
            <h2 className="booking-title">
              Pronto para uma experiência <br />
              <span className="text-orange">Premium?</span>
            </h2>
            <p className="booking-description">
              Entre em contato para orçamentos, disponibilidade e reservas. Estarei de prontidão para lhe atender.
            </p>

            <div className="contact-cards-centered">
              <a
                href="https://wa.me/5584998169229?text=Ol%C3%A1%2C%20Anderson!%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento%20%2F%20agendar%20uma%20viagem%20com%20voc%C3%AA."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-green"
              >
                <img src="/icons/zap.svg" alt="WhatsApp" className="btn-svg-icon" />
                Agende via WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-col-main">
            <a href="#" className="logo-container">
              <LogoGA />
              <div className="logo-text-box">
                <span className="logo-text">Glay Anderson</span>
                <span className="logo-subtext">Motorista Executivo</span>
              </div>
            </a>
            <p className="footer-description">
              Excelência em transporte executivo. Segurança, pontualidade e qualidade para suas viagens.
            </p>
          </div>

          <div className="footer-col footer-col-links">
            <h4>Links Rápidos</h4>
            <ul>
              <li><a href="#sobre">Sobre</a></li>
              <li><a href="#servicos">Serviços</a></li>
              <li><a href="#contato">Contato</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 Glay Anderson. Todos os direitos reservados.</p>
          <p className="developer-credit-wrapper">
            Developed by{' '}
            <a
              className="developer-credit"
              href="https://lucas-lopes.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Lucas "noid" Lopes
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}