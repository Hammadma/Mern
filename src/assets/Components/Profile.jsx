import React, { useEffect, useState } from 'react'

const Profile = () => {
  const [message, setMessage] = useState('Loading...')

  useEffect(() => {
    fetch('/api/profile/test')
      .then(res => res.json())
      .then(data => setMessage(data.msg))
      .catch(() => setMessage('Error fetching message'))
  }, [])

  return (
    <div className="p-4 bg-blue-100 rounded">
      <h2 className="text-xl font-bold mb-2">Profile Component</h2>
      <p>{message}</p>
    </div>
  )
}

export default Profile