"use client";
import { ExternalLinkIcon } from "@heroicons/react/solid";
import Image from "next/image";
import Link from "next/link";


export function Banner() {
  return (
    <div className="relative m-auto mt-8 max-w-[80%] rounded-lg bg-gray-800">
      <div className="h-56 rounded-md bg-slate-600 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
        <img
          src="https://i.pinimg.com/originals/b2/d0/00/b2d0009cf44329aef5c4a870be76664e.jpg"
          className="h-full w-full rounded-l-xl object-cover"
        />
      </div>
      <div className="relative  mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="md:ml-auto md:w-1/2 md:pl-10">
          <h2 className="text-base font-semibold uppercase tracking-wider text-gray-300">
            Web engineer
          </h2>
          <p className="mt-2 text-xl font-extrabold tracking-tight text-white sm:text-4xl">
            Nurgali Almaz
          </p>
          <p className="mt-3 text-base text-gray-300">
            In my role as a web engineer, I am responsible for designing,
            developing, and maintaining web applications that are both
            functional and secure. I have experience working with a variety of
            programming languages and frameworks, including HTML, CSS,
            JavaScript, Nest, and React.
          </p>
          <div className="mt-8">
            <div className="inline-flex rounded-md shadow">
              <Link
                href="https://read.cv/sinless"
                target="_blank"
                className="inline-flex items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-semibold  text-gray-900 hover:bg-gray-50"
              >
                Read CV
                <ExternalLinkIcon
                  className="-mr-1 ml-3 h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
