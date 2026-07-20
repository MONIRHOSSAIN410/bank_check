import React, { useState } from "react";

function BankCheckPrinter() {
  // Check Data State
  const [payee, setPayee] = useState("Roy Ang");
  const [amountNumber, setAmountNumber] = useState("12,345,678.00");
  const [amountWordsLine1, setAmountWordsLine1] = useState(
    "One Crore Twenty Three Lakh Forty Five",
  );
  const [amountWordsLine2, setAmountWordsLine2] = useState(
    "Thousand Six Hundred And Seventy Eight Only",
  );
  const [date, setDate] = useState({
    d1: "2",
    d2: "5",
    m1: "0",
    m2: "9",
    y1: "2",
    y2: "0",
    y3: "1",
    y4: "2",
  });
  const [branch, setBranch] = useState("Dhaka Main");
  const [isAcPayee, setIsAcPayee] = useState(true);

  // Trigger Print Window
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center justify-start antialiased print:bg-white print:p-0">
      {/* Dynamic Controls Input Panel (Hidden during printing) */}
      <div className="w-full max-w-4xl bg-white p-6 rounded-lg shadow-md mb-8 border border-gray-200 print:hidden">
        <h2 className="text-xl font-bold mb-4 text-emerald-800">
          Check Dynamic Editor
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Pay To
            </label>
            <input
              type="text"
              value={payee}
              onChange={(e) => setPayee(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded p-2 focus:ring-emerald-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Amount (Tk Number)
            </label>
            <input
              type="text"
              value={amountNumber}
              onChange={(e) => setAmountNumber(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded p-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Amount Words (Line 1)
            </label>
            <input
              type="text"
              value={amountWordsLine1}
              onChange={(e) => setAmountWordsLine1(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded p-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Amount Words (Line 2)
            </label>
            <input
              type="text"
              value={amountWordsLine2}
              onChange={(e) => setAmountWordsLine2(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded p-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Branch Location
            </label>
            <input
              type="text"
              value={branch}
              onChange={(e) => setBranch(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded p-2"
            />
          </div>
          <div className="flex items-center space-x-6 pt-6">
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                checked={isAcPayee}
                onChange={(e) => setIsAcPayee(e.target.checked)}
                className="h-4 w-4 text-emerald-600 rounded"
              />
              <span className="text-sm font-medium text-gray-700">
                A/C PAYEE ONLY Crossing
              </span>
            </label>
            <button
              onClick={handlePrint}
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2 px-6 rounded shadow-md transition-all"
            >
              Print Check
            </button>
          </div>
        </div>
      </div>

      {/* --- PRINTABLE CHECK LEAF CONTAINER --- */}
      {/* Exact traditional check aspect ratio sizing styled gracefully using Tailwind */}
      <div className="relative w-[8.25in] h-[3.65in] bg-[#fbfdf7] border border-emerald-800/20 shadow-xl rounded p-4 text-gray-800 overflow-hidden select-none print:shadow-none print:border-none print:m-0 print:w-[8.25in] print:h-[3.65in]">
        {/* Soft watermark effect styling background */}
        <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
          <div className="w-48 h-48 border-8 border-emerald-950 rounded-full flex items-center justify-center text-4xl font-bold">
            IBBL
          </div>
        </div>

        {/* Top-Left: "A/C PAYEE ONLY" Diagonal Parallel Lines Crossing */}
        {isAcPayee && (
          <div className="absolute top-[-10px] left-[-15px] w-48 h-20 border-b-2 border-t-2 border-slate-700 transform rotate-[32deg] flex items-center justify-center font-sans font-bold text-[10px] tracking-widest text-slate-700">
            A/C PAYEE ONLY
          </div>
        )}

        {/* Top Header: Bank Name Branding */}
        <div className="ml-24 mt-2 flex flex-col">
          <div className="text-emerald-800 text-lg font-bold font-serif leading-none tracking-wide">
            ইসলামী ব্যাংক বাংলাদেশ লিমিটেড
          </div>
          <div className="text-emerald-900 text-sm font-serif font-semibold tracking-wide mt-0.5">
            Islami Bank Bangladesh Limited
          </div>
          <div className="mt-1 flex items-baseline text-xs font-semibold text-gray-700">
            <span className="w-48 border-b border-dotted border-gray-400 text-center italic">
              {branch}
            </span>
            <span className="ml-2 font-normal text-[11px] text-gray-600">
              Branch
            </span>
          </div>
        </div>

        {/* Top-Right: Date Boxes */}
        <div className="absolute top-5 right-6 flex flex-col items-end">
          <div className="flex items-center">
            <span className="text-xs font-serif mr-2 text-gray-700 font-medium">
              Date
            </span>
            <div className="flex border border-gray-600 bg-white">
              {[
                date.d1,
                date.d2,
                date.m1,
                date.m2,
                date.y1,
                date.y2,
                date.y3,
                date.y4,
              ].map((char, index) => (
                <div
                  key={index}
                  className="w-5 h-6 border-r border-gray-400 last:border-r-0 flex items-center justify-center font-mono font-bold text-sm text-black"
                >
                  {char}
                </div>
              ))}
            </div>
          </div>
          {/* Format indicators beneath the grid boxes */}
          <div className="flex pr-.5 mt-0.5 font-mono text-[8px] text-gray-500 tracking-[0.62em]">
            <span>DD</span>
            <span>MM</span>
            <span>YYYY</span>
          </div>
        </div>

        {/* Body Row 1: Payee Info */}
        <div className="mt-6 flex items-baseline w-full pl-2">
          <span className="text-sm font-medium text-gray-700 whitespace-nowrap">
            Pay To
          </span>
          <div className="ml-3 flex-grow border-b border-gray-400 font-mono font-bold text-base text-black px-4 pb-0.5 tracking-wide">
            {payee}
          </div>
          <span className="ml-2 font-mono text-xs font-bold text-gray-400 tracking-tighter">
            OR BEARER
          </span>
        </div>

        {/* Body Row 2: Words Description (Line 1) */}
        <div className="mt-4 flex items-baseline w-full pl-2">
          <span className="text-sm font-medium text-gray-700 whitespace-nowrap">
            The Sum of Taka
          </span>
          <div className="ml-2 flex-grow border-b border-gray-400 font-mono font-semibold text-[14px] text-black px-4 pb-0.5">
            **{amountWordsLine1}
          </div>
        </div>

        {/* Body Row 3: Words Description (Line 2) + Numerical Amount Box side-by-side */}
        <div className="mt-3 flex items-start w-full pl-2">
          <div className="w-[62%] border-b border-gray-400 font-mono font-semibold text-[14px] text-black px-2 pb-0.5 min-h-[28px] mt-2">
            {amountWordsLine2}**
          </div>

          {/* Numerical Taka Box Container */}
          <div className="w-[35%] ml-auto mr-2 bg-gray-50 border-2 border-gray-400 flex items-center h-12 rounded px-2">
            <span className="text-lg font-bold font-serif text-gray-800 border-r border-gray-400 pr-2 mr-3">
              Tk
            </span>
            <span className="font-mono font-bold text-base text-black flex-grow text-center tracking-wide">
              **{amountNumber}**
            </span>
          </div>
        </div>

        {/* Bottom Area: Signatures Info Section */}
        <div className="absolute bottom-6 right-8 w-60 flex flex-col items-center">
          <div className="w-full border-t border-gray-400"></div>
          <span className="text-[9px] font-sans text-gray-500 mt-1 tracking-wider uppercase">
            Please Sign Above This Line
          </span>
        </div>

        {/* Vertical Left Border Micro-Printing text identifier mimics physical checks */}
        <div className="absolute left-1 top-12 bottom-4 w-3 text-center origin-left rotate-90 text-[6px] text-gray-400 tracking-widest uppercase font-mono whitespace-nowrap">
          IBBL - BANGLADESH SECURITY PRINTING & PAPERS LTD.
        </div>
      </div>

      {/* Global CSS Injecting for Strict Printing Dimensions Rules */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @media print {
          body * {
            visibility: hidden;
          }
          .print\\:hidden {
            display: none !important;
          }
          /* Target check box exclusively to position perfectly cleanly at top left corner of page area */
          div[class*="relative w-\\[8.25in\\]"] {
            visibility: visible !important;
            position: absolute !important;
            left: 0 !important;
            top: 0 !important;
            margin: 0 !important;
            padding: 0.25in !important;
            background: #ffffff !important;
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }
          div[class*="relative w-\\[8.25in\\]"] * {
            visibility: visible !important;
          }
        }
      `,
        }}
      />
    </div>
  );
}

export default BankCheckPrinter;
