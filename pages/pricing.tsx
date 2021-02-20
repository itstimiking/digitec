import { useState } from 'react';
import Head from 'next/head'

import NavTop from '../components/nav';

import StaffSection from '../components/staffsection';
import TestimonySection from '../components/testimonysection';

import { navlinks} from "../utilities/data";
import { staffs} from "../utilities/staffs";
import { testimonies } from "../utilities/testimonies";
import FooterSection from '../components/footersection';

export default function Pricing() {

  return (
    <div>
      <Head>
        <title>Digitec Hub Official website</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavTop links={navlinks} />
      

      <main className="text-gray-700">

        

        <TestimonySection testimonies={ testimonies }/>

        <FooterSection links={navlinks} />

      </main>

      <footer className="footer">

      </footer>
    </div>
  )
}
