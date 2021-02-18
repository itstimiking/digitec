export interface TestimonySectionProps {
    
}
 
const TestimonySection: React.FC<TestimonySectionProps> = () => {
    return ( 
        <section className="flex w-full bg-blue-500 text-indigo-50">

            <div className="px-8 py-24 flex flex-col justify-items-center">

                {/* Testimonies section heading ------------------------------------*/}

                <h2 className="text-bold text-2xl w-full text-center">

                    Testimonies
                
                </h2>

            </div>

            <div className="w-3/4">
                
            </div>
            

        </section>
     );
}
 
export default TestimonySection;