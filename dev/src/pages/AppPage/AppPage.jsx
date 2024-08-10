import Header from "../../components/Header";
import Footer from "../../components/Footer";

const AppPage = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default AppPage;
