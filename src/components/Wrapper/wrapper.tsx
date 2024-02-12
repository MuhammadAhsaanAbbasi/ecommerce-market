import Footer from "@/components/Footer/footer";
import Header from "@/components/Header/header";

export default function Wrapper({ children }: { children: React.ReactNode }) {
    return <main className="max-w-screen-xl mx-auto px-5 sm:px-10 lg:px-16">
        <Header/>
        {children} 
        <Footer/>
        </main>
}