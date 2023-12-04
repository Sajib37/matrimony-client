import { Helmet } from "react-helmet-async";

const ErrorPage = () => {
    return (
        <section className="w-full h-[100vh] bg-orange-700 flex justify-center items-center">
            <Helmet>
                <title>Matrimony || wrong page</title>
            </Helmet>
            <h1 className="text-3xl font-bold text-center text-white">You entered a wrong route</h1>
        </section>
    );
};

export default ErrorPage;