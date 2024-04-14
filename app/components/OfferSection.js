'use client'

import React from "react";
import Offer from "./Offer";

export default function OfferSection({ title }) {

    return (
        <section className="w-full flex flex-col gap-[24px]">
            <h1 className="text-2xl">{title}</h1>
            <div className="flex flex-col gap-[6px]">
                <Offer backgroundColor="#a29bfe" />
                <Offer backgroundColor="#fdcb6e" />
                <Offer backgroundColor="#ff7675" />
            </div>
        </section>
    );
}
