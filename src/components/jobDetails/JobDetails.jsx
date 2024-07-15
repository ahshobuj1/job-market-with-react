import {useLoaderData, useNavigate, useParams} from 'react-router-dom';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {setLocalStorage} from '../../localStorage/LocalStorage';

const handleApplyNow = (id) => {
    toast('Saved to Applied Job...');
    setLocalStorage(id);
};

const JobDetails = () => {
    const jobs = useLoaderData();
    const {jobId} = useParams();
    const idInt = parseInt(jobId);
    const findJobs = jobs.find((job) => job.id == idInt);
    const Navigate = useNavigate();

    const {
        id,
        job_title,
        job_description,
        salary,
        job_responsibility,
        educational_requirements,
        experiences,
        contact_information,
    } = findJobs;

    return (
        <section className="p-5">
            <h1 className="text-center text-5xl font-bold  my-12 text-red-500 italic">
                Job Details of {job_title}
            </h1>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                <div className=" col-span-3 space-y-4">
                    <p className="text-base text-gray-800">
                        <span className="text-lg font-bold text-black">
                            Job Description:
                        </span>
                        {job_description}
                    </p>

                    <p className="text-base text-gray-800">
                        <span className="text-lg font-bold text-black">
                            Job Responsibility:
                        </span>
                        {job_responsibility}
                    </p>

                    <h1>
                        <span className="text-lg font-bold text-black">
                            Educational Requirements:
                        </span>
                    </h1>
                    <p className="text-base text-gray-800">
                        {educational_requirements}
                    </p>

                    <h1>
                        <span className="text-lg font-bold text-black">
                            Job Experiences:
                        </span>
                    </h1>
                    <p className="text-base text-gray-800">{experiences}</p>
                </div>

                <div>
                    <div className="p-5 rounded-xl space-y-2 bg-[#9496f432] mb-3">
                        <h1 className="text-lg font-bold text-black border-b-2 border-gray-300 pb-3 ">
                            Job Details:
                        </h1>
                        <p className="text-base text-gray-800 mt-3">
                            <span className="text-base font-semibold text-black">
                                Salary :
                            </span>
                            {salary}
                        </p>
                        <p className="text-base text-gray-800">
                            <span className="text-base font-semibold text-black">
                                Job Title :
                            </span>
                            {job_title}
                        </p>

                        <h1 className="text-lg font-bold text-black border-b-2 border-gray-300 py-3">
                            Contact Information:
                        </h1>
                        <p className="text-base text-gray-800 mt-3">
                            <span className="text-base font-semibold text-black">
                                Phone :
                            </span>
                            {contact_information.phone}
                        </p>
                        <p className="text-base text-gray-800">
                            <span className="text-base font-semibold text-black">
                                Email :
                            </span>
                            {contact_information.email}
                        </p>
                        <p className="text-base text-gray-800">
                            <span className="text-base font-semibold text-black">
                                Email :
                            </span>
                            {contact_information.address}
                        </p>
                    </div>

                    <button
                        onClick={() => handleApplyNow(id)}
                        className="btn btn-primary text-center w-full">
                        Apply Now
                    </button>
                    <ToastContainer />
                </div>
            </div>

            <div className="text-center">
                <button
                    onClick={() => Navigate(-1)}
                    className="btn btn-sm btn-neutral text-center my-5">
                    Previous Page
                </button>
            </div>
        </section>
    );
};

export default JobDetails;
