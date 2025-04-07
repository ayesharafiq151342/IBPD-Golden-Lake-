function Payroll_benifts() {
    return (
      <div className="w-full lg:w-9/12  mx-auto p-6">
        <h1 className="text-3xl font-bold text-center mb-8">
        HR Attendance Register
        </h1>
  
        <div className="grid md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <BenefitCard key={index} title={benefit.title} description={benefit.description} />
          ))}
        </div>
  
        <div className="mt-12 p-6 bg-gray-100 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Conclusion: Transforming Payroll and HR Practices</h2>
          <p>
          As organizations navigate the complexities of modern business, the need for streamlined HR and payroll processes becomes paramount. Multiapp Payroll Automation is a Beacon of Innovation, offering a solution and a transformative approach to managing the entire employee lifecycle. From the user-centric Employee Self-Service Portal to the robust features of the HR and Payroll System, Multiapp is poised to revolutionize how businesses approach workforce management.  </p>
        </div>
      </div>
    );
  }
  
  const benefits = [
    {
      title: "Benefits of an HR Payroll System",
      description: "In today’s dynamic business landscape, embracing an HR and Payroll System is more than adopting a piece of software; it’s a strategic move to revolutionize workplace operations. This comprehensive solution simplifies payroll services and extends its capabilities to proficiently manage a spectrum of Human Resources functions, including performance and Cash Management. The seamless integration of services and technologies designed by Multiapp elevates your business’s payroll and HR practices, ensuring efficiency and excellence across the board."
    },
    {
      title: "Experience the Future of HR and Payroll Management",
      description: "As businesses evolve, so do the demands on HR and payroll management. Multi app Payroll Automation is not just a solution; it’s a glimpse into the future of streamlined, efficient, and user-friendly HR processes. From empowering employees through self-service portals to seamlessly managing complex payroll transactions, Multi app Payroll is a beacon of innovation in workforce management."
    },
 
  ];
  
function BenefitCard({ title = "Default Title", description = "Default Description" }) {
  return (
    <div className="p-6 border rounded-lg shadow-md bg-white">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-justify">{description}</p>
    </div>
  );
}
export default Payroll_benifts
  