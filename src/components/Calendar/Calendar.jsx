import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { enGB } from 'date-fns/locale';
import css from './Calendar.module.css';
import './DatePickerStyles.css';
import { useState, forwardRef } from 'react';
import icons from '../../images/sprite.svg';

const Icon = () => (
  <svg width={20} height={20} className={css.calendarIcon}>
    <use href={`${icons}#icon-calendar`}></use>
  </svg>
);

const CustomInput = forwardRef(({ value, onClick }, ref) => (
  <div className={css.iconWrapper} onClick={onClick} ref={ref}>
    <span className={css.dateText}>{value}</span>
    <Icon name="calendar" />
  </div>
));

CustomInput.displayName = 'CustomInput';

const Calendar = ({ selectedDate, onChange }) => {
  const [startDate, setStartDate] = useState(selectedDate || new Date());

  const handleDateChange = date => {
    setStartDate(date);
    onChange(date);
  };

  const getDateFormat = date => {
    const today = new Date();
    const tomorrow = new Date();
    tomorrow.setDate(today.getDate() + 1);

    if (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    ) {
      return "'Today', MMMM dd";
    } else if (
      date.getDate() === tomorrow.getDate() &&
      date.getMonth() === tomorrow.getMonth() &&
      date.getFullYear() === tomorrow.getFullYear()
    ) {
      return "'Tomorrow', MMMM dd";
    } else {
      return 'EEEE, MMMM dd';
    }
  };

  return (
    <div className={css.datePickerWrapper}>
      <DatePicker
        customInput={<CustomInput />}
        calendarClassName="react-datepicker"
        wrapperClassName={css.datePickerWrapper}
        popperClassName="react-datepicker-popper"
        onChange={date => handleDateChange(date)}
        dateFormat={getDateFormat(startDate)}
        minDate={new Date()}
        showPopperArrow={false}
        onFocus={e => e.target.blur()}
        onKeyDown={e => e.preventDefault()}
        locale={enGB}
        weekStartsOn={1}
      />
    </div>
  );
};

export default Calendar;
