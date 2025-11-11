export default function Hero() {
  return (
    <section
      id="home"
      className="bg-gradient-to-b from-primary-dark to-[#A8E6F0] text-white py-68 px-6 text-center relative overflow-hidden "
    >
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold leading-20 mb-4 drop-shadow-lg pb-4">
          Safeguarding Your Files, Simplifying Your Workflow.
        </h1>

        <p className="text-lg text-blue-50 mb-10 max-w-4xl mx-auto pd-4">
          EIPP Vault is your secure, cloud-based document management solution <br></br>
          combining security, efficiency, and ease of access for every team.<br></br>Smart,Effortless Document Management.
        </p>
        {/* <p className="text-lg text-blue-50 mb-10 max-w-4xl mx-auto">Secure,Smart,Effortless Document Management.</p> */}

        <div className="flex justify-center gap-4">
          <a
            href="#contact-us"
            className="bg-white text-[#0066B3] font-semibold px-6 py-3 rounded-lg shadow hover:bg-blue-100 transition"
          >
            Get In Touch
          </a>
          <a
            href="#contact-us"
            className="border border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white hover:text-[#0066B3] transition"
          >
            Get Started
          </a>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#A8E6F0] to-transparent"></div>
    </section>
  );
}
