import { gql, useQuery } from '@apollo/client';
import { Report } from './components/Report';

import './App.css';
const App = () => {
  const GET_POSTS_AND_AUTHORS = gql`
    {
      allPosts(count: 10000) {
        author {
          id
          lastName
        }
        createdAt
      }
      allUsers(count: 5) {
        id
        firstName
        lastName
      }
    } 
  `;

  const { loading, error, data } = useQuery(GET_POSTS_AND_AUTHORS);
  if(error) console.log(error)
  if(loading) return <h1>LOADING...</h1>

  return (
    <div className="App">
      <h1>Data Visualisation Exercise</h1>
      {data && <Report authors={data.allUsers} posts={data.allPosts}/>}
    </div>
  );
}

export default App;
