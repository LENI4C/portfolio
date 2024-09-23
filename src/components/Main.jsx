import leni4c from "../assets/images/leni4c.jpg";

const Main = () => {
    return (
        <main className="mt-20">
            <img
                src={leni4c}
                alt="leni4c"
                className="w-40 h-40 rounded-full object-cover object-bottom"
            />
        </main>
    );
};

export default Main;
