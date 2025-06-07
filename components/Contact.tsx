import React from "react";

const Contact = () => {
  return (
    <div
      id="contact"
      className="w-full px-4 md:px-[8%] py-10 scroll-mt-20 pt-32 bg-[url('/footer-bg-color.png')] bg-no-repeat bg-center bg-[length:90%_auto]"
    >
      <h4 className="text-center mb-2 text-lg font-ovo">Connect with me</h4>
      <h2 className="text-center text-5xl font-ovo">Get in touch</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo">
        I'd love to hear from you! If you have any questions, comments, or
        feedback please use the form below
      </p>
      <form className="max-w-2xl mx-auto flex flex-col gap-6 bg-white/80 p-8 rounded-lg shadow">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="text"
            placeholder="Enter your name"
            required
            className="border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          />
          <input
            type="email"
            placeholder="Enter your email"
            required
            className="border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          />
        </div>
        <textarea
          rows={6}
          placeholder="Enter your message"
          required
          className="border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition resize-none"
        ></textarea>
        <button
          type="submit"
          className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition"
        >
          Submit now
        </button>
      </form>
    </div>
  );
};

export default Contact;
