import React from 'react';

function Contact() {
  return (
    <>
    <div className='bg-green-100'>
    
    <div id="contact" className="mx-auto max-w-7xl">
      <div className=" p-5 sm:p-12">
        <h2 className="text-2xl font-bold leading-9 tracking-tight text-gray-900 sm:text-3xl">Contact Us</h2>
        <p className="mt-4 text-lg text-gray-500">We are here to help you with any questions you may have.</p>
        <p className="mt-2 text-lg text-gray-500">Email us at <a href="mailto:support@deskhive.com" className="text-blue-600 hover:underline">support@deskhive.com</a></p>
        <form className="mt-8" action="#" method="POST">
          <div className="grid grid-cols-1 gap-6">
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Name</label>
              <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="name" type="text" placeholder="Name" />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
              <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" type="email" placeholder="name@example.com" />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">Message</label>
              <textarea className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="message" rows="4" placeholder="Type your message here"></textarea>
            </div>
          </div>
          <button className="mt-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Send</button>
        </form>
      </div>
    </div>
    </div>
    </>
  );
}

export default Contact;
