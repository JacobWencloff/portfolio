import React, { forwardRef } from 'react'

function Projects(props, ref) {
  return (
    <div ref={ref} className='projects'>
        <h3 id='project-header'>My Projects</h3>
        <ul id='project-list'>
          <li>
          <h4>Tasque - <a style={{color: 'black'}} href='https://jacobwencloff.github.io/TasQues/'>click here</a></h4>
          </li>
          <ul>
            <li>A search engine to aggregate and filter results based on user defined constriants.</li>
            <li>Provides a reminder system for software engineers who just can't stop looking up erros.</li>
            <li>Developed with React leveraging Google search Api.</li>
          </ul>
          <li>
            <h4>Som-Base - <a style={{color: 'black'}} href='https://veggie-tales00.github.io/Project3-Client/'>click here</a></h4>
          </li>
          <ul>
            <li>An extensible service providing customer defined food & wine pairings</li>
            <li>Enabling chefs to cultivate a more complete dining experience</li>
            <li>Full stack application built with React, Python, and SQL, hosted on Github Pages and heroku</li>
          </ul>
          <li>
          <h4>Algo-Viz - <a style={{color: 'black'}} href='https://jacobwencloff.github.io/Algo-Viz-Client/'>click here</a></h4>
          </li>
          <ul>
            <li>A visual demonstration of real time data manipluation algorithms</li>
            <li>Provides students a visual representaion of how data is maniplated</li>
            <li>Give's users something great to watch</li>
            <li>Real time graphics developed with Python, OpenGL, and PyImGui</li>
          </ul>
          <li>
          <h4>GoatBot.tv SaaS - <a style={{color: 'black'}} href='https://gitlab.com/_g0atb0t_' target='_blank'>click here</a> </h4>
          </li>
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
