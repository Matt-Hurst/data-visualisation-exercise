import React from 'react';

const Report = ({authors, posts}) => {
  
  
  return (
    <div>
      <h2>Report</h2>
      <div>
      {authors.map(author => {
        return <p>{author.lastName}</p>
      })}
      {posts.slice(20, 40).map(post => {
        return (
          <div>
            <p>{post.author.lastName}</p>
            <p>{post.createdAt}</p>
          </div>
        )
      })}
    </div>
    </div>
  )
}

export default Report;