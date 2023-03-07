import React, { forwardRef } from 'react'

function Projects(props, ref) {
  return (
    <div ref={ref} className='projects'>
        <h3 id='project-header'>My Projects</h3>
        <ul id='project-list'>
          <li>
          <h4>Tasque</h4>
          </li>
          <ul>
            <li>A search engine to aggregate and filter results based on user defined constriants.</li>
            <li>Provides a reminder system for software engineers who just can't stop looking up erros.</li>
            <li>Developed with React leveraging Google search Api.</li>
          </ul>
          <li>
            <h4>Som-Base</h4>
          </li>
          <ul>
            <li>An extensible service providing customer defined food & wine pairings</li>
            <li>Enabling chefs to cultivate a more complete dining experience</li>
            <li>Full stack application built with React, Python, and SQL, hosted on Github Pages and heroku</li>
          </ul>
          <h4>Algo-Viz</h4>
          <ul>
            <li>A visual demonstration of real time data manipluation algorithms</li>
            <li>Provides students a visual representaion of how data is maniplated</li>
            <li>Give's users something great to watch</li>
            <li>Real time graphics developed with Python, OpenGL, and PyImGui</li>
          </ul>
          <h4>GoatBot.tv SaaS</h4>
          <ul>
            <li>An in-house bot creation studio capable of integrating with multiple platforms</li>
            <li>Allows users to swiftly design and integrate powerful bots with various social platforms</li>
            <li>Full Stack application built with AWS infrastructure using AWS CDK and CodePipeline</li>
            <li>Leverages a plethora of AWS services such as DynamoDB, CloudFormation, ECS(managed DockerContainers), API GateWay, IAM, Cognito, Lambda serverless compute unit</li>
          </ul>

        </ul>
        
    </div>
  )
}
export default forwardRef(Projects)
