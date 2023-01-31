import { Component } from 'react';
import ImageGallery from './ImageGallery/ImageGallery';

export class App extends Component {
  state = {};

  render() {
    return (
      <div>
        <Searchbar onSubmit={this.state.cards} />
        {/* <ImageGallery images={images} /> */}
      </div>
    );
  }
}
