import { useState } from 'react';
import Head from 'next/head'

import NavTop from '../components/nav';

import StaffSection from '../components/staffsection';
import TestimonySection from '../components/testimonysection';

import { navlinks} from "../data/data";
import { staffs} from "../data/staffs";
import { testimonies } from "../data/testimonies";
import FooterSection from '../components/footersection';

export default function About() {

  return (
    <div>
      <Head>
        <title>Digitec Hub Official website</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavTop links={navlinks} bgColor={true} />
      

      <main className="text-gray-700">

        <StaffSection staffs={staffs} />

        <TestimonySection testimonies={ testimonies }/>

        <FooterSection links={navlinks} />

      </main>

      <footer className="footer">

      </footer>
    </div>
  )
}
