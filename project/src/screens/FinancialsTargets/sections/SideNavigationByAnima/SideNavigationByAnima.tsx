import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";

export const SideNavigationByAnima = (): JSX.Element => {
  // Navigation menu items data
  const navItems = [
    { name: "Home", active: true },
    { name: "Stages & Checklist", active: false },
    { name: "Upload Docs", active: false },
    { name: "Preferred Vendors", active: false },
    { name: "Tech Stack", active: false },
    { name: "Targets", active: false },
    { name: "Zee Sales Targets", active: false },
    { name: "MAI Settings", active: false },
    { name: "Pending Questions", active: false, badge: "3" },
  ];

  return (
    <nav className="flex w-[248px] h-screen items-start fixed top-0 left-0 bg-[#11455d] overflow-hidden shadow-ds-3">
      <div className="flex flex-col items-start justify-between px-0 py-8 relative flex-1 self-stretch h-full">
        <div className="flex flex-col items-start gap-8 pt-10 pb-0 px-0 relative self-stretch w-full">
          <div className="flex flex-col items-start gap-3 px-4 py-0 relative self-stretch w-full">
            {navItems.map((item, index) => (
              <Button
                key={index}
                variant="ghost"
                className={`flex items-center justify-start gap-2 px-4 py-2 relative self-stretch w-full rounded-md overflow-hidden ${
                  item.active ? "bg-[#ffffff1a]" : ""
                }`}
              >
                <span
                  className={`font-medium text-base ${
                    item.active ? "text-[#2fbcfe]" : "text-[#ffffff99]"
                  }`}
                >
                  {item.name}
                </span>
                {item.badge && (
                  <Badge
                    variant="outline"
                    className="bg-gray-50 text-[#344054] ml-auto"
                  >
                    {item.badge}
                  </Badge>
                )}
              </Button>
            ))}
          </div>
        </div>

        <Button
          variant="ghost"
          className="flex items-center justify-start gap-2 px-4 py-2 relative self-stretch w-full rounded-md overflow-hidden"
        >
          <span className="font-normal text-[#ffffff80] text-base">Logout</span>
        </Button>
      </div>

      {/* Decorative background glow effect */}
      <div className="absolute w-[710px] h-[710px] top-[236px] -left-8 bg-[#279dd4] rounded-[355px] blur-[161.5px] opacity-30" />
    </nav>
  );
};
