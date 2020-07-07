import React from 'react';
import PropTypes from 'prop-types';
import withVideoPlayer from '../../hocs/with-video-player/with-video-player.js';
import {movieType} from '../../types/types.js';
import {secondsToTime} from '../../utils/common.js';

const FullScreenVideoPlayer = (props) => {
  const {isPlaying, movie, onFullscreenToggle, duration, currentTime, isEnded} = props;
  let currentTogglerPosition;
  let elapsedTime;
  if (isEnded) {
    currentTogglerPosition = 100;
    elapsedTime = duration;
  } else {
    currentTogglerPosition = (currentTime / duration) * 100 || 0;
    elapsedTime = duration - currentTime;
  }
  const _onPause = (evt) => {
    evt.preventDefault();
    props.onPause();
  };
  const _onPlay = (evt) => {
    evt.preventDefault();
    props.onPlay();
  };
  let playPauseButton;
  if (!isPlaying) {
    playPauseButton = (
      <button type="button" onClick={_onPlay} className="player__play">
        <svg viewBox="0 0 19 19" width="19" height="19">
          <use xlinkHref="#play-s"></use>
        </svg>
        <span>Play</span>
      </button>
    );
  } else {
    playPauseButton = (
      <button type="button" onClick={_onPause} className="player__play">
        <svg viewBox="0 0 14 21" width="14" height="21">
          <use xlinkHref="#pause"></use>
        </svg>
        <span>Pause</span>
      </button>
    );
  }

  return (
    <div className="player">
      {props.children}
      <button type="button" className="player__exit">Exit</button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value={currentTogglerPosition} max="100"></progress>
            <div className="player__toggler" style={{left: `${currentTogglerPosition}%`}}>Toggler</div>
          </div>
          <div className="player__time-value">{secondsToTime(elapsedTime)}</div>
        </div>

        <div className="player__controls-row">
          {playPauseButton}
          <div className="player__name">{movie.title}</div>

          <button type="button" onClick={onFullscreenToggle} className="player__full-screen">
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
};

FullScreenVideoPlayer.propTypes = {
  movie: movieType.isRequired,
  children: PropTypes.element.isRequired,
  onPlay: PropTypes.func.isRequired,
  onPause: PropTypes.func.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  onFullscreenToggle: PropTypes.func.isRequired,
  duration: PropTypes.number.isRequired,
  currentTime: PropTypes.number.isRequired,
  isEnded: PropTypes.bool.isRequired,
};

export {FullScreenVideoPlayer};
export default withVideoPlayer(FullScreenVideoPlayer);
