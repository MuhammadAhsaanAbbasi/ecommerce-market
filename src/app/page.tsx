import Categories from "@/components/Category/categories";
import Hero from "@/components/Hero/hero";
import Wrapper from "@/components/Wrapper/wrapper";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <Wrapper>
    <Hero />
    <Categories/>
      <div className="bg-red-500">
        <h1>E-Commerce Store</h1>
      </div>
    </Wrapper>
    </>
  );
}
