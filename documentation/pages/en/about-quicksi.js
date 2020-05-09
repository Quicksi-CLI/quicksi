const React = require('react');
const CompLibrary = require('../../core/CompLibrary.js');

const Container = CompLibrary.Container;
const translate = require('../../server/translate.js').translate;

class AboutSlash extends React.Component {
  render() {
    const {config: siteConfig} = this.props;
    return (
      <div className="pageContainer">
        <Container className="mainContainer documentContainer postContainer">
          <h1>
            <translate>About Quicksi</translate>
          </h1>
          <img
            src={`${siteConfig.baseUrl}img/quicksi.png`}
            alt="Quicksi"
          />
          <p>
          Quicksi is a command-line tool with reuseable starters in different languages, frameworks and libraries designed to make it easy 
          for developers to start projects without having to worry about the setup. And for code instructors in tutorials, conferences, 
          workshops to give easy access to their students.
          </p>
        </Container>
        {/* <Container className="mainContainer">
          <h2>
            <translate>Birth of Quicksi</translate>
          </h2>
          <p>
            I've had to start couple of projects, most times a lot in just a month,
            from tutorials to online workshops or my videos,
            one thing I've realized or found discouraging is the process of setting up 
            this projects or remembering how I set the previous project, and this is part of my 
            productive time slipping away. 
            This is how Quicksi was born, I had to develop something to enable me start 
            projects easily without setting all up again
            and something I don't have to stress an inch or even move out of my code editor
            in order to get up and running. Quicksi had fit into that, with quicksi as a 
            command line, I could access it directly on my code editor or terminal without 
            going to my browser, and I get a ready-to-go project, already setup project for me. 
            I know it'll be the same for other developers out there who are going through the same.

            Don't forget to jump unto `Get Started` to get to see how you can start
            using quicksi.
          </p>
        </Container> */}
        <br />
      </div>
    );
  }
}

AboutSlash.defaultProps = {
  language: 'en',
};

AboutSlash.title = 'About Quicksi';

module.exports = AboutSlash;
