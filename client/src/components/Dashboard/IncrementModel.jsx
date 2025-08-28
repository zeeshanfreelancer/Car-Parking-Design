import React, { useState, useEffect } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";

export default function IncrementModel({ open, onClose }) {
  const [increment, setIncrement] = useState(100); // default increment
  const [values, setValues] = useState([]);
  const [asking, setAsking] = useState(5000); // default asking
  const totalCells = 80; // 8 columns × 10 rows

  // Generate fixed grid values based on increment
  useEffect(() => {
    let arr = [];
    for (let i = 1; i <= totalCells; i++) {
      arr.push(i * increment);
    }
    setValues(arr);
  }, [increment]);

  // Disable background scroll when modal is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  // Handle Bid click
  const handleBid = () => {
    setAsking((prev) => prev + increment);
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ background: "rgba(0,0,0,0.7)" }}
    >
      {/* Modal Box */}
      <div
        className="relative w-full max-w-6xl overflow-hidden flex flex-col md:flex-row h-[90vh] shadow-2xl"
        style={{
          background: "var(--popup_field_back, var(--main_field_back))",
          color: "var(--popup_field_text, var(--text_main))",
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-2xl font-bold cursor-pointer"
          style={{
            color: "var(--button_note_text)",
          }}
        >
          <IoIosCloseCircleOutline />
        </button>

        {/* Left Section */}
        <div className="flex-1 flex flex-col p-4">
          {/* Asking */}
          <div
            className="text-center py-2 text-2xl font-bold mb-2 rounded"
            style={{
              background: "var(--list1_back)",
              color: "var(--button_update_text)",
            }}
          >
            ASKING <br /> ${asking}
          </div>

          {/* Price Grid */}
          <div
            className="grid grid-cols-8 flex-1 overflow-y-auto border"
            style={{
              borderColor: "var(--button_note_border)",
            }}
          >
            {values.map((val, idx) => (
              <div
                key={idx}
                className="p-1 text-center border outline-none text-sm cursor-pointer"
                style={{
                  borderColor: "var(--button_note_border)",
                  background:
                    val === asking
                      ? "var(--button_update_back)"
                      : "transparent",
                  color:
                    val === asking
                      ? "var(--button_update_text)"
                      : "var(--popup_field_text, var(--text_main))",
                  fontWeight: val === asking ? "bold" : "normal",
                  transition: "background 0.2s, color 0.2s",
                }}
              >
                ${val}
              </div>
            ))}
          </div>

          {/* Reserve + Bid */}
          <div className="flex justify-between mt-2 gap-2">
            <button
              className="flex-1 py-1 border font-bold cursor-pointer"
              style={{
                borderColor: "var(--button_note_border)",
                background: "transparent",
                color: "var(--button_note_text)",
                transition: "background 0.2s, color 0.2s",
              }}
            >
              RESERVE
              <span className="block">$</span>
            </button>
            <button
              onClick={handleBid}
              className="flex-1 py-1 font-bold cursor-pointer"
              style={{
                background: "var(--button_update_back)",
                color: "var(--button_update_text)",
                fontSize: "1.5rem",
                transition: "background 0.2s, color 0.2s",
              }}
            >
              BID
            </button>
          </div>
        </div>

        {/* Right Section (Bid Increments) */}
        <div
          className="w-full md:w-72 p-4 overflow-y-auto"
          style={{
            color: "var(--popup_field_text, var(--text_main))",
          }}
        >
          <h2 className="text-center text-lg font-bold mb-4">BID INCREMENTS</h2>
          <div className="space-y-3">
            {[25, 50, 100, 200, 250, 500, 1000].map((inc) => (
              <button
                key={inc}
                onClick={() => setIncrement(inc)}
                className="w-full py-2 border text-2xl cursor-pointer transition font-bold"
                style={{
                  borderColor: "var(--button_note_border)",
                  background:
                    increment === inc
                      ? "var(--button_update_back)"
                      : "transparent",
                  color:
                    increment === inc
                      ? "var(--button_update_text)"
                      : "var(--popup_field_text, var(--text_main))",
                  fontWeight: increment === inc ? "bold" : "normal",
                  transition: "background 0.2s, color 0.2s",
                }}
              >
                ${inc}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}