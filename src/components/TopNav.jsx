// TopNav.jsx: componente da barra de naveção superior

import '../css/TopNav.css';

function TopNav() {
  return (
    <div className="top-nav">
      <h2>ImageShare</h2>
      <div className="icons">
        <span title="Notificações">🔔</span>
        <span title="Mensagens">✉️</span>
      </div>
    </div>
  );
}

export default TopNav;
