import React from "react";
import SearchBar from "./SearchBar";
import unsplash from "./api/unsplash";
import ImageList from "./ImageList";

class App extends React.Component {

    constructor(props) {

        super(props);

        this.state = { images: [] }
    }

    onSearchSubmit = async (term) => {

        const response = await unsplash.get(`/search/photos?query=${term}`)

        this.setState({ images: response.data.results })

    }

    render() {
        return (
            <div className="ui container" style={{ marginTop: '5%' }}>
                <SearchBar onSubmit={this.onSearchSubmit} />
                <ImageList images={this.state.images} />
            </div>
        )
    }
}

export default App;