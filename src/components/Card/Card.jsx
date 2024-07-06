import Features from '../Features/Features';
import css from './Card.module.css';
import icons from '../../images/sprite.svg';
import Reviews from '../Reviews/Reviews';
import BookForm from '../BookForm/BookForm';
import { useState } from 'react';

const Card = ({ obj }) => {
  const [section, setSection] = useState(null);

  const handleClass = e => {
    const querys = document.querySelectorAll('#navBtn');
    console.log(querys);

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
      <button className={css.close}>
        <svg width={32} height={32}>
          <use href={`${icons}#icon-close`}></use>
        </svg>
      </button>
      <h2 className={css.title}>{obj.name}</h2>
      <div className={css.undertitle}>
        <span className={css.rating}>
          <svg width={16} height={16} className={css.star}>
            <use href={`${icons}#icon-star`}></use>
          </svg>
          <p>
            {obj.rating} ({obj.reviews.length} Reviews)
          </p>
        </span>
        <span className={css.location}>
          <svg width={16} height={16} className={css.location}>
            <use href={`${icons}#icon-map-pin`}></use>
          </svg>
          {obj.location}
        </span>
      </div>
      <div className={css.price}>€{obj.price}.00</div>
      <div className={css.imgList}>
        {obj.gallery.map((img, index) => (
          <span key={index} className={css.img} style={{ backgroundImage: `url(${img})` }}></span>
        ))}
      </div>

      <p className={css.description}>{obj.description}</p>

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
          {section === 'features' && <Features obj={obj} />}
          {section === 'reviews' && <Reviews reviews={obj.reviews} />}
          <BookForm />
        </div>
      )}
    </div>
  );
};

export default Card;
