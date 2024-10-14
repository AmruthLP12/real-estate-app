import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div className="p-6 px-10 flex justify-between">
      <div className="flex gap-12 items-center">
        <Logo/>
        {/* <Image
          src="/Logo-PropertyXpert.svg"
          width={150}
          height={150}
          alt="PropertyXpert"
        /> */}
        <ul className="hidden md:flex gap-10">
          <li>For Sale</li>
          <li>For Rent</li>
          <li>Agent Finder</li>
        </ul>
      </div>
      <div className="flex">
        <Button className='flex gap-2'>
          <Plus className="h-5 w-5" /> Post Your Ad
        </Button>
        <Button variant='outline'>Login</Button>
      </div>
    </div>
  );
};

export default Header;
