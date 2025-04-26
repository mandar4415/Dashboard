import React from "react";
import { FrameByAnima } from "./sections/FrameByAnima";
import { FrameWrapperByAnima } from "./sections/FrameWrapperByAnima/FrameWrapperByAnima";
import { SideNavigationByAnima } from "./sections/SideNavigationByAnima";
import Navbar from '../../components/Navbar';

export const FinancialsTargets = (): JSX.Element => {
  return (
    <div className="relative min-h-screen bg-white overflow-x-hidden">
      {/* Sidebar */}
      <div className="fixed top-0 left-0 w-[248px] h-screen z-30">
        <SideNavigationByAnima />
      </div>

      {/* Header/Navbar */}
      <div className="fixed top-0 left-[10px] w-[calc(100vw-248px)] h-[80px] z-20">
        <Navbar />
      </div>

      {/* Main Content */}
      <main className="absolute left-[248px] top-[80px] w-[calc(100vw-248px)] flex flex-col gap-6 z-10 p-6">
        <FrameWrapperByAnima />
        {/* Add other main content cards/components here if needed */}
      </main>

      {/* Bottom Main Content Area */}
      <div className="absolute left-[248px] top-[733px] w-[calc(100vw-248px)] h-[291px] flex gap-6 z-10">
        <FrameByAnima />
        {/* Add other bottom area components here if needed */}
      </div>
    </div>
  );
};
