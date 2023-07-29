import './App.css';
import React, { useState, useEffect } from 'react';

const App = () => {
  const [person] = useState({
    fullName: 'Lionel Messi',
    bio: 'Lionel Messi, parfois surnommé Leo Messi, né le 24 juin 1987 à Rosario en Argentine, est un footballeur international argentin jouant au poste dattaquant.',
    imgSrc: 'https://assets-fr.imgfoot.com/media/cache/1200x1200/lionel-messi-psg-2223-1.jpg',
    profession: 'Football player',
  });

  const [show, setShow] = useState(false);
  const [mountTime, setMountTime] = useState(Date.now());

  useEffect(() => {
    const interval = setInterval(() => {
      setMountTime(Date.now());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const toggleShow = () => {
    setShow((prevShow) => !prevShow);
  };

  const timeSinceMount = Math.floor((Date.now() - mountTime) / 1000);

  return (
    <div>
      <button onClick={toggleShow}>Toggle</button>
      {show && (
        <div>
          <img src={person.imgSrc} alt={person.fullName} />
          <h2>{person.fullName}</h2>
          <p>{person.bio}</p>
          <p>Profession: {person.profession}</p>
        </div>
      )}
      <p>Time since mount: {timeSinceMount} seconds</p>
    </div>
  );
};

export default App;
