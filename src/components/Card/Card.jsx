import css from './Card.module.css';
import icons from '../../images/sprite.svg';

const Card = ({ obj }) => {
  const handleClass = e => {
    const querys = document.querySelectorAll('#navBtn');

    if (querys.length) querys.forEach(el => el.classList.remove(css.active));

    e.target.classList.add(css.active);
  };

  return (
    <div className={css.container}>
      <button className={css.close}>
        <svg width={32} height={32}>
          <use href={`${icons}#icon-close`}></use>
        </svg>
      </button>
      <h2 className={css.title}>{obj.name}</h2>
      <div className={css.undertitle}>
        <span className={css.rating}>
          <svg width={16} height={16}>
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
        <button id="navBtn" className={css.btn} onClick={handleClass}>
          Features
        </button>
        <button id="navBtn" className={css.btn} onClick={handleClass}>
          Reviews
        </button>
      </nav>
      <hr className={css.line} />
    </div>
  );
};

export default Card;
