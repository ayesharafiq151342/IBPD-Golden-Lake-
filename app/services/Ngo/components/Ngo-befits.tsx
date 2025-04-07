function NGOERPBenefits() {
    return (
      <div className="w-full lg:w-9/12  mx-auto p-6">
        <h1 className="text-3xl font-bold text-center mb-8">
          How Do NGOs Benefit from Golden-lake ERP Software?
        </h1>
  
        <div className="grid md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <BenefitCard key={index} title={benefit.title} description={benefit.description} />
          ))}
        </div>
  
        <div className="mt-12 p-6 bg-gray-100 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Golden-lake ERP System for NGOs Summary</h2>
          <p>
            The ERP system for NGOs from Golden-lake is designed to address challenges like managing projects and funders while maintaining financial integrity. By using modules covering inventory management, business development, project management, and financial reporting, nonprofits can streamline operations, enhance transparency, and focus on their mission.
          </p>
        </div>
      </div>
    );
  }
  
  const benefits = [
    {
      title: "Enhanced Effectiveness",
      description: "Automates project monitoring, HR operations, and financial administration, allowing NGOs to focus on their core goals while reducing errors."
    },
    {
      title: "Increased Openness",
      description: "Dashboards and real-time reporting ensure transparency, helping NGOs track cash allocation, generate reports, and comply with regulations."
    },
    {
      title: "The Capability to Scale",
      description: "Expands to meet NGO demands, with modular features that can be added or removed as needed."
    },
    {
      title: "Increased Donor Trust",
      description: "Optimized operations and accurate financial reports build trust with donors, leading to more funding and stronger relationships."
    }
  ];
  
function BenefitCard({ title = "Default Title", description = "Default Description" }) {
  return (
    <div className="p-6 border rounded-lg shadow-md bg-white">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p>{description}</p>
    </div>
  );
}
export default NGOERPBenefits
  