import { Profile } from 'components/EventCard/EventCard';
import { Statistics } from 'components/Statistics/Statistics';
import { FriendList } from 'components/FriendList/FriendList';
import {Transactionhistory} from 'components/TransactionHistory/TransactionHistory'
import user from '../user.json';
import statisticsData from '../data.json';
import listFriend from '../friends.json';
import transactionsData from '../transactions.json';



export const App = () => {
  return (
    <div
      style={{
        padding: '40px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />

      <Statistics items={statisticsData} />

      <FriendList list={listFriend} />
      
      <Transactionhistory events={transactionsData} />
      
    </div>
  );
};
