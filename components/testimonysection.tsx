interface testimony {
    firstname: string,
    lastname: string,
    position: string,
    company: string,
    comment: string,
    image: string,
}

export interface TestimonySectionProps {
    testimonies: testimony[]
    
}
 
const TestimonySection: React.FC<TestimonySectionProps> = ({testimonies}) => {
    return ( 
        <section className="flex flex-wrap w-full bg-blue-500 text-indigo-50 mx-auto ">

            {
                testimonies.slice(0,2).map(testimony => (
                    <div className="w-full sm:w-1/2 h-full px-8 py-32 border-r-2 border-blue-600 border-opacity-20">

                        <p className="text-2xl font-bold opacity-60 pb-8">{testimony.company}</p>

                        <blockquote className="text-sm">
                            {testimony.comment}
                        </blockquote>

                        <div className="flex pt-8">
                            <img src={testimony.image} className="w-10 h-10 rounded-full ring-2 ring-offset-white ring-offset-2" />
                            <div className="flex flex-col pl-4">
                                <span className="text-xs font-bold">
                                    {testimony.firstname} {testimony.lastname}
                                </span>
                                <span className="text-xs pt-1">
                                    {testimony.position} {testimony.company}
                                </span>
                            </div>
                        </div>

                    </div>
                ))
            }

        </section>
     );
}
 
export default TestimonySection;