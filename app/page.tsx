import { Inter } from "next/font/google";
import Hero from "./(home)/Hero";
import WelcomeMsg from "./(home)/WelcomeMsg";
import CallOfAction from "./(home)/CallOfAction";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Hero />
      <WelcomeMsg />
      <CallOfAction />
    </>
  );
}
