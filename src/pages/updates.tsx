import Link from "next/link";
import { useState, useEffect } from "react";
import Head from "next/head";

import NavTop from "../components/nav";
import TestimonySection from "../components/testimonysection";
import FooterSection from "../components/footersection";

import { navlinks } from "../data/data";
import { testimonies } from "../data/testimonies";
import HeaderBar from "../components/headerBar";
import FadeInUp from "../components/animation/fadeinUp";
import SlideIn from "../components/animation/slideIn";
import { Router } from "next/router";

const Updates = () => {
    const [num, setnum] = useState(0);
    const [count, setCount] = useState(0);
    const [articles, setArticles] = useState([]);

    const getarticles = async (num) => {

        // if(num===1){
        //     const data = await fetch(`http://localhost:1337/articles?&_limit=2`);
        //     const articles = await data.json();
        //     setArticles(articles)
        // }else{
        //     const data = await fetch(`http://localhost:1337/articles?_start=${+num}&_limit=2`);
        //     const articles = await data.json();
        //     setArticles(articles)
        //     console.log("articles ----------------- got -----------", num)
        // }

        // if (count < 1) {
        //     const count = await fetch("http://localhost:1337/articles/count");
        //     const countnum = await count.json();
        //     setCount(countnum)
        // }    
    };


    useEffect(() => {
        console.log("UseEffect called ___-----_____----")
        getarticles(num);

    }, [ num]);

    return (
        <div>
            <Head>
                <title>Digitec Hub Official website</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <NavTop links={navlinks} bgColor={true} />

            <main className="text-gray-700">
                {/* HEADER SECTION ------------------------------------------------------*/}

                <HeaderBar
                    data={{
                        heading: "Updates",
                        sub:
                            "Catchup on all our blog updates and stay informed about all ict related events in Bayelsa and the world at large",
                    }}
                />

                <section className="px-20 py-5" >
                <button onClick={() => setnum(num - 2)} className="px-5" disabled={num <= 1}>Prev</button>

                    {Array.from({length:Math.floor(count/2)+1},(k,v)=>v+1).map((n,ind)=><span className="px-4" key={ind}>{n}</span>)}
                <button onClick={() => setnum(num + 2)} className="px-5" disabled={Math.floor(count/2)+2 == num}>
                    Next
                </button>
                </section>

                <section className="bg-white px-8 flex flex-wrap py-24">
                    {
                        articles.length > 0 && (// BLog Section article cards, 4 cols @lg to @xl, 3 col @md and 2 @sm -------
                        articles.map((article) => (
                            <div
                                className=" w-full sm:w-1/2 md:w-1/3 xl:w-1/4 px-4 pt-8 lg:pt-0"
                                key={article.title}
                            >
                                <div className="shadow-md">
                                    <FadeInUp>
                                        {/* Article featured image --------------------------------*/}

                                        <Link
                                            href={`/post/${
                                                article.id
                                            }/${article.title
                                                .split(" ")
                                                .join("_")}`}
                                            passHref
                                        >
                                            <img
                                                src={`http://localhost:1337${article.image.url}`}
                                                alt={article.title}
                                            />
                                        </Link>

                                        {/* Article category --------------------------------------*/}

                                        <div className="p-4">
                                            <span className="text-xs font-light text-blue-600">
                                                {article.category.name}
                                            </span>

                                            {/* Article title --------------------------------------*/}

                                            <h2 className="font-bold">
                                                {article.title}
                                            </h2>

                                            {/* Article short content text --------------------------------------*/}

                                            <p className="text-sm pt-1">
                                                {`${article.description.substr(
                                                    0,
                                                    100
                                                )}`}
                                                <a
                                                    href="/page"
                                                    className="text-blue-400 text-xs pt-2 block"
                                                >
                                                    {" "}
                                                    Read more...
                                                </a>
                                            </p>

                                            {/* Article Author Section --------------------------------------*/}

                                            <div className="flex pt-3">
                                                <img
                                                    src={`http://localhost:1337${article.author.picture.url}`}
                                                    className="w-10 h-10 rounded-full"
                                                />
                                                <div className="flex flex-col pl-1">
                                                    <span className="text-xs">
                                                        {article.author.name
                                                            ? article.author
                                                                  .name
                                                            : article.author
                                                                  .firstname +
                                                              " " +
                                                              article.author
                                                                  .lastname}
                                                    </span>
                                                    <span className="text-xs pt-1">
                                                        {article.created_at
                                                            .toString()
                                                            .slice(0, 10)}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </FadeInUp>
                                </div>
                            </div>
                        )))
                    }
                    
                </section>

                {/* TESTIMONY SECTION ------------------------------------------------------*/}
                
                <TestimonySection testimonies={testimonies} />

                {/* FOOTER SECTION ------------------------------------------------------*/}

                <FooterSection links={navlinks} />
            </main>

            <footer className="footer"></footer>
        </div>
    );
};

export async function getStaticProps({ params }) {
    const data = await fetch("http://localhost:1337/articles?_limit=1");
    const count = await fetch("http://localhost:1337/articles/count");

    const countnum = await count.json();
    const articles = await data.json();

    return {
        props: { articles, count: countnum },
        revalidate: 1,
    };
}
export default Updates;
