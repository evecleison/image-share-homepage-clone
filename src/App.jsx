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
    { id: 1, user: 'Ana', img: '/woman.jpg' },
    { id: 2, user: 'Mariano', img: '/man-coffe.jpg' },
    { id: 3, user: 'Iara', img: '/smiling.jpg' },
    { id: 4, user: 'Lucas', img: '/m.jpg' },
    { id: 5, user: 'Juliano', img: '/jjagtenberg.jpg' },
    { id: 6, user: 'Bia', img: '/girl.jpg' },
    { id: 7, user: 'Letícia', img: '/mulher-loira.jpg' },
    { id: 8, user: 'João', img: '/night-sky.jpg' },
    { id: 9, user: 'Biana', img: '/fashion.jpg' },
    { id: 10, user: 'Victoria', img: '/family.jpg' }
  ];

  // Dados das postagens
  const postsData = [
    { id: 1, user: 'Juliano', img: '/jjagtenberg.jpg', caption: 'Curtindo a vista!' },
    { id: 2, user: 'João', img: '/night-sky.jpg', caption: 'Céu noturno' },
    { id: 3, user: 'Iara', img: '/woman-8237167_1280.jpg', caption: '' },
    { id: 4, user: 'Victoria', img: '/family.jpg', caption: 'Minha Família' }
  ];

  // Dados do usuário
  const user = {
    username: 'leandro',
    name: 'Leandro',
    image: '/man.jpg',
  };

  // Dados das sugestões
  const suggestions = [
    {
      username: 'cristina02',
      info: 'Seguido(a) por heych2002 ...',
      image: '/divinetechygirl.jpg',
    },
    {
      username: 'jonas232',
      info: 'Seguido(a) por kenoere ...',
      image: '/homem-barbado.jpg',
    },
    {
      username: 'sabrina_19',
      info: 'Seguido(a) por lofti232 ...',
      image: '/tephanefabricebass.jpg',
    },
    {
      username: 'Alessandro77',
      info: 'Seguido por lofti232 ...',
      image: '/kalz-michael.jpg',
    },
    {
      username: 'gustavo-fring',
      info: 'Seguido por dark_emeralds',
      image: '/gustavo-fring.jpg',
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