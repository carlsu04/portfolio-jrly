import React, { useState } from "react";
import cvImage from "../assets/images/curriculum_vitae.jpg";

const ViewCV = () => {
  const [showCV, setShowCV] = useState(false);

  return (
    <section id="cv" className="bg-background text-gray-900 py-20 px-5 text-center">
      <h2 className="text-4xl font-bold mb-6 font-montserrat">View My CV</h2>
      <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
        Want to learn more about my experience and background? Click below to view my CV.
      </p>

      <button
        onClick={() => setShowCV(true)}
        className="bg-accent text-white px-6 py-3 rounded-lg font-bold hover:bg-yellow-300 transition-transform transform hover:scale-105"
      >
        View CV
      </button>

      {/* Modal */}
      {showCV && (
        <div className="fixed inset-0 bg-black/80 flex justify-center items-center z-50 p-4">
          <div className="bg-yellow-50 rounded-2xl overflow-hidden max-w-3xl w-96 relative">
            <button
              onClick={() => setShowCV(false)}
              className="absolute top-2 right-3 text-gray-700 text-2xl font-bold hover:text-red-500"
            >
              ×
            </button>
            <img
              src={cvImage}
              alt="Curriculum Vitae"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default ViewCV;
