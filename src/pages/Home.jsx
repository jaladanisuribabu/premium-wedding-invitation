import useLoading from "../hooks/useLoading";

import LoadingScreen from "../components/LoadingScreen/LoadingScreen";

import CursorSparkle from "../components/CursorSparkle/CursorSparkle";

import Hero from "../components/Hero/Hero";
import Countdown from "../components/Countdown/Countdown";
import EventSection from "../components/EventSection/EventSection";
import CoupleStory from "../components/CoupleStory/CoupleStory";
import Gallery from "../components/Gallery/Gallery";
import Family from "../components/Family/Family";
import Venue from "../components/Venue/Venue";
import RSVP from "../components/RSVP/RSVP";
import Footer from "../components/Footer/Footer";

import MusicPlayer from "../components/MusicPlayer/MusicPlayer";
import WhatsappButton from "../components/WhatsappButton/WhatsappButton";

export default function Home() {

  const loading =
    useLoading();

  if (loading)
    return <LoadingScreen />;

  return (
    <>
      <CursorSparkle />

      <MusicPlayer />

      <WhatsappButton />

      <Hero />

      <Countdown />

      <EventSection />

      <CoupleStory />

      <Gallery />

      <Family />

      <Venue />

      <RSVP />

      <Footer />
    </>
  );
}