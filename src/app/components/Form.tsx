'use client';

import React, { useEffect, useRef, useState } from 'react';

export default function Form(): JSX.Element {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitMessage, setSubmitMessage] = useState<string>('');

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.error("Error attempting to play video:", error);
      });
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    const formData = new FormData(e.currentTarget);
    formData.append('_zapier_key', 'form_v1_0d07S9zJ3MgaJfDTY3Y5nwTA');

    try {
      const response = await fetch('https://submit-form.com/KDmFWHk1Y', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(Object.fromEntries(formData)),
      });

      if (response.ok) {
        setSubmitMessage('Thank you for your message. We will get back to you soon!');
        e.currentTarget.reset();
      } else {
        setSubmitMessage('Oops! Something went wrong. Please try again later.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitMessage('Oops! Something went wrong. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative overflow-hidden">
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        onError={(e: React.SyntheticEvent<HTMLVideoElement, Event>) => console.error("Video error:", e)}
      >
        <source src="/space-background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70 z-10"></div>
      <div className="relative z-30 container mx-auto px-4 py-8 sm:py-12 md:py-16 text-white">
        <div className="max-w-2xl mx-auto">
          <div className="bg-[#1A1A1A] bg-opacity-80 rounded-2xl p-6 sm:p-8 md:p-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-3">
              Elevate the way you <br className="hidden sm:block" />
              <span className="text-[#3B82F6]">execute</span> your ideas
            </h2>
            <p className="text-center text-gray-400 text-sm sm:text-base mb-6">
              Start producing stunning, beautifully designed, well-engineered software
              without the hassles of hiring or micro managing development
            </p>
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col sm:flex-row gap-3 mb-3">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="flex-1 bg-[#0D0D0D] rounded-lg p-2.5 text-white text-sm"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="flex-1 bg-[#0D0D0D] rounded-lg p-2.5 text-white text-sm"
                  required
                />
              </div>
              <textarea
                name="message"
                placeholder="Message"
                rows={3}
                className="w-full bg-[#0D0D0D] rounded-lg p-2.5 text-white text-sm mb-3"
                required
              ></textarea>
              <div className="flex justify-center sm:justify-end">
                <button
                  type="submit"
                  className="w-full sm:w-auto px-5 py-2.5 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 disabled:opacity-50"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </form>
            {submitMessage && (
              <p className="mt-3 text-center text-xs sm:text-sm text-gray-300">{submitMessage}</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
