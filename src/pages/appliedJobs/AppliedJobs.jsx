import {useLoaderData} from 'react-router-dom';
import {getStoredValueFromLocalStorage} from '../../localStorage/LocalStorage';

const AppliedJobs = () => {
    const jobs = useLoaderData();
    const appliedId = getStoredValueFromLocalStorage();
    const appliedJobs = jobs.find((job) => job.id == appliedId);
    return (
        <div>
            <h1>{appliedJobs.id}</h1>
            <h1>{appliedJobs.job_title}</h1>
            <h1>{appliedJobs.company_name}</h1>
        </div>
    );
};

export default AppliedJobs;
