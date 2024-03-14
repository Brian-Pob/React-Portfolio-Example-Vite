import PortfolioList from '../portfolioList/PortfolioList';
import './portfolio.scss';
import { useState, useEffect } from 'react';

type FeaturedItem = {
  id: number;
  title: string;
  img: string;
};
export type FeaturedItemsList = {
  featured: FeaturedItem[];
  research: FeaturedItem[];
  web: FeaturedItem[];
  design: FeaturedItem[];
};

function PortfolioImages(item: FeaturedItem) {
  return (
    <div className='item'>
      <h3>{item.title}</h3>
      <img src={item.img} alt={item.title}></img>
    </div>
  );
}
export default function Portfolio() {
  const [selected, setSelected] = useState<keyof FeaturedItemsList>(
    'featured' as keyof FeaturedItemsList
  );
  const [featuredItems, setFeaturedItems] = useState<FeaturedItemsList>();
  const list = [
    {
      id: 'featured',
      title: 'Featured',
    },
    {
      id: 'research',
      title: 'Research',
    },
    {
      id: 'web',
      title: 'Web App',
    },
    {
      id: 'design',
      title: 'Design',
    },
  ];

  useEffect(() => {
    fetch('./data.json')
      .then((response) => response.json())
      .then((data) => setFeaturedItems(data));
  }, []);

  return (
    <div className='portfolio' id='portfolio'>
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          ></PortfolioList>
        ))}
      </ul>
      <div className='container'>
        {featuredItems &&
          featuredItems[selected].map((d) => PortfolioImages(d))}
      </div>
    </div>
  );
}

// 1. adding list and introduce map in jsx without adding container
// 2. importing and adding PortoflioList without active and setSelected
// 3. import and adding useEffect and useState for data (get featured data only)
// 4. add select feature by adding select state
// 5. end
{
  /* <div className="container">
            {data["featured"] && data["featured"].map((d)=>{
                return (
                <div className="item">
                    <h3>{d.title}</h3>
                    <img src={d.img}></img>
                </div>
                )
            })}
            
        </div>
    */
}
