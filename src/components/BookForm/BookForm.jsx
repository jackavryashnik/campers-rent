import { ErrorMessage, Field, Form, Formik } from 'formik';
import Button from '../Button/Button';
import { useId } from 'react';
import * as Yup from 'yup';
import css from './BookForm.module.css';
import Calendar from '../Calendar/Calendar';
import { Toaster, toast } from 'react-hot-toast';
import clsx from 'clsx';

const validationSchema = Yup.object({
  name: Yup.string().required('Required'),
  email: Yup.string().required('Required'),
  date: Yup.date().required('Required'),
  comment: Yup.string(),
});

const handleBook = async (values, actions) => {
  console.log(values);
  toast.success('Camper successfully booked!');
  actions.resetForm();
};

const BookForm = ({ hero }) => {
  const bookFormId = useId();
  return (
    <Formik
      initialValues={{ name: '', email: '', date: '', comment: '' }}
      onSubmit={handleBook}
      validationSchema={validationSchema}
    >
      <Form className={clsx(css.form, hero && css.heroForm)}>
        <h2 className={clsx(css.title, hero && css.heroTitle)}>Book your campervan now</h2>
        <p className={clsx(css.text, hero && css.heroText)}>Stay connected! We are always ready to help you.</p>
        <div className={css.inputs}>
          <div className={css.inputWrapper}>
            <Field type="text" name="name" id={`${bookFormId}-name`} className={css.input} placeholder="Name" />
            <ErrorMessage name="name" component="span" className={css.error} />
          </div>
          <div className={css.inputWrapper}>
            <Field type="text" name="email" id={`${bookFormId}-email`} className={css.input} placeholder="Email" />
            <ErrorMessage name="email" component="span" className={css.error} />
          </div>
          <div className={css.inputWrapperCalendar}>
            <Field
              as={Calendar}
              name="date"
              id={`${bookFormId}-date`}
              className={css.input}
              placeholder="Booking date"
            />
            <ErrorMessage name="date" component="span" className={css.error} />
          </div>
          <div className={css.inputWrapper}>
            <Field
              as="textarea"
              name="comment"
              id={`${bookFormId}-comment`}
              className={css.input}
              placeholder="Comment"
            />
            <ErrorMessage name="comment" component="span" className={css.error} />
          </div>
        </div>
        <Button type="submit" style="filled">
          Send
        </Button>
        <Toaster position="top-center" />
      </Form>
    </Formik>
  );
};

export default BookForm;
