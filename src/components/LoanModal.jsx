import React, { useState } from "react";
import { useModal } from "./ModalContext";
import { toast } from 'react-hot-toast';

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
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    setErrors(prev => ({ ...prev, [name]: "" }));
  };

  const validateStep1 = () => {
    let newErrors = {};
    if (!form.name.trim()) newErrors.name = "Please enter your name";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = "Enter a valid email";
    if (!/^\d{11}$/.test(form.phone)) newErrors.phone = "Please Enter correct Phone Number";
    if (!form.dob) {
      newErrors.dob = "Please enter your date of birth";
    } else {
      const age = new Date().getFullYear() - new Date(form.dob).getFullYear();
      if (age < 18) newErrors.dob = "You must be at least 18 years old";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep2 = () => {
    let newErrors = {};
    if (!form.amount || Number(form.amount) <= 0) newErrors.amount = "PLease enter Valid amount";
    const allowedDurations = ["6", "12", "24", "36"];
    if (!allowedDurations.includes(form.duration)) newErrors.duration = "Select a valid duration";
    if (!form.purpose || !/^[A-Za-z\s]+$/.test(form.purpose)) newErrors.purpose = "Please enter valid purpose.";
    if (!form.employment) newErrors.employment = "Please select employment status";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const isStepValid = () => {
    if (step === 1) return validateStep1();
    if (step === 2) return validateStep2();
    return true;
  };

  const next = () => {
    if (isStepValid()) setStep((s) => s + 1);
  };

  const back = () => setStep((s) => Math.max(1, s - 1));

  const close = () => {
    setOpen(false);
    setStep(1);
    setForm({
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
    setErrors({});
  };

  const handleOverlayClick = (e) => {
    if (e.target.id === "overlay") close();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.agreed) {
      setErrors({ agreed: "You must agree to terms" });
      return;
    }
    console.log("Form Submitted", form);
    close();
    toast.success("Your application has been submitted!");
  };

  if (!open) return null;

  return (
    <div
      id="overlay"
      className="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
      onClick={handleOverlayClick}
    >
      <div className="relative bg-white rounded-xl w-[90%] max-w-xl p-4 sm:p-6 shadow-xl overflow-y-auto max-h-[90vh]">

        {/* ❌ Close Button */}
        <button
          onClick={close}
          className="absolute top-2 right-2 text-gray-500 hover:text-red-600 text-xl font-bold"
        >
          &times;
        </button>

        <h2 className="font-bold mb-4 text-xl">LOAN APPLICATION</h2>
        <div className="flex gap-2 mb-6">
          {[1, 2, 3].map((s) => (
            <div
              key={s}
              className={`h-2 flex-1 rounded-full ${s <= step ? "bg-green-700" : "bg-gray-400"}`}
            />
          ))}
        </div>

        {step === 1 && (
          <div className="space-y-3">
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Full Name"
              className="input w-full"
              required
            />
            {errors.name && <p className="text-red-600 text-sm">{errors.name}</p>}
            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email"
              className="input w-full"
              required
            />
            {errors.email && <p className="text-red-600 text-sm">{errors.email}</p>}
            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              className="input w-full"
              required
            />
            {errors.phone && <p className="text-red-600 text-sm">{errors.phone}</p>}
            <input
              name="dob"
              value={form.dob}
              onChange={handleChange}
              placeholder="Date of Birth"
              type="date"
              className="input w-full"
              required
            />
            {errors.dob && <p className="text-red-600 text-sm">{errors.dob}</p>}
          </div>
        )}

        {step === 2 && (
          <div className="space-y-3">
            <input
              name="amount"
              value={form.amount}
              onChange={handleChange}
              placeholder="Loan Amount"
              className="input w-full"
              required
              type="number"
            />
            {errors.amount && <p className="text-red-600 text-sm">{errors.amount}</p>}
            <select
              name="duration"
              value={form.duration}
              onChange={handleChange}
              className="input w-full"
              required
            >
              <option value="">Select Duration (months)</option>
              <option value="6">6 months</option>
              <option value="12">12 months</option>
              <option value="24">24 months</option>
              <option value="36">36 months</option>
            </select>
            {errors.duration && <p className="text-red-600 text-sm">{errors.duration}</p>}
            <input
              name="purpose"
              value={form.purpose}
              onChange={handleChange}
              placeholder="Purpose of Loan"
              className="input w-full"
              required
            />
            {errors.purpose && <p className="text-red-600 text-sm">{errors.purpose}</p>}
            <select
              name="employment"
              value={form.employment}
              onChange={handleChange}
              className="input w-full"
              required
            >
              <option value="">Employment Status</option>
              <option>Employed</option>
              <option>Self-employed</option>
              <option>Student</option>
              <option>Unemployed</option>
            </select>
            {errors.employment && <p className="text-red-600 text-sm">{errors.employment}</p>}
          </div>
        )}

        {step === 3 && (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="text-sm text-gray-700">
              <strong>Name:</strong> {form.name}
              <br />
              <strong>Email:</strong> {form.email}
              <br />
              <strong>Phone:</strong> {form.phone}
              <br />
              <strong>DOB:</strong> {form.dob}
              <br />
              <strong>Loan:</strong> ${form.amount} for {form.duration} months
              <br />
              <strong>Purpose:</strong> {form.purpose}
              <br />
              <strong>Employment:</strong> {form.employment}
              <br />
            </div>
            <label className="flex gap-2 items-center">
              <input
                type="checkbox"
                name="agreed"
                checked={form.agreed}
                onChange={handleChange}
              />
              <span>I agree to the terms and conditions</span>
            </label>
            {errors.agreed && <p className="text-red-600 text-sm">{errors.agreed}</p>}
            <div className="flex justify-between mt-6">
              <button type="button" onClick={back} className="text-blue-500">
                Back
              </button>
              <button
                type="submit"
                disabled={!form.agreed}
                className={`px-4 py-2 rounded ${form.agreed ? "bg-green-600 text-white" : "bg-gray-300 text-gray-600"}`}
              >
                Submit
              </button>
            </div>
          </form>
        )}

        {step < 3 && (
          <div className="flex justify-between mt-6">
            {step > 1 ? (
              <button onClick={back} className="text-blue-500">
                Back
              </button>
            ) : (
              <div />
            )}
            <button
              onClick={next}
              className="bg-blue-600 text-white px-4 py-2 rounded"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoanModal;
