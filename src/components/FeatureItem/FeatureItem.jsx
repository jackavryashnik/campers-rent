import css from './FeatureItem.module.css';

const FeatureItem = ({ children }) => {
  return <div className={css.item}>{children}</div>;
};

export default FeatureItem;
