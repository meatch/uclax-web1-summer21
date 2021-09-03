import React from 'react';

import { useMediaQuery } from 'common/mediaQueries/useMediaQuery.js';

import Essay from './Essay.jsx';
import SunAndMoon from '../SunAndMoon/SunAndMoon.jsx';

const Homework = () => {

    const { media } = useMediaQuery();

    console.log('media', media);

    return (
        <div>

            { media.mdUp && <SunAndMoon /> }

            <h2>HOMEWORK</h2>

            <Essay
                number={ 1 }
                question='What is the difference between Git, Github and Heroku?'
            >
                <p>
                    Git: Version Control system, PLay well others, and deploy.
                </p>
                <p>
                    Github: Reposotories: A place to push our code and play well with others.
                </p>
                <p>
                    Heroku: Github with Web Server (Deployment)
                </p>
            </Essay>
            <Essay
                number={ 2 }
                question='Explain the difference between HTML, CSS and JS.'
            >
                <p>HTML (Structure): Hypertext Markup Language: Paragraphs documents, images, videos</p>
                <p>CSS (Appearance): Cascading Style Sheets, Visual appeal - Brand Presence, Visual Hierarchy, and Defines Value</p>
                <p>JavaScript (Behaves): function of a website, action or call to action</p>
            </Essay>
            <Essay
                number={ 3 }
                question='What are Single Page Apps (SPAs)? How do they differ from traditional multi-page Web Sites?'
            >
                <ul>
                    <li>Do not have to keep reloading the page. Less bandwidth.</li>
                    <li>SEO: Common myth is that searche engines cannot index sub pages. They are smart enough to do that.</li>
                    <li>Cross Site Script is an issue regardlkess of Multi or SPA apps.</li>
                    <li>API calls and JS being able to load content on the fly, and only that which it needs.</li>
                </ul>
            </Essay>
            <Essay
                number={ 4 }
                question='What is the difference between Web Designer, Front End Developer and Back End Developer?'
            >
                <ul>
                    <li><b>UX: Web Designer:</b> Visual look of a website and interactive design work.</li>
                    <li><b>Front End Developer:</b> All of the programming related to HTML, CSS and JS.</li>
                    <li><b>Back End Developer:</b> programming server side apps (e.g. PHP, python, Database, Seceurity)</li>
                </ul>
            </Essay>
            <Essay
                number={ 5 }
                question='Distinguish the difference between Site Relative, Document Relative, and Absolute Paths'
            >
                <ul>
                    <li><b>Site Relative:</b> Path is devised from the root of the site, instead of document.</li>
                    <li><b>Document Relative:</b> Paths locating files, from current working directory.</li>
                    <li><b>Absolute Paths:</b> Fully Resolved URL includes https://full-path/to/resource.jpg</li>
                </ul>
            </Essay>
            <Essay
                number={ 6 }
                question='What is the difference between jpg, gif, png and SVG images?'
            >
                <ul>
                    <li><b>JPG:</b> Joint Photographic Experts Group (Bitmap), Proprietary Lossy compression. Millions of colors.</li>
                    <li><b>GIF:</b> Graphic Interchange Format: (Bitmap): Supports animation, Supports up 256 Colors (logos, flat graphics), transparency</li>
                    <li><b>PNG:</b> Portable Graphics Group: True Alpha Transparency (million so colors), Lossless compression. 256 color just like gif</li>
                    <li><b>SVG:</b> Scalable Vector Graphics: Logos, Line Art, Icons - Vector, not bitmapped. XML files. No loss of integrity at size, light</li>
                </ul>
            </Essay>
            <Essay
                number={ 7 }
                question='Define the following roles: Project Manager, Business Analyst, Scrum Master, UX Designer, Web Developer/Engineer, Quality Assurance Tester, and DevOps.'
            >
                <li><b>Project Manager:</b> In charge of planning, resources, and project delivery.</li>
                <li><b>Business Analyst:</b> Analyzes Prior and existing business data to improve decision making process.</li>
                <li><b>Scrum Master:</b>  Managed communication between team members, keeps the sprint moving along - agile processes. (Derived: Rugby) </li>
                <li><b>UX Designer:</b> User Experience Designer: Research User Analysis, Usability, User Flow Prototypes and Journeys, Content Strategy, Visual Designer </li>
                <li><b>Web Developer/Engineer:</b> Designing and developing web applications. Functionality/features - and security</li>
                <li><b>Quality Assurance Tester:</b> QA automated and manual tests. Ensures the integrity of existing features work, and ensure new features. </li>
                <li><b>DevOps:</b> Connects development and operations team - creates Hardware and Software to deliver applications.</li>
            </Essay>
            <Essay
                number={ 8 }
                question='What is considered the right size for an image or video asset?'
            >
                Depends on the content/space dimensions - lower image quality. - Avatars for example, vs hero, vs thumbnails.
                Resolution would depend on to meet the requirements of video, perhaps default to 16x9.
                File size - keeping it at small as possible unless necessary.
                Hero 1500x2500 pixels
                30-40 Seconds long - duration
                25 - 30MB max
                Optimize for UX and SEO, accessibility.
            </Essay>
            <Essay
                number={ 9 }
                question='What does it mean for a company to be Agile. What is the purpose of using Agile, and its Pros and Cons.'
            >
                <p>
                    In general, moving in smaller increments, to implement those changes on a much faster cycle.
                    Meant to also icnlude all stakeholders in planning and implementation process.
                    Adapting to ever changing needs (Market, Customer, internal and external demands).

                    Iterative deployments of portions.

                    Efficiency of cost without compromising quality.

                    Waterfall is the oppositte of Agile. Super linear - it's a more comprehensivie and holistic approach.



                </p>

                <ul>
                    <li>Con: End user experience changes - contact changes</li>
                    <li>Con: More time and effort to get things done</li>
                    <li>Con: Often it developers are unable to work on other things -locked into a particular project</li>
                </ul>
            </Essay>
            <Essay
                number={ 10 }
                question='What are testing environments? What is the difference between Local, Dev, QA and Production?'
            >
                <p>Testing environments: Server environments that mimic production to test our code before deployment.</p>

                <ul>
                    <li><b>Local:</b> Your local machine for developing the application.</li>
                    <li><b>Dev:</b> Shared server for devs to test and code review.</li>
                    <li><b>QA:</b> Quality Assuarance team manually evaluates and automation tests help with mundane tasks.</li>
                    <li><b>UAT:</b> User Accpetance Testing: Clients can review before their customers see it in production.</li>
                    <li><b>Production:</b> Live/Public site. end users use this version.</li>
                </ul>
            </Essay>
            <Essay
                number={ 11 }
                question='Function vs Form: When are web images considered part of the content (HTML) as opposed to part of the appearance (CSS)?'
            >
                <p>
                    Images are part of the content when they support the information (HTML).
                </p>

                <p>
                    CSS leverages images in background for the look of things.
                </p>
            </Essay>
            <Essay
                number={ 12 }
                question={ `What is the difference between ID's, Classes and Tags? How does Specificity play a role in the selection of HTML elements (both in CSS and JS)` }
            >
                <ol>
                    <li id="timbuktu" className="timbukthree"><b>IDs</b> Unique label assigned to html elements.</li>
                    <li className="timbukthree"><b>Classes</b> A label assigned to multiple html elements.</li>
                    <li><b>Tags</b> any HTML tag used to mark up the content. We can add labels (id and classes) to target with more specificity.</li>
                    <li><b>Specificity</b> 2 or more conflicting rules, the browser determines which one is more specific.</li>
                </ol>
            </Essay>
            <Essay
                number={ 13 }
                question={ `What is a CSS Preprocessor? What are some examples? In React, what are styled components? How do Styled Components violate separation of concerns?` }
            >
                <ul>
                    <li>What is a CSS Preprocessor? Managing CSS in a more dynamic way, with scripting.</li>
                    <li>What are some examples? Sass, Less, Stylus</li>
                    <li>In React, what are styled components? JS Component that contains CSS styling (scoped style) </li>
                    <li>How do Styled Components violate separation of concerns? It puts HTML/CSS/JS into a single space/component.</li>
                </ul>
            </Essay>
            <Essay
                number={ 14 }
                question={ `Final Project Defined` }
            >
                Subject matter for your final project is up to you as long as it meets the functional requirements laid out in the Final Project description.

                It will be challenging to know how to fulfill on Final Project requirements since I still need to show you how to do them. However, please know that the requirements are more about features than subject. In other words, it is more important to pick a project, than to have it all worked out.

                Whatever subject you choose we will tailor to fit the requirements of the final.

                By next session pick a subject for your Final Project and write 2-3 paragraphs that answers:

                Who is the client? (e.g. Me, a friend of mine starting a business, Coffee Bean, Made Up Widget Company)
                What is it's purpose? (e.g. an online brochure for a coffee shop, to promote my portfolio work)
                Why did you choose this subject?
            </Essay>
            <Essay
                number={ 15 }
                question={ `What is the difference between Web Hosts, Domains, and FTP?` }
            >
                <ul>
                    <li><b>Web Hosts:</b> A place to publish your work for the rest of the world to see.</li>
                    <li><b>Domains:</b> Website alias that maps to the IP address of a given Web Host to match your served up content.</li>
                    <li><b>FTP:</b> File Transfer Protocol - transferring files between computers.</li>
                </ul>
            </Essay>
            <Essay
                number={ 15 }
                question={ `What is a Package Manager (e.g. NPM, Composer)? How does it play a role in software development?` }
            >
                <p>
                    A <b>Package Manager</b>
                </p>
            </Essay>
        </div>
    );
}

export default Homework;