import React from 'react'
import google from '../assets/google.png';
import microsoft from '../assets/microsoft.png';
import facebook from '../assets/facebook.png';

function Clients() {
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8 my-20">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {[
          { name: 'Google', image: google },
          { name: 'Microsoft', image: microsoft },
          { name: 'Facebook', image: facebook },
        ].map((client, index) => (
          <div key={index} className="w-full rounded-xl bg-gray-100 p-4 flex flex-col items-center">
            <img
              src={client.image}
              alt={client.name}
              className="w-24 h-24 sm:w-32 sm:h-32 object-contain"
            />
            <div className="text-center mt-4 text-gray-500">{client.name}</div>
          </div>
        ))}
      </div>
    </div>

  )
}

export default Clients