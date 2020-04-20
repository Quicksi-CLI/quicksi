import React, { Component } from 'react';
import './homepage.scss';

const variations = [
  {
    headingText: 'Quicksi',
    buttonText: 'welcome',
    heroImage:
      'url(https://images.unsplash.com/photo-1421217802296-7a0b5e2abef2?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&s=06fb55157aab496aa36c5848aaf635e8)',
  },
];

const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      heroImage:
        'url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS3zmzspL3MEKPihlm2T5fdtfX7TSNTVu-Pwm6KBZhPwS8fhuiT&usqp=CAU)',
      headingText: 'Quicksi',
      buttonText: 'Loving quicksi, give us a star on github',
    };
  }

  updateHero() {
    const index = getRandomInt(0, variations.length);
    this.setState({
      heroImage: variations[index].heroImage,
      headingText: variations[index].headingText,
      buttonText: variations[index].buttonText,
    });
  }

  render() {
    const { headingText, heroImage, buttonText } = this.state;
    return (
      <h1>
        <div className="hero" style={{ backgroundImage: heroImage }}>
          <h1>{headingText}</h1>
          <button type="button" onClick={this.updateHero}>
            {buttonText}
          </button>
        </div>
      </h1>
    );
  }
}

export default Homepage;
