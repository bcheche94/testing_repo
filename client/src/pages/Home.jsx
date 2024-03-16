import React, {useState, useEffect} from 'react'
import axios from 'axios'

export default function Home() {

  const [books, setBooks] = useState([])

  useEffect(() => {
    // setLoading(true)
    axios
      .get('/api/getitems')
      .then((response) => {
        setBooks(response.data.data)
        // setLoading(false)
        
      })
      .catch((error) => {
        console.log(error)
        // setLoading(false)
      })
      
  }, [])




  return (
    <div>

    <div>

    {books.map((book, index) => (
    <p key={book._id}>

    <p className='text-center my-5'>
      {index + 1}
    </p>
    <p className='text-center my-5'>
      {book.xuiname}
    </p>
    <p className='text-center my-5'>
      {book.email}
    </p>
    <p className='text-center my-5'>
      {book.password}
    </p>
    
    </p>
    ))}

    </div>

    </div>
  )
}
