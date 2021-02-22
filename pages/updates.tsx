
import { useState } from 'react';
import Head from 'next/head';

import NavTop from '../components/nav';
import TestimonySection from '../components/testimonysection';
import FooterSection from '../components/footersection';

import { navlinks } from "../data/data";
import { testimonies } from "../data/testimonies";
import HeaderBar from '../components/headerBar';
import { articles } from '../data/articles';

export default function Updates() {
  
  return (
    <div>
      <Head>
        <title>Digitec Hub Official website</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavTop links={navlinks} bgColor={true}/>

      <main className="text-gray-700">

{/* HEADER SECTION ------------------------------------------------------*/}

        <HeaderBar data={{
          heading: "Updates", 
          sub:"Catchup on all our blog updates and stay informed about all ict related events in Bayelsa and the world at large"
         }} 
        />

{/* PROFESSIONAL COURSES SECTION ------------------------------------------------------*/}

        <div className="h-10 bg-gray-600 w-4/5 md:w-4/6 mt-12">
          <h3 className="text-white flex justify-end p-2 text-xl font-bold pr-8"> 
            Digitec Updates / News & Events
          </h3>
        </div>

        <section className="bg-white px-8 flex flex-wrap py-24">

          {// BLog Section article cards, 4 cols @lg to @xl, 3 col @md and 2 @sm -------
                    articles.map(article=>(
                      <div className=" w-full sm:w-1/2 md:w-1/3 xl:w-1/4 px-4 pt-8 lg:pt-0" key={ article.title}>

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
         
        </section>

{/* TESTIMONY SECTION ------------------------------------------------------*/}

        <TestimonySection testimonies={ testimonies }/>

{/* FOOTER SECTION ------------------------------------------------------*/}

        <FooterSection links={navlinks} />

      </main>

      <footer className="footer">

      </footer>
    </div>
  )
}
