'use client'
import React from "react";

export default function BadgeHorizontalScroll({ children  }) {

  return (
    <div className="badge-horizontal-scroll flex gap-[8px] overflow-x-auto w-[220px]">
      { children }
    </div>
  );
}
