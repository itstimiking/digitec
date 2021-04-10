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


    // useEffect(() => {
    //     console.log("UseEffect called ___-----_____----")
    //     getarticles(num);

    // }, [ num]);

    return (
        <div>
            {/*  */}
        </div>
    );
};

// export async function getStaticProps({ params }) {
//     const data = await fetch("http://localhost:1337/articles?_limit=1");
//     const count = await fetch("http://localhost:1337/articles/count");

//     const countnum = await count.json();
//     const articles = await data.json();

//     return {
//         props: { articles, count: countnum },
//         revalidate: 1,
//     };
// }
export default Updates;
