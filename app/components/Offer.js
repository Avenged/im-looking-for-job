'use client'
import React from "react";
import BadgeHorizontalScroll from "./BadgeHorizontalScroll";

export default function Offer({ backgroundColor }) {

    return (

        <article className="offer flex flex-col gap-[16px] p-[16px] rounded-[8px] text-black"
            style={{ backgroundColor: backgroundColor }}>
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-[8px]">
                    <div className="logo"></div>
                    <div>
                        <h1 className="font-semibold text-lg leading-5">UX Designer</h1>
                        <p className="leading-5 text-gray-900">Google</p>
                    </div>
                </div>
                <p className="font-semibold">California, USA</p>
            </div>
            <p className="text-gray-900">Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p>
            <div className="flex items-center justify-between">
                <div className="flex gap-[8px]">
                    <BadgeHorizontalScroll>
                        <span className="badge badge-primary text-nowrap text-gray-700">Full time</span>
                        <span className="badge badge-secondary text-nowrap text-gray-700">Middle</span>
                        <span className="badge badge-primary text-nowrap text-gray-700">Javascript</span>
                    </BadgeHorizontalScroll>
                </div>
                <div className="flex gap-[8px]">
                    <button className="icon-button">
                        <span class="material-symbols-outlined">
                            favorite
                        </span>
                    </button>
                    <button className="icon-button">
                        <span class="material-symbols-outlined">
                            south_east
                        </span>
                    </button>
                </div>
            </div>
        </article>
    );
}
