import {useLoaderData, useNavigate, useParams} from 'react-router-dom';

const JobDetails = () => {
    const jobs = useLoaderData();
    const {jobId} = useParams();
    const idInt = parseInt(jobId);
    const findJobs = jobs.find((job) => job.id == idInt);
    const Navigate = useNavigate();

    const {
        id,
        logo,
        job_title,
        job_description,
        salary,
        job_responsibility,
        educational_requirements,
        experiences,
        contact_information,
    } = findJobs;

    return (
        <section>
            <h1>Job Details of :{job_title}</h1>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                <div className="border col-span-3">
                    <p className="text-base text-gray-800">
                        <span className="text-lg font-bold text-black">
                            Job Description:
                        </span>
                        {job_description}
                    </p>

                    <p className="text-base text-gray-800">
                        <span className="text-lg font-bold text-black">
                            Job Description:
                        </span>
                        {job_description}
                    </p>

                    <p className="text-base text-gray-800">
                        <span className="text-lg font-bold text-black">
                            Job Description:
                        </span>
                        {job_description}
                    </p>
                    <p className="text-base text-gray-800">
                        <span className="text-lg font-bold text-black">
                            Job Description:
                        </span>
                        {job_description}
                    </p>
                    <p className="text-base text-gray-800">
                        <span className="text-lg font-bold text-black">
                            Job Description:
                        </span>
                        {job_description}
                    </p>
                </div>
                <div className="border "></div>
            </div>
            <button
                onClick={() => Navigate(-1)}
                className="btn btn-sm btn-neutral text-center my-5">
                Previous Page
            </button>
        </section>
    );
};

export default JobDetails;
