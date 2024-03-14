import './menu.scss';

export default function Menu({
  menuOpen,
  setMenuOpen,
}: {
  menuOpen: boolean;
  setMenuOpen: (value: boolean) => void;
}) {
  return (
    <div className={'menu ' + (menuOpen && 'active')}>
      <ul>
        <li onClick={() => setMenuOpen(false)}>
          <a href='#intro'>Intro</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href='#portfolio'>Portfolio</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href='#works'>Works</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href='#testimonials'>Testimonials</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href='#contact'>Contact</a>
        </li>
      </ul>
    </div>
  );
}

{
  /* 
<div className='menu active'>
    <ul>
        <li>
            <a href='#intro'>Intro</a>
        </li>
        <li >
            <a href='#portfolio'>Portfolio</a>
        </li>
        <li> 
            <a href='#works' >Works</a>
        </li>
        <li>
            <a href='#testimonials' >Testimonials</a>
        </li>
        <li>
            <a href='#contact' >Contact</a>
        </li>
    </ul>
</div> 
*/
}
