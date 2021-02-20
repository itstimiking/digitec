import { useState } from 'react';
import Head from 'next/head';

import NavTop from '../components/nav';
import TestimonySection from '../components/testimonysection';
import FooterSection from '../components/footersection';

import { navlinks, boxes} from "../utilities/data";
import { testimonies } from "../utilities/testimonies";

export default function Courses() {

  return (
    <div>
      <Head>
        <title>Digitec Hub Official website</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavTop links={navlinks} bgColor={true}/>
      

      <main className="text-gray-700">

        

        <TestimonySection testimonies={ testimonies }/>

        <FooterSection links={navlinks} />

      </main>

      <footer className="footer">

      </footer>
    </div>
  )
}
