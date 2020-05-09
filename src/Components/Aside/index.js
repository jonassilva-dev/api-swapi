import React from 'react';

// import { Container } from './styles';

function Aside() {
  return(
      <aside>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/peoples">People</a></li>
            <li><a href="/planets">Planets</a></li>
          </ul>
      </aside>
  );
}

export default Aside;