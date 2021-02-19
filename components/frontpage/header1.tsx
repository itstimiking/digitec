const HeaderSection1: React.FC = () => {
    return ( 
        <section className="h-full w-full md:w-1/2 pb-32 md:pb-0 px-4 md:pl-8 md:relative z-20">

          <div className="h-1/5 w-full pt-32 md:pt-40 relative z-20">

            {/** Main Jumbotron Header ----------------------- */}
            <p className="capitalize font-extrabold text-6xl md:text-7xl text-gray-800"> 
              Welcome To Digitec 
            </p>

            {/** SUB Header ----------------------- */}
            <p className="capitalize font-bold text-xl md:text-3xl text-yellow-500 pt-4"> 
              ICT AND PROFESSIONAL COURSES 
            </p>

            {/** Text ----------------------- */}
            <p className="text-gray-600 pt-4">
              Nesciunt repellendus itaque suscipit enim sapiente, quaerat earum similique quibusdam ut necessitatibus veniam exercitationem molestiae asperiores sit cum laborum magnam excepturi expedita!
            </p>

            <p className="pt-8 flex space-x-4">
              <button className="bg-blue-600 relative text-white p-4 shadow hover:shadow-inner hover:bg-blue-500"> 
                Get Started 
                <span className="animate-ping rounded-full bg-white w-20 h-20 left-4 top-8 opacity-5 absolute"></span>
              </button>

              <button className="bg-blue-100 p-4 text-gray-800 shadow hover:shadow-inner hover:bg-blue-200"> 
                Live Demo 
              </button>

            </p>

          </div>

        </section>
    );
}
 
export default HeaderSection1;