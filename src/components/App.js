import React, { Component } from 'react';
import Projects from './Projects';
import SocialProfiles from './SocialProfiles';
import Title from './Title';
import profile from '../assets/shaun.jpg';

class App extends Component {

  state = { displayBio: false };

  toggleDisplayBio = () => {
    this.setState({ displayBio: !this.state.displayBio });
  }

  render() {

    return (
      <div>
        <img src={profile} alt="profilepicture" className='profile' />
        <h1>Ajax27 + JavaScript = ✨</h1>
        <p>My name is Shaun Collins.</p>
        <Title />
        <p>My aim is to work on meaningful and fantastic projects.</p>
        {
          this.state.displayBio ? (
            <div>
              <p>I live in Slough, the United Kingdom and I love to code!</p>
              <p>My favorite language is Javascript as you can use it for the backend as well as the front.</p>
              <p>When I am not coding I am mad about Rugby Union, chess and rock climbing.</p>
              <button style={{
                backgroundColor: '#179b4d',
                border: '1px solid #000',
                borderRadius: '8%',
                fontWeight: 'bolder',
                padding: '5px',
                color: '#fff'
              }}
                onClick={this.toggleDisplayBio}>Show Less</button>
            </div>
          ) : (
              <div>
                <button style={{
                  backgroundColor: '#179b4d',
                  border: '1px solid #000',
                  borderRadius: '8%',
                  fontWeight: 'bolder',
                  padding: '5px',
                  color: '#fff'
                }}
                  onClick={this.toggleDisplayBio}>Read More</button>
              </div>
            )
        }

        <hr />
        <Projects />
        <hr />
        <SocialProfiles />
      </div>
    );
  }
};

export default App;