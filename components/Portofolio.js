function Portofolio(){
    return(
        <div id="portofolio" className="px-20 md:px-32 w-full pt-24 md:pt-24 pb-28 mt-0 md:mt-16 h-full md:h-screen bg-indigo-700 dark:bg-gray-900">
        <h2 className="font-black text-white dark:text-gray-100 text-4xl text-center tracking-wider" data-aos="fade-up">
            Portofolio
        </h2>
        <div className="h-0.5 bg-gray-100 my-10 md:w-72 mx-auto w-full mb-6" data-aos="fade-up"></div>
        
        <div className="md:flex md:justify-center">
            <img src="img/img-percentages.svg" alt="img-about" data-aos="fade-up" className="w-48 md:mx-0 mx-auto md:w-96 shadow-2xl bg-white dark:bg-gray-200 rounded-lg p-4 md:mr-12"/>
            <div className="md:text-lg leading-relaxed mt-8 md:mt-0" data-aos="fade-up">
                <h3 className="font-black text-gray-100 dark:text-gray-200  text-left tracking-wider mb-1">Nama</h3>
                <p className="inline-block bg-gray-100 dark:bg-gray-200  rounded-lg font-bold py-1 px-2 mb-4 text-sm md:text-lg">Yayak Yogi Ginantaka</p>
                <h3 className="font-black text-gray-100 text-left tracking-wider">Skill</h3>
                <ul className="list-disc ml-4 text-gray-100 mb-4">
                    <li>Lorem</li>
                    <li>Ipsum</li>
                    <li>Dolor</li>
                    <li>Sit</li>
                </ul>
                <h3 className="font-black text-gray-100 text-left tracking-wider mb-1">My Project</h3>
                <a href="https://github.com/yayakyogi" target="_blank" className="inline-block text-sm bg-gray-100 dark:bg-gray-200  rounded-lg font-bold py-1 px-2 mb-4 md:text-lg hover:text-gray-700 focus:bg-gray-300">https://github.com/yayakyogi</a>
            </div>
        </div>
    </div>
    )
}
export default Portofolio