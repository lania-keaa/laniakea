import DevCallout from "@/components/devcallout";
import Title from "@/components/title"
import Link from "next/link";

const navigation = [
  { name: "Projects", href: "/projects", delay: 0 },
  { name: "Contact", href: "/contact", delay: 100},
  { name: "About", href: "/about", delay: 200 },
];

export default function Home() {
  return (
    <main className="flex justify-center w-screen h-screen bg-black bg-gradient-to-tl from-black via-zinc-600/20 to-black relative">
      <DevCallout />
      <div className="absolute flex flex-col h-screen w-screen justify-center items-center overflow-hidden ">
        <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
        <div className="z-10">
          <Title>laniakea</Title>
        </div>
        <div className="hidden w-[75vw] h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      </div>
      <div className="max-w-7xl w-screen h-screen flex justify-end items-center">
        <nav className="flex gap-2">
          <div className="animate-navbar h-[14rem] w-px mr-2 md:block animate-glow bg-white" />
          <ul className="animate-nav flex flex-col gap-4 px-2 self-center text-left">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm md:text-lg sm:text-md font-serif italic duration-500 text-zinc-500 hover:text-zinc-300 active:text-white"
              >
                {item.name}
              </Link>
            ))}
          </ul>
        </nav>
      </div>
    </main>
  )
}
