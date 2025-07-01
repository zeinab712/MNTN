import React from 'react';
import Header from './header';
import Content from './mainContent';
import Sider from './sideBar';
import Section from './contentSection';
import Footer from './footer';
function App() {
  return (
    <div>
          {/* Hero Section */}
            <div className="relative w-screen h-screen bg-cover bg-center" style={{ backgroundImage: "url('images/2.jpg')" }} id="start">
                {/*Gradient fade at the bottom*/}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900 z-10" />

                < Header />

                {/* Black overlay*/}
                <div className="overlay absolute inset-0 bg-black/50"></div>

                {/* main content*/}
                <Content />

                {/* side bar */}
                <Sider />

            </div>

          {/* Main Section */}
            <div>
                <Section secNum="01" header1="What level of  hiker" header2="are you?" textContent="Determining what level of hiker you are can be an important tool when planning future hikes. This hiking level guide will help you plan hikes according to different hike ratings set by various websites like All Trails and Modern Hiker. What type of hiker are you – novice, moderate, advanced moderate, expert, or expert backpacker?" dir="left" src="images/01.png" id="1" title="Get Started" value="250px"/>
                <Section secNum="02" header1="Picking the right" header2="Hiking Gear!" textContent="The nice thing about beginning hiking is that you don’t really need any special gear, you can probably get away with things you already have. Let’s start with clothing. A typical mistake hiking beginners make is wearing jeans and regular clothes, which will get heavy and chafe wif they get sweaty or wet." dir="right" src="images/01 (1).png" id="2" title="Hiking Essentials" value="310px"/>
                <Section secNum="03" header1="Understand Your " header2="Map & Timing" textContent="To start, print out the hiking guide and map. If it’s raining, throw them in a Zip-Lock bag. Read over the guide, study the map, and have a good idea of what to expect. I like to know what my next landmark is as I hike. For example, I’ll read the guide and know that say, in a mile, I make a right turn at the junction.." dir="left" src="images/01 (2).png" id="3" title="where you go is the key" value="250px"/>
            </div>

          {/* Footer */}
                <Footer />

    </div>
  );
}


export default App;
