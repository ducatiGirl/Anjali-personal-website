import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="w-full bg-[#FFF1E5] border-b border-[#e9decf] font-sans">
      <div className="max-w-[1200px] mx-auto flex justify-between items-center px-6 h-14">
        
        {/* Logo Section */}
        <Link to="/" className="text-xl font-bold uppercase tracking-tight text-[#333] no-underline group-hover:text-[#005f54] transition-all">
          Anjali's Page
        </Link>
        
        <ul className="flex list-none p-0 m-0 items-center h-full">
          {/* 1. Added 'group' class here to trigger children on hover */}
          <li className="relative h-full flex items-center group">
            
            <button className="px-4 h-full uppercase text-[13px] font-bold tracking-wider cursor-pointer border-none bg-transparent text-[#333] group-hover:text-[#005f54] transition-all">
              Projects
              {/* 2. The teal underline bar that appears on hover */}
              <div className="absolute bottom-0 left-0 w-full h-[4px] bg-[#005f54] scale-x-0 group-hover:scale-x-100 transition-transform duration-200" />
            </button>

            {/* 3. Dropdown Menu - Now uses group-hover:block */}
            <ul className="absolute top-full right-0 mt-0 min-w-[180px] bg-[#FFF1E5] shadow-md border border-[#e9decf] list-none p-0 z-50 hidden group-hover:block">
              <li>
                <Link 
                  to="/projects/punyam" 
                  className="block py-3 px-4 text-[13px] font-bold uppercase text-[#333] no-underline hover:bg-[#f2e5d9] transition-colors"
                >
                  Punyam
                </Link>
              </li>
              <li>
                <Link 
                  to="/projects/iCare" 
                  className="block py-3 px-4 text-[13px] font-bold uppercase text-[#333] no-underline hover:bg-[#f2e5d9] transition-colors"
                >
                  iCare
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  );
}