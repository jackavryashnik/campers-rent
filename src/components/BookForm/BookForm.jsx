import { ErrorMessage, Field, Form, Formik } from 'formik';
import Button from '../Button/Button';
import { useId } from 'react';
import * as Yup from 'yup';
import css from './BookForm.module.css';
import Calendar from '../Calendar/Calendar';

const validationSchema = Yup.object({
  name: Yup.string().required('Required'),
  email: Yup.string().required('Required'),
  date: Yup.date().required('Required'),
  comment: Yup.string(),
});

const handleBook = async (values, actions) => {
  return 'Booked';
};

const BookForm = () => {
  const bookFormId = useId();
  return (
    <Formik
      initialValues={{ name: '', email: '', date: '', comment: '' }}
      onSubmit={handleBook}
      validationSchema={validationSchema}
    >
      <Form className={css.form}>
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
      </Form>
    </Formik>
  );
};

export default BookForm;
