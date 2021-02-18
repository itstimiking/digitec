import { useState } from 'react';
import Head from 'next/head'
import styles from '../styles/Home.module.css'

import NavTop from '../components/nav';
import HeaderSection1 from '../components/frontpage/header1';
import HeaderSection2 from '../components/frontpage/header2';

import SecondSection from '../components/frontpage/secondsection';
import BlogSection from '../components/blogsection';
import StaffSection from '../components/staffsection';

import { navlinks, boxes} from "../utilities/data";
import { articles} from "../utilities/articles";
import { staffs} from "../utilities/staffs";

export default function Index() {

  return (
    <div>
      <Head>
        <title>Digitec Hub Official website</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavTop links={navlinks} />
      

      <main className="text-gray-700">

        <header className="flex h-screen relative">

          {/** Main Jumbotron Header section ----------------------- */}
          <HeaderSection1 />

          {/** Header image section -------------------------------- */}
          <HeaderSection2 />

        </header>

        {/* Boxes section whith a side heading ---------------------*/}

        <SecondSection heading={boxes.heading} contents={boxes.content} />

        <BlogSection articles={articles} />

        <StaffSection staffs={staffs} />


      </main>

      <footer className="footer">

      </footer>
    </div>
  )
}
