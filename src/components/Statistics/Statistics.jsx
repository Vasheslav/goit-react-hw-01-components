import { StaticItem } from "./StaticItem";
import { StatisticsTitle } from "./StatisticsTitle";
import PropTypes from "prop-types";
import { Section, StatList } from './Statistics.styled';


export const Statistics = ({ items }) => {
    return <Section>
      <StatisticsTitle text ='Upload stats'/>

      <StatList>
        {items.map(item => (
          <StaticItem key={item.id}
            label={item.label}
            percentage={item.percentage}
          />
        ))}
      </StatList>
    </Section>
}

Statistics.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  )
};

