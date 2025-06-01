import "../styling/contact.css";
import { FaGithub } from "react-icons/fa";

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
                You can also find me on GitHub:
            </p>
            <div className="github-link mt-4">
                <a
                    href="https://github.com/victoragagwo"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaGithub style={{ fontSize: "1.5rem" }} />
                    Victor Agagwo
                </a>
            </div>
        </div>
    );
}

export default Contact;