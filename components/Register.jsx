"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Register() {
  const [step, setStep] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    teamName: "",
    teamSize: 1,
    problemStatement: "",
    leader: {
      name: "",
      email: "",
      phone: "",
      college: "",
      year: "",
      github: "",
    },
    members: [],
  });

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const handleTeamSizeChange = (e) => {
    const size = parseInt(e.target.value);
    setFormData((prev) => ({
      ...prev,
      teamSize: size,
      members: Array(size - 1).fill({
        name: "",
        email: "",
        phone: "",
        college: "",
        year: "",
        github: "",
      }),
    }));
  };

  const handleLeaderChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      leader: { ...prev.leader, [name]: value },
    }));
  };

  const handleMemberChange = (index, e) => {
    const { name, value } = e.target;
    const updatedMembers = [...formData.members];
    updatedMembers[index] = { ...updatedMembers[index], [name]: value };
    setFormData((prev) => ({ ...prev, members: updatedMembers }));
  };

  const nextStep = (e) => {
    e.preventDefault();
    if (step < formData.teamSize) {
      setDirection(1);
      setStep(step + 1);
    }
  };

  const prevStep = (e) => {
    e.preventDefault();
    if (step > 0) {
      setDirection(-1);
      setStep(step - 1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
    setDirection(1);
    setIsSubmitted(true);
  };

  // Helper to render common fields
  const renderCommonFields = (data, handleChange, prefix = "") => (
    <div className="space-y-6">
      <div className="space-y-3">
        <label className="block text-sm font-medium text-[#c9d1d9]">
          Name *
        </label>
        <input
          required
          name="name"
          value={data.name}
          onChange={handleChange}
          type="text"
          placeholder="Full Name"
          className="w-full bg-[#0d1117] border border-[#30363d] rounded-md px-4 py-3 text-white placeholder-[#8b949e] focus:outline-none focus:border-[#1f6feb] focus:ring-1 focus:ring-[#1f6feb] transition-all"
        />
      </div>

      <div className="space-y-3">
        <label className="block text-sm font-medium text-[#c9d1d9]">
          Email *
        </label>
        <input
          required
          name="email"
          value={data.email}
          onChange={handleChange}
          type="email"
          placeholder="Gitam Mail"
          className="w-full bg-[#0d1117] border border-[#30363d] rounded-md px-4 py-3 text-white placeholder-[#8b949e] focus:outline-none focus:border-[#1f6feb] focus:ring-1 focus:ring-[#1f6feb] transition-all"
        />
      </div>

      <div className="space-y-3">
        <label className="block text-sm font-medium text-[#c9d1d9]">
          Phone Number *
        </label>
        <input
          required
          name="phone"
          value={data.phone}
          onChange={handleChange}
          type="tel"
          placeholder="+91 XXXXXXXXXX"
          className="w-full bg-[#0d1117] border border-[#30363d] rounded-md px-4 py-3 text-white placeholder-[#8b949e] focus:outline-none focus:border-[#1f6feb] focus:ring-1 focus:ring-[#1f6feb] transition-all"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-3">
          <label className="block text-sm font-medium text-[#c9d1d9]">
            College Department & Branch *
          </label>
          <input
            required
            name="college"
            value={data.college}
            onChange={handleChange}
            type="text"
            placeholder="e.g. CSE"
            className="w-full bg-[#0d1117] border border-[#30363d] rounded-md px-4 py-3 text-white placeholder-[#8b949e] focus:outline-none focus:border-[#1f6feb] focus:ring-1 focus:ring-[#1f6feb] transition-all"
          />
        </div>
        <div className="space-y-3">
          <label className="block text-sm font-medium text-[#c9d1d9]">
            Year *
          </label>
          <input
            required
            name="year"
            value={data.year}
            onChange={handleChange}
            type="text"
            placeholder="e.g. 3rd"
            className="w-full bg-[#0d1117] border border-[#30363d] rounded-md px-4 py-3 text-white placeholder-[#8b949e] focus:outline-none focus:border-[#1f6feb] focus:ring-1 focus:ring-[#1f6feb] transition-all"
          />
        </div>
      </div>

      <div className="space-y-3">
        <label className="block text-sm font-medium text-[#c9d1d9]">
          GitHub Profile Link
        </label>
        <input
          name="github"
          value={data.github}
          onChange={handleChange}
          type="url"
          placeholder="https://github.com/username"
          className="w-full bg-[#0d1117] border border-[#30363d] rounded-md px-4 py-3 text-white placeholder-[#8b949e] focus:outline-none focus:border-[#1f6feb] focus:ring-1 focus:ring-[#1f6feb] transition-all"
        />
      </div>
    </div>
  );

  const totalSteps = formData.teamSize + 1;

  return (
    <div className="w-full max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold text-white text-center mb-10 font-space">
        Registration Form
      </h1>
      <div
        className={`w-full p-6 md:p-10 bg-[#161b22] rounded-xl border border-[#30363d] shadow-xl overflow-hidden relative ${
          isSubmitted ? "" : "min-h-[800px]"
        }`}
      >
        {!isSubmitted && (
          <>
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold text-white">
                {step === totalSteps - 1
                  ? "Review Details"
                  : step === 0
                  ? "Team Details & Leader"
                  : `Team Member ${step}`}
              </h2>
              <div className="text-[#8b949e] font-medium">
                Step {step + 1} of {totalSteps}
              </div>
            </div>

            {/* Progress Bar */}
            <div className="w-full h-2 bg-[#30363d] rounded-full mb-8">
              <div
                className="h-full bg-[#1f6feb] rounded-full transition-all duration-300 ease-in-out"
                style={{ width: `${((step + 1) / totalSteps) * 100}%` }}
              ></div>
            </div>
          </>
        )}

        <form className="relative">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          {isSubmitted ? (
            <motion.div
              key="success"
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              className="flex flex-col items-center justify-center py-20 text-center space-y-6"
            >
              <div className="w-24 h-24 bg-[#238636] rounded-full flex items-center justify-center mb-4 shadow-lg shadow-[#238636]/20">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={3}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-white">
                Registration Successful!
              </h2>
              <p className="text-[#8b949e] text-lg max-w-md">
                Your registration request has been sent successfully.
                <br />
                Check your email for further confirmation.
              </p>
            </motion.div>
          ) : (
            <motion.div
              key={step}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              className="space-y-8 w-full"
            >
              {step === 0 && (
                <>
                  {/* Team Config */}
                  <div className="space-y-3">
                    <label className="block text-sm font-medium text-[#c9d1d9]">
                      Team Name *
                    </label>
                    <input
                      required
                      value={formData.teamName}
                      onChange={(e) =>
                        setFormData({ ...formData, teamName: e.target.value })
                      }
                      type="text"
                      placeholder="Enter Your Team Name"
                      className="w-full bg-[#0d1117] border border-[#30363d] rounded-md px-4 py-3 text-white placeholder-[#8b949e] focus:outline-none focus:border-[#1f6feb] focus:ring-1 focus:ring-[#1f6feb] transition-all"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <label className="block text-sm font-medium text-[#c9d1d9]">
                        Team Size *
                      </label>
                      <select
                        value={formData.teamSize}
                        onChange={handleTeamSizeChange}
                        className="w-full bg-[#0d1117] border border-[#30363d] rounded-md px-4 py-3 text-white focus:outline-none focus:border-[#1f6feb] focus:ring-1 focus:ring-[#1f6feb] transition-all appearance-none"
                      >
                        <option value="1">1 (Solo)</option>
                        <option value="2">2 Members</option>
                        <option value="3">3 Members</option>
                        <option value="4">4 Members</option>
                      </select>
                    </div>

                    <div className="space-y-3">
                      <label className="block text-sm font-medium text-[#c9d1d9]">
                        Problem Statement
                      </label>
                      <div className="w-full bg-[#161b22] border border-[#30363d] rounded-md px-4 py-3 text-[#8b949e] cursor-not-allowed text-sm flex items-center">
                        Problem statements will be revealed during the hackathon!
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-[#30363d] my-8 pt-6">
                    <h3 className="text-xl font-semibold text-white mb-6">
                      Team Leader Details
                    </h3>
                    {renderCommonFields(formData.leader, handleLeaderChange)}
                  </div>
                </>
              )}

              {step > 0 && step < totalSteps - 1 && (
                <>
                  <h3 className="text-xl font-semibold text-white mb-6">
                    Member {step} Details
                  </h3>
                  {renderCommonFields(
                    formData.members[step - 1] || {},
                    (e) => handleMemberChange(step - 1, e)
                  )}
                </>
              )}

              {step === totalSteps - 1 && (
                <div className="space-y-6">
                  <div className="bg-[#0d1117] p-6 rounded-lg border border-[#30363d] space-y-4">
                    <h4 className="text-xl font-semibold text-[#1f6feb] border-b border-[#30363d] pb-2">
                      Team Info
                    </h4>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="block text-[#8b949e]">Team Name</span>
                        <span className="text-white font-medium">
                          {formData.teamName}
                        </span>
                      </div>
                      <div>
                        <span className="block text-[#8b949e]">Team Size</span>
                        <span className="text-white font-medium">
                          {formData.teamSize}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-[#0d1117] p-6 rounded-lg border border-[#30363d] space-y-4">
                    <h4 className="text-xl font-semibold text-[#1f6feb] border-b border-[#30363d] pb-2">
                      Team Leader
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      {Object.entries(formData.leader).map(([key, value]) => (
                        <div key={key}>
                          <span className="block text-[#8b949e] capitalize">
                            {key}
                          </span>
                          <span className="text-white font-medium">
                            {value || "-"}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {formData.members.map((member, index) => (
                    <div
                      key={index}
                      className="bg-[#0d1117] p-6 rounded-lg border border-[#30363d] space-y-4"
                    >
                      <h4 className="text-xl font-semibold text-[#1f6feb] border-b border-[#30363d] pb-2">
                        Member {index + 2}
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                        {Object.entries(member).map(([key, value]) => (
                          <div key={key}>
                            <span className="block text-[#8b949e] capitalize">
                              {key}
                            </span>
                            <span className="text-white font-medium">
                              {value || "-"}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex gap-4 pt-8">
                {step > 0 && (
                  <button
                    onClick={prevStep}
                    className="flex-1 bg-[#21262d] hover:bg-[#30363d] text-[#c9d1d9] font-bold py-3 rounded-lg text-lg transition-colors duration-200 border border-[#30363d]"
                  >
                    Back
                  </button>
                )}

                {step < totalSteps - 1 ? (
                  <button
                    onClick={nextStep}
                    className="flex-1 bg-[#1f6feb] hover:bg-[#238636] text-white font-bold py-3 rounded-lg text-lg transition-colors duration-200 shadow-md"
                  >
                    {step === totalSteps - 2
                      ? "Review Details"
                      : "Next: Add Member"}
                  </button>
                ) : (
                  <button
                    onClick={handleSubmit}
                    className="flex-1 bg-[#238636] hover:bg-[#2ea043] text-white font-bold py-3 rounded-lg text-lg transition-colors duration-200 shadow-md"
                  >
                    Commit To Challenge
                  </button>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </form>
      </div>
    </div>
  );
}