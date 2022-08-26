import Image from "next/image";
import { MenuIcon, SearchIcon } from "@heroicons/react/outline";
import { ShoppingCartIcon } from "@heroicons/react/solid";
import { useSession, signIn, signOut } from "next-auth/react";


function Header() {
  const search = () => {
    alert("search not available");
  };
  const { data: session } = useSession();
  if (session) {
    return (
      <div className={styles.container}>
        Welcome user
        <br />
        <button onClick={() => signOut()}>Sign out</button>
      </div>
    );
  }
  return (
    <header style={{ position: "sticky", top: 0 }} className="z-50">
      <div
        style={{
          "border-radius": "0px 0px 30px 30px",
          "background-color": "#233448",
          "border-bottom": "7px solid #FE9B00",
          "box-shadow": "3px 3px 13px -2px ",
          "justify-content": "space-between",
          "padding-top": "1rem",
          "padding-bottom": "1.5rem",
          "flex-grow": 1,
        }}
        className="sm:flex p-2 sm:p-5 "
      >
        <div className="mt-2 flex items-center flex-grow sm:flex-grow-0 justify-between md:ml-10">
          <Image
            src="https://links.papareact.com/f90"
            width={150}
            height={50}
            objectFit="contain"
            className="cursor-pointer"
          />
          <div className="inline-flex sm:hidden text-white items-center space-x-6 mx-1 sm:mx-6 whitespace-nowrap mb-3">
            <div className="hidden sm:inline-flex cursor-pointer hover:underline text-xs md:text-lg ">
              <p onClick={search}>Hello, Bhavik Arora</p>
            </div>
            <div className="flex items-center cursor-pointer hover:underline bg-yellow-400 rounded-full text-black px-3 space-x-3 py-1">
              <div className="relative">
                <span className="absolute top-0 right-0 h-4 w-4 bg-yellow-600 rounded-full text-center text-md font-bold">
                  2
                </span>
                <ShoppingCartIcon className="h-8 badaHoja" />
              </div>
              <MenuIcon className="h-8 badaHoja" />
            </div>
          </div>
        </div>
        <div className="bg-yellow-400 hover:bg-yellow-500 flex flex-grow cursor-pointer items-center justify-around max-w-4xl rounded-full mx-2 sm:mx-5 mt-2 p-0">
          <input
            type="text"
            className="p-4 h-full w-6 flex-grow rounded-full flex-shrink focus:outline-none"
          />
          <SearchIcon
            style={{ height: "3.5rem" }}
            className="badaHoja p-3 mr-3"
            onClick={search}
          />
        </div>
        <div className="hidden sm:inline-flex text-white items-center text-xs space-x-6 mx-6 whitespace-nowrap">
          <div className="cursor-pointer hover:underline md:text-sm">
            <p>Hello, Bhavik Arora</p>
          </div>
          <div className="flex items-center cursor-pointer hover:underline bg-yellow-400 rounded-full text-black px-3 space-x-3 py-1">
            <div className="relative">
              <span className="absolute top-0 right-0 h-4 w-4 bg-yellow-600 rounded-full text-center text-md font-bold">
                2
              </span>
              <ShoppingCartIcon className="h-10 badaHoja" />
            </div>
            <MenuIcon className="h-9 badaHoja" />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2">
        <div className="bg-amazon_blue-light"></div>
        <div className="bg-yellow-400"></div>
      </div>
    </header>
  );
}

export default Header;
