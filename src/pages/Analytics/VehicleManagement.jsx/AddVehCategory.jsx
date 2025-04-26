import React, { useState } from 'react';

const AddVehCategory = ({ closeModal }) => {
    const [categoryName, setCategoryName] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("New Category:", categoryName);
        closeModal(); // Close modal after submission
    };

    return (
        <div className="fixed inset-0 bg-[#000000b8] bg-opacity-30 backdrop-blur-sm flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-3xl relative mt-12">
                <button
                    type="button"
                    onClick={closeModal}
                    className="absolute top-4 right-5 px-2 py-2 text-[#ce621a] rounded-xl text-lg cursor-pointer font-bold"
                >
                    ✕
                </button>

                <h2 className="text-xl font-bold mb-4">Add Vehicle Category</h2>

                <form onSubmit={handleSubmit} className="space-y-4 w-full">
                    <div>
                        <label htmlFor="categoryName" className="block text-md font-semibold mb-2">
                            Category Name
                        </label>
                        <input
                            id="categoryName"
                            type="text"
                            value={categoryName}
                            onChange={(e) => setCategoryName(e.target.value)} 
                            placeholder='Enter Category '
                            className="w-full border px-3 py-2 rounded"
                            required
                        />
                    </div>

                    <div className="flex justify-end space-x-2">
                        <button
                            type="submit"
                            className="px-6 py-2 bg-[#ce621a] text-white rounded-lg cursor-pointer text-md"
                        >
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddVehCategory;
