import React from "react"

type Props = {}

function Header({}: Props) {
  return (
    <nav className="flex justify-between items-center px-5 py-3 border-b-black border-b-[1px]">
      <div className="font-semibold">CLONG</div>
      <div className="text-lg">Redux | NextJS 13</div>

      <a
        href="https://github.com/clonglam"
        target="_blank"
        className="px-6 py-2 border-[1px] border-black rounded-full hover:shadow-md transition-all duration-200 hover:bg-gray-100"
      >
        Github
      </a>
    </nav>
  )
}

export default Header
