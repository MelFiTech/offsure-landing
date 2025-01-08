"use client";

import React, { useState } from 'react';
import Image from 'next/image';

type Tab = 'IOS APPS' | 'ANDROID APPS' | 'Backend Stacks';

const Solutions = () => {
  const [activeTab, setActiveTab] = useState<Tab>('IOS APPS');

  const iosFeatures = [
    'iPhone apps;',
    'iPad apps;', 
    'Apple Watch apps;',
    'Apple TV apps;',
    'App clips.',
  ];

  const androidFeatures = [
    'Android mobile apps;',
    'Android tablet apps;',
    'Android TV apps;',
    'Android Wear OS apps;',
    'Android Auto apps.',
  ];

  const backendFeatures = [
    'RESTful APIs;',
    'Microservices;',
    'Database design;',
    'Cloud infrastructure;',
    'Real-time processing.',
  ];

  const iosTechnologies = [
    { name: 'Swift', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg' },
    { name: 'SwiftUI', icon: 'https://developer.apple.com/assets/elements/icons/swiftui/swiftui-96x96_2x.png' },
    { name: 'Objective-C', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/objectivec/objectivec-plain.svg' },
    { name: 'AR Kit', icon: 'https://developer.apple.com/assets/elements/icons/arkit/arkit-96x96_2x.png' },
    { name: 'Apple Pay', icon: '/images/apple-pay-icon.svg' },
    { name: 'Widgets', icon: '/images/widget.png' },
    { name: 'HealthKit', icon: 'https://developer.apple.com/assets/elements/icons/healthkit/healthkit-96x96_2x.png' },
  ];

  const androidTechnologies = [
    { name: 'Kotlin', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg' },
    { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
    { name: 'Android SDK', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg' },
    { name: 'Firebase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
    { name: 'Jetpack', icon: 'https://3.bp.blogspot.com/-VVp3WvJvl84/X0Vu6EjYqDI/AAAAAAAAPjU/ZOMKiUlgfg8ok8DY8Hc-ocOvGdB0z86AgCLcBGAsYHQ/s1600/jetpack%2Bcompose%2Bicon_RGB.png' },
    { name: 'Material Design', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg' },
    { name: 'Google Pay', icon: 'https://developers.google.com/static/pay/api/images/brand-guidelines/google-pay-mark.png' },
  ];

  const backendTechnologies = [
    { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
    { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
    { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
    { name: 'AWS', icon: '/images/aws-icon.svg' },
    { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
  ];

  return (
    <section className="py-10 sm:py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 text-gray-900">
          Customized Mobile Application<br />
          Solutions by OffsureIT
        </h2>

        {/* Tabs */}
        <div className="flex flex-wrap gap-4 sm:gap-8 mb-8 border-b border-gray-200">
          {['IOS APPS', 'ANDROID APPS', 'Backend Stacks'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab as Tab)}
              className={`pb-2 sm:pb-4 text-base sm:text-lg font-medium relative ${
                activeTab === tab 
                  ? 'text-gray-900 border-b-2 border-blue-600' 
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Content */}
        {activeTab === 'IOS APPS' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold mb-4 text-gray-900">
                iOS custom mobile applications
              </h3>
              <p className="text-gray-700 text-base sm:text-lg mb-6">
                As a leading mobile application development company, we possess the knowledge 
                and skills to build reliable, scalable, and feature-rich iOS solutions, including:
              </p>
              <ul className="space-y-3 mb-6">
                {iosFeatures.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2 text-base sm:text-lg text-gray-700">
                    <span className="text-gray-600">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="bg-blue-600 text-white px-6 py-2 sm:px-8 sm:py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors text-sm sm:text-base">
                Request services
              </button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
              {iosTechnologies.map((tech, index) => (
                <div key={index} className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 mb-2">
                    <Image
                      src={tech.icon}
                      alt={tech.name}
                      width={64}
                      height={64}
                      className="w-full h-full"
                    />
                  </div>
                  <p className="text-xs sm:text-sm text-gray-700">{tech.name}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'ANDROID APPS' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold mb-4 text-gray-900">
                Android custom mobile applications
              </h3>
              <p className="text-gray-700 text-base sm:text-lg mb-6">
                Our expert Android development team creates robust, user-friendly, and 
                innovative Android applications, including:
              </p>
              <ul className="space-y-3 mb-6">
                {androidFeatures.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2 text-base sm:text-lg text-gray-700">
                    <span className="text-gray-600">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="bg-blue-600 text-white px-6 py-2 sm:px-8 sm:py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors text-sm sm:text-base">
                Request services
              </button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
              {androidTechnologies.map((tech, index) => (
                <div key={index} className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 mb-2">
                    <Image
                      src={tech.icon}
                      alt={tech.name}
                      width={64}
                      height={64}
                      className="w-full h-full"
                    />
                  </div>
                  <p className="text-xs sm:text-sm text-gray-700">{tech.name}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'Backend Stacks' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold mb-4 text-gray-900">
                Backend development solutions
              </h3>
              <p className="text-gray-700 text-base sm:text-lg mb-6">
                We deliver scalable, secure, and high-performance backend solutions 
                to power your applications, including:
              </p>
              <ul className="space-y-3 mb-6">
                {backendFeatures.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2 text-base sm:text-lg text-gray-700">
                    <span className="text-gray-600">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="bg-blue-600 text-white px-6 py-2 sm:px-8 sm:py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors text-sm sm:text-base">
                Request services
              </button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
              {backendTechnologies.map((tech, index) => (
                <div key={index} className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 mb-2">
                    <Image
                      src={tech.icon}
                      alt={tech.name}
                      width={64}
                      height={64}
                      className="w-full h-full"
                    />
                  </div>
                  <p className="text-xs sm:text-sm text-gray-700">{tech.name}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Solutions;