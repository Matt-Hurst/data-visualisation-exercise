import React, { useEffect, useState } from 'react';

const Report = ({authors, posts}) => {
  const [allAuthors, setAllAuthors] = useState([])
  const [author, setAuthor] = useState() 

  useEffect(() => {
    setAllAuthors(authors)
    setAuthor(authors[0])
  }, [])

  const handleChange = e => setAuthor(allAuthors[e.target.value])

  return (
    <div>
      <h2>Report</h2>
      <select onChange={handleChange}>
        {authors.map((author, i) => {
          return <option value={i} key={i+author.id}>{author.lastName}</option>
        })}
      </select>
    </div>
  )
}

export default Report;