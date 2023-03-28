import { FriendItem} from "./FriendItem";
import PropTypes from "prop-types";
import css from './FriendList.module.css'

export const FriendList = ({list}) => {
    return <ul className={css.friendList}>
        {list.map(item => (
            <FriendItem key={item.id}
                avatar={item.avatar}
                name={item.name}
                isOnline={item.isOnline} />
        ))}
</ul>
}

FriendList.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
        avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  )
};