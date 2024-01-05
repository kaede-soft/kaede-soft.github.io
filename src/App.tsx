import React from 'react';
import {HashRouter, Link, Route, Routes} from "react-router-dom";
import './App.css';
import styles from "./App.module.css"
import Logo from './Logos';
import { FutText, Expletus, ExpletusHeading } from './Typography';

const Index: React.FC<{}> = ({}) => {
  return (
    <div className={styles.index}>
      <Logo/>
      <ExpletusHeading text='Your Software Vision Delivered' /> 
    </div>
  );
}

const About: React.FC<{}> = ({}) => {
  return (
    <div className={styles.content}>
      <Expletus text='About us' size='large' colour='dark'/>
      <p>
        <FutText 
        weight='light'
        text="Kaede is Japanese for Maple or Acer! :D"/>
      </p>
      <p>
        <FutText 
        weight='light'
        text="Soft is err.. Pretty self explanatory we hope."/>
      </p>
      <p>
        <FutText 
        weight='light'
        text="
        With over 10 years of development experience in a range
        of different domains, such as food delivery (Just Eat),
        finance (Hargreaves Lansdown) and insurance (Brightside Group).
        We have an appreciation for the challenges that come with
        attempting to run high availability fault tolerent systems at scale
        and a passion for solving challenging problems."/>
      </p>
      <p>
        <FutText 
        weight='light'
        text="
        Whether you need some additional development resource for an existing project
        or would like to get a new idea off the ground; we've got the chops to get your
        vision delivered."/>
      </p>
    </div>
  );
}

const Process: React.FC<{}> = ({}) => {
  return (
    <div className={styles.content}>
      <Expletus text='Our Process' size='large' colour='dark'/>
      <p>
        <FutText 
        weight='light'
        text="
        We have a bit of a no-nonsense approach to development. In the end the most
        important thing is working software. With this in mind; we look to go from 
        concept to a working prototype as quickly as possible after gathering inital 
        requirements. We find that being presented with an initial minimum viable 
        product is the best way to focus futher requirements and ensure that the
        realisation of the vision is as expected."/>
      </p>
      <p>
        <FutText 
        weight='light'
        text="
        That being said, every project is different, so we try to be flexible in our
        approach where prudent to do so.
        "/>
      </p>
      <br/>
      <Expletus text='Functional Love' size='large' colour='dark'/>
      <p>
        <FutText 
        weight='light'
        text="
        We like deterministic software. Software which given a set of inputs
        does what it's supposed to do. To this end we love functional languages such
        as F#, Elixir and ReScript!"/>
      </p>
      <p>
        <FutText 
        weight='light'
        text="In our experience functional code has less bugs and once tested just tends
        to work when deployed. We are huge advocates of functional programming languages
        and paradigms!"/>
      </p>
      <br />
      <Expletus text='Are we Agile?' size='large' colour='dark'/>
      <p>
        <FutText 
        weight='light'
        text="
        We'd like to think so! The original Agile Manifesto is a rather sensible set
        of statements which focus on delivering the things which actually matter.
        We have worked within (and continue to do so!) agile systems such as Scrum, Lean 
        and Kanban and have found that the determining factors for the success of a 
        project is the quality and motivation of the development team and the strength
        of the vision."/>
      </p>
      <a href="https://agilemanifesto.org/">
        <FutText weight='light' text="https://agilemanifesto.org" isLink={true}/>
      </a>
      <br/>
      <br/>
      <br/>
      <Expletus text='What Tech do we use?' size='large' colour='dark'/>
      <p>
        <FutText weight='light' text="We have extensive professional experience with:"/>
      </p>
      <ul>
        <li> <FutText weight='light' text="C# / .net"/> </li>
        <li> <FutText weight='light' text="F#"/> </li>
        <li> <FutText weight='light' text="Elixir"/> </li>
        <li> <FutText weight='light' text="React"/> </li>
        <li> <FutText weight='light' text="Javascript"/> </li>
        <li> <FutText weight='light' text="TypeScript"/> </li>
        <li> <FutText weight='light' text="Rescript"/> </li>
        <li> <FutText weight='light' text="AWS"/> </li>
        <li> <FutText weight='light' text="PostGres"/> </li>
        <li> <FutText weight='light' text="MySql / Sql Server"/> </li>
        <li> <FutText weight='light' text="And so much more which we've forgotten about!"/> </li>
      </ul>
    </div>
  );
}

const Contact: React.FC<{}> = ({}) => {
  return (
    <div className={styles.content}>
      <Expletus text='Say Hello' size='large' colour='dark'/>
      <p><FutText text="If you want to enquire about a project, or just say hi; feel free to get in touch!"/></p>
      <a href="mailto:email@example.com"><FutText text="info@kaedesoft.io"/></a>
    </div>
  );
}

const Header: React.FC<{}> = ({}) => {
  return <div className={styles.header}>
      <Link to="/"><Expletus text='Home' size='medium' colour='light' isLink={true} /></Link>
      <Link to="/about"><Expletus text='About' size='medium' colour='light' isLink={true} /></Link>
      <Link to="/process"><Expletus text='Process' size='medium' colour='light' isLink={true} /></Link>
      <Link to="/contact"><Expletus text='Say Hello' size='medium' colour='light' isLink={true} /></Link>
  </div>
}

const Footer: React.FC<{}> = ({}) => {
  return <div className={styles.footer}>
      <FutText text='KaedeSoft is registered in England and Wales under the company registration number: 15065046' 
        size='extra-small' 
        colour='light' /> 
      <FutText text='Registered office address: 82a James Carter Road, Mildenhall, Suffolk, United Kingdom, IP28 7DE' 
        size='extra-small' 
        colour='light' /> 
      <FutText text='© 2024 KaedeSoft Ltd' 
        size='extra-small' 
        colour='light' /> 
  </div>
}

const Page: React.FC<{
  content: React.ReactElement
}> = ({content}) => {

  return (
    <div className={styles.container}>
      <Header />
      {content}
      <Footer />
    </div>
  );
}

const App: React.FC<{}> = ({}) =>
  <HashRouter>
    <Routes>
      <Route path="" element={<Page content={<Index/>}/>}/>
      <Route path="/about" element={<Page content={<About/>}/>}/>
      <Route path="/process" element={<Page content={<Process/>}/>}/>
      <Route path="/contact" element={<Page content={<Contact/>}/>}/>
    </Routes>
  </HashRouter>

export default App;
