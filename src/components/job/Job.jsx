import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import JobBtn from '../buttons/JobBtn';
import {IoLocation} from 'react-icons/io5';
import {RiMoneyDollarCircleLine} from 'react-icons/ri';

const Job = ({job}) => {
    const {
        id,
        logo,
        job_title,
        company_name,
        remote_or_onsite,
        location,
        job_type,
        salary,
    } = job;

    return (
        <div>
            <div className="card card-compact bg-base-100 shadow-xl p-5">
                <div className="">
                    <figure>
                        <img
                            className="h-64 w-full rounded-xl"
                            src={logo}
                            alt={job_title}
                        />
                    </figure>
                </div>
                <div className=" text-left space-y-4">
                    <h2 className="card-title my-5">{job_title}!</h2>
                    <p>{company_name}</p>

                    <div className="flex gap-5">
                        <p className="flex gap-3 items-center">
                            <IoLocation /> <span>{location}</span>
                        </p>

                        <p className="flex gap-3 items-center">
                            <RiMoneyDollarCircleLine />{' '}
                            <span> Salary: {salary}</span>
                        </p>
                    </div>

                    <div className="flex gap-5">
                        <JobBtn value={remote_or_onsite} />
                        <JobBtn value={job_type} />
                    </div>

                    <div>
                        <Link to={`/job/${id}`}>
                            <button className="btn bg-rose-500 text-white btn-sm w-full">
                                Show Job
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

Job.propTypes = {
    job: PropTypes.object,
};

export default Job;
