import React from 'react'

function Clients() {
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {[
          { name: 'Google', image: 'https://logos-world.net/wp-content/uploads/2021/07/Google-Logo-2021.png' },
          { name: 'Microsoft', image: 'https://logos-world.net/wp-content/uploads/2021/05/Microsoft-Logo.png' },
          { name: 'Facebook', image: 'https://logos-world.net/wp-content/uploads/2021/05/Facebook-Logo.png' },
        ].map((client, index) => (
          <div key={index} className="w-full rounded-xl bg-gray-100 p-4">
            <img src={client.image} alt={client.name} className="w-full h-auto mx-auto" />
            <div className="text-center mt-4 text-gray-500">{client.name}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Clients