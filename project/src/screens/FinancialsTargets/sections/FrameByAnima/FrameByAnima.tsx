import { ChevronDownIcon } from "lucide-react";
import React from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../../../components/ui/avatar";
import { Badge } from "../../../../components/ui/badge";
import { Input } from "../../../../components/ui/input";
import chevronRight from '/public/chevron-right.png';

// User data for pending questions
const pendingQuestions = [
  {
    id: 1,
    user: {
      name: "Phoenix Baker",
      username: "@phoenix",
      avatar: "avatar2.png",
      background: "avatar-user-squarephoenix-baker-color-background",
      online: true,
    },
    question: "What are the requirements for opening a new store?",
    time: "5min ago",
  },
  {
    id: 2,
    user: {
      name: "Koray Okumus",
      username: "@koray",
      avatar: "avatar7.png",
      background: "avatar-user-squarekoray-okumus-color-background",
      online: true,
    },
    question: "How do I manage inventory effectively?",
    time: "4hr ago",
  },
];

export const FrameByAnima = (): JSX.Element => {
  return (
    <section className="w-full border-t border-[#d7dee8] bg-gray-50 mt-auto">
      <div className="flex flex-row">
        {/* Pending Questions Panel */}
        <div className="w-[360px] bg-white border-r border-[#d7dee8]">
          <div className="border-b border-[#d7dee8] bg-white px-6 py-3">
            <div className="flex items-center justify-between">
              <h2 className="font-text-lg-semibold text-[#101828]">
                Pending Questions
              </h2>
              <Badge className="bg-primary-500 px-1.5 py-0.5 shadow-shadows-shadow-xs">
                <span className="font-text-xs-medium text-white">02</span>
              </Badge>
            </div>
          </div>

          {pendingQuestions.map((item) => (
            <div
              key={item.id}
              className="flex flex-col gap-4 border-b border-[#eaecf0] bg-white p-4"
            >
              <div className="flex items-start justify-between w-full">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-[5px]" />
                  <div className="flex items-center gap-3">
                    <div
                      className={`relative w-10 h-10 rounded-full bg-${item.user.background}`}
                    >
                      <Avatar className="w-10 h-10 border-[0.75px] border-[#00000014]">
                        <AvatarImage
                          src={`/${item.user.avatar}`}
                          alt={item.user.name}
                        />
                        <AvatarFallback>
                          {item.user.name.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                      {item.user.online && (
                        <div className="absolute w-[13px] h-[13px] top-7 left-7 bg-[#17b169] rounded-full border-[1.5px] border-solid border-white" />
                      )}
                    </div>
                    <div className="flex flex-col">
                      <span className="font-text-sm-semibold text-[#344054]">
                        {item.user.name}
                      </span>
                      <span className="font-text-sm-regular text-[#475467]">
                        {item.user.username}
                      </span>
                    </div>
                  </div>
                </div>
                <span className="font-text-sm-regular text-[#475467]">
                  {item.time}
                </span>
              </div>
              <div className="pl-5">
                <p className="font-text-sm-regular text-[#475467]">
                  {item.question}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* AI Chat Assistant */}
        <div className="flex flex-col items-center gap-8 py-16 px-8 flex-1">
          <div className="flex flex-col items-center gap-5 w-[486px]">
            <img className="w-16 h-[35.56px]" alt="Logo" src="/logo.png" />
            <h2 className="font-bold text-[30px] text-colorsgrey-5">
              Welcome to the AI Chat Assistant
            </h2>
          </div>

          <div className="w-full max-w-[680px]">
            <div className="relative w-full">
              <Input
                className="pr-12 py-2.5 border-[#d7dee8] shadow-shadow-skim-xs font-text-md-16-normal text-[#1c222b99]"
                placeholder="Ask your question here.."
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2">
                <img
                  className="w-5 h-5"
                  alt="Send"
                  src="/send_icon.png"
                />
              </button>
            </div>
          </div>
        </div>

        {/* Collapse button */}
        <button className="flex items-center justify-center w-6 h-6 p-1.5 bg-[#e9eff6] rounded-[30px] -rotate90 self-start mt-4 mr-4">
          <img src={chevronRight} alt="chevron right" className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
};