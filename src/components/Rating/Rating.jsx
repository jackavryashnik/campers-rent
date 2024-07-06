import icons from '../../images/sprite.svg';
import css from './Rating.module.css';

const Rating = ({ rating }) => {
  const stars = Array.from({ length: 5 }, (_, index) => index);

  return (
    <div className={css.container}>
      {stars.map(index => (
        <svg
          key={index}
          className={css.star}
          width={16}
          height={16}
          style={index < rating ? { fill: 'var(--color-rating)', stroke: 'var(--color-rating)' } : {}}
        >
          <use href={`${icons}#icon-star`} />
        </svg>
      ))}
    </div>
  );
};

export default Rating;
