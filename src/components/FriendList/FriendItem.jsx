import PropTypes from "prop-types";
import css from './FriendList.module.css';

export const FriendItem = ({ avatar, name, isOnline }) => {
    const statusClassName = isOnline ? css.isOnline : css.notOnline;

    return <li className={css.fritnditem}>
        <span className={`${css.status} ${statusClassName}`}></span>
  <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
        <p className={css.name}>{ name}</p>
</li>
}

FriendItem.propTypes={
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}