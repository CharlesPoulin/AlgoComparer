// src/App.js
import React from 'react';
import NavigationBar from './lib/NavigationBar'; // Import the navigation component
import ListBox from './lib/ListBox'; // Import the navigation component

import './App.css'; // Make sure this is imported

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <ListBox />
      <div class="w-[1440px] h-[957px] relative bg-slate-50 rounded-[36px]">
    <div class="w-[1440px] h-[134.36px] left-0 top-0 absolute">
        <div class="w-[1440px] h-[134.36px] left-0 top-0 absolute bg-white shadow"></div>
        <div class="w-[1220px] h-[76px] left-[110px] top-[29.18px] absolute">
            <div class="w-[210px] h-[76px] left-0 top-0 absolute">
                <div class="left-[92px] top-[13px] absolute text-indigo-950 text-[38px] font-bold font-['DM Sans'] leading-[50px]">Inputs</div>
                <div class="w-[76px] h-[76px] left-0 top-0 absolute">
                    <div class="w-[76px] h-[76px] left-0 top-0 absolute bg-white rounded-3xl shadow"></div>
                    <div class="w-[44.66px] h-[40.60px] left-[15.67px] top-[17.70px] absolute">
                    </div>
                </div>
            </div>
            <div class="w-[301.82px] h-[39.67px] left-[918.18px] top-[18.16px] absolute shadow justify-center items-end gap-[15.71px] inline-flex">
                <div class="w-[39.67px] h-[39.67px] relative">
                </div>
                <div class="grow shrink basis-0 self-stretch relative">
                </div>
            </div>
        </div>
    </div>
    <div class="w-[519px] h-[382px] left-[110px] top-[368px] absolute bg-white rounded-[30px] border-2 border-purple-500">
        <div class="w-[419px] px-6 py-3.5 left-[50px] top-[50px] absolute bg-slate-50 rounded-[50px] justify-start items-start gap-60 inline-flex">
            <div class="h-[18px] justify-start items-center gap-2.5 flex">
                <div class="h-[18px] justify-start items-center gap-60 flex">
                    <div class="h-[18px] justify-start items-start gap-2 flex">
                        <div class="w-[18px] h-[18px] px-[1.50px] pt-[1.23px] pb-[1.77px] justify-center items-center flex">
                            <div class="w-[15px] h-[15px] relative">
                            </div>
                        </div>
                        <div class="text-center text-slate-400 text-base font-normal font-['DM Sans'] leading-[18px]">Placeholder</div>
                    </div>
                    <div class="w-[18px] h-[18px] px-[1.50px] pt-[1.23px] pb-[1.77px] justify-center items-center flex">
                        <div class="w-[15px] h-[15px] relative">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="w-[419px] p-6 left-[50px] top-[146px] absolute bg-slate-50 rounded-[50px] justify-start items-start gap-60 inline-flex">
            <div class="h-[18px] justify-start items-center gap-2.5 flex">
                <div class="h-[18px] justify-start items-center gap-60 flex">
                    <div class="h-[18px] justify-start items-start gap-2 flex">
                        <div class="w-[18px] h-[18px] px-[1.50px] pt-[1.23px] pb-[1.77px] justify-center items-center flex">
                            <div class="w-[15px] h-[15px] relative">
                            </div>
                        </div>
                        <div class="text-center text-slate-400 text-base font-normal font-['DM Sans'] leading-[18px]">Placeholder</div>
                    </div>
                    <div class="w-[18px] h-[18px] px-[1.50px] pt-[1.23px] pb-[1.77px] justify-center items-center flex">
                        <div class="w-[15px] h-[15px] relative">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="w-[419px] pl-6 pr-2 py-2 left-[50px] top-[262px] absolute bg-slate-50 rounded-[50px] justify-start items-start gap-60 inline-flex">
            <div class="justify-end items-center gap-[161px] flex">
                <div class="h-[18px] justify-start items-start gap-2 flex">
                    <div class="w-[18px] h-[18px] px-[1.50px] pt-[1.23px] pb-[1.77px] justify-center items-center flex">
                        <div class="w-[15px] h-[15px] relative">
                        </div>
                    </div>
                    <div class="text-center text-slate-400 text-base font-normal font-['DM Sans'] leading-[18px]">Placeholder</div>
                </div>
                <div class="px-6 py-[18px] bg-slate-500 rounded-[30px] justify-end items-center gap-2.5 flex">
                    <div class="text-right text-white text-lg font-bold font-['DM Sans'] leading-[18px]">Default</div>
                </div>
            </div>
        </div>
    
    </div>
    <div class="left-[110px] top-[284.36px] absolute text-gray-900 text-4xl font-bold font-['DM Sans'] leading-[46px]">Master inputs text</div>
</div>
      {/* Other components or content can go here */}
    </div>
  );
}

export default App;
