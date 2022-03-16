import React, { useState } from "react";
import "../styles/globals.css";
import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";

const MyApp = ({ Component, pageProps }) => {
  const { pathname } = useRouter();
  const [page, setPage] = useState(pathname);

  return (
    <>
      <Head>
        <title>Woo Food</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
          integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
          crossorigin=""
        />
      </Head>
      <div className="flex justify-between p-4 bg-red-50">
        <div className="flex-none font-bold text-3xl">
          <div>DWU Reviews</div>
        </div>
        <div className="flex text-lg items-center">
          <Link href="/about">
            <a
              className={
                page === "/about"
                  ? "mr-8 border-y border-y-stone-800"
                  : "mr-8 hover:border-y hover:border-y-stone-800"
              }
              onClick={() => setPage("/about")}
            >
              About
            </a>
          </Link>
          <Link href="/travels">
            <a
              className={
                page === "/travels"
                  ? "mr-4 border-y border-y-stone-800"
                  : "mr-4 hover:border-y hover:border-y-stone-800"
              }
              onClick={() => setPage("/travels")}
            >
              Travels
            </a>
          </Link>
        </div>
      </div>
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
