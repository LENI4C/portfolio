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
            className="h-[500px] w-50 my-8 bg-cover bg-top rounded"
            style={{ backgroundImage: `url(${imgSrc})` }}
        >
        </div>
    );
};

export default Projects;
