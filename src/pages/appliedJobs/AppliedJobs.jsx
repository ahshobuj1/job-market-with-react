import {useEffect, useState} from 'react';
import {useLoaderData} from 'react-router-dom';
import {getLocalStorage} from '../../localStorage/LocalStorage';
import AppliedJob from '../appliedJob/AppliedJob';

const AppliedJobs = () => {
    const [applied, setApplied] = useState([]);
    const jobs = useLoaderData();

    useEffect(() => {
        const appliedIds = getLocalStorage();

        if (jobs.length > 0) {
            const appliedJobs = jobs.filter((job) =>
                appliedIds.includes(job.id)
            );

            console.log(jobs, appliedIds, appliedJobs);

            setApplied(appliedJobs);
        }
    }, [jobs]);

    console.log('applied data', applied);

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 justify-center">
            {applied.map((job) => (
                <AppliedJob key={job.id} job={job} />
            ))}
        </div>
    );
};

export default AppliedJobs;

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* import {useLoaderData} from 'react-router-dom';
import {getStoredValueFromLocalStorage} from '../../localStorage/LocalStorage';

const AppliedJobs = () => {
    / const jobs = useLoaderData();
    const appliedId = getStoredValueFromLocalStorage();
    const appliedJobs = jobs.find((job) => job.id == appliedId); 
    return (
        <div>
            <h1>{appliedJobs.id}</h1>
            <h1>{appliedJobs.job_title}</h1>
            <h1>{appliedJobs.company_name}</h1>
        </div> 
        <div>hello applied</div>
    );
};  

export default AppliedJobs;   */
