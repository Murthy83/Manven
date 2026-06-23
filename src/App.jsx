import "./App.css";

function App() {
    return (
        <> <header className="navbar"> <div className="logo">MANVEN TECHNOLOGIES</div>

            ```
            <nav>
                <a href="#about">About</a>
                <a href="#services">Services</a>
                <a href="#technologies">Technology</a>
                <a href="#industries">Industries</a>
                <a href="#contact">Contact</a>
            </nav>
        </header>

            <section className="hero">
                <div className="hero-content">
                    <h1>Accelerating Digital Transformation</h1>

                    <h2>
                        Cloud Engineering • DevOps • Artificial Intelligence • Software
                        Development
                    </h2>

                    <p>
                        Helping organizations modernize infrastructure, automate
                        operations, accelerate software delivery and unlock innovation
                        through Cloud and AI.
                    </p>

                    <div className="hero-buttons">
                        <a href="#contact" className="btn-primary">
                            Contact Us
                        </a>

                        <a href="#services" className="btn-secondary">
                            Explore Services
                        </a>
                    </div>
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
                    across banking, airlines, cloud platforms, enterprise applications,
                    infrastructure automation and modern software delivery practices.
                </p>

                <p>
                    We help organizations modernize infrastructure, improve reliability,
                    accelerate software delivery and leverage emerging technologies to
                    achieve business growth.
                </p>
            </section>

            <section id="services" className="section">
                <h2>Our Services</h2>

                <div className="cards">
                    <div className="card">
                        <h3>Cloud Engineering</h3>
                        <ul>
                            <li>AWS Cloud Solutions</li>
                            <li>Microsoft Azure</li>
                            <li>Google Cloud Platform</li>
                            <li>Cloud Migration</li>
                            <li>Cloud Security</li>
                        </ul>
                    </div>

                    <div className="card">
                        <h3>DevOps & Platform Engineering</h3>
                        <ul>
                            <li>Kubernetes</li>
                            <li>Terraform</li>
                            <li>CI/CD Pipelines</li>
                            <li>Infrastructure as Code</li>
                            <li>Observability</li>
                        </ul>
                    </div>

                    <div className="card">
                        <h3>Artificial Intelligence</h3>
                        <ul>
                            <li>AI Solutions</li>
                            <li>Business Automation</li>
                            <li>AI Chatbots</li>
                            <li>Generative AI</li>
                            <li>Document Intelligence</li>
                        </ul>
                    </div>

                    <div className="card">
                        <h3>Software Development</h3>
                        <ul>
                            <li>Web Applications</li>
                            <li>Enterprise Applications</li>
                            <li>Microservices</li>
                            <li>Mobile Applications</li>
                            <li>API Development</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section id="technologies" className="section">
                <h2>Technology Stack</h2>

                <div className="tech-grid">
                    <span>AWS</span>
                    <span>Azure</span>
                    <span>Google Cloud</span>
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

            <section id="industries" className="section">
                <h2>Industries We Serve</h2>

                <div className="cards">
                    <div className="card">Banking & Financial Services</div>
                    <div className="card">Airlines & Travel</div>
                    <div className="card">Healthcare</div>
                    <div className="card">Retail & E-Commerce</div>
                    <div className="card">Technology Startups</div>
                </div>
            </section>

            <section className="section">
                <h2>Why Choose Manven</h2>

                <div className="cards">
                    <div className="card">
                        <h3>Cloud Expertise</h3>
                        <p>Multi-cloud experience across AWS, Azure and Google Cloud.</p>
                    </div>

                    <div className="card">
                        <h3>DevOps First</h3>
                        <p>CI/CD, Kubernetes, Terraform and Infrastructure as Code.</p>
                    </div>

                    <div className="card">
                        <h3>AI Innovation</h3>
                        <p>AI-powered solutions and automation for modern businesses.</p>
                    </div>

                    <div className="card">
                        <h3>Enterprise Experience</h3>
                        <p>
                            Experience supporting banking, airline and enterprise platforms.
                        </p>
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
                        <strong>Registered Address:</strong>
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
                <p>
                    © 2026 MANVEN TECHNOLOGIES PRIVATE LIMITED. All Rights Reserved.
                </p>
            </footer>
        </>

    );
}

export default App;
