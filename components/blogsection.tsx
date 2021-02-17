interface author{
    firstname: string,
    lastname: string,
    avatar: string,
    joinDate: string,
    about: string,
}

interface article {
    title: string,
    featured_image: string, 
    category: string,
    text: string,
    postedBy: author,
    postedOn: Date,
}

export interface BlogSectionProps {
    articles: article[];
}
 
const BlogSection: React.FC<BlogSectionProps> = ({articles}) => {
    return ( 
        <section className="front-page-blogs-height mb-30">

            <div className="px-8 py-24 sm:p24 flex flex-col justify-items-center">

                {/* BLOG section heading ------------------------------------*/}
                <h2 className="text-bold text-2xl w-full text-center">
                    From the blog
                </h2>

                {/* BLog section sub heading -----------------------------*/}
                <p className="text-center w-full md:w-2/3 lg:w-2/5 mx-auto pt-5">
                    Consequuntur illo beatae saepe commodi alias veniam ullam quaerat voluptatem odit eos aspernatur.
                </p>
            </div>

            <div className="flex flex-wrap p-4 w-full h-96 ">

                {// BLog Section article cards, 4 cols @lg to @xl, 3 col @md and 2 @sm -------
                    articles.map(article=>(
                        <div className=" w-full sm:w-1/2 md:w-1/3 xl:w-1/4 px-4 pt-8 lg:pt-0">

                            <div className="shadow-md">

                                {/* Article featured image --------------------------------*/}

                                <div className="object-cover w-full h-40 rounded rounded-b-none overflow-hidden">
                                    <img src={article.featured_image} alt={article.title} />
                                </div>

                                {/* Article category --------------------------------------*/}

                                <div className="p-4">
                                    <span className="text-xs font-light text-blue-600">
                                        {article.category}
                                    </span>

                                    {/* Article title --------------------------------------*/}
                                    
                                    <h2 className="font-bold">
                                        {article.title}
                                    </h2>

                                    {/* Article short content text --------------------------------------*/}
                                    
                                    <p className="text-sm pt-1">
                                        {article.text}
                                    </p>

                                    {/* Article Author Section --------------------------------------*/}
                                    
                                    <div className="flex pt-3">
                                        <img src={article.postedBy.avatar} className="w-10 h-10 rounded-full" />
                                        <div className="flex flex-col pl-1">
                                            <span className="text-xs">
                                                {article.postedBy.firstname} {article.postedBy.lastname}
                                            </span>
                                            <span className="text-xs pt-1">
                                                {article.postedOn.toString().slice(0,10)}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    ))
                }
            </div>

        </section>
     );
}
 
export default BlogSection;