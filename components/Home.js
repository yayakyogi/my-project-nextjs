function Home(){
    return(
    <div className="w-full md:h-screen md:mx-auto dark:bg-gray-900">
        <div id="home" className="container mx-auto w-full px-6 pt-24 md:flex md:items-center md:px-20 pb-16">
            <div className="w-full md:w-1/2" data-aos="fade-up">
                <h1 className="font-black text-2xl leading-none mb-8 md:mb-0 md:text-6xl dark:text-white">Lorem, ipsum dolor.</h1>
                <img src="img/img-home.svg" className="md:hidden my-6 block w-72 mx-auto shadow-2xl rounded-md" alt="img-home"/>
                <p className="text-justify leading-loose md:leading-relaxed text-gray-700 mt-8 mb-12 md:text-left dark:text-gray-400">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. <strong>Consectetur</strong> suscipit nulla rerum hic sunt quos voluptates <strong>exercitationem quam</strong> architecto similique.
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                </p>
                <a href="#" 
                    className="bg-indigo-700 text-white px-10 py-2 rounded-3xl shadow-2xl hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-indigo-400 dark:bg-indigo-800">
                    Learn more
                </a>
            </div>
            <div className="md:w-1/2" data-aos="fade-up">
                <img src="img/img-home.svg" className="p-2 rounded-sm hidden md:block w-full mt-0 shadow-lg dark:shadown-2xl" alt="img-home"/>
            </div>
        </div>
    </div>
    )
}
export default Home