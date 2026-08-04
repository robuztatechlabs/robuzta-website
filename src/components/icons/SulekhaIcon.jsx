'use client';

export function SulekhaIcon({ size = 24, className = '' }) {
  return (
    <div className={`inline-flex items-center gap-1.5 font-bold font-sans text-xl ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
      >
        <path
          d="M16 2C16 2 26 8 26 18C26 23.5228 21.5228 28 16 28C10.4772 28 6 23.5228 6 18C6 11 16 2 16 2Z"
          fill="#E53935"
        />
        <path
          d="M16 10C16 10 21 14 21 19C21 21.7614 18.7614 24 16 24C13.2386 24 11 21.7614 11 19C11 15 16 10 16 10Z"
          fill="#FFCC00"
        />
      </svg>
      <span className="font-extrabold text-[#D32F2F] tracking-tight">Sulekha</span>
    </div>
  );
}
