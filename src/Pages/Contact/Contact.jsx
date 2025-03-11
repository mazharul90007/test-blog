import React from "react";

const Contact = () => {
  return (
    <div>
      <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
        <h2 className="text-2xl font-semibold text-center text-[#bb4d00]">
          Contact Us
        </h2>
        <form className="mt-4">
          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#bb4d00]"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#bb4d00]"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Message</label>
            <textarea
              name="message"
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#bb4d00]"
              rows="4"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-[#bb4d00] text-white p-2 rounded-lg hover:bg-[#bb4d00] transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
