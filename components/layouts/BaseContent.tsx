"use client";

import React, { useState } from "react";
import LeftBarContent from "./LeftBarContent";
import RightBarContent from "./RightBarContent";
import CompactTopBar from "./TopBarContent";
import { boolean } from "zod";


export default function LayoutBig(
  { children, isCompactTopBar, isLeftBarContent, isRightBarContent }:
    {
      children: React.ReactNode,
      isCompactTopBar?: Boolean,
      isLeftBarContent?: Boolean,
      isRightBarContent?: Boolean
    }
) {
  return (
    <>
      {isCompactTopBar ? <CompactTopBar /> : null}
      {isLeftBarContent ? <LeftBarContent /> : null}
      {isRightBarContent ? <RightBarContent /> : null}
      <div className="fixed top-0 left-0 w-full h-full bg-transparent overflow-hidden pl-[40px] pt-[45px] z-10"
        style={{
          paddingLeft: isLeftBarContent ? "40px" : "0px",
          paddingTop: isCompactTopBar ? "45px" : "0px"
        }}
      >
        {children}
      </div>
    </>
  );
}