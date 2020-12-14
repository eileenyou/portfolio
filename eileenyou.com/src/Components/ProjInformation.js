import React from "react";

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import { FaProjectDiagram } from 'react-icons/fa';
import { BsFillGrid3X2GapFill } from 'react-icons/bs';
import { IoIosBuild } from 'react-icons/io';
import { GiMagnifyingGlass } from "react-icons/gi";
import { BsChatQuote } from 'react-icons/bs';
import { HiLightBulb } from 'react-icons/hi';
import { MdPersonPin } from 'react-icons/md';


import ShowscapeMain from '../img/ShowscapeMain.png';
import AudienceScreen from '../img/AudienceScreen.png';
import ArtistScreen from '../img/Artist Screen.png';
import GroupSettings from '../img/GroupSettings.png';
import IndividualSettings from '../img/IndividualSettings.png';
import SelectParty from '../img/SelectParty.png';
import SelectPartyNumber from '../img/SelectPartyNumber.png';
import "./Projects.css";

const ProjectsInfo = () => {
    function createData(name, pos1, pos2, pos3, pos4, pos5) {
        return { name, pos1, pos2, pos3, pos4, pos5 };
      }
    const rows = [
        createData('Position', "Interview Lead", "Project Manager", "Presentation Lead", "Prototyping Lead", "Usability Lead")
      ];

    return (
            <div className="projectInfo-container">
                <h4>Showscape - Visual Design Lead</h4>
                <img src={ShowscapeMain} />
                <div className="summary">
                    <p className="headings">Project Brief</p>
                     
                    <p>Our current situation has changed the landscape for performing arts across the world. 
                        With less freedom to leave our homes, our team found it particularly compelling to explore 
                        <strong> how we might be able to transform the physical theater experience into a shared online experience</strong> 
                        for the Kelly Strayhorn Theater in Pittsburgh.
                        <br/><br/>
                        Showscape is a virtual platform concept that reinvents theater-going online. The goal of this 
                        project was to <strong>reclaim and augment the theater experience with features unique to a virtual space.</strong></p>

                    <p className="headings">Role</p>
                    <p>I worked in a 6 person team as the <strong>Visual Design Lead</strong> for this project. I focused mainly on how the visual layout 
                        of this online platform could provoke emotions and experiences similar to visiting an actual theater in person.</p>
                    <div className="roles">
                        <div className="roles-icon">
                            <MdPersonPin size={30}/>
                            <p><strong>Akshaya Madhavan</strong> Interview Lead</p>
                        </div>
                        <div className="roles-icon">
                            <MdPersonPin size={30}/>
                            <p><strong>Amy Zhuang</strong> Project Manager</p>
                        </div>
                        <div className="roles-icon">
                            <MdPersonPin size={30}/>
                            <p><strong>Emmett Mack</strong> Presentation Lead</p>
                        </div>
                        <div className="roles-icon">
                            <MdPersonPin size={30}/>
                            <p><strong>Jenny Ong</strong> Prototype Lead</p>
                        </div>
                        <div className="roles-icon">
                            <MdPersonPin size={30}/>
                            <p><strong>Victor Grajski</strong> Usability Lead</p>
                        </div>
                    </div>
                <p className="headings">Problem</p>
                    <p>The pandemic has rendered artists unable to make a living, and restricted their access to their audience.  
                    <strong> Virtual settings fail to deliver the same quality experience</strong>for performing and viewing as a live space would.
                        How do we transform a physical theater experience into a shared online experience?
                    </p>
                <p className="headings">Methods</p>
                <div className="methods">
                    <div className="methods-icon"> 
                        <GiMagnifyingGlass size={50}/>
                        <p>Background Research</p>
                    </div>
                    <div className="methods-icon">
                        <FaProjectDiagram size={50}/>
                        <p>Affinity Diagramming</p>
                    </div>
                    <div className="methods-icon">
                        <BsFillGrid3X2GapFill size={50}/>
                        <p>Speed Dating with Storyboarding</p>
                    </div>
                    <div className="methods-icon">
                        <IoIosBuild size={50}/>
                        <p>Experience Prototyping</p>
                    </div>
                </div>
                <p className="headings">Evidence (Quotes)</p>
                <div className="evidence">
                    <div className="quote">
                        <BsChatQuote size={30}/>
                        <p>Virtually, only one thing was with another person. Everything else was <strong>alone</strong>. It wasn’t the same. We were on 
                            facetime while we were watching. <strong>We had to mute each other.</strong> It didn’t work that well.</p>
                    </div>
                    <div className="quote">
                        <BsChatQuote size={30}/>
                        <p>At the theater, there is an <strong>energy you’re sharing</strong> with performers and the other audience members, <strong>no way to duplicate 
                        that with the remote format</strong>.</p>
                    </div>
                    <div className="quote">
                        <BsChatQuote size={30}/>
                        <p>I want <strong>flexibility and variety</strong> of options to be able to interact with the performance I'm having but also the <strong>option </strong> 
                            to interact only with my own party or only with other people</p>
                    </div>
                </div>
                
                <p className="headings">Insights</p>
                <div className="insights">
                    <div className="insights-icon">
                        <HiLightBulb size={30}/>
                        <p>Current streaming platforms limit the online theater experience because they <strong>remove 
                        the unique associations of attending a real theater</strong> (ie grand atmosphere, presence of performers, etc)</p>
                    </div>
                    <div className="insights-icon">
                        <HiLightBulb size={30}/>
                        <p>Artists feel <strong>less connected</strong> to their audiences online from the <strong>lack of physical and emotional presence</strong></p>
                    </div>
                    <div className="insights-icon">
                        <HiLightBulb size={30}/>
                        <p>Audiences want <strong>both the collective audience experience</strong> of a large group, but also the more <strong>nuanced
                            interactions</strong> that a small group of friend or family provide.
                        </p>
                    </div>
                </div>
                <p className="headings">Solution</p>
                <p><strong>1. Capability to choose party size</strong> gives audience members the flexibility of viewing by themselves in a larger audience 
                and with a desired group</p>
                <img src={SelectPartyNumber}/>
                <p><strong>2. Group invites</strong> gives audience members more intimate experiences they desire with their friends and family </p>
                <img src={SelectParty}/>
                <div className="solution-group">
                    <div className="solution-item">
                        <p><strong>3. Adjustable personal settings</strong> ensure that technology is functioning correctly, and preserves privacy of audience members</p>
                        <img src={IndividualSettings}/>
                    </div>
                    <div className="solution-item">
                        <p><strong>Adjustable group settings</strong> allow each individual control over people (ie muting a distracting person) in their group and 
                        their visibility to the public</p>
                        <img src={GroupSettings}/>
                    </div>
                </div>
                <p><strong>4. Theater View</strong> mimics in person experience of seeing many other audience members, but also provides the option to enlarge the content. 
                Audiences can show their support for artists with <strong>reactions</strong> or through <strong>donations and buying a virtual rose. </strong></p>
                <img src={AudienceScreen}/>
                <p><strong>5. Artist controls</strong> include highly customizable performance set-up options that give performers the ability to shape how their content is presented. </p>
                <img src={ArtistScreen}/>
                <p>These features all help bring artists and audiences closer together and 
                    back into a more familiar context. Through our platform, we believe users can enjoy the theater experience at 
                    home.</p>
                <p className="headings">Next Steps</p>
                <p>Future work includes integrating more lo-fi functionalities that are inspired from physical theater-going in a creative way online. 
                    For example how could vendors, pamphlets, autographs, and panels be incorporated into our prototype? 
                    <br/><br/>
                    Ultimately, it would be nice to create a working version of our prototype for the Kelly Strayhorn Theater. 
                </p>
            </div>
        </div>
    );
  };
  
  export default ProjectsInfo;

        /*
        The portfolio page should frame and scope the problem, include selective evidence to convince the audience of 
        the importance of the problem and the insights leading towards the solution, use descriptions of methods to 
        support the validity of the evidence provided, and extract key insights and takeaways both along the way as 
        well as overall for the project to provide a compelling and persuasive account of the project findings.
        */