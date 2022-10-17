import React, { useState, Fragment } from 'react';
import 'semantic-ui-css/semantic.min.css';
import SearchBar from '../components/SearchBar';
import ImageViewer from '../components/ImageViewer';
import SelectedImage from '../components/SelectedImage';
import { Segment, Header, Button, Card } from 'semantic-ui-react'

const AppContainer = () => {

    const [findingImage, setFindingImage] = useState(false)
    const [imagesFetched, setImagesFetched] = useState({})
    const [searchInput, setSearchInput] = useState('')
    const [selectedImage, setSelectedImage] = useState(false)
    const [simplifyImage, setSimplifyImage] = useState(false)
    const [imageUrl, setImageUrl] = useState('')

    const handleSearch = () => {
        fetch(`https://api.pexels.com/v1/search?query=${searchInput}`, {
            headers: {
                Authorization: "563492ad6f91700001000001597d427b68a04d25b668b97bbd8763f1"
            }
        })
            .then(resp => {
                return resp.json()
            })
            .then(data => {
                setImagesFetched(data.photos)
            })
    }

    const handleClick = () => {
        handleSearch(searchInput)
    }

    const handleImageSelect = (image) => {
        setFindingImage(false)
        setSelectedImage(image.id)
        setImageUrl(image.url)
    }

    const isEmpty = (searchInput) => {
        for (var prop in searchInput) {
            if (searchInput.hasOwnProperty(prop))
                return false;
        }
        return true;
    }

    function refreshPage() {
        window.location.reload(false);
    }

    return (
        <Fragment>
            <Segment attached>
                <Header style={{ textAlign: 'center' }}>Image Simplifier</Header>
            </Segment>

            <Segment attached style={{ textAlign: 'center' }}>
                {selectedImage ? (<Button onClick={() => refreshPage()}>Go Back</Button>) : (null)}
                {selectedImage && !simplifyImage ? (<Button as='a' href={imageUrl}>Download on Pexels</Button>) : (null)}
                {selectedImage && !findingImage && !simplifyImage ? (<Button onClick={() => setSimplifyImage(!simplifyImage)}>Simplify Image</Button>) : (null)}
                {!selectedImage && !findingImage && !simplifyImage ? (<Button onClick={() => setFindingImage(!findingImage)}>Find Image</Button>) : (null)}
            </Segment>
            {selectedImage && !findingImage && !simplifyImage ? (
                <Segment style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <SelectedImage selectedImage={selectedImage} />
                </Segment>
            ) : (null)}
            {selectedImage && !findingImage && simplifyImage ? (<ImageViewer selectedImage={selectedImage} />) : (null)}
            {findingImage ? (
                <div>
                    <Segment attached>
                        <SearchBar
                            setSearchInput={setSearchInput}
                            handleClick={handleClick}
                        />
                    </Segment>
                    {isEmpty(imagesFetched) ? (null) : (
                        <Segment>
                            <Card.Group itemsPerRow={3}>
                                {imagesFetched.map((image, index) => (
                                    <Card size='small' key={image.id} onClick={() => handleImageSelect(image)} image={imagesFetched[index].src.portrait} />
                                ))}
                            </Card.Group>
                        </Segment>
                    )}

                </div>
            ) : (null)}
        </Fragment>
    );
}

export default AppContainer;