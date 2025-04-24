// src/pages/Notifications.js
import React from 'react';

export default function Notifications() {
  return (
    <div className='p-10'>
      <h2 className="text-xl font-bold mb-4">Notifications & Support</h2>
      {/* Send Notification Form */}
      <div className="p-4 bg-white rounded-lg shadow mb-6">
      <h3 className="font-semibold mb-2">Title</h3>
        <input type="text" name="title" id="" className='border p-2 w-1/2 rounded mb-4' placeholder='Title' />
        <h3 className="font-semibold mb-2"> Send Notification</h3>
        <textarea className="w-full p-2 border rounded mb-4" placeholder="Message..."></textarea>
        <button className="bg-amber-900 text-white px-4 py-2 rounded">Send</button>
      </div>
    </div>  
  );
}
