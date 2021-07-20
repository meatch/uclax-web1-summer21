import React from 'react';

import Essay from './Essay.jsx';

const Homework = () => {
    return (
        <div>
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
                My answer is as follows
            </Essay>
        </div>
    );
}

export default Homework;