import "../styling/skills.css";

function Skills({ dark }) {
    const skills = [
        { name: "HTML", level: "Experienced" },
        { name: "CSS", level: "Experienced" },
        { name: "JavaScript", level: "Intermediate" },
        { name: "React", level: "Intermediate" },
        { name: "API Integration", level: "Intermediate" },
        { name: "Tailwind CSS", level: "Intermediate" },
        { name: "Python", level: "Intermediate" },
        { name: "Linux", level: "Basic" },
        { name: "SQL", level: "Basic" },
    ];

    return (
        <div className="skills-page py-10 px-4 max-w-3xl mx-auto">
            <h1 className={`text-3xl font-bold mb-4 text-center ${dark ? 'text-white' : 'text-gray-900'}`}>Skills</h1>
            <p className={`text-lg text-center mb-8 ${dark ? 'text-white' : 'text-gray-600'}`}>
                Here are my technical skills and my level of experience with each.
            </p>
            <div className="skills-list">
                {skills.map((skill) => (
                    <div className="skill-card" key={skill.name}>
                        <span className={`skill-name ${dark ? 'text-white' : 'text-gray-900'}`}>{skill.name}</span>
                        <span className={`skill-level skill-${skill.level.toLowerCase()}`}>{skill.level}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Skills;