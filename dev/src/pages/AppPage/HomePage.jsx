import Hero from "./Hero"
import Features from "./Features";
import Developer from "./Developer";
import Technologies from "./Technologies";
import AppPage from "./AppPage";

const HomePage = () => {
  return (
    <AppPage>
      <Hero />
      <Features />
      <Developer />
      <Technologies />
    </AppPage>
  );
};

export default HomePage;
