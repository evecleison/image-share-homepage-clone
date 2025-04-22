// Sidebar.jsx: barra lateral de navegação

import '../css/Sidebar.css';

function Sidebar() {
  return (
    <nav className="sidebar">
      <h2 className="sidebar-title">ImageShare</h2>

      <a href="#" className="nav-item">
        <span className="icon">🏠</span>
        <span className="label">Início</span>
      </a>

      <a href="#" className="nav-item">
        <span className="icon">🔍</span>
        <span className="label">Pesquisar</span>
      </a>

      <a href="#" className="nav-item">
        <span className="icon">🧭</span>
        <span className="label">Explorar</span>
      </a>

      <a href="#" className="nav-item">
        <span className="icon">🎬</span>
        <span className="label">Reels</span>
      </a>

      <a href="#" className="nav-item">
        <span className="icon">✉️</span>
        <span className="label">Mensagens</span>
      </a>

      <a href="#" className="nav-item">
        <span className="icon">🔔</span>
        <span className="label">Notificações</span>
      </a>

      <a href="#" className="nav-item">
        <span className="icon">➕</span>
        <span className="label">Criar</span>
      </a>

      <a href="#" className="nav-item">
        <span className="icon">👤</span>
        <span className="label">Perfil</span>
      </a>
    </nav>
  );
}

export default Sidebar;
