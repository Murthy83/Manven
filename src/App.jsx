import "./App.css";

function App() {
    return (
        <>
            <header className="navbar">
                <div className="logo-container">
                    <img src="/logo.png" alt="Manven Technologies" className="logo-image" />
                    <span className="logo-text">MANVEN TECHNOLOGIES</span>
                </div>

                <nav>
                    <a href="#about">About</a>
                    <a href="#services">Services</a>
                    <a href="#technology">Technology</a>
                    <a href="#contact">Contact</a>
                </nav>
            </header>

            <section className="hero">
                <img src="/logo.png" alt="Manven Logo" className="hero-logo" />

                <h1>MANVEN TECHNOLOGIES PRIVATE LIMITED</h1>

                <h2>
                    Cloud Engineering • DevOps • Artificial Intelligence • Software
                    Development
                </h2>

                <p>
                    Helping businesses modernize infrastructure, automate operations,
                    accelerate software delivery and unlock innovation through Cloud,
                    DevOps and AI technologies.
                </p>

                <div className="hero-buttons">
                    <a href="#contact" className="btn-primary">
                        Contact Us
                    </a>

                    <a href="#services" className="btn-secondary">
                        Our Services
                    </a>
                </div>
            </section>

            <section className="stats">
                <div>
                    <h3>2+</h3>
                    <p>Years in Business</p>
                </div>

                <div>
                    <h3>13+</h3>
                    <p>Years Industry Experience</p>
                </div>

                <div>
                    <h3>Cloud • AI • DevOps</h3>
                    <p>Technology Expertise</p>
                </div>

                <div>
                    <h3>Global</h3>
                    <p>India & International Clients</p>
                </div>
            </section>

            <section id="about" className="section">
                <h2>About Us</h2>

                <p>
                    Manven Technologies Private Limited is a technology consulting and
                    software engineering company headquartered in Hyderabad, Telangana,
                    India.
                </p>

                <p>
                    We specialize in Cloud Engineering, DevOps, Platform Engineering,
                    Artificial Intelligence, Enterprise Software Development and Digital
                    Transformation initiatives.
                </p>

                <p>
                    Our leadership team brings more than 13 years of industry experience
                    across banking, airlines, enterprise software, cloud platforms and
                    infrastructure modernization.
                </p>
            </section>

            <section id="services" className="section">
                <h2>Our Services</h2>

                <div className="cards">
                    <div className="card">
                        <h3>Cloud Solutions</h3>
                        <p>AWS, Azure, Google Cloud Platform</p>
                    </div>

                    <div className="card">
                        <h3>DevOps Engineering</h3>
                        <p>CI/CD, Kubernetes, Terraform, Automation</p>
                    </div>

                    <div className="card">
                        <h3>Artificial Intelligence</h3>
                        <p>AI Solutions, Automation, Generative AI</p>
                    </div>

                    <div className="card">
                        <h3>Software Development</h3>
                        <p>Web Applications, APIs and Enterprise Systems</p>
                    </div>
                </div>
            </section>

            <section id="technology" className="section">
                <h2>Technology Stack</h2>

                <div className="tech-grid">
                    <span>AWS</span>
                    <span>Azure</span>
                    <span>GCP</span>
                    <span>Kubernetes</span>
                    <span>Terraform</span>
                    <span>Docker</span>
                    <span>OpenShift</span>
                    <span>GitHub</span>
                    <span>Jenkins</span>
                    <span>Python</span>
                    <span>Java</span>
                    <span>React</span>
                </div>
            </section>

            <section className="section">
                <h2>Why Choose Manven</h2>

                <div className="cards">
                    <div className="card">
                        <h3>Multi Cloud Expertise</h3>
                        <p>AWS, Azure and Google Cloud experience.</p>
                    </div>

                    <div className="card">
                        <h3>DevOps First</h3>
                        <p>Automation, IaC and modern deployment practices.</p>
                    </div>

                    <div className="card">
                        <h3>AI Ready</h3>
                        <p>Modern AI powered business solutions.</p>
                    </div>

                    <div className="card">
                        <h3>Enterprise Experience</h3>
                        <p>Banking, Airlines and Enterprise Technology.</p>
                    </div>
                </div>
            </section>

            <section id="contact" className="section">
                <h2>Contact Us</h2>

                <div className="contact-box">
                    <p>
                        <strong>Email:</strong> admin@manven.co.in
                    </p>

                    <p>
                        <strong>Website:</strong> www.manven.co.in
                    </p>

                    <p>
                        <strong>Address:</strong>
                        <br />
                        MANVEN TECHNOLOGIES PRIVATE LIMITED
                        <br />
                        Class-II, Gachibowli
                        <br />
                        Seri Lingampally
                        <br />
                        K.V. Rangareddy - 500032
                        <br />
                        Telangana, India
                    </p>
                </div>
            </section>

            <footer>
                © 2026 MANVEN TECHNOLOGIES PRIVATE LIMITED. All Rights Reserved.
            </footer>
        </>
    );
}

export default App;