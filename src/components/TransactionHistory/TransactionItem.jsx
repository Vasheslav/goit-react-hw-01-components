import PropTypes from "prop-types";
import { Value, Container} from './TransactionHistory.styled';

export const TransactionItem = ({ type, amount, currency }) => {
    return <Container >
      <Value >{type}</Value>
        <Value >{amount}</Value>
      <Value >{currency}</Value>
    </Container>
}

TransactionItem.propTypes = {
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
};