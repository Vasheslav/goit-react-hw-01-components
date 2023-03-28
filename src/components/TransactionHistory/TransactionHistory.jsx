import { TransactionItem } from "./TransactionItem";
import PropTypes from "prop-types";
import { Table, Title } from './TransactionHistory.styled';

export const Transactionhistory = ({events}) => {
    return <Table>
  <thead>
    <tr >
      <Title>Type</Title>
      <Title>Amount</Title>
      <Title>Currency</Title>
    </tr>
  </thead>

  <tbody>
            {events.map(item => (
                <TransactionItem key={item.id}
                    type={item.type}
                    amount={item.amount}
                    currency={item.currency} />
    ))}
  </tbody>
</Table>
}

Transactionhistory.propTypes = {
  events: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  )
};