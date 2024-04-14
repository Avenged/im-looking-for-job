'use client'
import React from "react";
import { signal } from "@preact/signals-react";
import OfferSection from "./components/OfferSection";

export default function Home() {

  return (
    <main className="flex flex-col items-center justify-between">
      <div className="flex flex-col p-[24px] gap-[32px]">
        <OfferSection title="Full time" />
        <OfferSection title="Freelance" />
      </div>
    </main>
  );
}
