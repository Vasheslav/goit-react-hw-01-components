import PropTypes from "prop-types";
import { Element, Label, Percentage } from './Statistics.styled';

export const StaticItem = ({ label, percentage }) => {
  let backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;

    return <Element style={{ backgroundColor }}>
      <Label >{label}</Label>
      <Percentage >{percentage}</Percentage>
    </Element>
}

StaticItem.propTypes = {
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
}