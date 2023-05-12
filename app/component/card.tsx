import Image from "next/image";

export default function Card(props: any) {
  return (
    // <div className="rounded-lg border-2 border-gray-100 bg-gray-50 dark:bg-blacky dark:border-gray-700 mt-6 transition duration-300 ease-in-out">
    <div className="">
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 sm:space-x-0 md:space-x-5 lg:space-x-5 space-x-0 p-10">
        <div className="">
          <Image
            className="bg-cover rounded-lg"
            width={500}
            src={props.image}
            alt={props.alt}
          />
        </div>
        <div className="justify-items-start sm:mt-5 md:mt-0 lg:mt-0 mt-0">
          <h1 className="font-bold text-2xl">{props.title}</h1>
          <p>{props.days}</p>
          <p>{props.time}</p>
        </div>
      </div>
    </div>
  );
}
