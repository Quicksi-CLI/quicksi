const PropTypes = require('prop-types');
const React = require('react');

function SocialFooter(props) {
  const repoUrl = `https://github.com/${props.config.organizationName}/${props.config.projectName}`;
  return (
    <div className="footerSection">
      <h5>Social</h5>
      <div className="social">
        <a
          className="github-button" // part of the https://buttons.github.io/buttons.js script in siteConfig.js
          href={repoUrl}
          data-count-href={`${repoUrl}/stargazers`}
          data-show-count="true"
          data-count-aria-label="# stargazers on GitHub"
          aria-label="Star this project on GitHub">
          {props.config.projectName}
        </a>
      </div>
      {props.config.twitterUsername && (
        <div className="social">
          <a
            href={`https://twitter.com/${props.config.twitterUsername}`}
            className="twitter-follow-button">
            Follow @{props.config.twitterUsername}
          </a>
        </div>
      )}
      {props.config.facebookAppId && (
        <div className="social">
          <div
            className="fb-like"
            data-href={props.config.url}
            data-colorscheme="dark"
            data-layout="standard"
            data-share="true"
            data-width="225"
            data-show-faces="false"
          />
        </div>
      )}
    </div>
  );
}

SocialFooter.propTypes = {
  config: PropTypes.object,
};

class Footer extends React.Component {
  render() {
    const docsPart = `${
      this.props.config.docsUrl ? `${this.props.config.docsUrl}/` : ''
    }`;
    return (
      <footer className="nav-footer" id="footer">
        <section className="sitemap">
          {this.props.config.footerIcon && (
            <a href={this.props.config.baseUrl} className="nav-home">
              <img
                src={`${this.props.config.baseUrl}${this.props.config.footerIcon}`}
                alt={this.props.config.title}
                width="66"
                height="58"
              />
            </a>
          )}
          <div className="footerSection">
            <h5>Docs</h5>
            <a
              href={`
                ${this.props.config.baseUrl}${docsPart}${this.props.language}/installation`}>
              Getting Started
            </a>
            <a
              href={`
                ${this.props.config.baseUrl}${this.props.language}/versions`}>
              Versions
            </a>
            {/* <a
              href={`
                ${this.props.config.baseUrl}${docsPart}${this.props.language}/translation`}>
              Localization
            </a> */}
            {/* <a
              href={`
                ${this.props.config.baseUrl}${docsPart}${this.props.language}/search`}>
              Adding Search
            </a> */}
          </div>
          <div className="footerSection">
            <h5>Community</h5>
            <a href={`${this.props.config.baseUrl}${this.props.language}/help`}>
              Help
            </a>
            {/* <a
              href={`${this.props.config.baseUrl}${this.props.language}/users`}>
              User Showcase
            </a> */}
            <a
              href={`${this.props.config.baseUrl}${this.props.language}/about-quicksi`}>
              About
            </a>
          </div>
          <div className="footerSection">
            <h5>Feedback</h5>
            <a href={`${this.props.config.baseUrl}${this.props.language}/feedback`}>
              Give feedback
            </a>
          </div>
          <SocialFooter config={this.props.config} />
        </section>
        <section className="copyright">
          {this.props.config.copyright && (
            <span>{this.props.config.copyright}</span>
          )}
        </section>
      </footer>
    );
  }
}

module.exports = Footer;
