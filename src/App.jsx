// App.jsx: Componente principal do aplicativo

import './css/App.css';
import Sidebar from './components/Sidebar';
import Stories from './components/Stories';
import Feed from './components/Feed';
import RightPanel from './components/RightPanel';
import TopNav from './components/TopNav';
import BottomNav from './components/BottomNav';

function App() {
  // Dados dos stories
  const storiesData = [
    { id: 1, user: 'Ana', img: './assets/woman.jpg' },
    { id: 2, user: 'Mariano', img: './assets/man-coffe.jpg' },
    { id: 3, user: 'Iara', img: './assets/smiling.jpg' },
    { id: 4, user: 'Lucas', img: './assets/m.jpg' },
    { id: 5, user: 'Juliano', img: './assets/jjagtenberg.jpg' },
    { id: 6, user: 'Bia', img: './assets/girl.jpg' },
    { id: 7, user: 'Letícia', img: './assets/mulher-loira.jpg' },
    { id: 8, user: 'João', img: './assets/night-sky.jpg' },
    { id: 9, user: 'Biana', img: './assets/fashion.jpg' },
    { id: 10, user: 'Victoria', img: './assets/family.jpg' }
  ];

  // Dados das postagens
  const postsData = [
    { id: 1, user: 'Juliano', img: './assets/jjagtenberg.jpg', caption: 'Curtindo a vista!' },
    { id: 2, user: 'João', img: './assets/night-sky.jpg', caption: 'Céu noturno' },
    { id: 3, user: 'Iara', img: './assets/woman-8237167_1280.jpg', caption: '' },
    { id: 4, user: 'Victoria', img: './assets/family.jpg', caption: 'Minha Família' }
  ];

  // Dados do usuário
  const user = {
    username: 'leandro',
    name: 'Leandro',
    image: './assets/man.jpg',
  };

  // Dados das sugestões
  const suggestions = [
    {
      username: 'cristina02',
      info: 'Seguido(a) por heych2002 ...',
      image: './assets/divinetechygirl.jpg',
    },
    {
      username: 'jonas232',
      info: 'Seguido(a) por kenoere ...',
      image: './assets/homem-barbado.jpg',
    },
    {
      username: 'sabrina_19',
      info: 'Seguido(a) por lofti232 ...',
      image: './assets/tephanefabricebass.jpg',
    },
    {
      username: 'Alessandro77',
      info: 'Seguido por lofti232 ...',
      image: './assets/kalz-michael.jpg',
    },
    {
      username: 'gustavo-fring',
      info: 'Seguido por dark_emeralds',
      image: './assets/gustavo-fring.jpg',
    },
  ];

  return (
    <div className="app">
      <TopNav />
      <Sidebar />
      <main className="main-content">
        <Stories stories={storiesData} />
        <Feed posts={postsData} username={user.username} />
      </main>
      <RightPanel
        username={user.username}
        name={user.name}
        image={user.image}
        suggestions={suggestions}
      />
      <BottomNav />
    </div>
  );
}

export default App;