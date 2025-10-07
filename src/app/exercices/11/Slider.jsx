"use client";

export default function Slider({ value, min, max, onChange }) {
  return (
    <div className="range">
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        step="1"
        onChange={(e) => {
          const value = Number(e.target.value);
          onChange(value);
        }}
      />
      <div>{value}</div>
    </div>
  );
}
