import "../styling/contact.css";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Contact({ dark }) {
    return (
        <div className="contact-page py-10 px-4 max-w-3xl mx-auto">
            <h1 className={`contact-title text-center ${dark ? 'text-white' : 'text-gray-900'}`}>Contact Me</h1>
            <p className={`contact-subtitle text-center ${dark ? 'text-white' : 'text-gray-600'}`}>
                Feel free to reach out to me via email for collaborations, questions, or just to connect!
            </p>
            <div className="contact-info">
                <span className={`email ${dark ? 'text-white' : 'text-gray-900'}`}>victoragagwo8@gmail.com</span>
            </div>
            <hr className="contact-divider" />
            <p className={`contact-subtitle text-center ${dark ? 'text-white' : 'text-gray-600'}`}>
                You can also find me on GitHub and LinkedIn:
            </p>
            <div className="github-link mt-4 flex justify-center gap-6">
                <a
                    href="https://github.com/victoragagwo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                >
                    <FaGithub style={{ fontSize: "1.5rem" }} />
                    GitHub
                </a>
                <a
                    href="https://www.linkedin.com/in/victor-agagwo-021565382/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                >
                    <FaLinkedin style={{ fontSize: "1.5rem" }} />
                    LinkedIn
                </a>
            </div>
        </div>
    );
}

export default Contact;