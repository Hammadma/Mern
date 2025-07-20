import React, { useEffect, useState } from 'react'

const Users = () => {
  const [message, setMessage] = useState('Loading...')

  useEffect(() => {
    fetch('/api/users/test')
      .then(res => res.json())
      .then(data => setMessage(data.msg))
      .catch(() => setMessage('Error fetching message'))
  }, [])

  return (
    <div className="p-4 bg-green-100 rounded">
      <h2 className="text-xl font-bold mb-2">Users Component</h2>
      <p>{message}</p>
    </div>
  )
}

export default Users