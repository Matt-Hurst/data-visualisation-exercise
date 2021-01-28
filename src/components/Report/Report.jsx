import React, { useEffect, useState } from 'react';
import { LineGraph } from '../LineGraph';

const Report = ({authors, posts}) => {
  const [allAuthors, setAllAuthors] = useState([])
  const [author, setAuthor] = useState() 

  useEffect(() => {
    setAllAuthors(authors)
    setAuthor(authors[0])
  }, [])

  const handleChange = e => setAuthor(allAuthors[e.target.value]);
  
  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  
  // filter posts by author
  const filteredPostByAuthor = authorId => posts.filter(post => post.author.id === authorId);
  
  // make array of objects [{date: 'Jan', posts: 4}, {date: 'Feb', posts: 2}]
  const cleanedPostsData = posts => {
    const resultObj = {}
    posts.forEach(post => {
      const date = new Date(+post.createdAt).getMonth()
      if (resultObj[date]) resultObj[date] += 1;
      else resultObj[date] = 1;
    })
    return monthNames.map((month, i) => {
      return {
        month,
        posts: resultObj[i]
      }
    })
  }

  return (
    <div>
      <h2>Report</h2>
      <select onChange={handleChange}>
        {authors.map((author, i) => {
          return <option value={i} key={i+author.id}>{author.lastName}</option>
        })}
      </select>
      {posts && <LineGraph posts={cleanedPostsData(filteredPostByAuthor(author ? author.id : authors[0].id))} />}
    </div>
  )
}

export default Report;