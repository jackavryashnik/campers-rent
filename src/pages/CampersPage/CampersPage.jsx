import FiltersForm from '../../components/FiltersForm/FiltersForm';
import Header from '../../components/Header/Header';
import List from '../../components/List/List';
import css from './CampersPage.module.css';

const CampersPage = () => {
  return (
    <>
      <Header />
      <div className={css.page}>
        <FiltersForm />
        <List />
      </div>
    </>
  );
};

export default CampersPage;
