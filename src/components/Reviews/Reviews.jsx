import Rating from '../Rating/Rating';
import css from './Reviews.module.css';

const Reviews = ({ reviews }) => {
  return (
    <div className={css.reviews}>
      {reviews.map((item, index) => {
        return (
          <div className={css.review} key={index}>
            <div className={css.user}>
              <div className={css.avatar}>{item.reviewer_name[0]}</div>
              <span>
                <p className={css.name}>{item.reviewer_name}</p>
                <Rating rating={item.reviewer_rating} />
              </span>
            </div>
            <p className={css.comment}>{item.comment}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Reviews;
