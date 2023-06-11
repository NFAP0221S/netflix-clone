import Head from "next/head";
import Image from "next/image";
import React from "react";

function login() {
  return (
    <div>
      <Head>
        <title>Netflix</title>
        <link rel="icon" href="" />
      </Head>
      <Image
        src="https://rb.gy/p2hphi"
        layout="fill"
        className="-z-10 !hidden opacity-60 sm:!inline"
        objectFit="cover"
      />
    </div>
  );
}

export default login;
