import React, {createContext, Component} from 'react';
import {addFave, removeFave, allFaves} from '../../../config/models';
export const FavesContext = createContext();

class FavesProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      faveIds: [],
    };
  }

  getAllFaveVideos = async () => {
    try {
      const faves = await allFaves();
      const ids = faves.map(fave => fave[0]);
      this.setState({faveIds: ids});
    } catch (e) {
      throw new Error('There was an error finding your favourite videos');
    }
  };

  addFaveVideo = async faveId => {
    try {
      const newFave = await addFave(faveId);
      if (newFave) {
        this.setState({
          faveIds: {faveIds: [...this.state.faveIds, newFave.id]},
        });
      }
      this.getAllFaveVideos();
    } catch (e) {
      throw new Error('There was an error adding your new favourite');
    }
  };

  removeFaveVideo = async faveId => {
    try {
      await removeFave(faveId);
      this.getAllFaveVideos();
    } catch (e) {
      throw new Error('There was an error removing your favourite');
    }
  };

  componentDidMount = () => {
    this.getAllFaveVideos();
  };

  render() {
    return (
      <FavesContext.Provider
        value={{
          ...this.state,
          addFaveVideo: this.addFaveVideo,
          removeFaveVideo: this.removeFaveVideo,
        }}>
        {this.props.children}
      </FavesContext.Provider>
    );
  }
}

export default FavesProvider;
