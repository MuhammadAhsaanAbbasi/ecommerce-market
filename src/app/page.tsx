import Categories from "@/components/Category/categories";
import Hero from "@/components/Hero/hero";
import Promotion from "@/components/Promotion/promotion";
import Wrapper from "@/components/Wrapper/wrapper";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <Wrapper>
    <Hero />
    <Categories/>
    <Promotion/>
    </Wrapper>
    </>
  );
}
