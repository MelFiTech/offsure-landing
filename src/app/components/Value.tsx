export default function Value() {
  const industries = [
    {
      title: "Fintech",
      description: "Barry's expertise in mobile banking is a guarantee that your clients will be able to manage their funds securely and with ease. This includes depositing, exchanging, converting, transferring, paying, viewing records, etc. across such spheres as neobanks, payments and EMIs, fiat and crypto eWallets, and investment banking."
    },
    {
      title: "Healthcare", 
      description: "With us as your tech partner, you can be sure that the patients of your medical facility can order consultations, schedule appointments, make payments, rate doctors, etc. The resulting app will comply with all applicable guidelines in this heavily regulated area."
    },
    {
      title: "Artificial Intelligence",
      description: "When it comes to transportation, mobility, and logistics, we will make sure that your clients are content with the services they get via your apps – be it ticket booking and purchase, car-sharing, cargo delivery and tracking, etc. We will ensure transparency and visibility across the entire chain."
    },
    {
      title: "Real Estate",
      description: "In eCommerce, being able to offer the best possible and seamless shopping experiences via self-service mobile apps is a matter of survival. Retail buyers expect clarity, advanced filtering, safe payment options, and all other components of an ideal user journey. You will get them with us."
    },
    {
      title: "Hospitality",
      description: "Provide your end-clients with advanced channels so that they can view, book, and rent hotel rooms and other properties from anywhere. Depending on your needs, we will take care of filters, image galleries, virtual tours, client support capabilities, and payment gateways."
    },
    {
      title: "Media & Entertainment",
      description: "With Multimedia as one of the key fields of our expertise, we will empower your end-clients with bespoke solutions for enjoying the content of various types literally on the go – offline modes included – with the highest possible quality and interactiveness."
    },
    {
      title: "Aesthetics & Telehealth",
      description: "Barry will provide the clients of your telecom services with seamless experiences so that they can easily manage their packages, subscribe to and modify their plans, top up their balances, etc. via intuitive user accounts with a streamlined UI."
    }
  ];

  return (
    <section className="bg-[#0D0D0D] py-12 sm:py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-5">
          Mobile self-service apps for you
        </h2>
        
        <p className="text-gray-300 text-sm sm:text-base mb-8 sm:mb-12 max-w-4xl">
          Such custom mobile apps enable end-users to access products, manage their accounts, and resolve tasks on their own. With us, your UX will be intuitive, purposeful, and comfortable. Also, across industries, there are many similar self-service features related to user management, notifications, communication, analytics, etc. Andersen grows our body of knowledge with each project and reuses it to cut costs and time needed for similar initiatives.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {/* First row - 2 large cards */}
          <div className="bg-gray-900 p-4 sm:p-6 rounded-xl">
            <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">{industries[0].title}</h3>
            <p className="text-gray-300 text-sm sm:text-base">{industries[0].description}</p>
          </div>
          <div className="bg-gray-900 p-4 sm:p-6 rounded-xl">
            <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">{industries[1].title}</h3>
            <p className="text-gray-300 text-sm sm:text-base">{industries[1].description}</p>
          </div>

          {/* Middle row - 3 medium cards */}
          <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mt-4 sm:mt-6">
            {industries.slice(2, 5).map((industry, index) => (
              <div key={index} className="bg-gray-900 p-4 sm:p-6 rounded-xl">
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">{industry.title}</h3>
                <p className="text-gray-300 text-sm sm:text-base">{industry.description}</p>
              </div>
            ))}
          </div>

          {/* Last row - 2 large cards */}
          <div className="bg-gray-900 p-4 sm:p-6 rounded-xl">
            <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">{industries[5].title}</h3>
            <p className="text-gray-300 text-sm sm:text-base">{industries[5].description}</p>
          </div>
          <div className="bg-gray-900 p-4 sm:p-6 rounded-xl">
            <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">{industries[6].title}</h3>
            <p className="text-gray-300 text-sm sm:text-base">{industries[6].description}</p>
          </div>
        </div>
      </div>
    </section>
  );
} 