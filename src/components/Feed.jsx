// Feed.jsx: componente que exibe as postagens, curtidas e comentários

import { useState } from 'react';
import '../css/Feed.css';

function Feed({ posts, username }) {
  // Estados
  const [likes, setLikes] = useState({});
  const [comments, setComments] = useState({});
  const [newComment, setNewComment] = useState({});

  // Função que alterna entre curtir e descurtir uma postagem
  const toggleLike = (id) => {
    setLikes((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  // Função que atualiza o texto do comentário conforme o usuário digita
  const handleCommentChange = (id, value) => {
    setNewComment((prev) => ({ ...prev, [id]: value }));
  };

  // Função que adiciona um novo comentário à lista de comentários da postagem
  const addComment = (id) => {
    if (!newComment[id]) return; 

    setComments((prev) => ({
      ...prev,
      [id]: [...(prev[id] || []), { user: username, text: newComment[id] }],
    }));

    setNewComment((prev) => ({ ...prev, [id]: '' }));
  };

  return (
    <div className="feed">
      {/* Renderiza cada postagem */}
      {posts.map((post) => (
        <div key={post.id} className="post">
          {/* Cabeçalho com o nome do usuário que postou */}
          <div className="post-header">{post.user}</div>

          {/* Imagem da postagem */}
          <img src={post.img} alt="post" />

          {/* Botões de ação da postagem */}
          <div className="post-actions">
            <button onClick={() => toggleLike(post.id)}>
              {likes[post.id] ? '💖 Curtido' : '🤍 Curtir'}
            </button>

            <button>✈️ Compartilhar</button>
            <button>💾 Salvar</button>
          </div>

          {/* Exibe quantidade de curtidas */}
          <div className="post-likes">Curtidas: {likes[post.id] ? 1 : 0}</div>

          {/* Legenda da postagem */}
          <div className="post-caption"><strong>{post.user} </strong>{post.caption}</div>


          {/* Seção de comentários */}
          <div className="post-comments">
            <p>Comentários:</p>

            {/* Lista de comentários já feitos */}
            {(comments[post.id] || []).map((c, i) => (
              <p key={i}><strong>{c.user}</strong> {c.text}</p>
            ))}

            {/* Campo de input para digitar um novo comentário */}
            <input
              type="text"
              placeholder="Adicionar um comentário..."
              value={newComment[post.id] || ''}
              onChange={(e) => handleCommentChange(post.id, e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  e.preventDefault(); 
                  addComment(post.id); 
                }
              }}
            />

            {/* Botão para postar o comentário */}
            <button onClick={() => addComment(post.id)}>Postar</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Feed;
