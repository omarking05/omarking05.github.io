import React, { Component } from "react";

import Javascript from '../static/svg/skill/javascript.svg';
import Jquery from '../static/svg/skill/jquery.svg';
import Angular from '../static/svg/skill/angular.svg';
import ReactIcon from '../static/svg/skill/reacticon.svg';
import Php from '../static/svg/skill/php.svg';
import NodeJs from '../static/svg/skill/node-dot-js.svg';
import Python from '../static/svg/skill/python.svg';
import Typescript from '../static/svg/skill/typescript.svg';
import Mysql from '../static/svg/skill/mysql.svg';
import Mongo from '../static/svg/skill/mongodb.svg';
import Redis from '../static/svg/skill/redis.svg';
import PostgreSql from '../static/svg/skill/postgresql.svg';
import Android from '../static/svg/skill/android.svg';
import Ionic from '../static/svg/skill/ionic.svg';
import NativeScript from '../static/svg/skill/nativescript.svg';
import Aws from '../static/svg/skill/amazonaws.svg';
import Cloudflare from '../static/svg/skill/cloudflare.svg';
import Linux from '../static/svg/skill/linux.svg';
import Git from '../static/svg/skill/git.svg';
import Heroku from '../static/svg/skill/heroku.svg';

import Jira from '../static/svg/skill/jira.svg';
import Atom from '../static/svg/skill/atom.svg';
import Vscode from '../static/svg/skill/visualstudiocode.svg';
import Jupyter from '../static/svg/skill/jupyter.svg';
import Webpack from '../static/svg/skill/webpack.svg';
import Wordpress from '../static/svg/skill/wordpress.svg';
import Yarn from '../static/svg/skill/yarn.svg';

class TechSkillComponent extends Component {

  svgComponents = {
    javascript: Javascript,
    jquery: Jquery,
    angular: Angular,
    reactIcon: ReactIcon,
    php: Php,
    nodeJs: NodeJs,
    python: Python,
    typescript: Typescript,
    mysql: Mysql,
    mongo: Mongo,
    redis: Redis,
    postgreSql: PostgreSql,
    android: Android,
    ionic: Ionic,
    nativeScript: NativeScript,
    aws: Aws,
    cloudflare: Cloudflare,
    linux: Linux,
    git: Git,
    heroku: Heroku,
    jira: Jira,
    atom: Atom,
    vscode: Vscode,
    jupyter: Jupyter,
    webpack: Webpack,
    wordpress: Wordpress,
    yarn: Yarn
  }

  render() {
    const TagName = this.svgComponents[this.props.tag];
    return <TagName {...this.props} />
  }
}

export default TechSkillComponent;