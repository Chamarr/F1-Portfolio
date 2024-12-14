'use client';
import React from 'react';
import Image from 'next/image';

interface SectionProps {
  id: string;
  title: string;
  bgColor: string;
  children?: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, title, bgColor, children }) => (
  <section
    id={id}
    className={`relative h-screen w-full ${id !== 'home' ? bgColor : ''}`}
  >
    {id === 'home' && (
      <>
        <div className="absolute inset-0 z-10">
          <Image
            src="/F1-homescreen-page.png"
            alt="Homescreen image of Lando Norris's Mclaren F1 car"
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* Main title content */}
        <div className="relative z-20 h-full flex flex-col items-center justify-center">
          <div className="text-center mb-20">
            <h1 className="text-white font-['AkiraExpanded'] font-[800] text-[6.25rem] tracking-[0.04em] leading-none mt-[-20vh]">
              CAPTURING THE
            </h1>
            <h1 className="text-white font-['AkiraExpanded'] font-[800] text-[6.25rem] tracking-[0.04em] mt-[-2rem]">
              <i>SPEED</i> OF F1
            </h1>
          </div>
          
          {/* Metrics Row */}
          <div className="absolute bottom-12 w-full px-20 metrics-font">
            <div className="flex justify-between items-center">
              <div className="animate-fade-in opacity-0" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
                <div className="text-white text-2xl font-bold">231 MPH</div>
              </div>
              
              <div className="animate-fade-in opacity-0" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
                <div className="text-white text-2xl font-bold">Up to 6.5 G-Forces</div>
              </div>
              
              <div className="animate-fade-in opacity-0" style={{ animationDelay: '0.9s', animationFillMode: 'forwards' }}>
                <div className="text-white text-2xl font-bold">1000 HP</div>
              </div>
            </div>
          </div>
        </div>
      </>
    )}

    {id === 'gallery' && (
      <div className="h-full bg-[#0f0f0f]">
        {/* Title moved to top right */}
        <h2 className="absolute top-12 right-12 text-5xl font-bold text-white paragraph-font">
          <u>Our Favorite Moments:</u>
        </h2>

        {/* Two-column layout */}
        <div className="flex h-full">
          {/* Left side - Image container with padding */}
          <div className="w-1/2 flex items-center justify-center p-12">
            {/* Image wrapper with border */}
            <div className="relative w-[90%] h-[90%] border-2 border-white overflow-hidden">
              <Image
                src="/lewis-hamilton-2020.jpg"
                alt="Lewis Hamilton looking in the camera holding his trophy that he won at the 2020 Turkish Grand Prix to secure his 
                7th drivers world championship"
                fill
                priority
                quality={100}
                sizes="45vw"
                className="object-cover object-center"
              />
            </div>
          </div>

          {/* Right side - Text */}
          <div className="w-1/2 p-12 pt-32">
            <div className="text-white space-y-6">
              <p className="text-lg leading-relaxed paragraph-font">
              The 2020 Turkish Grand Prix at Istanbul Park saw Lewis Hamilton secure his 7th World Championship, 
              equaling Michael Schumacher's record. Starting 6th on a rain-soaked track, Hamilton displayed 
              masterful skill, guiding his Mercedes W11 to speeds of 193 mph (310 km/h) despite reduced grip.
              </p>
              <p className="text-lg leading-relaxed paragraph-font">
              Istanbul’s high-speed layout, including Turn 8 with its usual 4.5g lateral forces, 
              was tamed by Hamilton’s expert tire management, stretching his intermediates over 50 
              laps while rivals faltered. His flawless pace and control stood out on the treacherous surface.
              </p>
              <p className="text-lg leading-relaxed paragraph-font">
              This victory cemented Hamilton’s legacy as one of Formula 1’s all-time greats, 
              showcasing his unmatched ability to excel under pressure and adapt to the most challenging conditions.
              </p>
              {/*Podium Results*/}
              <div className='pt-8'>
                <h3 className="text-2xl font-bold mb-6 text-center paragraph-font"><u>Race Results:</u></h3>
                <div className='flex justify-between items-center text-xl'>
                  <div className='text-center'>
                    <span role="img" aria-label="first place" className="text-4xl">🥇</span>
                    <p className='mt-2 paragraph-font'> Lewis Hamilton</p>
                  </div>
                  <div className='text-center'>
                    <span role="img" aria-label="second place" className="text-4xl">🥈</span>
                    <p className='mt-2 paragraph-font'>Sergio Pérez</p>
                  </div>
                  <div className='text-center'>
                    <span role="img" aria-label="third place" className="text-4xl">🥉</span>
                    <p className='mt-2 paragraph-font'>Sebastian Vettel</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )}

    {id === 'gallery2' && (
      <div className="h-full bg-[#0f0f0f]">
        {/* Two-column layout */}
        <div className="flex h-full">
          {/* Left side - Text */}
          <div className="w-1/2 p-12 pt-32">
            <div className="text-white space-y-6">
              <p className="text-lg leading-relaxed paragraph-font">
              Lando Norris claimed his first Formula 1 victory at the 2024 Miami Grand Prix, 
              achieving a milestone after 110 races and 15 podiums. Starting fifth on the grid, 
              Norris took the lead after pitting during a Safety Car period triggered by a collision. 
              His McLaren car reached speeds exceeding 199 mph (320 km/h) on Miami’s straights, while 
              handling lateral G-forces of up to 4.5g in fast corners.
              </p>
              <p className="text-lg leading-relaxed paragraph-font">
              Following his pit stop, Norris fended off pressure from Max Verstappen and built a 
              commanding seven-second lead by the final lap. McLaren’s aerodynamic upgrades proved 
              instrumental in this performance, complementing Norris’s precision under braking at zones 
              like Turn 17, where deceleration generated over 5g.
              </p>
              <p className="text-lg leading-relaxed paragraph-font">
              This landmark win demonstrated Norris’s skill in managing speed, strategy, 
              and intense physical demands, securing his first career victory in dominant fashion.
              </p>
              
              {/*Podium Results*/}
              <div className='pt-8'>
                <h3 className="text-2xl font-bold mb-6 text-center paragraph-font"><u>Race Results:</u></h3>
                <div className='flex justify-between items-center text-xl'>
                  <div className='text-center'>
                    <span role="img" aria-label="first place" className="text-4xl">🥇</span>
                    <p className='mt-2 paragraph-font'>Lando Norris</p>
                  </div>
                  <div className='text-center'>
                    <span role="img" aria-label="second place" className="text-4xl">🥈</span>
                    <p className='mt-2 paragraph-font'>Max Verstappen</p>
                  </div>
                  <div className='text-center'>
                    <span role="img" aria-label="third place" className="text-4xl">🥉</span>
                    <p className='mt-2 paragraph-font'>Charles Leclerc</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Image container */}
          <div className="w-1/2 flex items-center justify-center p-12">
            <div className="relative w-[90%] h-[98%] border-2 border-white overflow-hidden">
              <Image
                src="/lando-norris-miami.jpg"
                alt="Lando Norris stands on top of his Mclaren car with his fist in the air as he just won his first F1 race at the
                2024 Miami grand prix"
                fill
                priority
                quality={100}
                sizes="45vw"
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    )}

    {id === 'about' && (
      <div className="h-full bg-[#0f0f0f]">
        {/* Title in the style of other sections */}
        <h2 className="absolute top-12 right-12 text-5xl font-bold text-white paragraph-font">
          <u>Behind The Lens:</u>
        </h2>

        {/* Two-column layout matching gallery style */}
        <div className="flex h-full">
          {/* Left side - Image container */}
          <div className="w-1/2 flex items-center justify-center p-12">
            <div className="relative w-[90%] h-[90%] border-2 border-white overflow-hidden">
              <Image
                src="/lewis-greatbritain.jpg"
                alt="Lewis Hamilton holding up his trophy when he won the 2024 British grand prix"
                fill
                priority
                quality={100}
                sizes="45vw"
                className="object-cover object-center"
              />
            </div>
          </div>

          {/* Right side - Text */}
          <div className="w-1/2 p-12 pt-32">
            <div className="text-white space-y-6">
              <p className="text-lg leading-relaxed paragraph-font">
              I am a University of Maryland computer science major who is deeply passionate about 
              both technology and motorsports. My passion for Formula 1 is a result of its flawless 
              fusion of speed, accuracy, and creativity that are quite similar to how I approach 
              computing and problem-solving. I draw inspiration from the unrelenting quest of excellence 
              that both F1 strategy analysis and creative program development share.
              </p>
              <p className="text-lg leading-relaxed paragraph-font">
              Coding offers me a platform to tackle challenges with creativity and logic, mirroring the 
              adaptability and quick thinking required in Formula 1. Just as F1 teams continuously 
              optimize for performance, I thrive on refining my skills and developing solutions that make 
              an impact. The intersection of these passions drives me to innovate and aim high in everything I do.
              </p>
              {/* Stats section mimicking the home page metrics */}
              <div className="pt-12">
                <div className="flex justify-between items-center text-xl metrics-font">
                  <div className="text-center">
                    <div className="text-white text-2xl font-bold paragraph-font">120+</div>
                    <p className="text-sm mt-2 paragraph-font">Credits Completed</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-white text-2xl font-bold paragraph-font">4.5</div>
                    <p className="text-sm mt-2 paragraph-font">School Years</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-white text-2xl font-bold paragraph-font">1</div>
                    <p className="text-sm mt-2 paragraph-font">Computer Science Degree</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )}

    {id === 'contact' && (
      <div className="h-full bg-[#0f0f0f] px-4 md:px-0"> {/* Added horizontal padding for mobile */}
        {/* Title with responsive spacing and font size */}
        <h2 className="text-center text-3xl md:text-5xl font-bold text-white paragraph-font pt-8 md:pt-12">
          <u>Get In Touch:</u>
        </h2>

        {/* Contact Icons Container with improved mobile layout */}
        <div className="h-[calc(100%-4rem)] md:h-[calc(100%-6rem)] flex items-center justify-center">
          <div className="flex flex-col md:flex-row space-y-12 md:space-y-0 md:space-x-32">
            {/* LinkedIn - with responsive sizing */}
            <a 
              href="https://www.linkedin.com/in/chamarrauber" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex flex-col items-center group"
            >
              <div className="w-24 h-24 md:w-32 md:h-32 relative transition-transform duration-300 group-hover:scale-110">
                <Image
                  src="/linkedin-icon.png"
                  alt="LinkedIn"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-white text-lg md:text-xl mt-2 md:mt-4 group-hover:underline paragraph-font">LinkedIn</span>
            </a>

            {/* GitHub - with responsive sizing */}
            <a 
              href="https://github.com/Chamarr" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex flex-col items-center group"
            >
              <div className="w-24 h-24 md:w-32 md:h-32 relative transition-transform duration-300 group-hover:scale-110">
                <Image
                  src="/github-icon.png"
                  alt="GitHub"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-white text-lg md:text-xl mt-2 md:mt-4 group-hover:underline paragraph-font">GitHub</span>
            </a>

            {/* Email - with responsive sizing and text wrapping */}
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 md:w-32 md:h-32 relative">
                <Image
                  src="/email-icon.png"
                  alt="Email"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-white text-lg md:text-xl mt-2 md:mt-4 paragraph-font text-center break-all md:break-normal">
                Chamarrball@gmail.com
              </span>
            </div>
          </div>
        </div>
      </div>
    )}

    {id !== 'home' && id !== 'gallery' && title && (
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-4 text-white">{title}</h2>
        {children}
      </div>
    )}
  </section>
);

const SinglePage: React.FC = () => {
  const scrollToSection = (id: string): void => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const navItems: string[] = ['Home', 'Gallery', 'About', 'Contact'];

  return (
    <main className="relative min-h-screen">
      <nav className="fixed top-0 left-0 right-0 z-50">
        <div className="flex justify-center items-center h-16">
          <div className="flex space-x-12">
            {navItems.map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section.toLowerCase())}
                className="text-base text-white hover:text-gray-300 capitalize tracking-wider text-2xl nav-font hover:underline"
              >
                {section}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <Section id="home" title="CAPTURING THE SPEED OF F1" bgColor="" />
      <Section id="gallery" title="" bgColor="bg-[#0f0f0f]" />
      <Section id="gallery2" title="" bgColor="bg-[#0f0f0f]" />
      <Section id="about" title="" bgColor="bg-[#0f0f0f]" />
      <Section id="contact" title="" bgColor="bg-[#0f0f0f]" />
    </main>
  );
};

export default SinglePage;