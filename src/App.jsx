function App() {
  return (
    <>
      <header
        style={{
          background: "#0f172a",
          color: "white",
          padding: "20px 50px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h2>MANVEN TECHNOLOGIES</h2>

        <nav>
          <a href="#about" style={{ color: "white", marginRight: "20px" }}>
            About
          </a>
          <a href="#services" style={{ color: "white", marginRight: "20px" }}>
            Services
          </a>
          <a href="#clients" style={{ color: "white", marginRight: "20px" }}>
            Clients
          </a>
          <a href="#contact" style={{ color: "white" }}>
            Contact
          </a>
        </nav>
      </header>

      <section
        style={{
          background: "linear-gradient(to right,#0f172a,#2563eb)",
          color: "white",
          textAlign: "center",
          padding: "120px 20px",
        }}
      >
        <h1 style={{ fontSize: "3rem" }}>
          MANVEN TECHNOLOGIES PRIVATE LIMITED
        </h1>

        <p style={{ fontSize: "1.4rem", marginTop: "20px" }}>
          Software Development • Cloud Solutions • AI Services
        </p>

        <p
          style={{
            maxWidth: "800px",
            margin: "20px auto",
            lineHeight: "1.8",
          }}
        >
          Empowering businesses through modern software engineering,
          cloud transformation, DevOps, AI solutions and digital innovation.
        </p>
      </section>

      <section id="about" style={{ padding: "80px 50px" }}>
        <h2>About Us</h2>

        <p>
          MANVEN TECHNOLOGIES PRIVATE LIMITED is a technology consulting and
          software services company providing cloud engineering, AI solutions,
          platform engineering, application development, website development,
          maintenance and support services to clients worldwide.
        </p>
      </section>

      <section
        id="services"
        style={{
          background: "#f8fafc",
          padding: "80px 50px",
        }}
      >
        <h2>Our Services</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
            gap: "20px",
            marginTop: "30px",
          }}
        >
          <div style={{ background: "white", padding: "20px" }}>
            <h3>Cloud Solutions</h3>
            <p>AWS, Azure, GCP, Kubernetes, DevOps.</p>
          </div>

          <div style={{ background: "white", padding: "20px" }}>
            <h3>AI Services</h3>
            <p>Generative AI, AI Automation and Chatbots.</p>
          </div>

          <div style={{ background: "white", padding: "20px" }}>
            <h3>Software Development</h3>
            <p>Custom enterprise applications and APIs.</p>
          </div>

          <div style={{ background: "white", padding: "20px" }}>
            <h3>Website Development</h3>
            <p>Corporate websites and ongoing maintenance.</p>
          </div>
        </div>
      </section>

      <section id="clients" style={{ padding: "80px 50px" }}>
        <h2>Clients & Partners</h2>

        <ul>
          <li>Aistreet USA</li>
          <li>Technology Consulting Partners</li>
        </ul>
      </section>

      <section
        id="contact"
        style={{
          background: "#0f172a",
          color: "white",
          padding: "80px 50px",
        }}
      >
        <h2>Contact Us</h2>

        <p>Email: info@manventechnologies.com</p>

        <p>Location: Frisco, Texas, USA</p>
      </section>
    </>
  );
}

export default App;