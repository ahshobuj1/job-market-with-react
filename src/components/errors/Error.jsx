import {Link} from 'react-router-dom';

const Error = () => {
    return (
        <div className="flex flex-col gap-5 ">
            <h1 className="text-3xl text-red-600 text-center"> Oopps !! </h1>
            <h1 className="text-center">
                <Link to={'/'}>
                    <button className="btn btn-neutral btn-sm">
                        Go Back To Home
                    </button>
                </Link>
            </h1>
        </div>
    );
};

export default Error;
