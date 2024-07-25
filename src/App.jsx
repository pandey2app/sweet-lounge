import { useEffect, useState } from "react";
import Loader from "./components/Loader";
import Footer from "./layouts/Footer";
import Header from "./layouts/Header";
import Router from "./route/Router";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <>
      {isLoading ?
        <Loader /> :
        <>
          <Header />
          <Router />
          <Footer />
        </>
      }
    </>);
}

export default App;
