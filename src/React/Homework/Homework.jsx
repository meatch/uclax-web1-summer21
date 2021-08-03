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
        </div>
    );
}

export default Homework;