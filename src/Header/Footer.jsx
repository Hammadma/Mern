import React from 'react'

const Footer = () => {
  return (
 
        <footer className="fixed bottom-0 left-0 w-full bg-gray-800 text-white text-center p-4 shadow">   
            <div className="max-w-7xl mx-auto text-center">
                <p className="text-sm">© {new Date().getFullYear()} DevConnector. All rights reserved.</p>
                <p className="text-sm">Made with ❤️ by Your Name</p>
            </div>

        </footer>
  )                     
}

export default Footer