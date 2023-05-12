import Image from "next/image";
import logoAlBarokah from "../../public/pict/logo-al-barokah-192x192.png";
import { IoMapOutline, IoLogoInstagram } from "react-icons/io5";

export default function Footer() {
  return (
    <section id="" className="bg-zinc-100 dark:bg-zinc-900">
      <div className="px-[10%] py-20 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 lg:space-x-5 space-x-0 lg:space-y-0 space-y-5">
        <div className="items-start">
          <div className="flex items-center content-start">
            <div className="">
              <Image
                src={logoAlBarokah}
                height={100}
                alt="logo-al-barokah-pbcvr"
              />
            </div>
            <div>
              <h1 className="font-bold lg:text-3xl md:text-3xl sm:text-2xl text-2xl">
                Masjid Al-Barokah
              </h1>
              <p>Pesona Bali City View Residence Bandung</p>
            </div>
          </div>
        </div>
        <div className="space-y-5">
          <div className="lg:my-0 md:my-5 sm:my-5 my-5">
            <div className="flex items-center space-x-2">
              <div className="">
                <IoMapOutline size={20} color="" />
              </div>
              <p className="font-bold">Masjid Al Barokah</p>
            </div>
            <div>
              <p className="text-sm">
                Perumahan Pesona Bali City View Residence, Cigugur Girang,
                Parongpong, Kabupaten Bandung Barat, Jawa Barat 40559
              </p>
            </div>
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <div className="">
                <IoLogoInstagram size={20} color="" />
              </div>
              <p className="font-bold">Instagram</p>
            </div>
            <div>
              <p className="text-sm">
                <a href="https://www.instagram.com/albarokahpbcvr/">
                  albarokahpbcvr
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d763.6608574944461!2d107.5809970591676!3d-6.844723765091543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e14f22abfc93%3A0x98d8b0e56fa05915!2sMasjid%20Al-Barokah%20PBCVR!5e0!3m2!1sen!2sid!4v1683591465442!5m2!1sen!2sid"
            width="350"
            height="200"
            style={{ border: "0", borderRadius: "10px" }}
            className="lg:max-w-none md:max-w-[300px] sm:max-w-[300px] max-w-[300px] lg:my-0 md:my-5 sm:my-5 my-5"
            loading="lazy"
          ></iframe>
        </div>
      </div>
      <div className="text-center pt-1 pb-5">
        <p className="font-bold text-xs text-gray-400">
          All rights reserved to
        </p>
        <p className="text-xs text-gray-300">Al-Barokah PBCVR - 2023</p>
      </div>
    </section>
  );
}
