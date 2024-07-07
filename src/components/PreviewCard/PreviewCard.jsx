import icons from '../../images/sprite.svg';
import { useState } from 'react';
import Button from '../Button/Button';
import FeatureItem from '../FeatureItem/FeatureItem';
import Card from '../Card/Card';
import Modal from '../Modal/Modal';
import css from './PreviewCard.module.css';

const PreviewCard = ({ camper }) => {
  const [favorite, setFavorite] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const toggleFavorite = () => {
    setFavorite(!favorite);
  };

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className={css.container}>
      <div style={{ backgroundImage: `url(${camper.gallery[0]})` }} alt={`${camper.name} image`} className={css.img} />
      <div className={css.details}>
        <div className={css.head}>
          <div className={css.title}>
            <h2 className={css.name}>{camper.name}</h2>
            <span className={css.priceBtnContainer}>
              <p className={css.price}>€{camper.price}</p>
              <button className={css.btn} onClick={toggleFavorite}>
                <svg height={24} width={24}>
                  <use href={`${icons}#icon-${favorite ? 'heart-red' : 'heart'}`}></use>
                </svg>
              </button>
            </span>
          </div>
          <div className={css.undertitle}>
            <span className={css.rating}>
              <svg width={16} height={16} className={css.star}>
                <use href={`${icons}#icon-star`}></use>
              </svg>
              <p>
                {camper.rating} ({camper.reviews.length} Reviews)
              </p>
            </span>
            <span className={css.location}>
              <svg width={16} height={16} className={css.location}>
                <use href={`${icons}#icon-map-pin`}></use>
              </svg>
              {camper.location}
            </span>
          </div>
        </div>

        <p className={css.description}>{camper.description}</p>

        <div className={css.features}>
          <FeatureItem>
            <svg height={20} width={20}>
              <use href={`${icons}#icon-people`}></use>
            </svg>
            <span>{camper.adults} adults</span>
          </FeatureItem>
          <FeatureItem>
            <svg height={20} width={20}>
              <use href={`${icons}#icon-transmission`}></use>
            </svg>
            <span style={{ textTransform: 'capitalize' }}>{camper.transmission}</span>
          </FeatureItem>
          <FeatureItem>
            <svg height={20} width={20}>
              <use href={`${icons}#icon-gas`}></use>
            </svg>
            <span style={{ textTransform: 'capitalize' }}>{camper.engine}</span>
          </FeatureItem>
          <FeatureItem>
            <svg height={20} width={20}>
              <use href={`${icons}#icon-kitchen`}></use>
            </svg>
            <span>Kitchen</span>
          </FeatureItem>
          <FeatureItem>
            <svg height={20} width={20}>
              <use href={`${icons}#icon-beds`}></use>
            </svg>
            <span>{camper.details.beds} beds</span>
          </FeatureItem>
          <FeatureItem>
            <svg height={20} width={20}>
              <use href={`${icons}#icon-airConditioner`}></use>
            </svg>
            <span>AC</span>
          </FeatureItem>
        </div>

        <Button onClick={openModal}>Show more</Button>
      </div>

      {showModal && (
        <Modal onClose={closeModal}>
          <Card camper={camper} onClose={closeModal} />
        </Modal>
      )}
    </div>
  );
};

export default PreviewCard;
