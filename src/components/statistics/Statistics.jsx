import PropTypes from 'prop-types';
import css from './Statistics.module.css';
import getRandomHexColor from 'utils/randomColor';

export const Statistics = ({ title, stats }) => (
  <div className={css.statisticsContainer}>
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}
      <ul className={css.statList}>
        {stats.map(stat => (
          <li
            key={stat.id}
            className={title ? css.statListItem : css.statListItemNoTitle}
            style={{ backgroundColor: getRandomHexColor() }}
          >
            <span className={css.label}>{stat.label}</span>
            <span className={css.percentage}>{stat.percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  </div>
);

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
