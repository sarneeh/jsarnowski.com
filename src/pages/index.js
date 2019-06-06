import React from 'react';

import '../styles/main.css';

import bgIcon1 from '../icons/bgIcon1.svg';
import bgIcon2 from '../icons/bgIcon2.svg';

import { H1, H2, Highlight } from '../components/Text';
import Container from '../components/Container';
import SkillGrid from '../components/SkillGrid';
import SkillCarousel from '../components/SkillCarousel';
import SocialGrid from '../components/SocialGrid';

const IndexPage = () => (
  <main className="text-xs lg:text-base relative overflow-hidden">
    <img
      className="absolute opacity-05 w-1024 max-w-none -top-128 -z-1"
      src={bgIcon1}
    />
    <Container>
      <div className="lg:w-2/3">
        <H1 className="text-main">Hello!</H1>
        <p>
          My name is <Highlight>Jacob Sarnowski</Highlight> and I’m a{' '}
          <Highlight>software engineer</Highlight>. I’m passionate about
          creating amazing, helpful, intuitive, eye-pleasing products which
          users <Highlight className="text-main">love</Highlight> to use.
        </p>
      </div>
    </Container>
    <div className="relative flex w-full lg:justify-end z-10">
      <div className="bg-main w-full lg:w-2/3 xl:w-1/2 p-4 sm:p-6 text-white">
        <H2 className="mb-4">Strengths</H2>
        <p className="mb-4">
          I’m capable of and willing to create literally{' '}
          <Highlight>anything</Highlight>. Every task is just a matter of time
          and proper research. Of course I don't know everything, but I've got a
          lot of <Highlight>experience</Highlight> and{' '}
          <Highlight>knowledge</Highlight> in technologies listed below.
        </p>
        <SkillGrid />
        <SkillCarousel />
      </div>
    </div>
    <Container className="relative">
      <img
        className="absolute opacity-05 w-1024 max-w-none -left-64 lg:-top-512 -z-1"
        src={bgIcon2}
      />
      <H2 className="mb-4">Work*</H2>
      <p className="mb-4">
        Unfortunately, I’m totally out of time right now because I’m busy
        creating <Highlight className="text-main">awesome stuff</Highlight>.
        That’s why if you’d like to see my work, go ahead and check out my
        social profiles.
      </p>
      <SocialGrid />
      <p className="text-xs opacity-25">
        * Yes, I know, I’ve just said I like to create helpful, intuitive
        products and my own website lacks basic stuff. But you know... Sometimes
        you can’t have everything, right? :)
      </p>
    </Container>
  </main>
);

export default IndexPage;
