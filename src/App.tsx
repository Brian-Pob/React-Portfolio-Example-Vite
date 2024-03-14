import {
  Topbar,
  Menu,
  Intro,
  Portfolio,
  Works,
  Testimonials,
  Contact,
} from './components';
import './app.scss';
import { useState } from 'react';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className='app'>
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}></Topbar>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}></Menu>
      <div className='sections'>
        <Intro></Intro>
        <Portfolio></Portfolio>
        <Works></Works>
        <Testimonials></Testimonials>
        <Contact></Contact>
      </div>
    </div>
  );
}

// development order:
// 0. import './app.scss'
// 1. add div sections, and include all components
// 2. add topbar without menuOpen
// 3. add menu to app and menu script without menuOpen
// 4. introduce React Hook and add menuOpen to topbar and menuOpen (use slides of useState)
// 5. add id to each component
// 6. add codes to intro
// 7. working portfolio and portfolioList

export default App;
