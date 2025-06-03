import '../styling/home.css';
import Resume from "../assets/Resume.pdf";
import { FaGithub } from "react-icons/fa";
import ID from "../assets/id.jpg"
import Projects from './projects';
import Skills from './skills';
import Contact from './contact';

function Home({ dark }) {
    return (
        <div>
            <section className="home-section">
                <div className={`home-content rounded-xl transition-colors duration-800 ${dark ? 'bg-black text-white' : 'bg-white text-gray-900'}`}>
                    <img
                        src={ID}
                        alt="Victor Onyeze Agagwo"
                        className="mx-auto mb-6 w-40 h-40 rounded-full object-cover shadow-lg"
                        width={160}
                        height={160}
                    />
                    <h1 className={`home-title ${dark ? 'text-white' : 'text-gray-800'}`}>Victor Onyeze Agagwo</h1>
                    <h2 className={`home-subtitle ${dark ? 'text-gray-200' : 'text-gray-600'}`} style={{ fontStyle: "italic", opacity: 0.7 }}>
                        .....Front-End Web Developer
                    </h2>
                    <p className={`home-description ${dark ? 'text-gray-200' : 'text-gray-700'}`}>
                        I am a professional front-end web developer with a passion for crafting responsive, user-friendly, and visually appealing web applications. With a strong foundation in modern JavaScript frameworks and a keen eye for design, I strive to deliver seamless digital experiences that meet both user and business needs.
                    </p>
                    <div className="flex gap-6 mt-6">
                        <a
                            href={Resume}
                            download
                            className={`px-6 py-2 rounded font-semibold transition-colors ${
                                dark
                                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                                    : 'bg-blue-600 text-white hover:bg-blue-900'
                            }`}
                        >
                            Download CV
                        </a>
                        <a
                            href="#contact"
                            className={`px-6 py-2 rounded font-semibold transition-colors ${
                                dark
                                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                                    : 'bg-blue-600 text-white hover:bg-blue-900'
                            }`}
                        >
                            Contact Me
                        </a>
                        <a
                        href="https://github.com/victoragagwo"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center px-4 py-2 rounded font-semibold transition-colors text-2xl ${
                            dark
                                ? 'bg-blue-600 text-white hover:bg-blue-700'
                                : 'bg-gray-800 text-white hover:bg-gray-900'
                        }`}
                        aria-label="GitHub"
                    >
                        <FaGithub />
                    </a>
                    </div>
                </div>
            </section>
           <section id="projects" className="projects-section">
                <Projects dark={dark} />
            </section> 
            <section id="skills" className="skills-section">
               <Skills dark={dark} />
            </section>
            <section id="contact" className="contact-section">
               <Contact dark={dark} />
            </section>
        </div>
    );
}

export default Home;