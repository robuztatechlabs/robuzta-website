'use client';

export function BrandLogosGrid() {
  const brands = [
    {
      name: 'Apple',
      tag: 'MacBook & iPhone',
      svg: (
        <svg viewBox="0 0 170 170" fill="currentColor" className="h-8 sm:h-9 w-auto">
          <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-5.02.24-9.87-1.87-14.54-6.35-3.18-2.87-7.05-7.53-11.62-13.98-6.1-8.59-10.9-18.06-14.39-28.43-3.48-10.37-5.22-20.3-5.22-29.8 0-14.42 3.63-26.17 10.88-35.25 7.25-9.08 16.31-13.7 27.18-13.88 4.94 0 10.3 1.25 16.08 3.75 5.78 2.5 9.77 3.75 11.97 3.75 1.76 0 5.88-1.3 12.36-3.88 6.48-2.59 11.97-3.82 16.48-3.7 11.54.48 20.73 4.67 27.58 12.56-10.32 6.23-15.36 15.02-15.12 26.35.24 8.83 3.54 16.14 9.9 21.93 6.36 5.79 13.97 9.08 22.84 9.87-2.35 6.94-5.3 13.88-8.83 20.82zM119.22 31.85c0-6.83 2.53-13.35 7.6-19.56 5.06-6.21 11.35-10.03 18.87-11.47.35 1.65.53 3.12.53 4.41 0 6.95-2.65 13.56-7.95 19.82-5.3 6.26-11.77 9.94-19.41 11.06-.06-1.12-.1-2.02-.1-2.71z"/>
        </svg>
      )
    },
    {
      name: 'Google Pixel',
      tag: 'Pixel & Android',
      svg: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 sm:h-8 w-auto">
          <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"/>
        </svg>
      )
    },
    {
      name: 'Android',
      tag: 'OS & Firmware',
      svg: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 sm:h-8 w-auto">
          <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997 0-.551.4482-.9993.9993-.9993.5511 0 .9993.4483.9993.9993 0 .5511-.4482.9997-.9993.9997zm-11.046 0c-.5511 0-.9993-.4486-.9993-.9997 0-.551.4482-.9993.9993-.9993.5511 0 .9993.4483.9993.9993 0 .5511-.4482.9997-.9993.9997zm11.3948-6.1956l1.9686-3.4093c.1251-.2167.0508-.4938-.1659-.619-.2167-.1251-.4938-.0508-.619.1659l-1.9967 3.4582c-1.4659-.6692-3.1118-1.0478-4.8588-1.0478s-3.3929.3786-4.8588 1.0478L5.3444 5.2831c-.1252-.2167-.4023-.291-.619-.1659-.2167.1252-.291.4023-.1659.619l1.9686 3.4093c-3.1554 1.7208-5.3281 4.9082-5.5281 8.6545h22.0001c-.2-3.7463-2.3727-6.9337-5.5281-8.6545z"/>
        </svg>
      )
    },
    {
      name: 'Windows',
      tag: 'PCs & Laptops',
      svg: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 sm:h-8 w-auto">
          <path d="M0 3.449L9.75 2.1v9.451H0m10.95-9.6l13.05-1.8v11.25H10.95m-10.95 1L9.75 12.4v9.5H0m10.95-9.4H24v11.35l-13.05-1.8"/>
        </svg>
      )
    },
    {
      name: 'Dell',
      tag: 'XPS & Inspiron',
      svg: (
        <svg viewBox="0 0 100 100" fill="currentColor" className="h-8 sm:h-9 w-auto">
          <path d="M50 0C22.4 0 0 22.4 0 50s22.4 50 50 50 50-22.4 50-50S77.6 0 50 0zm0 90C27.9 90 10 72.1 10 50S27.9 10 50 10s40 17.9 40 40-17.9 40-40 40zm-22-60h12c12 0 18 6 18 16s-6 16-18 16H28V30zm10 24h3c5 0 8-2 8-8s-3-8-8-8h-3v16z"/>
        </svg>
      )
    },
    {
      name: 'HP',
      tag: 'Spectre & OMEN',
      svg: (
        <svg viewBox="0 0 100 100" fill="currentColor" className="h-8 sm:h-9 w-auto">
          <path d="M50 0C22.4 0 0 22.4 0 50s22.4 50 50 50 50-22.4 50-50S77.6 0 50 0zm-7 75l7-42h7l-7 42h-7zm-14 0l7-42h7l-3.5 21H50l3.5-21h7l-7 42h-7l3.5-21H32.5L29 75h-7z"/>
        </svg>
      )
    },
    {
      name: 'Lenovo',
      tag: 'ThinkPad & Legion',
      svg: (
        <svg viewBox="0 0 200 50" fill="currentColor" className="h-6 sm:h-7 w-auto">
          <path d="M10 5h12v30H10V5zm25 0h25v6H41v6h16v6H41v6h19v6H35V5zm35 0h6l12 18V5h6v30h-6L76 17v18h-6V5zm32 0h20c8 0 12 4 12 10v10c0 6-4 10-12 10h-20V5zm6 6v18h14c4 0 6-2 6-5V16c0-3-2-5-6-5h-14zm40-6h20c8 0 12 4 12 10v10c0 6-4 10-12 10h-20V5zm6 6v18h14c4 0 6-2 6-5V16c0-3-2-5-6-5h-14z"/>
        </svg>
      )
    },
    {
      name: 'Asus',
      tag: 'ROG & ZenBook',
      svg: (
        <svg viewBox="0 0 200 40" fill="currentColor" className="h-6 sm:h-7 w-auto">
          <path d="M20 5L5 35h10l3-6h14l3 6h10L30 5H20zm5 8l4 10h-8l4-10zm35-8h25v6H66v7h16v6H66v8h20v6H60V5zm35 0h6v22c0 3 2 5 6 5s6-2 6-5V5h6v22c0 6-5 10-12 10s-12-4-12-10V5zm40 0h25v6h-19v7h16v6h-16v8h20v6h-26V5z"/>
        </svg>
      )
    },
    {
      name: 'Acer',
      tag: 'Predator & Swift',
      svg: (
        <svg viewBox="0 0 200 50" fill="currentColor" className="h-6 sm:h-7 w-auto">
          <path d="M20 15c-10 0-15 6-15 15s5 15 15 15h15v-6H20c-6 0-9-3-9-9s3-9 9-9h20v-6H20zm40 0c-8 0-12 4-12 10v15h6v-15c0-3 2-5 6-5s6 2 6 5v15h6V25c0-6-4-10-12-10zm45 0c-10 0-15 6-15 15s5 15 15 15 15-6 15-15-5-15-15-15zm0 6c6 0 9 3 9 9s-3 9-9 9-9-3-9-9 3-9 9-9zm40-6c-8 0-12 4-12 10v15h6V25c0-3 2-5 6-5h4v-5h-4z"/>
        </svg>
      )
    },
    {
      name: 'Samsung',
      tag: 'Galaxy & Book',
      svg: (
        <svg viewBox="0 0 200 45" fill="currentColor" className="h-6 sm:h-7 w-auto">
          <path d="M15 10c-5 0-8 3-8 6s3 5 10 7c7 2 11 4 11 9s-4 8-11 8-12-4-12-9h6c0 3 3 4 6 4s5-1 5-4-3-4-9-6C6 17 2 14 2 9c0-5 5-9 13-9s12 3 12 8h-6c0-3-2-3-6-3zm30-10L32 35h6l3-7h12l3 7h6L52 0H45zm3.5 7l4 13h-8l4-13zm32.5-7l-8 23-8-23h-6v35h6V12l7 23h4l7-23v23h6V0h-8zm35 10c-5 0-8 3-8 6s3 5 10 7c7 2 11 4 11 9s-4 8-11 8-12-4-12-9h6c0 3 3 4 6 4s5-1 5-4-3-4-9-6c-7-2-11-5-11-10 0-5 5-9 13-9s12 3 12 8h-6c0-3-2-3-6-3zm35-10v22c0 6-4 10-12 10s-12-4-12-10V0h6v22c0 3 2 5 6 5s6-2 6-5V0h6zm20 0l-12 35h6l3-7h12l3 7h6L195 0h-7zm3.5 7l4 13h-8l4-13z"/>
        </svg>
      )
    }
  ];

  return (
    <section className="py-16 bg-white border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        

        {/* Brand Logos Vector Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {brands.map((b) => (
            <div
              key={b.name}
              className="group flex flex-col items-center justify-center p-6 rounded-2xl bg-slate-50 hover:bg-white border border-slate-200/80 hover:border-[#0E7C7B] transition-all shadow-sm hover:shadow-md text-slate-800 hover:text-[#0E7C7B]"
            >
              <div className="mb-2 text-slate-900 group-hover:text-[#0E7C7B] transition-colors">
                {b.svg}
              </div>
              <span className="text-sm font-black text-slate-900 group-hover:text-[#0E7C7B] transition-colors">
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
