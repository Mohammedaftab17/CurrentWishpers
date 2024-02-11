import { Moon, Sun, LogOut, ZapOff,CircleUser ,Home,Info ,UnlockKeyhole   } from "lucide-react";
import React from "react";

export function DarkBtn() {
  return (
    <div>
      <Moon size={28} strokeWidth={1.25} />
    </div>
  );
}
export function LogoutBtn() {
  return (
    <div>
      <LogOut size={32} strokeWidth={1.25} />
    </div>
  );
}

export function LightBtn() {
  return (
    <div>
      <Sun size={28} strokeWidth={1.25} />
    </div>
  );
}

export function Logo() {
  return (
    <div>
      <ZapOff strokeWidth={1.20} />
    </div>
  );
}
export function HomeIcon() {
  return (
    <div>
      <Home size={30} strokeWidth={0.75} />
    </div>
  );
}

export function Contact() {
  return (
    <div>
     <CircleUser size={30} strokeWidth={1} />
    </div>
  );
}
export function Privacy() {
  return (
    <div>
     <UnlockKeyhole size={30} strokeWidth={1} />
    </div>
  );
}
export function About() {
  return (
    <div>
     <Info size={30} strokeWidth={1} />
    </div>
  );
}

function Mode() {
  return (
    <>
      <DarkBtn />
      <LightBtn />
      <LogoutBtn />
      <Logo />
      <HomeIcon/>
      <About/>
      <Privacy/>
      <Contact/>
    </>
  );
}

export default Mode;
