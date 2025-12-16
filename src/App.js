import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Advantage from "./components/Advantage/Advantage";
import Stats from "./components/Stats/Stats";
import Trust from "./components/Trust/Trust";
import Recommendation from "./components/Rec/Rec";
import What from "./components/What/What";
import QuoteChuhutina from "./components/QuoteChuhutina/QuoteChuhutina";
import Track from "./components/Track/Track";
import Footer from "./components/Footer/Footer";
function App() {
    return (
        <div className="app-container">
            <Header />
            <div className="main-content">
                <div className="content-wrapper">
                    <Hero />
                    <Advantage />
                    <Stats />
                    <Trust />
                    <Recommendation />
                </div>
            </div>
            <What />
            <div className="main-content">
                <div className="content-wrapper">
                    <QuoteChuhutina />
                    <Track />
                    {/* <Problems />
                    <QuoteDmitrieva />
                    <Examples /> */}
                </div>
            </div>
            {/* <WhoComes />
            <Reviews />
            <FormatsInteractions />
            <Contact /> */}
            <Footer />
        </div>
    );
}

export default App;