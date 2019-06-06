import React from 'react';

import '../styles/main.css';

import bgIcon1 from '../icons/bgIcon1.svg';

import { H1, H2, Highlight } from '../components/Text';
import SkillGrid from '../components/SkillGrid';
import SkillCarousel from '../components/SkillCarousel';

const IndexPage = () => (
  <main className="text-xs lg:text-base relative overflow-hidden">
    <img
      className="absolute opacity-05 w-1024 max-w-none -top-128"
      src={bgIcon1}
    />
    <div className="container mx-auto my-4 lg:my-16 px-4 sm:p-6 lg:px-16">
      <div className="lg:w-2/3">
        <H1 className="text-main">Hello!</H1>
        <p>
          My name is <Highlight>Jacob Sarnowski</Highlight> and I’m a{' '}
          <Highlight>software engineer</Highlight>. I’m passionate about
          creating amazing, intuitive, eye-pleasing products which users{' '}
          <Highlight className="text-main">love</Highlight> to use.
        </p>
      </div>
    </div>
    <div className="bg-main lg:w-2/3 xl:w-1/2 max-w-sm lg:float-right p-4 sm:p-6 text-white">
      <H2 className="mb-4">Strengths</H2>
      <p className="mb-6">
        I’m capable of and willing to create literally{' '}
        <Highlight>anything</Highlight>. Everything is just a matter of time.
        But if you need an <Highlight>experienced developer</Highlight> in a
        specific topic, then my biggest strenghts are listed below.
      </p>
      <SkillGrid />
      <SkillCarousel />
    </div>
  </main>
);

export default IndexPage;
