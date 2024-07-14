const Banner = () => {
    return (
        <div>
            <div className="hero py-24">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img
                        src="src/assets/images/ai-generated-8583249_1920.jpg"
                        className="w-72 sm:max-w-sm rounded-lg shadow-2xl"
                    />
                    <div>
                        <h1 className="text-2xl sm:text-5xl font-bold">
                            Euro Office News!
                        </h1>
                        <p className="text-sm sm:text-base py-6 ">
                            Provident cupiditate voluptatem et in. Quaerat
                            fugiat ut assumenda excepturi exercitationem quasi.
                            In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
