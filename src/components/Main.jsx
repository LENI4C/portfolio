import leni4c from "../assets/images/leni4c.jpg";

const Main = () => {
    return (
        <main className="mt-20 p-8">
            <img
                src={leni4c}
                alt="leni4c"
                className="w-40 h-40 rounded-full object-cover object-bottom"
            />
            <h1 className="m-4 text-xl font-poppins font-semibold">Hi 👋, I'm Leni4c - Web Developer 💻</h1>
            <p> I’m passionate about turning ideas into digital realities! Whether it's building something from scratch or enhancing existing web experiences, I thrive on crafting websites and apps that not only look great but perform even better. </p>
        </main>
    );
};

export default Main;
