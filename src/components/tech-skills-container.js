import React, { Component } from "react";

import ReactTooltip from 'react-tooltip';
import TechSkillComponent from "./tech-skill-component";
import posed from "react-pose";

const skills = [
  {
    title: 'Frontend',
    skills: [
      'javascript',
      'jquery',
      'angular',
      'reactIcon'
    ]
  },
  {
    title: 'Programming Languages',
    skills: [
      'php',
      'nodeJs',
      'typescript',
      'python'
    ]
  },
  {
    title: 'Databases',
    skills: [
      'mysql',
      'postgreSql',
      'mongo',
      'redis'
    ]
  },
  {
    title: 'Mobile',
    skills: [
      'android',
      'ionic',
      'nativeScript'
    ]
  },
  {
    title: 'Cloud',
    skills: [
      'aws',
      'heroku',
      'cloudflare',
      'git',
      'linux'
    ]
  },
  {
    title: 'Other',
    skills: [
      'webpack',
      'jupyter',
      'wordpress',
      'yarn',
      'jira',
      'atom',
      'vscode'
    ]
  }
]

const AnimatedSkill = posed.div({
  off: {
    opacity: 0,
    scale: 0
  },
  on: {
    opacity: 1,
    scale: 1
  }
});

class TechSkillContainer extends Component {

  initialState = {
    skills: skills[0],
    index: 0,
    view: true
  }

  state = this.initialState

  componentDidMount() {
    setInterval(() => {
      this.setState({
        view: !this.state.view
      })

      setTimeout(() => {
        this.setState({
          view: !this.state.view
        })
        this.setState(prev => {
          const newIndex = prev.index < skills.length - 1 ? prev.index + 1 : 0;
          return {
            skills: skills[newIndex],
            index: newIndex,
          }
        })
      }, 500);
    }, 5000);
  }

  render() {
    return (
      <div className="tech-container">
        <AnimatedSkill pose={this.state.view ? 'on' : 'off'} key={this.state.skills.title} className="skills">

          {this.state.skills.skills.map((skill) => (
            <div key={skill} className="skill">
              <TechSkillComponent data-tip={skill} tag={skill} />
              <ReactTooltip place="top" type="light" effect="solid" />
            </div>
          ))}

        </AnimatedSkill>
      </div>
    )
  }
}

export default TechSkillContainer;