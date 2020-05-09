const React = require('react');
const PropTypes = require('prop-types');

const UserLink = ({infoLink, image, caption}) => (
  <a className="link" href={infoLink} key={infoLink}>
    <img src={image} alt={caption} title={caption} />
    <span className="caption">{caption}</span>
  </a>
);

UserLink.propTypes = {
  infoLink: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
};

const Showcase = ({users}) => (
  <div className="showcase">
    {users.map((user) => (
      <UserLink key={user.infoLink} {...user} />
    ))}
  </div>
);

Showcase.propTypes = {
  users: PropTypes.array.isRequired,
};

module.exports = Showcase;
