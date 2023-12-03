import { Helmet } from "react-helmet-async";


const ApprovedRequest = () => {
    return (
        <div className=" mt-20 w-full">
            <Helmet>
                <title>Matrimony || Approved Requests</title>
            </Helmet>
            <h1 className="text-4xl text-bold text-red-600 font-semibold text-center"><marquee className="text-center" direction="up" height="100px">.......Currently in Progress: Finishing Touches Underway.......</marquee></h1>
        </div>
    );
};

export default ApprovedRequest;