'use client'
import React from "react";

export default function BadgeHorizontalScroll({ children  }) {

  return (
    <div className="flex gap-[8px] overflow-x-auto w-[220px]">
      { children }
    </div>
  );
}
