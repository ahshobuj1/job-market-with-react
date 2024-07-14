import {useEffect, useState} from 'react';
import Job from '../job/Job';

const Jobs = () => {
    const [jobs, setJobs] = useState([]);

    const [show, setShow] = useState(4);

    useEffect(() => {
        fetch('data/jobs.json')
            .then((res) => res.json())
            .then((data) => setJobs(data));
    }, []);

    console.log(jobs);
    return (
        <section>
            <div className="text-center my-10">
                <h1 className="text-5xl font-bold"> Featured All Jobs </h1>
                <p className="text-base ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nam, facere!
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-12">
                    {jobs.slice(0, show).map((job) => (
                        <Job key={job.id} job={job} />
                    ))}
                </div>

                <div className={show === jobs.length && 'hidden'}>
                    <button
                        onClick={() => setShow(jobs.length)}
                        className="btn-neutral btn text-center px-10 mt-5">
                        Show All
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Jobs;
