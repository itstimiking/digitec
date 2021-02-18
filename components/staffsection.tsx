import {Twitter, Linkedin} from '@styled-icons/fa-brands';

interface staff {
    id: number,
    firstname: string,
    lastname: string,
    avatar: string,
    dept: string,
    about: string,
    social:string[]
}

export interface StaffSectionProps {
    staffs: staff[];
}

const StaffSection: React.FC<StaffSectionProps> = ({staffs}) => {
    return ( 
        <section className="staffsection">

            <div className="px-8 py-24 flex flex-col justify-items-center">

                {/* Staff section heading ------------------------------------*/}
                <h2 className="text-bold text-2xl w-full text-center">
                    Our Staffs
                </h2>

                {/* Staff section sub heading -----------------------------*/}
                <p className="text-center w-full md:w-2/3 lg:w-2/5 mx-auto pt-5">
                    Consequuntur illo beatae saepe commodi alias veniam ullam quaerat voluptatem odit eos aspernatur.
                </p>

            </div>

            <div className="flex flex-wrap w-full">

                {
                    staffs.map(staff => (
                        <div className=" w-full sm:w-1/2 md:w-1/3 xl:w-1/4 px-4 pt-4 lg:pt-0 mt-4" key={ staff.id}>
                            <div className="flex flex-col flex-wrap content-center">
                                <img src={staff.avatar} alt="" className="h-40 w-50 rounded-full" />
                                <h3 className="text-center pt-2 font-bold">
                                    
                                    {staff.firstname} {staff.lastname}
                                    
                                </h3>
                                <p className="text-center text-sm">
                                    
                                    {staff.dept}

                                </p>

                                <div className="flex justify-center space-x-2 pt-1">
                                    { // Return twitter logo if twitter link is available ----
                                        staff.social[0].includes("twitter") && (
                                        <a href={staff.social[0]} >
                                            <Twitter size="16" />
                                        </a>
                                    )}

                                    { // Return linkedin link if link is availeble --------
                                        staff.social[1].includes("linkedin") && (
                                        <a href={staff.social[1]} >
                                            <Linkedin size="16" />
                                        </a>
                                    )}
                                </div>
                                
                            </div>
                        </div>
                    ))
                }
            </div>

        </section>
     );
}
 
export default StaffSection;