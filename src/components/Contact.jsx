import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="bg-background text-gray-900 py-20 px-5 flex justify-center">
      <div className="bg-yellow-50 rounded-2xl p-10 max-w-lg text-center">
        <h3 className="text-3xl font-bold mb-4">Let's Connect</h3>
        <p className="text-gray-700 mb-6">
          Interested in working together or just want to say hi? Drop me a message below!
        </p>
        <a
          href=""
          className="bg-accent text-white px-6 py-3 rounded-lg font-bold hover:bg-yellow-300 transition-transform transform hover:scale-105"
        >
          Send Email
        </a>
      </div>
    </section>
  );
};

export default Contact;
