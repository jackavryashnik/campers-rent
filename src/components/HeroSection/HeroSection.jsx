import BookForm from '../BookForm/BookForm';
import css from './HeroSection.module.css';

const HeroSection = () => {
  return (
    <section className={css.hero}>
      <div className={css.form}>
        <BookForm hero="true" />
        <div className={css.about}>
          <h1 className={css.title}>Welcome to Our Camper Rental Service</h1>
          <p>
            We provide high-quality campers for rent in Ukraine. Enjoy the freedom of the open road with our
            top-of-the-line vehicles.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
