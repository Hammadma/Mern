import React, { useEffect, useState } from 'react'

const Poster = () => {
  const [message, setMessage] = useState('Loading...')

  useEffect(() => {
    fetch('/api/posts/test')
      .then(res => res.json())
      .then(data => setMessage(data.msg))
      .catch(() => setMessage('Error fetching message'))
  }, [])

  return (
    <div className="p-4 bg-gray-100 rounded">
      <h2 className="text-xl font-bold mb-2">Poster Component</h2>
      <p>{message}</p>
    </div>
  )
}

export default Poster