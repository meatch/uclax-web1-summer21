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
                    Heroku:
                </p>
            </Essay>
            <Essay
                number={ 2 }
                question='Explain the difference between HTML, CSS and JS.'
            >
                My answer is as follows
            </Essay>
        </div>
    );
}

export default Homework;