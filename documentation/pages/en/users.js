const React = require('react');
const CompLibrary = require('../../core/CompLibrary.js');

const Container = CompLibrary.Container;
const Showcase = require(`${process.cwd()}/core/Showcase.js`);
const translate = require('../../server/translate.js').translate;

class Users extends React.Component {
  render() {
    const {config: siteConfig} = this.props;
    const fbUsersToShowcase = siteConfig.users.filter(
      (user) => user.fbOpenSource,
    );
    const restToShowcase = siteConfig.users.filter(
      (user) => !user.fbOpenSource,
    );

    return (
      <div className="mainContainer">
        <Container padding={['bottom']}>
          <div className="showcaseSection">
            <div className="prose">
              <h1>
                <translate>Who is using Quicksi?</translate>
              </h1>
              <p>
                Quicksi has been used for some popular apps{' '}
                <a href="https://opensource.facebook.com/">
                  open source projects
                </a>
                .
              </p>
            </div>
            <Showcase users={fbUsersToShowcase} />
            <div className="prose">
              <p>
                <translate>
                  Quicksi is also used by open source projects of all sizes.
                </translate>
              </p>
            </div>
            <Showcase users={restToShowcase} />
            <div className="prose">
              <p>
                <translate>Is your project using Docusaurus?</translate>
              </p>
              <p>
                Edit this page with a{' '}
                <a href="https://github.com/facebook/docusaurus/edit/master/website-1.x/data/users.js">
                  Pull Request
                </a>{' '}
                to add your logo.
              </p>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

Users.title = 'Users';

module.exports = Users;
