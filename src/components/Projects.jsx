import projectData from "../../data/projects.js";

const Projects = () => {
    return (
        <>
            <h2 className="mt-8 mb-5 text-2xl font-bold"> Projects</h2>
            <p className="text-gray-500 ">
                Each project is a story waiting to be told, filled with
                challenges and triumphs. I dive deep into every adventure,
                crafting solutions that blend creativity and functionality,
                ensuring every tale concludes with success.
            </p>

            {projectData.map((info) => {
                return <ProjectCard key={info.id} info={info} />;
            })}
        </>
    );
};

const ProjectCard = ({
    info: { id, title, subtitle, imgSrc, stack, link },
}) => {
    return (
        <div
            className="relative shadow-md h-[500px] w-50 my-8 bg-cover bg-top rounded cursor-pointer font-bold text-fuchsia-600"
            style={{ backgroundImage: `url(${imgSrc})` }}
            onClick={() => {
                window.location.href = link;
            }}
        >
            <div className="_titles bg-white p-4 backdrop-blur bg-opacity-60">
                <h3>{title}</h3>
                <p className="font-semibold">{subtitle}</p>
            </div>
            <div className="absolute bottom-2 left-2 flex space-x-2">
                {stack.map((tech, index) => (
                    <span
                        key={index}
                        className="bg-gray-200 backdrop-blur bg-opacity-60 p-3 rounded"
                    >
                        {tech}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default Projects;
