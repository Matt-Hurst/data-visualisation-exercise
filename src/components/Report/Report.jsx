import React, { useEffect, useState } from 'react';
import { LineGraph } from '../LineGraph';
import './Report.css'

const Report = ({authors, posts}) => {
  const [allAuthors, setAllAuthors] = useState([])
  const [author, setAuthor] = useState() 

  useEffect(() => {
    setAllAuthors(authors)
    setAuthor(authors[0])
  }, [])

  const handleChange = e => setAuthor(allAuthors[e.target.value]);
  
  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  
  const filterPostByAuthor = authorId => posts.filter(post => post.author.id === authorId);
  
  // make array of objects [{date: '2019 Jan', posts: 4}, {date: '2019 Feb', posts: 2}]
  const makeGraphData = posts => {
    const resultObj = {}
    posts.forEach(post => {
      const date = new Date(+post.createdAt).getMonth()
      if (resultObj[date]) resultObj[date] += 1;
      else resultObj[date] = 1;
    })
    return monthNames.map((month, i) => {
      return {
        date: `2019 ${month}`,
        posts: resultObj[i] ? resultObj[i] : 0
      }
    })
  }

  return (
    <div className="report-grand-wrapper">
      <h2>Authors Posting Frequency By Month Report</h2>
      <div className="report-select-div">
        <h3>Select author:</h3>
        <select className="report-selector-element" onChange={handleChange}>
          {authors.map((author, i) => {
            return <option value={i} key={i+author.id}>{author.lastName}</option>
          })}
        </select>
      </div>
      {posts && <LineGraph posts={makeGraphData(filterPostByAuthor(author ? author.id : authors[0].id))} />}
    </div>
  )
}

export default Report;