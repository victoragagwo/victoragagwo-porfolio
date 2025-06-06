import "../styling/projects.css";
import Poster1 from "../assets/poster1.jpg";
import Poster2 from "../assets/poster2.jpg";
import Poster3 from "../assets/poster3.jpg";
import Poster4 from "../assets/poster4.jpg";

function Projects({ dark }) {
    return (
        <div className="projects-page py-10 px-4 max-w-6xl mx-auto">
            <h1 className={`text-3xl font-bold mb-8 text-center ${dark ? 'text-white' : 'text-gray-900'}`}>My Projects</h1>
            <div className="projects-row">
                <div className="project-card">
                    <img src={Poster1} alt="Movie App Poster" className="project-poster" />
                    <div className="project-info">
                        <h2 className={`project-title ${dark ? 'text-white' : 'text-gray-900'}`}>Movie App</h2>
                        <p className={`project-desc ${dark ? 'text-white' : 'text-gray-700'}`}>
                            A web application to browse and search for movies.
                        </p>
                        <a
                            href="https://victoragagwo.github.io/EAVmovies/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-link"
                        >
                            View Movie App
                        </a>
                    </div>
                </div>
                <div className="project-card">
                    <img src={Poster4} alt="Agagwo Store Poster" className="project-poster" />
                    <div className="project-info">
                        <h2 className={`project-title ${dark ? 'text-white' : 'text-gray-900'}`}>Agagwo Store</h2>
                        <p className={`project-desc ${dark ? 'text-white' : 'text-gray-700'}`}>
                            An e-commerce web application for shopping online.
                        </p>
                        <a
                            href="https://victoragagwo.github.io/agagwo-store/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-link"
                        >
                            View Agagwo Store
                        </a>
                    </div>
                </div>
                <div className="project-card">
                    <img src={Poster2} alt="Lakshimi Poster" className="project-poster" />
                    <div className="project-info">
                        <h2 className={`project-title ${dark ? 'text-white' : 'text-gray-900'}`}>Lakshimi</h2>
                        <p className={`project-desc ${dark ? 'text-white' : 'text-gray-700'}`}>
                            A  Tea web application named Lakshimi.
                        </p>
                        <a
                            href="https://victoragagwo.github.io/lakshimi-by-victor-agagwo/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-link"
                        >
                            View Lakshimi
                        </a>
                    </div>
                </div>
                <div className="project-card">
                    <img src={Poster3} alt="Scissor App Poster" className="project-poster" />
                    <div className="project-info">
                        <h2 className={`project-title ${dark ? 'text-white' : 'text-gray-900'}`}>Scissor App</h2>
                        <p className={`project-desc ${dark ? 'text-white' : 'text-gray-700'}`}>
                            A URL shortener web application.
                        </p>
                        <a
                            href="https://victoragagwo.github.io/scissor-victoragagwo/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-link"
                        >
                            View Scissor App
                        </a>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Projects;