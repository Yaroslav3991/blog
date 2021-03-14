import React from 'react';
import Layout from '../layout';
import yaroslav from '../../static/me.png';
import SEO from '../components/SEO';
import './about.scss';

const About = () => {
  return (
    <Layout>
      <SEO title="About" path="/about" />
      <article className="about">
        <img src={yaroslav} className="user-avatar" alt="It's me Yaroslav!" />
        <section className="about-context">
          <div>
            <h3>About me</h3>
            <p className="time">2021-01-01</p>
            <p>
              I'm Yaroslav Pereguda, a software engineer.

              This is my spot on the web for my projects, tutorials, musings, and anything else I want to write about or show the world.
            </p>
          </div>
        </section>
      </article>
    </Layout>
  );
};

export default About;
