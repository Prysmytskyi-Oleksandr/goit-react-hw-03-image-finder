import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import { searchImages } from 'servise/API';
import Button from './Button/Button';

export class App extends Component {
  state = {
    searchName: '',
    images: [],
    loading: false,
    page: 1,
    error: null,
  };

  hendleFormSubmit = searchName => {
    this.setState({ searchName });
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.searchName !== this.state.searchName ||
      prevState.page !== this.state.page
    )
      this.searchImages();
  }

  async searchImages() {
    try {
      this.setState({ loading: true });
      const data = await searchImages(this.state.searchName, this.state.page);
      this.setState(({ images }) => ({ images: [...images, ...data.hits] }));
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({ loading: false });
    }
  }

  render() {
    return (
      <div>
        <Searchbar onSubmit={this.hendleFormSubmit} />
        <ImageGallery images={this.state.images} />
        {this.state.images.length && <Button />}
        {this.state.error && <p>{this.state.error}</p>}
        {this.state.loading && <p>...Loading</p>}
      </div>
    );
  }
}
