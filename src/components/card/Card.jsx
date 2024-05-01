import React, { useEffect, useState } from 'react'
import '../card/Card.css'



const Card = () => {
  const [data, setData] = useState(null);
  const [isLoading, setisLoading] = useState(false);
  const [error, setError] = useState(null);
  const DATA = 'https://jsonplaceholder.typicode.com/comments';

  const fetchData = async () => {
    setisLoading(true);
    try {
      const response = await fetch(DATA);
      if(!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const jsonData = await response.json();
      setData(jsonData); 
    } catch (error) {
      console.error('Error fetching data', error)
      setError(error)
    } finally {
      setisLoading(false)
    }
  };

  useEffect(() => {
    fetchData();
  }, [])

  if (isLoading) return <p>loading...</p>
  if (error) return <p>Error: {error.message}</p>
  return (

    <div card-main>
      <h1>
        Fetching Data
      </h1>
      <p>
        {JSON.stringify(data, null, 2)}
      </p>
    </div>
  )
}

export default Card
