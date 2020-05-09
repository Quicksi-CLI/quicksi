const React = require('react');
const CompLibrary = require('../../core/CompLibrary.js');

const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;
const translate = require('../../server/translate.js').translate;

class Feedback extends React.Component {
  render() {
    const {config: siteConfig} = this.props;
    const supportLinks = [
      {
        title: <translate>Share your feedback</translate>,
        content: `Share your feedback with us [Feedback](https://docs.google.com/forms/d/e/1FAIpQLSfENU2xyl29r5xIbeV2y4ivi5YdD9Yl6AmnGGMXRuX59BYSwQ/viewform).`,
      }
    ];

    return (
      <div className="docMainWrapper wrapper">
        <Container className="mainContainer documentContainer postContainer">
          <div className="post">
            
            <p>
              <translate desc="statement made to reader">
                We are glad you want to share this with us
              </translate>
            </p>
            <GridBlock contents={supportLinks} layout="fourColumn" />
          </div>
        </Container>
      </div>
    );
  }
}

Feedback.title = 'Feedback';

module.exports = Feedback;
