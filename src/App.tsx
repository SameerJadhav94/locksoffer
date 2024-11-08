import { Header } from "@/components/Header";
import { Features } from "@/components/Features";
import { MainContent } from "@/components/MainContent";
import { Footer } from "@/components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary/50 to-background">
      <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      <Header />
      <main className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <Features />
        <MainContent />
      </main>
      <Footer />
    </div>
  );
}

export default App;