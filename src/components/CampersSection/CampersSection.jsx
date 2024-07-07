import { useEffect, useState } from 'react';
import { getCampers } from '../../utils/api';
import css from './CampersSection.module.css';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';

const CampersSection = () => {
  const [campers, setCampers] = useState([]);

  useEffect(() => {
    const fetchCampers = async () => {
      const campersData = await getCampers();
      setCampers(campersData);
    };

    fetchCampers();
  }, []);

  return (
    <section id="campers" className={css.campers}>
      <h2 className={css.title}>Our Campers</h2>
      <div className={css.gallery}>
        {campers.map(camper => (
          <div key={camper._id} className={css.camperGallery}>
            <div className={css.images}>
              <img key={camper._id} src={camper.gallery[0]} alt={camper.name} className={css.camperImage} />
            </div>
          </div>
        ))}
        <div className={css.details}>
          <p className={css.text}>Details</p>
          <Button>
            <Link to="/campers" className="details-button">
              See more details
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CampersSection;
