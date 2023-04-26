import Image from "next/image"

import Section from "../components/section"
import SectionImage from "../components/sectionImage"
import SectionContent from "../components/sectionContent"
import Title from "../components/ui/title"
import Paragraph from "../components/ui/paragraph"
import Button from "../components/ui/button"

import { Inter } from "next/font/google"
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue
} from "framer-motion";
import { useState, useRef, useEffect, Children } from "react"
import Link from "next/link"


const inter = Inter({ subsets: ["latin"] })

// state to keep track of the current section




export default function Home() {
  const [visibleSectionId, setVisibleSectionId] = useState(null);
  const [color, setColor] = useState("#06B6D4");
  const sectionRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const sectionHeight = window.innerHeight;

      switch (true) {
        case scrollY < sectionHeight:
          setVisibleSectionId(null);
          break;
        case scrollY < sectionHeight * 3:
          setVisibleSectionId("Projekte");
          setColor("#06B6D4");
          break;
        case scrollY < sectionHeight * 4:
          setVisibleSectionId("Mission");
          setColor("#14B8A6");
          break;
        default:
          setVisibleSectionId("Kontakt");
          break;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
    
  return (
    <>
    <main className={`grid min-h-screen overflow-hidden  ${inter.className}`}>

      <nav className="fixed top-3 justify-end gap-4 z-20 flex container mx-auto w-full text-lg items-center ">
        
        <h2 
          className=" uppercase text-xl lg:text-2xl z-30" 
          style={{color: color}}>
            {visibleSectionId}
        </h2>

        <a href="#projects" className={`${visibleSectionId == "Projekte" && "animate-spin"}`}>
          <svg width="33" height="33" viewBox="0 0 33 33" fill="current" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.5713 0.656738H13.5713V10.6924L6.47489 3.59598L2.93936 7.13152L10.0359 14.228H0V19.228H10.0356L2.93945 26.3242L6.47499 29.8598L13.5713 22.7634V32.7993H18.5713V22.7634L25.6676 29.8598L29.2031 26.3242L22.1069 19.228H32.1426V14.228H22.1067L29.2032 7.13152L25.6677 3.59598L18.5713 10.6924V0.656738Z" fill={color} />
          </svg>
        </a>

        <a href="#mission" className={`${visibleSectionId == "Mission" && "animate-pulse"}`}>
          <svg width="34" height="35" viewBox="0 0 34 35" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd"  clipRule="evenodd" d="M16.8447 29.3462C23.3864 29.3462 28.6895 24.0431 28.6895 17.5015C28.6895 10.9598 23.3864 5.65674 16.8447 5.65674C10.3031 5.65674 5 10.9598 5 17.5015C5 24.0431 10.3031 29.3462 16.8447 29.3462ZM16.8447 34.3462C26.1478 34.3462 33.6895 26.8046 33.6895 17.5015C33.6895 8.19838 26.1478 0.656738 16.8447 0.656738C7.54164 0.656738 0 8.19838 0 17.5015C0 26.8046 7.54164 34.3462 16.8447 34.3462Z" fill={color}/>
          </svg>
        </a>

        <a href="#contact" className={`${visibleSectionId == "Kontakt" && "animate-pulse"}`}>
          <svg width="29" height="30" viewBox="0 0 29 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M8.3705 5.97559V0.975586H23.3705H28.3705V4.51118L28.3705 4.51121L28.3705 4.51123V5.97559L28.3705 20.9756H23.3705V9.51123L3.53554 29.3462L0 25.8107L19.8351 5.97559H8.3705Z" fill={color}/>
          </svg>
        </a>

      </nav>



      {/* Header */}
      <header className="h-screen w-screen relative  z-30 bg-white overflow-hidden">

        <div className="container items-center px-6 mx-auto flex flex-col w-full justify-center align-center flex-wrap h-full pb-20">
          <h1 className="text-4xl 2xl:text-5xl  font-bold tracking-tighter  mb-16">
            viadukt
          </h1>


          <div className=" flex">

            <a href="#projects" className="flex flex-col items-center hover:animate-pulse uppercase text-xl lg:text-2xl mr-4 lg:mr-8 text-cyan-900 hover:text-cyan-500 transition-color">
              <svg className="mb-2 lg:mb-3 w-7 h-7 fill-current"  viewBox="0 0 34 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.5713 0.656738H13.5713V10.6924L6.47489 3.59598L2.93936 7.13152L10.0359 14.228H0V19.228H10.0356L2.93945 26.3242L6.47499 29.8598L13.5713 22.7634V32.7993H18.5713V22.7634L25.6676 29.8598L29.2031 26.3242L22.1069 19.228H32.1426V14.228H22.1067L29.2032 7.13152L25.6677 3.59598L18.5713 10.6924V0.656738Z" />
              </svg>
              Projekte
            </a>

            <a href="#mission" className="flex flex-col items-center hover:animate-pulse uppercase text-xl lg:text-2xl mr-4 lg:mr-8 text-cyan-900 hover:text-amber-500 transition-color">
              <svg className="mb-2 lg:mb-3 w-7 h-7 fill-current"  viewBox="0 0 34 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M16.8447 29.3462C23.3864 29.3462 28.6895 24.0431 28.6895 17.5015C28.6895 10.9598 23.3864 5.65674 16.8447 5.65674C10.3031 5.65674 5 10.9598 5 17.5015C5 24.0431 10.3031 29.3462 16.8447 29.3462ZM16.8447 34.3462C26.1478 34.3462 33.6895 26.8046 33.6895 17.5015C33.6895 8.19838 26.1478 0.656738 16.8447 0.656738C7.54164 0.656738 0 8.19838 0 17.5015C0 26.8046 7.54164 34.3462 16.8447 34.3462Z"/>
              </svg>
              Mission
            </a>

            <a href="#contact" className="flex flex-col items-center hover:animate-pulse uppercase text-xl lg:text-2xl text-cyan-900 hover:text-teal-500 transition-color">
              <svg className="mb-2 lg:mb-3 w-7 h-7 fill-current"  viewBox="0 0 34 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M8.3705 5.97559V0.975586H23.3705H28.3705V4.51118L28.3705 4.51121L28.3705 4.51123V5.97559L28.3705 20.9756H23.3705V9.51123L3.53554 29.3462L0 25.8107L19.8351 5.97559H8.3705Z" />
              </svg>
              Kontakt
            </a>

          </div>


            <Button href="https://energiequartier.de/" target="_blank" rel="noopener noreferrer" className="mt-20 text-cyan-500 mr-2">
              <span className="font-light">Gebäudeanalyse </span>
              <u>energiequartier.de</u>
            </Button>

            <Button href="https://arrenberg.app/quartiersdisplay/" target="_blank" rel="noopener noreferrer" className="mt-5 text-amber-500">
              Digitale Straßenschilder
            </Button>

            <div className="absolute bottom-24 bottom-safe-area mt-8 lg:bottom-4 lg:w-screen flex justify-center text-neutral-500  ">
              <motion.svg
                initial={{ opacity: 1, y: 0, rotate: 135 }}
                // animate={{ opacity: [1, 0], y: [50, -20] }}
                // transition={{ duration: 1, repeat: Infinity, delay: 1.5, bounce: 0.5 }}
                className=" lg:mb-3 w-5 h-5  fill-current"  viewBox="0 0 34 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M8.3705 5.97559V0.975586H23.3705H28.3705V4.51118L28.3705 4.51121L28.3705 4.51123V5.97559L28.3705 20.9756H23.3705V9.51123L3.53554 29.3462L0 25.8107L19.8351 5.97559H8.3705Z" />
              </motion.svg>
            </div>

        </div>



       
      </header>

      {/* Sticky Navigation */}
     
      <Section id="projects" color="#00B4D8" darkColor="#006064">
        <SectionContent>
          <Title preTitle="Digitaler Gebäudeassistent" className="text-cyan-500">
            Steigerung der Modernisierungsquote in Deutschland
          </Title>
          <Paragraph>
            Das Energiequartier ist der ideale Assistent für Hauseigentümer:innen. Von der Erstanalyse bis zur Modernisierung bringt das Energiequartier Eigentümer:innen mit allen Akteuren zusammen und assistiert beim gesamten Prozess.
          </Paragraph>

          <Button href="https://energiequartier.de/" target="_blank" rel="noopener noreferrer" className="text-cyan-500 mt-8">
            Zum Energiequartier
          </Button>
        </SectionContent>

        <SectionImage>
          <div className="relative top-0 w-[150px] lg:w-[300px]  h-[350px] lg:h-[500px] mx-auto  z-50">
            <Image 
              src="/images/energiequartier/cover.png"
              fill
              className="object-contain"
              alt="Test"/>
          </div>
        </SectionImage>
      </Section>




      <Section id="" color="#F59E0B" darkColor="#164E63">
        <SectionContent>
          <Title preTitle="Stadtentwicklung & Bürgerpartizipation"  className="text-amber-500 ">
            Digitale Straßenschilder
          </Title>
          <Paragraph>
            Um Bürger:innen bei der Gestaltung ihres Lebensraums und der systematischen Stadtentwicklung einzubinden, müssen Kommunen die Bevölkerung vor allem erreichen.  Mit den robusten und eleganten digitalen Straßenschildern können Kommunen und Vereine auf leichtem Weg Informationen in den Alltag der Bürger:innen spielen.
          </Paragraph>
          <Button href="https://arrenberg.app/quartiersdisplay/" target="_blank" rel="noopener noreferrer" className="text-amber-500 mt-8">
            Zur Quartiersplattform
          </Button>

          <Button href="mailto:camilo@arrenberg.studio" target="_blank" rel="noopener noreferrer" className="text-amber-500 mt-2">
            <span className="font-light">Ansprechpartner </span>
            <u>Camilo Martins</u>
          </Button>
        </SectionContent>

        <SectionImage>
          <div className="relative  top-10 w-[260px] lg:w-[300px]  h-[500px] lg:h-[500px] mx-auto  z-50">
            <Image 
              src="/images/strassenschilder/cover.png"
              fill
              className="object-contain"
              alt="Test"/>
          </div>
        </SectionImage>
      </Section>
      
      <Section id="mission" color="#F59E0B" darkColor="#F1F1F1">
        <SectionContent>
          <Title preTitle=" " color="#F59E0B">
            <span className="-ml-2 lg:-ml-4 ">“</span>
            Mit digitalen Ökosystemen die Herausforderungen unserer Zeit lösen.”
          </Title>
          <Paragraph>
            Die großen Herausforderungen unserer Zeit lassen sich nur lösen, wenn wir übergreifende Kommunikations- und Organisationswege finden. Wir entwickeln digitale Ökosysteme, die in der Lage sind, viele verschiedene Akteursgruppen zusammenzubringen und sie gemeinsam strategisch handeln zu lassen.
          </Paragraph>
        </SectionContent>

        <SectionImage >
          <div className="absolute -left-4 lg:-left-40 top-0 lg:top-40 w-[240px] lg:w-[600px]  h-[200px] lg:h-[300px]  mx-auto z-50">
            <Image 
              src="/images/mission/team.png"
              fill
              className="object-contain"
              alt="Test"
            />
          </div>

          <div className=" absolute text-xs lg:text-base top-16 left-[225px] lg:left-[430px]  lg:top-40">
            <div>
              <h3>Moritz Windmann</h3>
              <a href="mailto:windmann@viadukt.de" className="text-neutral-500 block mb-3">
                windmann@viadukt.de
              </a>
           
              <h3>Pascal Biesenbach</h3>
              <a href="mailto:biesenbach@viadukt.de" className="text-neutral-500  block mb-3">
                biesenbach@viadukt.de
              </a>

              <h3>Johann Rohn</h3>
              <a href="mailto:rohn@viadukt.de" className="text-neutral-500">
                rohn@viadukt.de
              </a>
            </div>
          </div>
          

          <div className="absolute lg:left-60 lg:top-[450px]  lg:w-[400px]  lg:h-[320px]  mx-auto  z-50">
            <Image 
              src="/images/mission/office.png"
              fill
              className="object-contain"
              alt="Test"/>
          </div>
        </SectionImage>
      </Section>


      <Section id="contact" color="#F59E0B" >
        <SectionContent>
          <Title preTitle="" color="#F59E0B">
            Offene Fragen?
          </Title>
          <Paragraph className="mb-10 lg:mb-20">
            Schreiben Sie uns eine E-Mail an <a className="text-teal-500 hover:text-teal-700" href="mailto:post@viadukt.de">post@viadukt.de</a>. 
          </Paragraph>

          <Title preTitle="" color="#F59E0B">
            Offene Stellen
          </Title>
          <Paragraph>
            Wir sind auf der Suche nach talentierten Mitarbeiter:innen. <br/> Werde Teil unseres Teams und leiste mit uns den Beitrag zur Energiewende in Deutschland. 
          </Paragraph>
        </SectionContent>


        <div className=" relative lg:fixed  right-0 lg:bottom-0 h-[33.33vh]  lg:h-screen  w-full lg:w-[50vw] ">
          <Image 
            src="/images/contact/map.png"
            fill
            className="object-cover"
            alt="Test"/>
        </div>
       
      </Section>
    </main>
  
    <footer className="relative grid grid-cols-2 bg-teal-500 w-full max-w-screen-md h-auto mx-auto  z-50 text-white p-4 lg:p-14 lg:mb-8 text-sm lg:text-base gap-2">
      <div>
        <h3 className="font-bold">viadukt GmbH</h3>
        <p>
          Friedrich-Ebertstr. 107,<br />
          42117 Wuppertal
        </p>
      </div>
      <div>
        <h3 className="font-bold">viadukt GmbH</h3>
        <p>
        Moritzstraße,<br />
        142117 Wuppertal<br /><br />
        Hinter der Toreinfahrt finden Sie Parkplätze der Firma Küpper.
        </p>
      </div>
    </footer>

    <div className="bg-teal-700 w-full text-white lg:bg-inherit lg:text-neutral-500 p-4 text-xs">
      <Link href="/impressum" >
        Impressum
      </Link>
    </div>
  </>
  
  )
}
