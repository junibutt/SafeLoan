import React, { useState } from "react";
import { useModal } from "./ModalContext";
import { toast } from "react-hot-toast";

const LoanModal = () => {
  const { open, setOpen } = useModal();
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    dob: "",
    amount: "",
    duration: "",
    purpose: "",
    employment: "",
    agreed: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const validateStep = () => {
    if (step === 1) {
      if (!form.name || !form.email || !form.phone || !form.dob) {
        toast.error("Please enter all details before proceeding.");
        return false;
      }
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(form.email)) {
        toast.error("Invalid email address.");
        return false;
      }
      if (!/^\d{11}$/.test(form.phone)) {
        toast.error("Phone number must be exactly 11 digits.");
        return false;
      }
      const age = new Date().getFullYear() - new Date(form.dob).getFullYear();
      if (age < 18) {
        toast.error("You must be at least 18 years old.");
        return false;
      }
    }
    if (step === 2) {
      if (!form.amount || !form.duration || !form.purpose || !form.employment) {
        toast.error("Please fill all loan details before proceeding.");
        return false;
      }
      if (isNaN(form.amount) || Number(form.amount) <= 0) {
        toast.error("Loan amount must be a positive number.");
        return false;
      }
      const validDurations = ["6", "12", "24", "36", "48", "60"];
      if (!validDurations.includes(form.duration)) {
        toast.error("Duration must be one of: 6, 12, 24, 36, 48, 60 months.");
        return false;
      }
      if (/\d/.test(form.purpose)) {
        toast.error("Purpose should contain only letters.");
        return false;
      }
    }
    return true;
  };

  const next = () => {
    if (validateStep()) setStep((s) => s + 1);
  };

  const back = () => setStep((s) => Math.max(1, s - 1));

  const close = () => {
    setOpen(false);
    setStep(1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.agreed) {
      console.log("Form Submitted", form);
      toast.success("Your application has been sent!");
      close();
    } else {
      toast.error("You must agree to the terms before submitting.");
    }
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
      onClick={close}
    >
      <div
        className="relative bg-white rounded-xl w-full max-w-xl p-6 shadow-xl overflow-y-auto max-h-screen"
        onClick={(e) => e.stopPropagation()}
      >
        {/* ❌ Cross Button */}
        <button
          onClick={close}
          className="absolute top-4 right-4 text-2xl font-bold text-gray-500 hover:text-gray-700"
        >
          &times;
        </button>

        <h2 className="font-bold mb-4 text-xl">LOAN APPLICATION</h2>
        <div className="flex gap-2 mb-6">
          {[1, 2, 3].map((s) => (
            <div
              key={s}
              className={`h-2 flex-1 rounded-full ${
                s <= step ? "bg-green-700" : "bg-gray-400"
              }`}
            />
          ))}
        </div>

        {step === 1 && (
          <div className="space-y-3">
            <input name="name" value={form.name} onChange={handleChange} placeholder="Full Name" className="input w-full" required />
            <input name="email" value={form.email} onChange={handleChange} placeholder="Email" className="input w-full" required />
            <input name="phone" value={form.phone} onChange={handleChange} placeholder="Phone Number (11 digits)" className="input w-full" required />
            <input name="dob" value={form.dob} onChange={handleChange} placeholder="Date of Birth" type="date" className="input w-full" required />
          </div>
        )}

        {step === 2 && (
          <div className="space-y-3">
            <input name="amount" value={form.amount} onChange={handleChange} placeholder="Loan Amount" className="input w-full" required />
            <select name="duration" value={form.duration} onChange={handleChange} className="input w-full" required>
              <option value="">Select Duration (months)</option>
              <option value="6">6</option>
              <option value="12">12</option>
              <option value="24">24</option>
              <option value="36">36</option>
              <option value="48">48</option>
              <option value="60">60</option>
            </select>
            <input name="purpose" value={form.purpose} onChange={handleChange} placeholder="Purpose of Loan" className="input w-full" required />
            <select name="employment" value={form.employment} onChange={handleChange} className="input w-full" required>
              <option value="">Employment Status</option>
              <option>Employed</option>
              <option>Self-employed</option>
              <option>Student</option>
              <option>Unemployed</option>
            </select>
          </div>
        )}

        {step === 3 && (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="text-sm text-gray-700">
              <strong>Name:</strong> {form.name}<br />
              <strong>Email:</strong> {form.email}<br />
              <strong>Phone:</strong> {form.phone}<br />
              <strong>DOB:</strong> {form.dob}<br />
              <strong>Loan:</strong> ${form.amount} for {form.duration} months<br />
              <strong>Purpose:</strong> {form.purpose}<br />
              <strong>Employment:</strong> {form.employment}<br />
            </div>
            <label className="flex gap-2 items-center">
              <input type="checkbox" name="agreed" checked={form.agreed} onChange={handleChange} />
              <span>I agree to the terms and conditions</span>
            </label>
            <div className="flex justify-between mt-6">
              <button type="button" onClick={back} className="text-blue-500">Back</button>
              <button
                type="submit"
                disabled={!form.agreed}
                className={`px-4 py-2 rounded ${form.agreed ? 'bg-green-600 text-white' : 'bg-gray-300 text-gray-600'}`}
              >
                Submit
              </button>
            </div>
          </form>
        )}

        {step < 3 && (
          <div className="flex justify-between mt-6">
            {step > 1 ? (
              <button onClick={back} className="text-blue-500">Back</button>
            ) : <div />}
            <button onClick={next} className="bg-blue-600 text-white px-4 py-2 rounded">
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoanModal;
