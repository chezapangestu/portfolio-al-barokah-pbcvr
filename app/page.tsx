import Image from "next/image";
import Navbar from "./common/navbar";
import Heading from "./pages/heading";
import ProgramKegiatan from "./pages/programKegiatan";
import TentangKami from "./pages/tentangKami";
import Footer from "./pages/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Heading />
      <ProgramKegiatan />
      <TentangKami />
      <Footer />
    </>
  );
}
