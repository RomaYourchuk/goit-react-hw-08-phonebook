import { useDispatch, useSelector } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';
import defaultAvatar from './Avatar.png';
import s from './UserMenu.module.css'

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  avatar: {
    marginRight: 4,
  },
  name: {
    fontWeight: 700,
    marginRight: 12,
  },
  link: {
    marginRight: 12,
  }
};

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);
  const avatar = defaultAvatar;
  const email = useSelector(authSelectors.getUseremail);

  return (
    <div style={styles.container}>
      <img src={avatar} alt="" width="32" style={styles.avatar} />
      <span style={styles.name}>Welcome, {name}</span>
      <span style={styles.link}>{email}</span>
      <button type="button" className={s.button} onClick={() => dispatch(authOperations.logOut())}>
        Sign Out
      </button>
    </div>
  );
}