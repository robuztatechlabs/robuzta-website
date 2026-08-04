'use client';

export function BrandLogosGrid() {
  const brands = [
    {
      name: 'Apple MacBook',
      tag: 'Air, Pro & Mac Studio',
      svg: (
        <svg viewBox="0 0 170 170" fill="currentColor" className="h-7 sm:h-8 w-auto">
          <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-5.02.24-9.87-1.87-14.54-6.35-3.18-2.87-7.05-7.53-11.62-13.98-6.1-8.59-10.9-18.06-14.39-28.43-3.48-10.37-5.22-20.3-5.22-29.8 0-14.42 3.63-26.17 10.88-35.25 7.25-9.08 16.31-13.7 27.18-13.88 4.94 0 10.3 1.25 16.08 3.75 5.78 2.5 9.77 3.75 11.97 3.75 1.76 0 5.88-1.3 12.36-3.88 6.48-2.59 11.97-3.82 16.48-3.7 11.54.48 20.73 4.67 27.58 12.56-10.32 6.23-15.36 15.02-15.12 26.35.24 8.83 3.54 16.14 9.9 21.93 6.36 5.79 13.97 9.08 22.84 9.87-2.35 6.94-5.3 13.88-8.83 20.82zM119.22 31.85c0-6.83 2.53-13.35 7.6-19.56 5.06-6.21 11.35-10.03 18.87-11.47.35 1.65.53 3.12.53 4.41 0 6.95-2.65 13.56-7.95 19.82-5.3 6.26-11.77 9.94-19.41 11.06-.06-1.12-.1-2.02-.1-2.71z"/>
        </svg>
      )
    },
    {
      name: 'Dell',
      tag: 'XPS, Inspiron & Alienware',
      svg: (
        <span className="font-extrabold tracking-widest text-lg font-sans">DELL</span>
      )
    },
    {
      name: 'HP',
      tag: 'Spectre, OMEN & Pavilion',
      svg: (
        <span className="font-black italic tracking-tighter text-xl font-sans">hp</span>
      )
    },
    {
      name: 'Lenovo',
      tag: 'ThinkPad, Legion & Yoga',
      svg: (
        <span className="font-extrabold tracking-tight text-lg font-sans uppercase">Lenovo</span>
      )
    },
    {
      name: 'ASUS',
      tag: 'ROG, TUF & ZenBook',
      svg: (
        <span className="font-black tracking-widest text-lg font-sans">ASUS</span>
      )
    },
    {
      name: 'Microsoft Surface',
      tag: 'Surface Pro & Laptop',
      svg: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 sm:h-7 w-auto">
          <path d="M0 3.449L9.75 2.1v9.451H0m10.95-9.6l13.05-1.8v11.25H10.95m-10.95 1L9.75 12.4v9.5H0m10.95-9.4H24v11.35l-13.05-1.8"/>
        </svg>
      )
    },
    {
      name: 'Apple iPhone',
      tag: 'Pro Max & Standard Series',
      svg: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 sm:h-7 w-auto">
          <path d="M17 2H7C5.89543 2 5 2.89543 5 4V20C5 21.1046 5.89543 22 7 22H17C18.1046 22 19 21.1046 19 20V4C19 2.89543 18.1046 2 17 2ZM12 20C11.4477 20 11 19.5523 11 19C11 18.4477 11.4477 18 12 18C12.5523 18 13 18.4477 13 19C13 19.5523 12.5523 20 12 20Z"/>
        </svg>
      )
    },
    {
      name: 'Samsung Galaxy',
      tag: 'S-Series, Z Fold & Flip',
      svg: (
        <span className="font-black tracking-widest text-base font-sans uppercase">SAMSUNG</span>
      )
    },
    {
      name: 'Google Pixel',
      tag: 'Pixel Pro & Fold Series',
      svg: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 sm:h-7 w-auto">
          <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"/>
        </svg>
      )
    },
    {
      name: 'Acer & Gaming',
      tag: 'Predator, Nitro & Swift',
      svg: (
        <span className="font-extrabold tracking-tight text-lg font-sans">acer</span>
      )
    }
  ];

  return (
    <section className="py-14 bg-white border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Brand Logos Vector Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3.5">
          {brands.map((b) => (
            <div
              key={b.name}
              className="group flex flex-col items-center justify-center p-5 rounded-2xl bg-slate-50 hover:bg-white border border-slate-200/80 hover:border-[#0E7C7B] transition-all shadow-sm text-slate-800 hover:text-[#0E7C7B]"
            >
              <div className="mb-1.5 text-slate-900 group-hover:text-[#0E7C7B] transition-colors flex items-center justify-center h-8">
                {b.svg}
              </div>
              <span className="text-xs font-black text-slate-900 group-hover:text-[#0E7C7B] transition-colors">
                {b.name}
              </span>
              <span className="font-tech text-[10px] text-slate-500 font-bold mt-0.5">
                {b.tag}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
