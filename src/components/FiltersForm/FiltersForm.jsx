import { Field, Form, Formik } from 'formik';
import Button from '../Button/Button';
import { useId } from 'react';
import css from './FiltersForm.module.css';
import * as Yup from 'yup';
import icons from '../../images/sprite.svg';

const validationSchema = Yup.object({
  location: Yup.string(),
});

const handleFilter = async (values, actions) => {
  console.log(values);
};

const FiltersForm = () => {
  const filterFormId = useId();

  return (
    <Formik
      initialValues={{ location: '', equipment: [], type: [] }}
      onSubmit={handleFilter}
      validationSchema={validationSchema}
    >
      <Form className={css.form}>
        <div className={css.inputs}>
          <div className={css.inputsGroup}>
            <p className={css.inputsGroupName}>Location</p>
            <div className={css.locationContainer}>
              <svg width={18} height={20} className={css.mapPin}>
                <use href={`${icons}#icon-map-pin`}></use>
              </svg>
              <Field
                type="text"
                name="location"
                id={`${filterFormId}-location`}
                className={css.input}
                placeholder="Location"
              />
            </div>
          </div>
          <div>
            <p className={css.inputsGroupName}>Filters</p>
            <h2 className={css.inputsGroupTitle}>Vehicle equipment</h2>
            <hr className={css.line} />
            <div role="group" aria-labelledby="checkbox-group" className={css.inputsGroup}>
              <Field type="checkbox" name="equipment" value="AC" id={`${filterFormId}-ac`} className={css.input} />
              <label htmlFor={`${filterFormId}-ac`} className={css.label}>
                <svg width={32} height={32}>
                  <use href={`${icons}#icon-airConditioner`}></use>
                </svg>
                AC
              </label>

              <Field type="checkbox" name="equipment" value="automatic" id={`${filterFormId}-automatic`} className={css.input} />
              <label htmlFor={`${filterFormId}-automatic`} className={css.label}>
                <svg width={32} height={32}>
                  <use href={`${icons}#icon-transmission`}></use>
                </svg>
                Automatic
              </label>

              <Field type="checkbox" name="equipment" value="kitchen" id={`${filterFormId}-kitchen`} className={css.input} />
              <label htmlFor={`${filterFormId}-kitchen`} className={css.label}>
                <svg width={32} height={32}>
                  <use href={`${icons}#icon-kitchen`}></use>
                </svg>
                Kitchen
              </label>

              <Field type="checkbox" name="equipment" value="TV" id={`${filterFormId}-tv`} className={css.input} />
              <label htmlFor={`${filterFormId}-tv`} className={css.label}>
                <svg width={32} height={32}>
                  <use href={`${icons}#icon-TV`}></use>
                </svg>
                TV
              </label>

              <Field type="checkbox" name="equipment" value="shower" id={`${filterFormId}-shower`} className={css.input} />
              <label htmlFor={`${filterFormId}-shower`} className={css.label}>
                <svg width={32} height={32}>
                  <use href={`${icons}#icon-shower`}></use>
                </svg>
                Shower/WC
              </label>
            </div>
          </div>
          <div>
            <h2 className={css.inputsGroupTitle}>Vehicle type</h2>
            <hr className={css.line} />
            <div role="group" aria-labelledby="checkbox-group" className={css.inputsGroup}>
              <Field type="checkbox" name="type" value="van" id={`${filterFormId}-van`} className={css.input} />
              <label htmlFor={`${filterFormId}-van`} className={css.label}>
                <svg width={32} height={32}>
                  <use href={`${icons}#icon-van`}></use>
                </svg>
                Van
              </label>

              <Field type="checkbox" name="type" value="fullyIntegrated" id={`${filterFormId}-fullyIntegrated`} className={css.input} />
              <label htmlFor={`${filterFormId}-fullyIntegrated`} className={css.label}>
                <svg width={32} height={32}>
                  <use href={`${icons}#icon-fully-Integrated`}></use>
                </svg>
                Fully Integrated
              </label>

              <Field type="checkbox" name="type" value="alcove" id={`${filterFormId}-alcove`} className={css.input} />
              <label htmlFor={`${filterFormId}-alcove`} className={css.label}>
                <svg width={32} height={32}>
                  <use href={`${icons}#icon-alcove`}></use>
                </svg>
                Alcove
              </label>
            </div>
          </div>
        </div>
        <Button type="submit" style="filled">
          Search
        </Button>
      </Form>
    </Formik>
  );
};

export default FiltersForm;
