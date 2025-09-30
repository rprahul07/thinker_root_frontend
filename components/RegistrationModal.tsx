import React, { useState } from "react";
import { HACKATHON_THEMES } from "../constants";

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

const RegistrationModal = ({
  isOpen,
  onClose,
  onSuccess,
}: RegistrationModalProps) => {
  if (!isOpen) return null;

  const [paymentProof, setPaymentProof] = useState<File | null>(null);
  const [linkedinLink, setLinkedinLink] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const url = process.env.VITE_API_URL || "https://lenienttree.in";

    if (!paymentProof || !linkedinLink) {
      alert("Please upload all mandatory details");
      return;
    }

    // build formData manually to avoid name mismatch
    const form = e.currentTarget;
    const formData = new FormData();

    formData.append("firstName", (form as any).firstName.value);
    formData.append("lastName", (form as any).lastName.value);
    formData.append("email", (form as any).email.value);
    formData.append("phone", (form as any).phone.value);
    formData.append("organization", (form as any).organization.value);
    formData.append("role", (form as any).role.value);
    formData.append("theme", (form as any).theme.value);
    formData.append("experience", (form as any).experience.value);
    formData.append("skills", (form as any).skills.value);
    formData.append("motivation", (form as any).motivation.value);

    // ✅ names exactly what multer expects:
    formData.append("linkedinLink", linkedinLink);
    formData.append("payment_screenshot", paymentProof);

    try {
      const res = await fetch(`${url}/api/applications`, {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        const errData = await res.json().catch(() => ({}));
        throw new Error(errData.message || "Registration failed");
      }

      onSuccess();
      onClose();
    } catch (err: any) {
      console.error(err);
      alert(err.message || "Something went wrong");
    }
  };

  const inputClasses =
    "w-full bg-zinc-700 border border-zinc-600 rounded-md px-3 py-2 text-white focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors";
  const labelClasses = "block text-sm font-medium text-zinc-300 mb-1";
  const legendClasses =
    "text-lg font-medium text-zinc-100 mb-2 w-full border-b border-zinc-700 pb-2";

  const linkedinText = `𝐓𝐡𝐢𝐧𝐤𝐞𝐫 𝐑𝐨𝐨𝐭 𝐈𝐝𝐞𝐚𝐭𝐡𝐨𝐧 2025 – 𝐑𝐞𝐠𝐢𝐬𝐭𝐫𝐚𝐭𝐢𝐨𝐧𝐬 𝐎𝐩𝐞𝐧

📅 Date: 26th December 2025
🔗 Register here: https://lnkd.in/gg39mZqb

𝐋𝐞𝐧𝐢𝐞𝐧𝐭𝐓𝐫𝐞𝐞 is delighted to announce the opening of registrations for the 𝐓𝐡𝐢𝐧𝐤𝐞𝐫 𝐑𝐨𝐨𝐭 𝐈𝐝𝐞𝐚𝐭𝐡𝐨𝐧 2025.
As the driving force behind this initiative, LenientTree is committed to fostering a culture of 𝐈𝐧𝐧𝐨𝐯𝐚𝐭𝐢𝐨𝐧 and 𝐄𝐧𝐭𝐫𝐞𝐩𝐫𝐞𝐧𝐞𝐮𝐫𝐬𝐡𝐢𝐩 by providing a platform where:

• Innovators can present transformative ideas
• Participants can collaborate with peers and industry mentors
• Teams can develop practical solutions with real-world impact

This ideathon reflects 𝐋𝐞𝐧𝐢𝐞𝐧𝐭𝐓𝐫𝐞𝐞 vision of enabling students, entrepreneurs, and changemakers to transform ideas into meaningful outcomes.

We invite you to join us in shaping the future through innovation.

#𝐋𝐞𝐧𝐢𝐞𝐧𝐭𝐓𝐫𝐞𝐞 #𝐓𝐡𝐢𝐧𝐤𝐞𝐫𝐑𝐨𝐨𝐭 #𝐈𝐝𝐞𝐚𝐭𝐡𝐨𝐧2025 #𝐈𝐧𝐧𝐨𝐯𝐚𝐭𝐢𝐨𝐧 #𝐄𝐧𝐭𝐫𝐞𝐩𝐫𝐞𝐧𝐞𝐮𝐫𝐬𝐡𝐢𝐩 #𝐑𝐞𝐠𝐢𝐬𝐭𝐫𝐚𝐭𝐢𝐨𝐧𝐬𝐎𝐩𝐞𝐧`;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="bg-zinc-800 rounded-lg shadow-2xl shadow-red-900/20 w-full max-w-2xl border border-zinc-700 relative max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 bg-zinc-800/80 backdrop-blur-sm z-10 p-8 pb-6">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-zinc-400 hover:text-white transition-colors"
            aria-label="Close registration form"
          >
            ✕
          </button>
          <h2
            id="modal-title"
            className="font-display text-3xl font-bold text-red-400 text-center"
          >
            Register Your Interest
          </h2>

          <div className="mt-4 flex flex-col md:flex-row gap-4 justify-center">
            <a
              href="/poster.png"
              download
              className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-md transition-all duration-300"
            >
              📥 Download LinkedIn Post Template
            </a>
            <a
              href={`https://www.linkedin.com/feed/?shareActive=true&text=${encodeURIComponent(
                linkedinText
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition-all duration-300"
            >
              🔗 Share to LinkedIn
            </a>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8 p-8 pt-0">
          <fieldset>
            <legend className={legendClasses}>Personal Information</legend>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div>
                <label htmlFor="firstName" className={labelClasses}>
                  First Name *
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  required
                  className={inputClasses}
                />
              </div>
              <div>
                <label htmlFor="lastName" className={labelClasses}>
                  Last Name *
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  required
                  className={inputClasses}
                />
              </div>
            </div>
          </fieldset>

          <fieldset>
            <legend className={legendClasses}>Contact Information</legend>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div>
                <label htmlFor="email" className={labelClasses}>
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className={inputClasses}
                />
              </div>
              <div>
                <label htmlFor="phone" className={labelClasses}>
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  className={inputClasses}
                />
              </div>
            </div>
          </fieldset>

          <fieldset>
            <legend className={legendClasses}>Professional Background</legend>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div>
                <label htmlFor="organization" className={labelClasses}>
                  Organization/University
                </label>
                <input
                  type="text"
                  id="organization"
                  name="organization"
                  className={inputClasses}
                />
              </div>
              <div>
                <label htmlFor="role" className={labelClasses}>
                  Role/Position
                </label>
                <input
                  type="text"
                  id="role"
                  name="role"
                  className={inputClasses}
                />
              </div>
            </div>
          </fieldset>

          <fieldset>
            <legend className={legendClasses}>Innovation Preferences</legend>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div>
                <label htmlFor="theme" className={labelClasses}>
                  Preferred Theme *
                </label>
                <select
                  id="theme"
                  name="theme"
                  required
                  className={inputClasses}
                >
                  <option value="">Select a theme...</option>
                  {HACKATHON_THEMES.map((theme) => (
                    <option key={theme.title} value={theme.title}>
                      {theme.title}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="experience" className={labelClasses}>
                  Experience Level
                </label>
                <select
                  id="experience"
                  name="experience"
                  className={inputClasses}
                >
                  <option value="">Select level...</option>
                  <option value="Beginner">Beginner</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Advanced">Advanced</option>
                </select>
              </div>
            </div>
          </fieldset>

          <fieldset>
            <legend className={legendClasses}>Skills & Motivation</legend>
            <div className="space-y-4 mt-4">
              <div>
                <label htmlFor="skills" className={labelClasses}>
                  Technical Skills
                </label>
                <textarea
                  id="skills"
                  name="skills"
                  rows={3}
                  className={inputClasses}
                  placeholder="e.g., Python, React, Machine Learning..."
                ></textarea>
              </div>
              <div>
                <label htmlFor="motivation" className={labelClasses}>
                  Why do you want to join ThinkerRoot?
                </label>
                <textarea
                  id="motivation"
                  name="motivation"
                  rows={3}
                  className={inputClasses}
                  placeholder="Tell us about your passion for innovation..."
                ></textarea>
              </div>
            </div>
          </fieldset>

          <fieldset>
            <legend className={legendClasses}>Social Media Link *</legend>
            <div className="space-y-4 mt-4">
              <div>
                <label htmlFor="linkedinLink" className={labelClasses}>
                  LinkedIn Post Link *
                </label>
                <input
                  type="url"
                  id="linkedinLink"
                  name="linkedinLink"
                  required
                  value={linkedinLink}
                  onChange={(e) => setLinkedinLink(e.target.value)}
                  className={inputClasses}
                  placeholder="Paste your LinkedIn post URL"
                />
              </div>
            </div>
          </fieldset>

          <fieldset>
            <legend className={legendClasses}>Payment *</legend>
            <div className="mt-4 space-y-4">
              <div className="flex flex-col items-center space-y-2">
                <img
                  src="/payment2.png"
                  alt="Payment QR Code"
                  className="w-48 h-48 object-contain rounded-md"
                />
                <p className="text-zinc-400 text-xs text-center max-w-xs">
                  Scan the QR code above to make your payment (₹250). Upload the
                  payment screenshot below.
                </p>
              </div>

              <label htmlFor="paymentScreenshot" className={labelClasses}>
                Upload Payment Screenshot *
              </label>
              <input
                type="file"
                id="paymentScreenshot"
                name="payment_screenshot" // ✅ matches backend
                accept="image/*"
                required
                onChange={(e) => setPaymentProof(e.target.files?.[0] ?? null)}
                className="text-zinc-300"
              />

              <p className="text-red-400 text-xs mt-2">
                ⚠️ Any fraudulent or irrelevant activities will result in a
                permanent ban from ThinkerRoot 2025.
              </p>
            </div>
          </fieldset>

          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-md transition-all duration-300 transform hover:scale-105"
          >
            Book My Seat
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationModal;
