// RightPanel.jsx: componente do painel à esquerda contendo as sugestões

import '../css/RightPanel.css';

function RightPanel({ username, name, image, suggestions }) {
  return (
    <aside className="right-panel">
      {/* Cabeçalho do perfil */}
      <div className="profile-header">
        <div className="profile-info">
          <img src={image} alt={username} className="profile-avatar" />
          <div>
            <strong className="profile-username">{username}</strong>
            <p className="profile-name">{name}</p>
          </div>
        </div>
        <button className="switch-btn">Mudar</button>
      </div>

      {/* Sugestões */}
      <div className="suggestions">
        <div className="suggestions-header">
          <span>Sugestões para você</span>
          <button className="see-all-btn">Ver tudo</button>
        </div>
        {suggestions.map((s, i) => (
          <div key={i} className="suggestion-item">
            <img src={s.image} alt={s.username} className="suggestion-avatar" />
            <div className="suggestion-text">
              <strong>{s.username}</strong>
              <span>{s.info}</span>
            </div>
            <button className="follow-btn">Seguir</button>
          </div>
        ))}
      </div>

      {/* Links de rodapé */}
      <div className="panel-links">
        <a href="#">Sobre</a>·
        <a href="#">Ajuda</a>·
        <a href="#">Imprensa</a>·
        <a href="#">API</a>·
        <a href="#">Carreiras</a>·
        <a href="#">Privacidade</a>·
        <a href="#">Termos</a>·
        <a href="#">Localizações</a>·
        <a href="#">Hashtags</a>·
        <a href="#">Idioma</a>
        <a href="#">Meta Verified</a>·
      </div>

      <p className="footer-copy">© 2025  IMAGESHARE</p>
    </aside>
  );
}

export default RightPanel;
