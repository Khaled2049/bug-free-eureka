import React from 'react';
import { connect } from 'react-redux';
import SongList from './SongList';
import SongDetail from './SongDetail';
const Songs = ({ song }) => {
  return (
    <div className="ui container grid">
      <div className="ui row">
        <div className="column eight wide">
          <SongList />
        </div>
        <SongDetail />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { song: state.selectedSong };
};

export default connect(mapStateToProps)(Songs);
