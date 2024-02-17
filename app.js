import { animals } from './animals';
import React from 'react';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('app');
const root = createRoot(container);

const showBackground = true

const displayFact = (e) => {
  let animalClicked = e.target.alt
  console.log(animals[animalClicked].facts)
  let fact = animals[animalClicked].facts[Math.floor(Math.random() * animals[animalClicked].facts.length)]
  document.getElementById('fact').innerHTML = fact
}

const images = []
for(const animal in animals){
  images.push(<img onClick={displayFact} key={animal} className='animal' alt={animal} src={animals[animal].image} aria-label={animal} role='button'/>)
}
const title = '';

const background = <img className="background" alt="ocean" src="/images/ocean.jpg" />

const animalFacts = (
  <div>
    <h1>{title === '' ? 'Click an animal for a fun fact' : title}</h1>
    {showBackground && background}
    <div className='animals'>
      {images}
    </div>
    <p id="fact"></p>
  </div>
)


root.render(animalFacts)
