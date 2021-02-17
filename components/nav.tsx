import { loadGetInitialProps } from 'next/dist/next-server/lib/utils';
import { useState } from 'react';
import Link from 'next/link';

import { StyledIcon } from '@styled-icons/styled-icon';
import { Bars } from '@styled-icons/fa-solid';

interface navlink {// Each link interface
    title: string,
    url: string,
    icon: JSX.Element
}

interface Props { // Array of all links 
    links: navlink[],
}

const NavTop: React.FC<Props> = ({ links }) => {

    const [linksMd, setLinksMd] = useState(false);
    const [linksSm, setLinksSm] = useState(false);

    return (
        <nav className="absolute h-20 w-full z-30">
            <div className="container mx-auto px-4 flex flex-wrap space-x-8 content-center " >

                {/* Digitec Logo -------------------------------------*/}
                <div className="flex flex-wrap content-center h-20 xl:px-8 ">
                    <img src="/images/digitec.png" className="w-16" />
                </div>


                {/* Navigation links ---------------------------------*/}

                <div className="flex flex-wrap content-center text-gray-500">

                    {// Show full links at large screen size ----------------------------
                        links.map(link => (
                            <div className="hidden lg:block mr-4 hover:text-gray-400"
                                key={link.title + "aa"}
                            >
                                { link.icon}
                                <Link href={link.url} passHref>
                                    <a>{link.title}</a>
                                </Link>
                            </div>
                        ))
                    }

                    {// Show only 3 initial top nav links at medium screen size ---------------------
                        links.slice(0, 3).map(link => (
                            <div className="hidden md:block lg:hidden mr-4 hover:text-gray-400"
                                key={link.title + "aa"}
                            >
                                { link.icon}
                                <Link href={link.url} passHref>
                                    <a>{link.title}</a>
                                </Link>
                            </div>
                        ))
                    }

                    {/* Medium screen button to show remaining hidden links, shows only at medium screen size -------------------*/}

                    <div>

                        <button
                            className="p-1 hidden md:block lg:hidden"
                            onClick={()=>setLinksMd(!linksMd)}
                        >
                            <Bars size="25" className="pb-1" />
                        </button>

                        <div className={
                            linksMd ? "flex flex-col absolute z-40 p-4 -ml-24 "
                            : "hidden"}>

                                {// Show only 3 nav links at medium screen size ---------------------
                                links.slice(3, links.length).map(link => (
                                    <div className="hidden md:block lg:hidden mr-4 hover:text-gray-400 pb-4"
                                        key={link.title + "md"}
                                    >
                                        { link.icon}
                                        <Link href={link.url} passHref>
                                            <a>{link.title}</a>
                                        </Link>
                                    </div>
                                ))
                            }

                        </div>
                    </div>
                    

                    {/** Mobile menu button only vissible in mobile small screens ------------- */}

                    <div className="">

                        <button
                            className="p-2 shadow md:hidden border-white border-solid border-b-2"
                            onClick={() => setLinksSm(!linksSm) }
                        >
                            <Bars size="27" className="pb-1" />
                            {" "} Menu
                        </button>

                        <div className={
                            linksSm ? "flex flex-col absolute z-40 w-80 bg-white mt-4 -ml-4 pl-4 pt-4 shadow-md"
                            : "hidden"}>

                                {// Nav links for mobile screen ---------------------
                                links.map(link => (
                                    <div className="block md:hidden mr-4 hover:text-gray-400 pb-4"
                                        key={link.title + "md"}
                                    >
                                        { link.icon}
                                        <Link href={link.url} passHref>
                                            <a>{link.title}</a>
                                        </Link>
                                    </div>
                                ))
                            }

                        </div>
                    </div>


                </div>

            </div>

        </nav>
    );
}

export default NavTop;