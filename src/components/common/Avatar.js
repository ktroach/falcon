import React from 'react';
import PropTypes from 'prop-types';

const Avatar = ({ size, rounded, src, name, emoji, className, mediaClass, isExact }) => {
  const classNames = ['avatar', `avatar-${size}`, className].join(' ');
  const mediaClasses = [rounded ? `rounded-${rounded}` : 'rounded', mediaClass].join(' ');

  const getAvatar = () => {
    if (src) {
      return <img className={mediaClasses} src={src} alt="" />;
    }

    if (name) {
      return (
        <div className={`avatar-name ${mediaClasses}`}>
          <span>{isExact ? name : name.match(/\b\w/g).join('')}</span>
        </div>
      );
    }

    return (
      <div className={`avatar-emoji ${mediaClasses}`}>
        <span role="img" aria-label="Emoji">
          {emoji}
        </span>
      </div>
    );
  };

  return <div className={classNames}>{getAvatar()}</div>;
};

Avatar.propTypes = {
  size: PropTypes.oneOf(['s', 'm', 'l', 'xl', '2xl', '3xl', '4xl', '5xl']),
  rounded: PropTypes.string,
  src: PropTypes.string,
  name: PropTypes.string,
  emoji: PropTypes.string,
  className: PropTypes.string,
  mediaClass: PropTypes.string,
  isExact: PropTypes.bool
};

Avatar.defaultProps = {
  size: 'xl',
  rounded: 'circle',
  emoji: '😊',
  isExact: false
};

export default Avatar;
