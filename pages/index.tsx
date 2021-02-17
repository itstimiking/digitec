import { useState } from 'react';
import Head from 'next/head'
import styles from '../styles/Home.module.css'

import NavTop from '../components/nav';
import HeaderSection1 from '../components/frontpage/header1';
import HeaderSection2 from '../components/frontpage/header2';

import {
  Home, Phone, BookOpen,
  SignInAlt, BookReader,
  AddressBook, ShoppingBag,
  Atlas, Bicycle, Boxes, Bomb
} from '@styled-icons/fa-solid';
import SecondSection from '../components/frontpage/secondsection';
import BlogSection from '../components/blogsection';

const articles = [
  {
    title: "My First Blog",
    featured_image: "/images/computer_digitech.jpg", 
    category: "Computer News",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus rerum libero ex perspiciatis? Earum pariatur distinctio",
    postedOn: new Date(1999,2,5),
    postedBy: {
      firstname: "Timi",
      lastname: "Ambaye",
      avatar: "/images/avatar.jpg",
      joinDate: "10/20/10",
      about: "I am the best person in the whole wide world...",
    },
  },
  {
    title: "My Second Blog",
    featured_image: "/images/children_digitecng.jpg", 
    category: "Video",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus rerum libero ex perspiciatis? Earum pariatur distinctio",
    postedOn: new Date(1999,2,5),
    postedBy: {
      firstname: "Jowel",
      lastname: "Steven",
      avatar: "/images/avatar.jpg",
      joinDate: "10/20/10",
      about: "I am the best person in the whole wide world...",
    },
  },
  {
    title: "My Third Blog",
    featured_image: "/images/laptop_digitec.jpg", 
    category: "News",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus rerum libero ex perspiciatis? Earum pariatur distinctio",
    postedOn: new Date(1999,2,5),
    postedBy: {
      firstname: "Emeka",
      lastname: "Surname",
      avatar: "/images/avatar.jpg",
      joinDate: "10/20/10",
      about: "I am the best person in the whole wide world...",
    },
  },
  {
    title: "My Fourth Blog",
    featured_image: "/images/tie_digitecng.jpg", 
    category: "Blog",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus rerum libero ex perspiciatis? Earum pariatur distinctio",
    postedOn: new Date(1999,2,5),
    postedBy: {
      firstname: "Steph",
      lastname: "Name",
      avatar: "/images/avatar.jpg",
      joinDate: "10/20/10",
      about: "I am the best person in the whole wide world...",
    },
  },

]

const navlinks = [ // Top navigation links----------------------------
  { title: "Home", url: "/", icon: <Home size="27" className="pb-2" /> },
  { title: "Courses", url: "/courses", icon: <BookReader size="27" className="pb-2" /> },
  { title: "Prices", url: "/pricing", icon: <ShoppingBag size="27" className="pb-2" /> },
  { title: "About", url: "/about", icon: <AddressBook size="27" className="pb-2" /> },
  { title: "Contact", url: "/contact", icon: <Phone size="27" className="pb-2" /> },
];

const boxes = {
  heading: " A better way to learn about tech ",
  content: [
    {icon: <Atlas size="27" className="pb-2" /> , title: "This is the heading", text:" A lot more text to display that will take a lot of space and be very long. thank you.."},
    {icon:  <Bicycle size="27" className="pb-2" />, title: "This is the heading", text:" A lot more text to display that will take a lot of space and be very long. thank you.."},
    {icon:  <Boxes size="27" className="pb-2" />, title: "This is the heading", text:" A lot more text to display that will take a lot of space and be very long. thank you.."},
    {icon:  <Bomb size="27" className="pb-2" />, title: "This is the heading", text:" A lot more text to display that will take a lot of space and be very long. thank you.."},
  ]
}

export default function Index() {

  return (
    <div>
      <Head>
        <title>Digitec Hub Official website</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavTop links={navlinks} />
      

      <main className="text-gray-700">

        <header className="flex h-screen">

          {/** Main Jumbotron Header section ----------------------- */}
          <HeaderSection1 />

          {/** Header image section -------------------------------- */}
          <HeaderSection2 />

        </header>

        {/* Boxes section whith a side heading ---------------------*/}

        <SecondSection heading={boxes.heading} contents={boxes.content} />

        <BlogSection articles={articles} />


      </main>

      <footer className="footer">

      </footer>
    </div>
  )
}
