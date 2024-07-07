import { useState } from 'react';
import css from './Card.module.css';
import icons from '../../images/sprite.svg';
import Features from '../Features/Features';
import Reviews from '../Reviews/Reviews';
import BookForm from '../BookForm/BookForm';

const Card = ({ camper, onClose }) => {
  const [section, setSection] = useState(null);

  const handleClass = e => {
    const querys = document.querySelectorAll('#navBtn');

    if (querys.length) querys.forEach(el => el.classList.remove(css.active));

    e.target.classList.add(css.active);
  };

  const handleFeatures = e => {
    handleClass(e);
    setSection('features');
  };

  const handleReviews = e => {
    handleClass(e);
    setSection('reviews');
  };

  return (
    <div className={css.card}>
      <button className={css.close} onClick={onClose}>
        <svg width={32} height={32}>
          <use href={`${icons}#icon-close`}></use>
        </svg>
      </button>
      <h2 className={css.title}>{camper.name}</h2>
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
      <div className={css.price}>€{camper.price}.00</div>
      <div className={css.imgList}>
        {camper.gallery.map((img, index) => (
          <span key={index} className={css.img} style={{ backgroundImage: `url(${img})` }}></span>
        ))}
      </div>

      <p className={css.description}>{camper.description}</p>

      <nav className={css.navButtons}>
        <button id="navBtn" className={css.btn} onClick={handleFeatures}>
          Features
        </button>
        <button id="navBtn" className={css.btn} onClick={handleReviews}>
          Reviews
        </button>
      </nav>
      <hr className={css.line} />
      {section && (
        <div className={css.container}>
          {section === 'features' && <Features obj={camper} />}
          {section === 'reviews' && <Reviews reviews={camper.reviews} />}
          <BookForm />
        </div>
      )}
    </div>
  );
};

export default Card;
