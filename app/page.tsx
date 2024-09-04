import Image from "next/image";
import Link from "next/link";

import img from "./assets/images/healthcare.jpg";
import icon from "./assets/icons/logo-full.svg";
//! form in the main page
import PatientForm from "@/components/forms/PatientForm";

export default function Home() {


  return (
    <div className="min-h-screen grid grid-cols-12">
      <section className="col-span-12 md:col-span-6  w-[500px] max-w-[90%] mx-auto py-10  flex flex-col ">
        <Image
          src={icon}
          height={1000}
          width={1000}
          alt="patient"
          className="mb-12 max-w-[150px]"
        />

        <PatientForm className="grow" />

        <div className="text-14-regular mt-20 flex justify-between">
          <p className="text-dark-600 xl:text-left">© 2024 CarePluse</p>
          <Link href="/?admin=true" className="text-green-500">
            Admin
          </Link>
        </div>
      </section>

      <Image
        src={img}
        height={10000}
        width={10000}
        alt="patient"
        //! hide under md
        className="col-span-6 side-img"
      />
    </div>
  );
}
