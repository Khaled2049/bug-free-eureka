import React from 'react';
import { connect } from 'react-redux';

const SongDetail = (props) => {
  const renderDetails = () => {
    if (props.song) {
      return (
        <div>
          <h5>Song Detail</h5>
          <p>Title: {props.song.title}</p>
          Duration: {props.song.duration}
        </div>
      );
    }
    return (
      <div>
        <h1>Select a song</h1>
      </div>
    );
  };

  return (
    <div>
      <div>{renderDetails()}</div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { song: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
