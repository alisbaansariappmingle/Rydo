import React, { useState } from 'react';

const AddPriceSlot = ({ closeModal }) => {
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
   
    closeModal();
  };

  return (
    <div className="fixed inset-0 bg-[#000000b8] bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-xl relative mt-12">
        <button
          type="button"
          onClick={closeModal}
          className="absolute top-4 right-5 px-2 py-2 text-[#ce621a] rounded-xl text-lg cursor-pointer font-bold"
        >
          ✕
        </button>

        <h2 className="text-xl font-bold mb-4">Add New Price Slot</h2>

        <form onSubmit={handleSubmit} className="space-y-4 w-full">
          <div>
            <label className="block mb-1 font-semibold">Start Time</label>
            <input
              type="time"
              value={startTime}
              onChange={(e) => setStartTime(e.target.value)}
              className="w-full border px-3 py-2 rounded"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold">End Time</label>
            <input
              type="time"
              value={endTime}
              onChange={(e) => setEndTime(e.target.value)}
              className="w-full border px-3 py-2 rounded"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold">Price (/km)</label>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="Enter price"
              className="w-full border px-3 py-2 rounded"
              required
            />
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="px-6 py-2 bg-[#ce621a] text-white rounded-lg"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddPriceSlot;
