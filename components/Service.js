function Service(){
    return(
        <div id="service" className="px-8 md:px-28 py-20">
        <h2 className="dark:text-gray-200 font-black text-4xl text-center tracking-wider mb-6" data-aos="zoom-in">
            Service
        </h2>
        <div className="h-0.5 bg-gray-900 dark:bg-gray-400 md:my-10 md:w-96 mx-auto w-48 mb-8 md:mb-12" data-aos="zoom-in"></div>
        <div className="md:flex md:justify-center md:items-center rounded-md">
            <div className="mb-6 md:mb-0 rounded-lg bg-gradient-to-b from-indigo-600 to-indigo-300 hover:to-indigo-400 dark:from-indigo-900 dark:to-indigo-800 shadow-xl px-4 md:py-4 py-6 w-full md:w-3/12 mr-4 transition duration-200 transform scale-90 hover:scale-95" data-aos="fade-up">
                <img src="img/img-webdev.svg" alt="webdev" className="mx-auto mb-8 h-48 rounded p-2"/>
                <div className="h-0.5 bg-indigo-50 my-10 w-48 mx-auto mb-4"></div>
                <div className="flex flex-col justify-center">
                    <p className="font-bold text-center mb-4 text-lg dark:text-gray-200">Lorem</p>
                    <a href="#service" className="bg-indigo-700 dark:bg-indigo-600 px-4 py-2 rounded-md text-white text-center hover:bg-indigo-600 focus:outline-none focus:ring-2 ring-blue-200">See more</a>
                </div>
            </div>
            <div className="mb-6 md:mb-0 rounded-lg bg-gradient-to-b from-indigo-600 to-indigo-300 hover:to-indigo-400  dark:from-indigo-900 dark:to-indigo-800 shadow-xl px-4 md:py-4 py-6 w-full md:w-3/12 mr-4 transition duration-200 transform scale-90 hover:scale-95" data-aos="fade-up">
                <img src="img/img-iot.svg" alt="webdev" className="mx-auto mb-8 h-48"/>
                <div className="h-0.5 bg-indigo-50 my-10 w-48 mx-auto mb-4"></div>
                <div className="flex flex-col justify-center">
                    <p className="font-bold text-center mb-4 text-lg dark:text-gray-200">Ipsum</p>
                    <a href="#service" className="bg-indigo-700 dark:bg-indigo-600 px-4 py-2 rounded-md text-white text-center hover:bg-indigo-600 focus:outline-none focus:ring-2 ring-blue-200">See more</a>
                </div>
            </div>
            <div className="mb-6 md:mb-0 rounded-lg bg-gradient-to-b from-indigo-600 to-indigo-300 hover:to-indigo-400  dark:from-indigo-900 dark:to-indigo-800 shadow-xl px-4 md:py-4 py-6 w-full md:w-3/12 mr-4 transition duration-200 transform scale-90 hover:scale-95" data-aos="fade-up">
                <img src="img/img-portofolio.svg" alt="webdev" className="mx-auto mb-8 h-48"/>
                <div className="h-0.5 bg-indigo-50 my-10 w-48 mx-auto mb-4"></div>
                <div className="flex flex-col justify-center">
                    <p className="font-bold text-center mb-4 text-lg dark:text-gray-200">Dolor</p>
                    <a href="#service" className="bg-indigo-700 dark:bg-indigo-600 px-4 py-2 rounded-md text-white text-center hover:bg-indigo-600 focus:outline-none focus:ring-2 ring-blue-200">See more</a>
                </div>
            </div>
        </div>
    </div>
    )
}
export default Service