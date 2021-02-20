import { useState } from 'react';
import Head from 'next/head';

import NavTop from '../components/nav';

import FooterSection from '../components/footersection';

import { navlinks} from "../utilities/data";

export default function Contact() {

  return (
    <div>
      <Head>
        <title>Digitec Hub Official website</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavTop links={navlinks} />
      

      <main className="text-gray-700">


        <FooterSection links={navlinks} />

      </main>

      <footer className="footer">

      </footer>
    </div>
  )
}
