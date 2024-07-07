import { useEffect, useState } from 'react';
import PreviewCard from '../../components/PreviewCard/PreviewCard';
import css from './List.module.css';
import { getCampers } from '../../utils/api';

const List = () => {
  const [campers, setCampers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCampers = async () => {
      try {
        const data = await getCampers();
        setCampers(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCampers();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

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
