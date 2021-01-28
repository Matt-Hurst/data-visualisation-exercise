import React from 'react';
import { gql, useQuery } from '@apollo/client';
import { LineGraph } from '../LineGraph';

const Report = () => {

  const GET_POSTS_AND_AUTHORS = gql`
    {
      allPosts(count: 1000) {
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
  if(loading) return <h1>LOADING</h1>
  if(data) console.log(data)
  
  return (
    <div>
      <h2>Report</h2>
      {data && <LineGraph authors={data.allUsers} posts={data.allPosts}/>}
    </div>
  )
}

export default Report;