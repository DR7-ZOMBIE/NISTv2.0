import { useState } from "react";
import TopNav from "./components/TopNav.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import NistLearn from "./pages/NistLearn.jsx";
import NistQuiz from "./pages/NistQuiz.jsx";
import NistReview from "./pages/NistReview.jsx";
import About from "./pages/About.jsx";
import { NistProvider } from "./components/Nist";

export default function App() {
  const [route, setRoute] = useState("home"); // home | learn | quiz | review | about

  return (
    <NistProvider>
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 text-slate-800">
        <TopNav route={route} setRoute={setRoute} />
        <main className="mx-auto max-w-6xl px-4 pb-24">
          {route === "home" && <Home setRoute={setRoute} />}
          {route === "learn" && <NistLearn />}
          {route === "quiz" && <NistQuiz />}
          {route === "review" && <NistReview />}
          {route === "about" && <About />}
        </main>
        <Footer />
      </div>
    </NistProvider>
  );
}
