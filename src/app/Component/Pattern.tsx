import React from "react";

export default function Pattern() {
  return (
    <div
      className="flex absolute left-0 top-0
     w-full h-full
      bg-[url(/assets/pattern.svg)] bg-no-repeat bg-cover bg-center
       xl:bg-contain xl:-top-[110px] -z-10"
    />
  );
}
