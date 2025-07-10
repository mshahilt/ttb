import Main from "@/sections/Main";
import Section_1 from "@/sections/Section_1";
import Section_2 from "@/sections/section_2";
import Section_3 from "@/sections/Section_3";
import Section_4 from "@/sections/Section_4";
import Section_5 from "@/sections/Section_5";
import Section_6 from "@/sections/Section_6";
import Footer from "@/components/layout/Footer";
import Reveal from "@/components/ui/Reveal";

export default function Home() {
  return (
   <div className="font-lufga bg-primary">
      <Reveal><Main/></Reveal>
      <Reveal delay={0.1}><Section_1/></Reveal>
      <Reveal delay={0.2}><Section_2/></Reveal>
      <Reveal delay={0.3}><Section_3/></Reveal>
      <Reveal delay={0.4}><Section_4/></Reveal>
      <Reveal delay={0.5}><Section_5/></Reveal>
      <Reveal delay={0.6}><Section_6/></Reveal>
      <Footer/>
    </div>
  );
}
