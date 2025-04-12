"use client";

import { useQueryClient } from "@tanstack/react-query";

const FinalStep = ({ onBack, formData, onSubmit }) => {

  const queryClient = useQueryClient();

  // fake api call
  const fakeSubmit = async (data) => {
    return { status: 'success' }
  }

   const handleSubmit = async () => {
    try {
      const res = await fakeSubmit(formData)
      if (res.status === 'success') {
        queryClient.invalidateQueries() // optional
        onSubmit() // go to success screen
      }
    } catch (err) {
      console.error(err)
      alert('Something went wrong!')
    }
  }

  return (
    <div className="space-y-4 bg-teal-100 p-6 mt-5 text-black">
      <h2 className="text-xl font-semibold">Review & Confirm</h2>
      <ul className="space-y-1">
        <li>
          <strong>Full Name:</strong> {formData.fullName}
        </li>
        <li>
          <strong>Email:</strong> {formData.email}
        </li>
        <li>
          <strong>Phone:</strong> {formData.phone}
        </li>
        <li>
          <strong>Street:</strong> {formData.street}
        </li>
        <li>
          <strong>City:</strong> {formData.city}
        </li>
        <li>
          <strong>Zip:</strong> {formData.zip}
        </li>
        <li>
          <strong>Username:</strong> {formData.username}
        </li>
        <li>
          <strong>Password:</strong> ******
        </li>
      </ul>

      <div className="flex justify-between pt-4">
        <button onClick={onBack} className="btn btn-accent">
          Back
        </button>
        <button onClick={handleSubmit} className="btn btn-success">
          Submit
        </button>
      </div>
    </div>
  );
};

export default FinalStep;
