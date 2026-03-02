import Image from "next/image";
import { Nav } from "./components/layout/Nav";
import { Footer } from "./components/layout/Footer";

export default function Home() {
  return (
    <div>
      <Nav/>
      <Footer/>
    </div>
  );
}
