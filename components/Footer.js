function Footer(){
  return(
      <div id="contact" className="bg-fixed footer">
      <div className="bg-transparent flex justify-center items-center h-screen footer-content">
          <div className="w-full md:w-96">
              <img src="img/coding.png" className="my-6 block w-72 mx-auto shadow-2xl rounded-md" alt="img-footer" data-aos="zoom-out"/>
              <p className="my-2 font-thin text-center text-base text-gray-300 tracking-widest"data-aos="zoom-out">Made by  <img src="/netliheart.svg" alt="Netlify Logo" className="w-4 h-4 inline-block"/> kulikode</p>
              <div className="flex justify-center items-center" data-aos="zoom-out">
                  <svg className="w-3 h-3 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <p className="text-gray-500 text-xs text-center ml-1"> : yayaktaka@gmail.com</p>
                  <p className="px-2 text-gray-500"></p>
                  <svg className="w-3 h-3 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <p className="text-gray-500 text-xs text-center ml-1"> : 082233863080</p>
              </div>
          </div>
      </div>
  </div>
  )
}
export default Footer