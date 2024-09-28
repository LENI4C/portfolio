import projectData from "../../data/projects.js";

// Function to darken a color
const darkenColor = (color, amount) => {
    color = color.replace('#', '');
    if (color.length === 3) {
        color = color.split('').map(char => char + char).join('');
    }
    let r = parseInt(color.substr(0, 2), 16);
    let g = parseInt(color.substr(2, 2), 16);
    let b = parseInt(color.substr(4, 2), 16);
    
    r = Math.max(0, r - amount);
    g = Math.max(0, g - amount);
    b = Math.max(0, b - amount);
    
    return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
};

const Projects = () => {
    return (
        <>
            <h2 className="mt-8 mb-5 text-2xl font-bold">Projects</h2>
            <p className="text-gray-500 dark:text-gray-300">
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
    info: { id, title, subtitle, imgSrc, stack, link, color },
}) => {
    const darkenedColor = darkenColor(color, 30); // Darken the color by 30 for hover effects

    return (
        <div
            className="relative shadow-md h-[500px] w-50 my-8 bg-cover bg-top rounded cursor-pointer font-bold"
            style={{ backgroundImage: `url(${imgSrc})`, color: color }}
            onClick={() => {
                window.location.href = link;
            }}
        >
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-300 dark:bg-opacity-60"></div>
            
            <div className="_titles bg-white dark:bg-gray-800 p-4 backdrop-blur bg-opacity-60 drop-shadow-lg">
                <h3 className="text-gray-900 dark:text-gray-200" style={{ color: color }}>
                    {title}
                </h3>
                <p className="font-semibold text-gray-800 dark:text-gray-300">
                    {subtitle}
                </p>
            </div>
            <div className="absolute bottom-2 left-2 flex flex-wrap gap-2">
                {stack.map((tech, index) => (
                    <span
                        key={index}
                        className="p-3 rounded"
                        style={{
                            backgroundColor: color, // Keep original color for tech items
                            color: 'white', // Ensure tech text is visible
                        }}
                    >
                        {tech}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default Projects;




// import projectData from "../../data/projects.js";

// const Projects = () => {
//     return (
//         <>
//             <h2 className="mt-8 mb-5 text-2xl font-bold"> Projects</h2>
//             <p className="text-gray-500 ">
//                 Each project is a story waiting to be told, filled with
//                 challenges and triumphs. I dive deep into every adventure,
//                 crafting solutions that blend creativity and functionality,
//                 ensuring every tale concludes with success.
//             </p>

//             {projectData.map((info) => {
//                 return <ProjectCard key={info.id} info={info} />;
//             })}
//         </>
//     );
// };

// const ProjectCard = ({
//     info: { id, title, subtitle, imgSrc, stack, link, left, color },
// }) => {
//     return (
//         <div
//             className="relative shadow-md h-[500px] w-50 my-8 bg-cover bg-top rounded cursor-pointer font-bold"
//             style={{ backgroundImage: `url(${imgSrc})`, color: color }}
//             onClick={() => {
//                 window.location.href = link;
//             }}
//         >
//             <div className="_titles bg-white p-4 backdrop-blur bg-opacity-60 drop-shadow-lg ">
//                 <h3>{title}</h3>
//                 <p className="font-semibold">{subtitle}</p>
//             </div>
//             <div className="absolute bottom-2 left-2 flex flex-wrap gap-2">
//                 {stack.map((tech, index) => (
//                     <span
//                         key={index}
//                         className="bg-gray-200 backdrop-blur bg-opacity-60 p-3 rounded"
//                     >
//                         {tech}
//                     </span>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default Projects;
