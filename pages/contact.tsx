import { useState } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';

import NavTop from '../components/nav';

import FooterSection from '../components/footersection';

import { navlinks} from "../data/data";

export default function Contact() {

  return (
    <div>
      <Head>
        <title>Digitec Hub Official website</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavTop links={navlinks} bgColor={true} />
      

      <main className="text-gray-700">


        <FooterSection links={navlinks} />

      </main>

      <footer className="footer">

      </footer>
    </div>
  )
}
