import React from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../../../components/ui/avatar";
import { Badge } from "../../../../components/ui/badge";
import { Card, CardContent, CardTitle } from "../../../../components/ui/card";
import Icon from '/public/icon.png';

export const FrameWrapperByAnima = (): JSX.Element => {
  // Data for steps completed
  const completedSteps = [
    { name: "Profile Setup", completed: true },
    { name: "Initial Training", completed: true },
    { name: "Legal Documents", completed: true },
  ];

  // Data for steps remaining
  const remainingSteps = [
    { name: "Financial Integration", completed: true },
    { name: "Final Review", completed: true },
  ];

  // Data for franchisee stages
  const franchiseeStages = [
    { name: "Stage 1 (Initial Inquiry)", color: "primary-700", count: "02" },
    {
      name: "Stage 2 (Document Submission)",
      color: "primary-500",
      count: "07",
    },
    { name: "Stage 3 (Training)", color: "primary-200", count: "05" },
  ];

  // Data for prospect leads
  const prospectLeads = [
    { name: "Wade Warren", stage: "Initial Inquiry", avatar: "/wade.png" },
    { name: "Ava Wright", stage: "Initial Inquiry", avatar: "/dava.png" },
    { name: "Cody Fisher", stage: "Initial Inquiry", avatar: "/cody.png" },
  ];

  return (
    <div className="flex gap-5 w-full">
      {/* Account Progress Card */}
      <Card className="w-[316px] h-[586px] border border-[#eaecf0] shadow-shadows-shadow-xs">
        <CardContent className="p-6 flex flex-col gap-5 h-full">
          <div className="flex flex-col items-center gap-6 pb-4 border-b border-[#e9eff6] flex-1">
            <CardTitle className="font-semibold text-black text-base">
              Account Progress
            </CardTitle>

            <div className="relative w-[148px] h-[148px]">
              <div className="relative w-[133px] h-[133px] top-[7px] left-[7px]">
                <div className="absolute w-[133px] h-[133px] top-0 left-0 bg-[url(/background.svg)] bg-[100%_100%]">
                  <svg width="148" height="148" viewBox="0 0 148 148" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M74 7.39999C82.746 7.39999 91.4064 9.12265 99.4867 12.4696C107.567 15.8166 114.909 20.7223 121.093 26.9067C127.278 33.0911 132.183 40.433 135.53 48.5133C138.877 56.5936 140.6 65.254 140.6 74C140.6 82.746 138.877 91.4064 135.53 99.4867C132.183 107.567 127.278 114.909 121.093 121.093C114.909 127.278 107.567 132.183 99.4867 135.53C91.4064 138.877 82.746 140.6 74 140.6C65.2539 140.6 56.5935 138.877 48.5133 135.53C40.433 132.183 33.091 127.278 26.9067 121.093C20.7223 114.909 15.8166 107.567 12.4696 99.4867C9.12265 91.4064 7.39999 82.746 7.39999 74C7.4 65.2539 9.12266 56.5935 12.4696 48.5132C15.8166 40.433 20.7223 33.091 26.9067 26.9067C33.0911 20.7223 40.433 15.8166 48.5133 12.4696C56.5936 9.12264 65.254 7.39999 74 7.39999L74 7.39999Z" stroke="#EAECF0" strokeWidth="14.8" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M74 7.39999C88.0645 7.39999 101.768 11.8525 113.146 20.1195C124.525 28.3864 132.994 40.0433 137.34 53.4195C141.687 66.7956 141.687 81.2044 137.34 94.5805C132.994 107.957 124.525 119.614 113.146 127.881C101.768 136.147 88.0645 140.6 74 140.6C59.9354 140.6 46.2319 136.147 34.8535 127.881C23.475 119.614 15.0058 107.957 10.6596 94.5805C6.31345 81.2043 6.31345 66.7956 10.6596 53.4195" stroke="#279DD4" strokeWidth="14.8" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M57.199 82.1607C56.027 82.1607 54.9864 81.9637 54.0772 81.5695C53.1732 81.1753 52.4637 80.6366 51.9486 79.9534C51.4388 79.2649 51.1865 78.4844 51.1918 77.6119C51.1865 76.934 51.3337 76.3112 51.6333 75.7436C51.9328 75.1759 52.3375 74.7029 52.8473 74.3245C53.3624 73.9409 53.9353 73.6965 54.5659 73.5914V73.481C53.7355 73.297 53.0628 72.874 52.5478 72.2117C52.038 71.5443 51.7857 70.7743 51.7909 69.9019C51.7857 69.0715 52.0169 68.3304 52.4847 67.6787C52.9525 67.027 53.5936 66.5146 54.4083 66.1414C55.2229 65.763 56.1532 65.5738 57.199 65.5738C58.2344 65.5738 59.1568 65.763 59.9662 66.1414C60.7808 66.5146 61.422 67.027 61.8897 67.6787C62.3627 68.3304 62.5993 69.0715 62.5993 69.9019C62.5993 70.7743 62.3391 71.5443 61.8188 72.2117C61.3037 72.874 60.6389 73.297 59.8243 73.481V73.5914C60.4549 73.6965 61.0226 73.9409 61.5271 74.3245C62.0369 74.7029 62.4416 75.1759 62.7412 75.7436C63.046 76.3112 63.1984 76.934 63.1984 77.6119C63.1984 78.4844 62.9409 79.2649 62.4258 79.9534C61.9108 80.6366 61.2012 81.1753 60.2973 81.5695C59.3985 81.9637 58.3658 82.1607 57.199 82.1607ZM57.199 79.9061C57.8034 79.9061 58.329 79.8036 58.7757 79.5986C59.2225 79.3884 59.5694 79.0941 59.8164 78.7156C60.0634 78.3372 60.1895 77.901 60.1948 77.407C60.1895 76.8919 60.0555 76.4373 59.7927 76.0431C59.5352 75.6437 59.1804 75.331 58.7284 75.105C58.2817 74.879 57.7719 74.766 57.199 74.766C56.6209 74.766 56.1059 74.879 55.6539 75.105C55.2019 75.331 54.8445 75.6437 54.5817 76.0431C54.3242 76.4373 54.198 76.8919 54.2033 77.407C54.198 77.901 54.3189 78.3372 54.5659 78.7156C54.813 79.0888 55.1598 79.3805 55.6066 79.5907C56.0586 79.8009 56.5894 79.9061 57.199 79.9061ZM57.199 72.5507C57.6931 72.5507 58.1293 72.4509 58.5077 72.2512C58.8914 72.0514 59.1936 71.7729 59.4143 71.4155C59.6351 71.0581 59.748 70.6455 59.7533 70.1778C59.748 69.7153 59.6377 69.3106 59.4222 68.9637C59.2067 68.6116 58.9071 68.3409 58.5235 68.1517C58.1398 67.9573 57.6983 67.86 57.199 67.86C56.6892 67.86 56.2399 67.9573 55.851 68.1517C55.4673 68.3409 55.1677 68.6116 54.9522 68.9637C54.742 69.3106 54.6395 69.7153 54.6448 70.1778C54.6395 70.6455 54.7446 71.0581 54.9601 71.4155C55.1809 71.7676 55.4831 72.0462 55.8667 72.2512C56.2556 72.4509 56.6998 72.5507 57.199 72.5507ZM71.4032 82.1607C70.352 82.1607 69.4113 81.9637 68.5809 81.5695C67.7505 81.17 67.0909 80.6235 66.6021 79.9297C66.1186 79.236 65.8611 78.4423 65.8295 77.5489H68.6676C68.7202 78.2111 69.0066 78.7524 69.5269 79.1729C70.0472 79.5881 70.6726 79.7957 71.4032 79.7957C71.976 79.7957 72.4858 79.6643 72.9326 79.4015C73.3793 79.1387 73.7314 78.7735 73.989 78.3057C74.2465 77.8379 74.3726 77.3045 74.3674 76.7053C74.3726 76.0957 74.2439 75.5543 73.9811 75.0813C73.7183 74.6083 73.3583 74.2378 72.901 73.9698C72.4438 73.6965 71.9182 73.5598 71.3243 73.5598C70.8408 73.5546 70.3652 73.6439 69.8974 73.8279C69.4297 74.0118 69.0591 74.2536 68.7858 74.5531L66.1449 74.1195L66.9884 65.7945H76.354V68.2384H69.4086L68.9435 72.5192H69.0381C69.3377 72.1671 69.7608 71.8754 70.3074 71.6441C70.854 71.4076 71.4531 71.2894 72.1048 71.2894C73.0824 71.2894 73.9548 71.5206 74.7221 71.9831C75.4895 72.4404 76.0939 73.071 76.5354 73.8752C76.9768 74.6793 77.1976 75.599 77.1976 76.6344C77.1976 77.7013 76.9506 78.6526 76.4565 79.4882C75.9677 80.3186 75.2871 80.973 74.4147 81.4512C73.5475 81.9242 72.5437 82.1607 71.4032 82.1607ZM88.471 78.9127V78.0613C88.471 77.4359 88.6024 76.8604 88.8652 76.3348C89.1332 75.8092 89.5221 75.3862 90.0319 75.0656C90.5417 74.745 91.1593 74.5847 91.8846 74.5847C92.6309 74.5847 93.2563 74.745 93.7609 75.0656C94.2654 75.3809 94.6464 75.8014 94.904 76.3269C95.1667 76.8525 95.2981 77.4306 95.2981 78.0613V78.9127C95.2981 79.5382 95.1667 80.1137 94.904 80.6392C94.6412 81.1648 94.2549 81.5879 93.7451 81.9085C93.2405 82.2291 92.6204 82.3894 91.8846 82.3894C91.1488 82.3894 90.526 82.2291 90.0162 81.9085C89.5064 81.5879 89.1201 81.1648 88.8573 80.6392C88.5998 80.1137 88.471 79.5382 88.471 78.9127ZM90.5286 78.0613V78.9127C90.5286 79.3279 90.6285 79.709 90.8282 80.0558C91.0279 80.4027 91.38 80.5762 91.8846 80.5762C92.3944 80.5762 92.7439 80.4053 92.9331 80.0637C93.1275 79.7168 93.2248 79.3332 93.2248 78.9127V78.0613C93.2248 77.6409 93.1328 77.2572 92.9488 76.9103C92.7649 76.5582 92.4101 76.3821 91.8846 76.3821C91.3905 76.3821 91.041 76.5582 90.8361 76.9103C90.6311 77.2572 90.5286 77.6409 90.5286 78.0613ZM80.2643 69.6732V68.8218C80.2643 68.1911 80.3983 67.613 80.6663 67.0874C80.9344 66.5619 81.3233 66.1414 81.8331 65.8261C82.3429 65.5055 82.9604 65.3452 83.6857 65.3452C84.4268 65.3452 85.0496 65.5055 85.5541 65.8261C86.0639 66.1414 86.4476 66.5619 86.7051 67.0874C86.9626 67.613 87.0914 68.1911 87.0914 68.8218V69.6732C87.0914 70.3039 86.96 70.882 86.6972 71.4076C86.4397 71.9279 86.056 72.3458 85.5462 72.6611C85.0364 72.9764 84.4162 73.1341 83.6857 73.1341C82.9447 73.1341 82.3192 72.9764 81.8094 72.6611C81.3049 72.3458 80.9212 71.9253 80.6584 71.3997C80.3957 70.8742 80.2643 70.2987 80.2643 69.6732ZM82.3376 68.8218V69.6732C82.3376 70.0937 82.4349 70.4774 82.6293 70.8242C82.829 71.1659 83.1812 71.3367 83.6857 71.3367C84.1903 71.3367 84.5371 71.1659 84.7263 70.8242C84.9208 70.4774 85.018 70.0937 85.018 69.6732V68.8218C85.018 68.4014 84.926 68.0177 84.7421 67.6708C84.5582 67.3187 84.206 67.1426 83.6857 67.1426C83.1864 67.1426 82.8369 67.3187 82.6372 67.6708C82.4375 68.023 82.3376 68.4066 82.3376 68.8218ZM81.163 81.94L92.263 65.7945H94.2339L83.1339 81.94H81.163Z" fill="#101828"/>
                  </svg>
                </div>
              </div>
              <div className="absolute h-[29px] top-[52px] left-[42px] text-[#101828] text-[30px] text-center leading-[38px] whitespace-nowrap font-semibold">
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 w-full">
            <Card className="bg-[#f6f7fb] border-none shadow-none">
              <CardContent className="p-4 flex flex-col gap-4">
                <h3 className="font-semibold text-[#1c222b] text-sm">
                  Steps Completed
                </h3>

                <div className="flex flex-col gap-4 justify-between flex-1">
                  {completedSteps.map((step, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between w-full"
                    >
                      <div className="flex items-center gap-2">
                        <div className="w-2.5 h-2.5 bg-[#d9d9d9] rounded-[5px]" />
                        <span className="font-medium text-[#455468] text-sm">
                          {step.name}
                        </span>
                      </div>
                      <img
                        className="w-4 h-4"
                        alt="Completed"
                        src="/tick_icon.png"
                      />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#f6f7fb] border-none shadow-none">
              <CardContent className="p-4 flex flex-col gap-4">
                <h3 className="font-semibold text-[#1c222b] text-sm">
                  Steps Remaining
                </h3>

                <div className="flex flex-col gap-2">
                  {remainingSteps.map((step, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between w-full"
                    >
                      <div className="flex items-center gap-2">
                        <div className="w-2.5 h-2.5 bg-[#d9d9d9] rounded-[5px]" />
                        <span className="font-medium text-[#455468] text-sm">
                          {step.name}
                        </span>
                      </div>
                      <img
                        className="w-4 h-4"
                        alt="Completed"
                        src="/tick_icon2.png"
                      />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>

      {/* Middle Column */}
      <div className="flex flex-col w-[386px] gap-5">
        {/* Total Franchisees Onboard Card */}
        <Card className="h-[284px] border border-[#eaecf0] shadow-shadows-shadow-xs">
          <CardContent className="p-6 flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              <CardTitle className="font-semibold text-black text-base">
                Total Franchisees Onboard
              </CardTitle>

              <div className="flex items-center justify-between w-full">
                <div className="flex items-center gap-4">
                  <span className="text-[#101828] text-[30px] font-semibold">
                    14
                  </span>
                  <Badge className="bg-transparent text-[#057647] border-[1.5px] border-[#069454] rounded-full pl-2 pr-2.5 py-0.5 flex items-center gap-1">
                    <img
                      className="w-3 h-3"
                      alt="Icon"
                      src={Icon}
                    />
                    <span>7.4%</span>
                  </Badge>
                </div>

                <div className="flex -ml-px">
                  <div className="flex flex-row items-start p-0 gap-8 mx-auto w-[124px] h-6">
                    <div className="flex flex-row items-start p-0 w-[124px] h-6">
                      {[
                        {
                          name: "Olivia Rhye",
                          bg: "#CFCBDC",
                          image: "avatar1.png"
                        },
                        {
                          name: "Phoenix Baker",
                          bg: "#D6CFB7",
                          image: "avatar2.png"
                        },
                        {
                          name: "Lana Steiner",
                          bg: "#D7E3E8",
                          image: "avatar3.png"
                        },
                        {
                          name: "Demi Wilkinson",
                          bg: "#DADCD6",
                          image: "avatar4.png"
                        },
                        {
                          name: "Candice Wu",
                          bg: "#D9D0E6",
                          image: "avatar5.png"
                        }
                      ].map((user, index) => (
                        <div
                          key={index}
                          className="relative w-6 h-6 flex-none"
                          style={{ margin: "0 -4px" }}
                        >
                          <div
                            className="w-6 h-6 border-[1.5px] border-white rounded-full relative bg-cover bg-center"
                            style={{
                              backgroundImage: `url(/${user.image})`,
                              backgroundColor: user.bg
                            }}
                          >
                            <div className="absolute inset-0 border-[0.5px] border-[rgba(0,0,0,0.08)] rounded-full" />
                          </div>
                        </div>
                      ))}
                      <div className="relative w-6 h-6 flex-none">
                        <div className="w-6 h-6 bg-[#F2F4F7] border-2 border-white rounded-full relative">
                          <div className="absolute inset-0 border-[0.5px] border-[rgba(0,0,0,0.08)] rounded-full" />
                          <div className="absolute w-6 h-[18px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-inter font-semibold text-xs leading-[18px] text-center text-[#475467]">
                            +7
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-2 w-full">
              <div className="w-[100px] h-3 bg-primary-700 rounded" />
              <div className="w-[76px] h-3 bg-primary-500 rounded" />
              <div className="flex-1 h-3 bg-primary-200 rounded" />
            </div>

            <div className="flex flex-col gap-4">
              {franchiseeStages.map((stage, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between w-full"
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-2.5 h-2.5 bg-${stage.color} rounded`} />
                    <span className="text-[#475467] text-sm font-medium">
                      {stage.name}
                    </span>
                  </div>
                  <span className="text-[#1c222b] text-lg font-semibold">
                    {stage.count}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Financial Wellbeing Card */}
        <Card className="h-[282px] border border-[#eaecf0] shadow-shadows-shadow-xs">
          <CardContent className="p-6 flex flex-col gap-5">
            <div className="flex flex-col gap-4 pb-3 border-b border-[#e9eff6]">
              <CardTitle className="font-semibold text-black text-base">
                Financial Wellbeing
              </CardTitle>

              <div className="flex items-center justify-around gap-4 w-full">
                <div className="flex flex-col gap-1 flex-1">
                  <div className="flex items-center justify-between w-full">
                    <div className="flex flex-col gap-0.5">
                      <span className="text-[#101828] text-[30px] font-semibold">
                        20
                      </span>
                      <span className="text-[#475467] text-sm font-medium">
                        Total Franchisees
                      </span>
                    </div>

                    <Badge className="bg-transparent text-[#057647] border-[1.5px] border-[#069454] rounded-full pl-2 pr-2.5 py-0.5 flex items-center gap-1">
                      <img
                        className="w-3 h-3"
                        alt="Icon"
                        src={Icon}
                      />
                      <span>2.1%</span>
                    </Badge>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-4 w-full">
              <Card className="flex-1 bg-[#f6f7fb] border-none shadow-none">
                <CardContent className="p-4 flex flex-col items-center gap-2">
                  <h3 className="font-semibold text-[#455468] text-sm">
                    Target
                  </h3>
                  <span className="text-[#1c222b] text-xl font-semibold leading-[38px]">
                    $500,000
                  </span>
                </CardContent>
              </Card>

              <Card className="flex-1 bg-[#f6f7fb] border-none shadow-none">
                <CardContent className="p-4 flex flex-col items-center gap-2">
                  <h3 className="font-semibold text-[#455468] text-sm">
                    Current
                  </h3>
                  <span className="text-[#1c222b] text-xl font-semibold leading-[38px]">
                    $450,000
                  </span>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Right Column */}
      <div className="flex flex-col w-[386px] gap-5">
        {/* Key Insights & Feedback Card */}
        <Card className="h-[282px] border border-[#eaecf0] shadow-shadows-shadow-xs">
          <CardContent className="p-6 flex flex-col gap-5">
            <div className="flex flex-col gap-4">
              <CardTitle className="font-semibold text-black text-base">
                Key Insights &amp; Feedback
              </CardTitle>
            </div>

            <div className="flex justify-between pb-3 border-b border-[#e9eff6] w-full">
              <div className="flex gap-4">
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-4">
                    <div className="flex flex-col gap-0.5">
                      <span className="text-[#101828] text-[30px] font-semibold">
                        10%
                      </span>
                      <span className="text-[#475467] text-sm font-medium">
                        Sales Growth
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <div className="flex items-center justify-center gap-4">
                  <div className="flex flex-col items-center gap-2">
                    <Avatar className="w-9 h-9">
                      <AvatarImage src="/avatar6.png" alt="Top performer" />
                      <AvatarFallback className="border-[0.75px] border-[#00000014]"></AvatarFallback>
                    </Avatar>

                    <Badge className="bg-[#d5f1ff80] text-primary-600 border border-[#b9e9ff] rounded-[20px] px-3 py-0.5 font-medium text-xs">
                      Top Performer
                    </Badge>
                  </div>
                </div>
              </div>
            </div>

            <Card className="bg-[#f6f7fb] border-none shadow-none flex-1">
              <CardContent className="p-4 flex flex-col gap-1.5">
                <h3 className="font-semibold text-[#1c222b] text-sm">
                  Feedback
                </h3>
                <div className="flex items-center gap-2">
                  <div className="h-9 pt-1">
                    <div className="w-2.5 h-2.5 bg-[#d9d9d9] rounded-[5px]" />
                  </div>
                  <p className="font-medium text-[#455468] text-xs leading-[18px] w-72">
                    Franchisees are requesting more detailed training materials.
                  </p>
                </div>
              </CardContent>
            </Card>
          </CardContent>
        </Card>

        {/* Prospect Leads Card */}
        <Card className="h-[284px] border border-[#eaecf0] shadow-shadows-shadow-xs">
          <CardContent className="p-6 flex flex-col gap-5">
            <div className="flex flex-col gap-4">
              <CardTitle className="font-semibold text-black text-base">
                Prospect Leads
              </CardTitle>
            </div>

            <div className="flex flex-col gap-3">
              {prospectLeads.map((lead, index) => (
                <Card
                  key={index}
                  className="bg-[#f6f7fb] border-none shadow-none"
                >
                  <CardContent className="px-4 py-2.5 flex flex-col gap-2">
                    <div className="flex items-center justify-between w-full">
                      <div className="flex items-center gap-2.5">
                        <Avatar className="w-9 h-9">
                          <AvatarImage src={lead.avatar} alt={lead.name} />
                          <AvatarFallback className="border-[0.75px] border-[#00000014]"></AvatarFallback>
                        </Avatar>
                        <span className="font-medium text-[#101828] text-sm">
                          {lead.name}
                        </span>
                      </div>
                      <div className="font-medium text-sm">
                        <span className="text-[#1c222bb2]">Stage:</span>
                        <span className="text-[#475467]">&nbsp;</span>
                        <span className="text-[#1c222be6]">{lead.stage}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};