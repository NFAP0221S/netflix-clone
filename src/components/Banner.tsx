import React from "react";
import Image from "next/image";
import { Movie } from "../../globals";

interface Props {
  netflixOriginals: Movie[];
}

export default function Banner({ netflixOriginals }: Props) {
  return (
    <div>
      <div>{/* <Image /> */}</div>
    </div>
  );
}
