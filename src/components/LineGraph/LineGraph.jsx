import React from 'react';

const LineGraph = ({authors, posts}) => {

  return (
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
  )

};

export default LineGraph;