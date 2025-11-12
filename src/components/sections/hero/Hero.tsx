import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="bg-gradient-to-l from-eipp-primary to-eipp-secondary text-white py-10 xl:py-48 px-6 text-center relative overflow-hidden "
    >
      <div className="max-w-5xl mx-auto justify-center items-center">
        <Link href="/" className="flex items-center  justify-center pb-4">
        <Image src="/logo.png" alt="EIPP Vault Logo" width={120} height={120} />
      </Link>

        <h1 className="text-5xl md:text-6xl font-bold leading-20 mb-4 drop-shadow-lg pb-4">
          Safeguarding Your Files, Simplifying Your Workflow.
        </h1>

        <p className="text-lg text-blue-50 mb-10 max-w-4xl mx-auto pd-4">
          EIPP Vault is your secure, cloud-based document management solution <br></br>
          combining security, efficiency, and ease of access for every team.<br></br>Smart,Effortless Document Management.
        </p>
        {/* <p className="text-lg text-blue-50 mb-10 max-w-4xl mx-auto">Secure,Smart,Effortless Document Management.</p> */}

        <div className="flex justify-center gap-4 items-center">
          <a
            href="#contact-us"
            className="bg-white text-eipp-secondary font-semibold px-6 py-3 rounded-lg shadow hover:bg-blue-100 transition"
          >
            Get In Touch
          </a>
  
        </div>
      </div>
    </section>
  );
}
