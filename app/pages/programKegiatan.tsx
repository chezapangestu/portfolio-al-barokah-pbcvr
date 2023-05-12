import Card from "../component/card";
import mengajiIqra from "../../public/pict/mengaji-iqra.jpg";
import mengajiQuran from "../../public/pict/mengaji-quran.jpg";
import tadaburTahsin from "../../public/pict/tadabur-tahsin-quran.jpg";
import ngopi from "../../public/pict/ngopi.jpg";

export default function ProgramKegiatan() {
  return (
    <div className="px-[10%] py-32 transition duration-500 ease-in-out">
      <h1 className="font-bold text-3xl">Program Kegiatan Masjid</h1>
      <p>Kegiatan yang diselenggarakan oleh DKM Masjid Al-Barokah</p>
      <div>
        <Card
          title={"Mengaji Iqra (Anak)"}
          days={"Setiap Senin, Selasa, Rabu"}
          time={"Pukul 16.00 s/d Selesai"}
          image={mengajiIqra}
          alt={"mengaji-iqra-anak"}
        />
        <Card
          title={"Mengaji Al-Quran (Anak)"}
          days={"Setiap Senin, Selasa, Rabu"}
          time={"Pukul 18.00 s/d Selesai"}
          image={mengajiQuran}
          alt={"mengaji-al-quran-anak"}
        />
        <Card
          title={"Tadabur & Tahsin Quran"}
          days={"Setiap Jum'at"}
          time={"Pukul 15.30 s/d Selesai"}
          image={tadaburTahsin}
          alt={"tadabur-&-tahsin-quran"}
        />
        <Card
          title={"NGOPI! Ngobrol Perkara Iman"}
          days={"Setiap Ahad"}
          time={"Pukul 05.00 s/d Selesai"}
          image={ngopi}
          alt={"ngopi-ngobrol-perkara-iman"}
        />
      </div>
    </div>
  );
}
