{/*Código criado por Auridinei abreu Lima. Qualquer uso indevido suheito a processo */}

import { useState } from 'react'

export default function App() {
  const [activeTab, setActiveTab] = useState('inicio')

  return (
    <div style={styles.container}>
      {/* Barra de Acessibilidade Superior */}
      <div style={styles.topBar}>
        <div style={styles.innerContainer}>
          <span>Portal Pessoal / Perfil Oficial</span>
          <span style={styles.dateText}>Brasília, {new Date().toLocaleDateString('pt-BR')}</span>
        </div>
      </div>

      {/* Cabeçalho Principal (Header) */}
      <header style={styles.header}>
        <div style={{ ...styles.innerContainer, ...styles.headerContent }}>
          <div style={styles.logoArea}>
            {/* Ícone que remete a um brasão institucional */}
            <div style={styles.crest}>💻</div>
            <div>
              <h1 style={styles.title}>ESCRITÓRIO PESSOAL</h1>
              <p style={styles.subtitle}>Aury • Espaço Digital Pessoal e Profissional</p>
            </div>
          </div>
        </div>
      </header>

      {/* Menu de Navegação Estilo Portal do Governo */}
      <nav style={styles.nav}>
        <div style={{ ...styles.innerContainer, ...styles.navLinks }}>
          <button 
            style={activeTab === 'inicio' ? styles.activeNavLink : styles.navLink} 
            onClick={() => setActiveTab('inicio')}
          >
            Início / Diretrizes
          </button>
          <button 
            style={activeTab === 'biografia' ? styles.activeNavLink : styles.navLink} 
            onClick={() => setActiveTab('biografia')}
          >
            Biografia Oficial
          </button>
          <button 
            style={activeTab === 'atuacao' ? styles.activeNavLink : styles.navLink} 
            onClick={() => setActiveTab('atuacao')}
          >
            Áreas de Atuação
          </button>
        </div>
      </nav>

      {/* Conteúdo Principal Modificável */}
      <main style={{ ...styles.innerContainer, ...styles.main }}>
        <section style={styles.card}>
          {activeTab === 'inicio' && (
            <>
              <h2 style={styles.sectionTitle}>Boas-vindas ao Portal Oficial</h2>
              <div style={styles.divider}>Aury Abreu</div>
              <p style={styles.text}>
                Este ambiente digital foi estruturado seguindo os princípios de transparência, 
                formalidade e organização. Aqui encontram-se reunidos os registros profissionais, 
                histórico de atuação e artigos de interesse público de <strong>Aury</strong>.
              </p>
              <p style={styles.text}>
                Navegue pelas seções acima utilizando o menu de atos e registros para conhecer 
                mais sobre a trajetória e competências institucionais.
              </p>
            </>
          )}

          {activeTab === 'biografia' && (
            <>
              <h2 style={styles.sectionTitle}>Biografia e Trajetória</h2>
              <div style={styles.divider}></div>
              <p style={styles.text}>
                Espaço dedicado ao memorial acadêmico e histórico profissional. Linha do tempo 
                pessoal pautada pela ética, conformidade técnica e dedicação ao desenvolvimento 
                de soluções eficientes.
              </p>
            </>
          )}

          {activeTab === 'atuacao' && (
            <>
              <h2 style={styles.sectionTitle}>Competências e Atuação</h2>
              <div style={styles.divider}></div>
              <p style={styles.text}>
                Lista de atribuições, projetos ativos e áreas de especialidade técnica de 
                caráter corporativo ou de desenvolvimento tecnológico.
              </p>
            </>
          )}
        </section>
      </main>

      {/* Rodapé Padrão de Governo */}
      <footer style={styles.footer}>
        <div style={styles.innerContainer}>
          <p>© {new Date().getFullYear()} Escritório Digital de Aury. Todos os direitos reservados de acordo com a Constituição Federal.</p>
        </div>
      </footer>
    </div>
  )
}

// Estilos inline para garantir que funcione de primeira sem dependências externas
const styles: Record<string, React.CSSProperties> = {
  container: {
    fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
    backgroundColor: '#f4f6f8',
    color: '#333333',
    minHeight: '100vh',
    margin: 0,
    display: 'flex',
    flexDirection: 'column',
  },
  innerContainer: {
    width: '100%',
    maxWidth: '1100px',
    margin: '0 auto',
    padding: '0 20px',
    boxSizing: 'border-box',
  },
  topBar: {
    backgroundColor: '#002147', // Azul escuro oficial
    color: '#ffffff',
    fontSize: '12px',
    padding: '8px 0',
    borderBottom: '2px solid #dfa117', // Detalhe em ouro
    display: 'flex',
  },
  dateText: {
    float: 'right',
    opacity: 0.8,
  },
  header: {
    backgroundColor: '#002f6c', // Tom de azul de portais jurídicos/federais
    color: '#ffffff',
    padding: '30px 0',
  },
  headerContent: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logoArea: {
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
  },
  crest: {
    fontSize: '40px',
    backgroundColor: 'rgba(255,255,255,0.1)',
    padding: '10px',
    borderRadius: '8px',
    border: '1px solid #dfa117',
  },
  title: {
    margin: 0,
    fontSize: '24px',
    fontWeight: 'bold',
    letterSpacing: '1px',
  },
  subtitle: {
    margin: '5px 0 0 0',
    fontSize: '14px',
    color: '#bdc3c7',
  },
  nav: {
    backgroundColor: '#ffffff',
    borderBottom: '1px solid #dcdde1',
    boxShadow: '0 2px 5px rgba(0,0,0,0.05)',
  },
  navLinks: {
    display: 'flex',
    gap: '5px',
  },
  navLink: {
    background: 'none',
    border: 'none',
    padding: '15px 20px',
    fontSize: '14px',
    fontWeight: 'bold',
    color: '#002f6c',
    cursor: 'pointer',
    borderBottom: '3px solid transparent',
    transition: 'all 0.2s',
  },
  activeNavLink: {
    background: 'none',
    border: 'none',
    padding: '15px 20px',
    fontSize: '14px',
    fontWeight: 'bold',
    color: '#002f6c',
    cursor: 'pointer',
    borderBottom: '3px solid #dfa117', // Destaque dourado na aba ativa
    backgroundColor: '#f4f6f8',
  },
  main: {
    flex: 1,
    paddingTop: '30px',
    paddingBottom: '30px',
  },
  card: {
    backgroundColor: '#ffffff',
    padding: '40px',
    borderRadius: '4px',
    borderTop: '4px solid #002f6c',
    boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
  },
  sectionTitle: {
    margin: '0 0 10px 0',
    color: '#002f6c',
    fontSize: '22px',
  },
  divider: {
    height: '2px',
    backgroundColor: '#dfa117',
    width: '60px',
    marginBottom: '20px',
  },
  text: {
    fontSize: '16px',
    lineHeight: '1.6',
    color: '#4a4a4a',
    marginBottom: '15px',
  },
  footer: {
    backgroundColor: '#1e272e',
    color: '#ffffff',
    padding: '20px 0',
    fontSize: '13px',
    textAlign: 'center',
    opacity: 0.9,
    borderTop: '3px solid #002147',
  },
}
