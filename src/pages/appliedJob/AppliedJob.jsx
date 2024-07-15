/* eslint-disable react/prop-types */
const AppliedJob = ({job}) => {
    const {logo, job_title, company_name, salary} = job;

    return (
        <div>
            <div className="card card-compact bg-base-100 w-96 shadow-xl">
                <figure>
                    <img src={logo} alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{job_title}</h2>
                    <p>{company_name}</p>
                    <p>{salary}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Apply</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppliedJob;
