import './portfolioList.scss';
import type { FeaturedItemsList } from '../portfolio/Portfolio';
export default function PortfolioList({
  title,
  active,
  setSelected,
  id,
}: {
  title: string;
  active: boolean;
  setSelected: (id: keyof FeaturedItemsList) => void;
  id: string;
}) {
  return (
    <li
      key={id}
      className={active ? 'portfolioList active' : 'portfolioList'}
      onClick={() => setSelected(id as keyof FeaturedItemsList)}
    >
      {title}
    </li>
  );
}

// 1. fixed error in portfolioList by adding @ before import and importing portfolioList
// export default function PortfolioList({title, id}) {
//   return (
//     <li  key={id} className="portfolioList">{title}</li>
//   )
// }
