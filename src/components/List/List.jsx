import PreviewCard from '../../components/PreviewCard/PreviewCard';
import css from './List.module.css';
import { getCampers } from '../../utils/api';

const List = () => {
  const campers = getCampers();

  console.log(campers);
  return (
    <ul className={css.list}>
      {campers.map(camper => (
        <li key={camper._id}>
          <PreviewCard camper={camper} />
        </li>
      ))}
    </ul>
  );
};

export default List;
