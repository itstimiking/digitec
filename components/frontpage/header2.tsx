import Image from 'next/image';


const HeaderSection2: React.FC = () => {
    return ( 
        <section className="sm:bg-gray-200 h-full w-full md:w-1/2 clip absolute md:relative z-10">

          <img
            src="/images/digitec_image_student.jpg" 
            className="object-cover h-full opacity-40 md:opacity-100" 
          />

        </section>
    );
}
 
export default HeaderSection2;