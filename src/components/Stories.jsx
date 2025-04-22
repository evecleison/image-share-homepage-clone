// Stories.jsx: componente que exibe os stories

import '../css/Stories.css';

function Stories({ stories }) {
  return (
    <div className="stories">
      {stories.map((story) => (
        <div key={story.id} className="story">
          <div className="story-icon">
            <img src={story.img} alt={story.user} />
          </div>
          <span>{story.user}</span>
        </div>
      ))}
    </div>
  );
}

export default Stories;