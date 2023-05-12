"use client";
import Image from "next/image";
import logoAlBarokah from "../../public/pict/logo-al-barokah-192x192.png";
import ScrollLink from "../component/scrollLink";
import DarkModeBtn from "../darkModeBtn";

export default function Navbar() {
  return (
    <>
      <div className="bg-white dark:bg-black-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600 backdrop-filter backdrop-blur-lg bg-opacity-20 transition duration-300 ease-in-out">
        <div className="flex px-[10%] py-4 items-center">
          <div className="mr-auto flex items-center">
            <Image
              src={logoAlBarokah}
              height={40}
              alt="logo-al-barokah-pbcvr"
            />
            <h1 className="font-bold">Masjid Al-Barokah PBCVR</h1>
          </div>
          <div className="flex space-x-4">
            <div className="flex items-center hover:text-yellow-500">
              <ScrollLink href="#section-tentang-kami">Tentang Kami</ScrollLink>
              {/* <p>Tentang Kami</p> */}
            </div>
            <div className="button border rounded-lg hover:bg-gray-100 p-1 dark:hover:bg-zinc-900 dark:border-zinc-500">
              <DarkModeBtn />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
