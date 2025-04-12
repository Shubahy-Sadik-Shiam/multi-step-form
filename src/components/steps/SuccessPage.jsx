"use client";
const SuccessPage = ({ resetForm }) => {
  return (
    <div className="text-center space-y-6 bg-teal-100 p-6 mt-5">
      <h2 className="text-2xl font-bold text-green-600">
        🎉 Form Submitted Successfully!
      </h2>
      <p className="text-lg text-black">Thank you for your response.</p>
      <button onClick={resetForm} className="btn btn-accent">
        Submit Another Response
      </button>
    </div>
  );
};

export default SuccessPage;
