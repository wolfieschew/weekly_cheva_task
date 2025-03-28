import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header class="fixed top-0 left-0 w-full border-b z-50">
        <div class="flex justify-between items-center text-black sm:px-[20%] px-[10%] py-[1rem]">
            {/* Logo */}
            <div class="icon-title">
                <h1 class="text-3xl font-bold">Medium</h1>
            </div>

            <nav>
                <ul id="nav-bar" class="sm:flex hidden gap-[1rem]">
                    <li><a href="#">Our Story</a></li>
                    <li><a href="#">Membership</a></li>
                    <li><a href="#">Write</a></li>
                    <li><a href="#">Sign in</a></li>
                    <li><a class="bg-black text-white px-[1rem] py-[0.5rem] rounded-[2rem]" href="#">Get started</a>
                    </li>
                </ul>
            </nav>

        
            <div class="sm:hidden">
                <button id="menu-btn" class="text-3xl">
                    <i class="bx bx-menu"></i>
                </button>
            </div>
        </div>

        <div id="mobile-menu" class="hidden sm:hidden flex flex-col items-center gap-3 p-4 bg-gray-100">
            <a href="#">Our Story</a>
            <a href="#">Membership</a>
            <a href="#">Write</a>
            <a href="#">Sign in</a>
            <a class="bg-black text-white px-[1rem] py-[0.5rem] rounded-[2rem]" href="#">Get started</a>
        </div>
    </header>
  );
}
