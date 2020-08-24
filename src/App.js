import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

import View from './View';
import Project from './Project';
import AddForm from './AddForm';
import EditForm from './EditForm';

var urlPrefix = 'http://localhost:4000/api'

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      activeView:'projects',
      projects:[
        {
          id:1,
          name:'Morning in Waiheke',
          description: 'Painting by a local artist'
        },{
          id:2,
          name:'The thinking man',
          description: 'Bronze sculpture fitted for morden office space'
        }
      ],
    }
  }

  setActiveView = (view) => {
    this.setState({activeView:view})
  }

  getProjects = () => {
    axios.get(urlPrefix + '/portfolio')
    .then(res => {
      this.setState({projects:res.data})
    })
  }

  addProject = (data) => {
    axios.get(urlPrefix + '/portfolio',data)
    .then(res => {
      this.getProjects()
    })
  }

  componentDidMount(){
    this.getProjects()
  }

  render(){
    return(
      <div className="app">
        <View viewName="projects" activeView={this.state.activeView} className="home">
          <div className="header">
              <div className="nav">
                  <i onClick={() => this.setActiveView('nav')} className="fas fa-ellipsis-v"></i>
                  <i onClick={() => this.setActiveView('add-project')} className="fas fa-plus"></i>
              </div>
              <div className="profile">
                <img className="profile-image" src='prifle.jpg' alt="profileimg"/>
                <div className="profile-text">
                  <h1>Ruel Vincent</h1>
                  <div className="follow">
                    <div className="following">
                      <p>Following</p>
                      <p><span>85</span></p>
                    </div>
                    <div className="followers">
                      <p>Followers</p>
                      <p><span>632</span></p>
                    </div>
                  </div>
                </div>
              </div>
          </div>
            <div className="project-container">
              {
                this.state.projects.map((project) => {
                  var projectProps = {
                    ...project,
                    setActiveView: this.setActiveView,
                  }
                  return (<Project {...projectProps} />)
                })
              }
            </div>
        </View>
        
        <View viewName="add-project"activeView={this.state.activeView} className="add">
          <div className="back-icon">
            <i onClick={() => this.setActiveView('projects')} className="fas fa-long-arrow-alt-left"></i>
          </div>
          <h3>Add Project</h3>
          <AddForm addProject={this.addProject} setActiveView={this.setActiveView}/>
        </View>
        
        <View viewName="edit-project" activeView={this.state.activeView} className="edit">
          <div className="back-icon">
            <i onClick={() => this.setActiveView('projects')} className="fas fa-long-arrow-alt-left"></i>
          </div>
          <h3>Edit Project</h3>
          <EditForm/>
       </View>
    </div>
    )
  }
}

export default App;
