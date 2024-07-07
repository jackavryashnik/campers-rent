import FiltersForm from '../../components/FiltersForm/FiltersForm';
import Header from '../../components/Header/Header';
import css from './CampersPage.module.css';

const CampersPage = () => {
  return (
    <>
      <Header />
      <div className={css.page}>
        <FiltersForm />
      </div>
    </>
  );
};

export default CampersPage;
