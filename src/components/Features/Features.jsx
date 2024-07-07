import css from './Features.module.css';
import icons from '../../images/sprite.svg';
import FeatureItem from '../FeatureItem/FeatureItem';

const Features = ({ obj }) => {
  const keys = Object.keys(obj.details);
  return (
    <div className={css.features}>
      <div className={css.pins}>
        {keys.map((key, index) => {
          return (
            <FeatureItem key={index}>
              <svg width={20} height={20} className={css.icon}>
                <use href={`${icons}#icon-${key}`}></use>
              </svg>
              {obj.details[key]} {key}
            </FeatureItem>
          );
        })}
      </div>
      <div className={css.details}>
        <h2 className={css.title}>Vehicle details</h2>
        <hr className={css.line} />
        <ul className={css.list}>
          <li className={css.listItem}>
            <p>
              Form <span>{obj.form}</span>
            </p>
          </li>
          <li className={css.listItem}>
            <p>
              Length <span>{obj.length}</span>
            </p>
          </li>
          <li className={css.listItem}>
            <p>
              Width <span>{obj.width}</span>
            </p>
          </li>
          <li className={css.listItem}>
            <p>
              Height <span>{obj.height}</span>
            </p>
          </li>
          <li className={css.listItem}>
            <p>
              Tank <span>{obj.tank}</span>
            </p>
          </li>
          <li className={css.listItem}>
            <p>
              Consumption <span>{obj.consumption}</span>
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Features;
