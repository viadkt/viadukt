import Image from 'next/image'

import Section from '../components/section'
import SectionImage from '../components/sectionImage'
import SectionContent from '../components/sectionContent'
import Title from '../components/ui/title'
import Paragraph from '../components/ui/paragraph'

import { Inter } from 'next/font/google'
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue
} from "framer-motion";
import { useState, useRef, useEffect } from 'react'


const inter = Inter({ subsets: ['latin'] })

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
        case scrollY < sectionHeight * 4:
          setVisibleSectionId('Projekte');
          setColor("#06B6D4");
          break;
        case scrollY < sectionHeight * 5:
          setVisibleSectionId('Mission');
          setColor("#14B8A6");
          break;
        default:
          setVisibleSectionId('Kontakt');
          break;
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
    
  return (
    <main className={`grid min-h-screen  ${inter.className}`}>

<nav className="fixed top-3 justify-end gap-4 z-20 flex container mx-auto w-full text-lg items-center">
        
        <h2 
          className="font-bold text-xl z-30" 
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
            <path fill-rule="evenodd" clip-rule="evenodd" d="M16.8447 29.3462C23.3864 29.3462 28.6895 24.0431 28.6895 17.5015C28.6895 10.9598 23.3864 5.65674 16.8447 5.65674C10.3031 5.65674 5 10.9598 5 17.5015C5 24.0431 10.3031 29.3462 16.8447 29.3462ZM16.8447 34.3462C26.1478 34.3462 33.6895 26.8046 33.6895 17.5015C33.6895 8.19838 26.1478 0.656738 16.8447 0.656738C7.54164 0.656738 0 8.19838 0 17.5015C0 26.8046 7.54164 34.3462 16.8447 34.3462Z" fill={color}/>
          </svg>
        </a>

        <a href="#contact" className={`${visibleSectionId == "Kontakt" && "animate-pulse"}`}>
          <svg width="29" height="30" viewBox="0 0 29 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M8.3705 5.97559V0.975586H23.3705H28.3705V4.51118L28.3705 4.51121L28.3705 4.51123V5.97559L28.3705 20.9756H23.3705V9.51123L3.53554 29.3462L0 25.8107L19.8351 5.97559H8.3705Z" fill={color}/>
          </svg>
        </a>

      </nav>



      {/* Header */}
      <header className="h-screen w-screen relative  z-30 bg-white">

        <div className="container pt-40 mx-auto flex w-full items-baseline">
          <h1 className="text-4xl font-bold tracking-tighter w-1/2">
            viadukt
          </h1>

          <a href="#projects" className="hover:animate-pulse uppercase text-2xl mr-8">
            <svg className="mb-3" width="33" height="33" viewBox="0 0 33 33" fill="current" xmlns="http://www.w3.org/2000/svg">
              <path d="M18.5713 0.656738H13.5713V10.6924L6.47489 3.59598L2.93936 7.13152L10.0359 14.228H0V19.228H10.0356L2.93945 26.3242L6.47499 29.8598L13.5713 22.7634V32.7993H18.5713V22.7634L25.6676 29.8598L29.2031 26.3242L22.1069 19.228H32.1426V14.228H22.1067L29.2032 7.13152L25.6677 3.59598L18.5713 10.6924V0.656738Z" fill={color} />
            </svg>
            Projekte
          </a>

          <a href="#mission" className="hover:animate-pulse uppercase text-2xl mr-8">
            <svg className="mb-3" width="34" height="35" viewBox="0 0 34 35" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M16.8447 29.3462C23.3864 29.3462 28.6895 24.0431 28.6895 17.5015C28.6895 10.9598 23.3864 5.65674 16.8447 5.65674C10.3031 5.65674 5 10.9598 5 17.5015C5 24.0431 10.3031 29.3462 16.8447 29.3462ZM16.8447 34.3462C26.1478 34.3462 33.6895 26.8046 33.6895 17.5015C33.6895 8.19838 26.1478 0.656738 16.8447 0.656738C7.54164 0.656738 0 8.19838 0 17.5015C0 26.8046 7.54164 34.3462 16.8447 34.3462Z" fill={color}/>
            </svg>
            Mission
          </a>

          <a href="#contact" className="hover:animate-pulse uppercase text-2xl">
            <svg className="mb-3" width="29" height="30" viewBox="0 0 29 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.3705 5.97559V0.975586H23.3705H28.3705V4.51118L28.3705 4.51121L28.3705 4.51123V5.97559L28.3705 20.9756H23.3705V9.51123L3.53554 29.3462L0 25.8107L19.8351 5.97559H8.3705Z" fill={color}/>
            </svg>
            Kontakt
          </a>

        </div>
      </header>

      {/* Sticky Navigation */}




     
      <Section id="projects" color="#00B4D8" darkColor="#006064">
        <SectionContent>
          <Title preTitle="Digitaler Gebäudeassistent" className="text-cyan-500">
            Steigerung der Modernisierungsquote in Deutschland
          </Title>
          <Paragraph>
          Das Energiequartier ist der perfekte digitale Assistent für Hauseigentümer. Es zeigt dir in weniger als drei Minuten den aktuellen Stand deiner Immobilie und hilft dir bei der Auswahl der besten Maßnahmen. Auf dem konkreten Weg der Modernisierung bringt das Energiequartier dich mit allen relevanten Akteuren zusammen und assistiert beim gesamten Prozess.  Das digitale Ökosystem des Energiequartiers beginnt bei der strategischen Analyse von Gebäuden und liefert den Fachhandwerkern schlüsselfertige Aufträge. Egal, ob Finanzierung, Förderung oder Fachhandwerk - Energetische Modernisierung war für alle Beteiligten noch nie so einfach.          </Paragraph>         
        </SectionContent>

        <SectionImage>
          <div className="relative top-0 w-[300px]  h-[500px] mx-auto  z-50">
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
          <Title preTitle="In den Alltag der Bürger:innen kommunizieren"  className="text-amber-500">
            Digitale Straßenschilder
          </Title>
          <Paragraph>
            Um Bürgerinnen und Bürger bei der Gestaltung ihres Lebensraums und der systematischen Stadtentwicklung einzubinden, müssen Kommunen die Bevölkerung vor allem erreichen.  Wie ginge das besser als direkt vor der eigenen Haustür und in einem gewohnten Format? Mit den robusten und eleganten digitalen Straßenschildern können Kommunen und Vereine auf leichtem Weg Informationen in den Alltag der Bürger:innen spielen.
          </Paragraph>
        </SectionContent>

        <SectionImage>
          <div className="relative top-0 w-[300px] h-[500px] mx-auto  z-50">
            <Image 
              src="/images/strassenschilder/cover.png"
              fill
              className="object-contain"
              alt="Test"/>
          </div>
        </SectionImage>
      </Section>





      <Section id="" color="#F59E0B" darkColor="#334155">
        <SectionContent>
          <Title preTitle="Energiequartier" color="#F59E0B">
            Demokratische
            Stadtentwicklung &
            Bürgerpartizipation
          </Title>
          <Paragraph>
            Bürgerinitiativen und Vereine verfügen nur über begrenzte finanzielle Mittel und müssen auch mit der Zeit ihrer ehrenamtlichen Mitglieder sorgsam umgehen. Die Open Source Quartiersplattform steht jedem Verein als leicht zugängliches System zur Kommunikation, Information und Planung zur Verfügung. Es stellt Webseite und Projektkommunikation in einer Anwendung zur Verfügung. Zugleich können über die Plattform Inhalte auf die digitalen Straßenschilder übertragen.
          </Paragraph>
        </SectionContent>

        <SectionImage>
          
        </SectionImage>
      </Section>




      
      <Section id="mission" color="#F59E0B" darkColor="#F1F1F1">
        <SectionContent>
          <Title preTitle="Wofür wir jeden Tag antreten " color="#F59E0B">
            <span className="-ml-4">“</span>
            Mit digitalen Ökosystemen die Herausforderungen unserer Zeit lösen”.
          </Title>
          <Paragraph>
            Egal ob Energiewende, Verkehrswende, Erhalt der Demokratie, sozialer Zusammenhalt oder Klimafolgenanpassung. Die großen Herausforderungen unserer Zeit lassen sich nur lösen, wenn wir übergreifende Kommunikations- und Organisationswege finden. Zu diesem Zweck entwickeln wir digitale Ökosysteme, die in der Lage sind, viele verschiedene Akteursgruppen zusammen zu bringen und sie gemeinsam strategisch handeln zu lassen.
          </Paragraph>
        </SectionContent>

        <SectionImage>
          <div className="absolute -left-40 top-40 w-[600px] h-[300px]  mx-auto z-50">
            <Image 
              src="/images/mission/team.png"
              fill
              className="object-contain"
              alt="Test"
            />
          </div>

          <div className=" absolute  left-[430px] top-40">
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
          

          <div className="absolute left-60 top-[450px]  w-[400px]  h-[320px]  mx-auto  z-50">
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
          <Title preTitle="Kontakt" color="#F59E0B">
            Offene Fragen?
          </Title>
          <Paragraph className="mb-10">
            Schreiben Sie uns eine E-Mail an post@viadukt.de. Wir melden uns zurück.
          </Paragraph>

          <Title preTitle="Kontakt" color="#F59E0B">
            Offene Stellen
          </Title>
          <Paragraph>
            Wir sind auf der Suche nach talentierten Mitarbeiter:innen. Werde Teil unseres Teams und leiste mit uns den Beitrag zur Energiewende in Deutschland.
          </Paragraph>
        </SectionContent>


        <div className="fixed h-screen right-0 bottom-0  w-[50vw] ">
          <Image 
            src="/images/contact/map.png"
            fill
            className="object-cover"
            alt="Test"/>
        </div>

        <SectionImage>
          {/* <Image src="/images/energiequartier/cover.png" width={500} height={500} /> */}
        </SectionImage>
      </Section>






    </main>
  )
}
