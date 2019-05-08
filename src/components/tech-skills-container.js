import React from "react";

import ReactTooltip from 'react-tooltip';

import javascript from '../static/svg/skill/javascript.svg';
import jquery from '../static/svg/skill/jquery.svg';
import angular from '../static/svg/skill/angular.svg';
import react from '../static/svg/skill/react.svg';
import php from '../static/svg/skill/php.svg';
import nodeJs from '../static/svg/skill/node-dot-js.svg';
import python from '../static/svg/skill/python.svg';
import typescript from '../static/svg/skill/typescript.svg';
import mysql from '../static/svg/skill/mysql.svg';
import mongo from '../static/svg/skill/mongodb.svg';
import redis from '../static/svg/skill/redis.svg';
import postgreSql from '../static/svg/skill/postgresql.svg';
import android from '../static/svg/skill/android.svg';
import ionic from '../static/svg/skill/ionic.svg';
import nativeScript from '../static/svg/skill/nativescript.svg';
import aws from '../static/svg/skill/amazonaws.svg';
import cloudflare from '../static/svg/skill/cloudflare.svg';
import linux from '../static/svg/skill/linux.svg';
import git from '../static/svg/skill/git.svg';
import heroku from '../static/svg/skill/heroku.svg';

import jira from '../static/svg/skill/jira.svg';
import atom from '../static/svg/skill/atom.svg';
import vscode from '../static/svg/skill/visualstudiocode.svg';
import jupyter from '../static/svg/skill/jupyter.svg';
import webpack from '../static/svg/skill/webpack.svg';
import wordpress from '../static/svg/skill/wordpress.svg';
import yarn from '../static/svg/skill/yarn.svg';


const skills = [
  {
    title: 'Frontend',
    skills: [
      {
        tip: 'Javascript',
        src: javascript
      },
      {
        tip: 'Jquery',
        src: jquery
      },
      {
        tip: 'Angular',
        src: angular
      },
      {
        tip: 'React',
        src: react
      }
    ]
  },
  {
    title: 'Programming Languages',
    skills: [
      {
        tip: 'PHP',
        src: php
      },
      {
        tip: 'Node.js',
        src: nodeJs
      },
      {
        tip: 'Typescript',
        src: typescript
      },
      {
        tip: 'Python',
        src: python
      }
    ]
  },
  {
    title: 'Databases',
    skills: [
      {
        tip: 'MySQL',
        src: mysql
      },
      {
        tip: 'PostgreSQL',
        src: postgreSql
      },
      {
        tip: 'MongoDB',
        src: mongo
      },
      {
        tip: 'Redis',
        src: redis
      }
    ]
  },
  {
    title: 'Mobile',
    skills: [
      {
        tip: 'Andriod',
        src: android
      },
      {
        tip: 'Ionic',
        src: ionic
      },
      {
        tip: 'NativeScript',
        src: nativeScript
      }
    ]
  },
  {
    title: 'Cloud',
    skills: [
      {
        tip: 'Aws',
        src: aws
      },
      {
        tip: 'Heroku',
        src: heroku
      },
      {
        tip: 'CloudFlare',
        src: cloudflare
      },
      {
        tip: 'Git',
        src: git
      },
      {
        tip: 'Linux',
        src: linux
      }
    ]
  },
  {
    title: 'Other',
    skills: [
      {
        tip: 'Webpack',
        src: webpack
      },
      {
        tip: 'Jupyter',
        src: jupyter
      },
      {
        tip: 'Wordpress',
        src: wordpress
      },
      {
        tip: 'Yarn',
        src: yarn
      },
      {
        tip: 'Jira',
        src: jira
      },
      {
        tip: 'Atom',
        src: atom
      },
      {
        tip: 'VSCode',
        src: vscode
      }
    ]
  },
]

const TechSkillContainer = () => (
  <div className="tech-container">
    {skills.map(skillDivision => (
      <div key={skillDivision.title} className="skills">
        {skillDivision.skills.map(skill => (
          <div key={skill.tip} className="skill">
            <img data-tip={skill.tip} src={skill.src} alt={skill.tip} />
          </div>
        ))}
      </div>
    ))}
    <ReactTooltip place="top" type="light" effect="solid" />
  </div>
);

export default TechSkillContainer;