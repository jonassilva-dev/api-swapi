import React from 'react';
import Homeimg from '../../assets/home.jpg'
import './style.css'

// import { Container } from './styles';

function Home() {
  return(
      <main>
          <div className="content">
              <img src={Homeimg} alt=""/>
          </div>
      </main>
  );
}

export default Home;