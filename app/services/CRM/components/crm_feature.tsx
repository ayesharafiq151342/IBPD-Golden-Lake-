"use client";

function CRMFeatures() {
  const features = [
    {
      title: "Entire Client Profiles",
      description:
        "Get a comprehensive picture of every client by viewing their contact info, purchase history, preferences, and interactions. Now that everything is in one spot, your staff can better anticipate client needs and send personalized communications.",
    },
    {
      title: "Management of the Sales Channel",
      description:
        "Our user-friendly channel tools show you every step of your sales process. Keep tabs on leads, keep an eye on how things are going, and figure out what needs fixing so you can complete deals quicker.",
    },
    {
      title: "Automation Capabilities",
      description:
        "Save time and reduce manual tasks with automated workflows for lead nurturing, follow-ups, email marketing, and task assignments.",
    },
    {
      title: "Real-Time Analytics and Reporting",
      description:
        "Implementing automated workflows for information, follow-ups, email marketing, and task assignments can significantly reduce manual duties and save you time.",
    },
    {
      title: "Marketing Integration",
      description:
        "Get leads directly from these platforms like Facebook, Instagram, and WhatsApp to your CRM. Keep tabs on engagement and return on investment (ROI) metrics as they happen, and adjust your plans accordingly for improved outcomes.",
    },
    {
      title: "Optimized for Mobile Devices",
      description:
        "No matter where you are, our CRM is mobile-optimized so you can stay connected with your customers. You can access critical data, amend records, and answer consumer inquiries anywhere on any device.",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 mb-20">
      <h2 className="text-3xl font-bold text-center text-gray-800">
        Features of Golden-Lake CRM
      </h2>
      <p className="text-center text-gray-600 mt-2 mb-8">
        There are a variety of features built within our CRM platform that aim
        to increase productivity, strengthen bonds with customers, and force
        elaboration:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white p-6 shadow-md rounded-lg border"
          >
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CRMFeatures;
