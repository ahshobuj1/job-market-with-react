/* eslint-disable react/prop-types */

const JobBtn = ({value}) => {
    return (
        <div>
            <button className="btn btn-outline btn-primary btn-sm">
                {value}
            </button>
        </div>
    );
};

export default JobBtn;
