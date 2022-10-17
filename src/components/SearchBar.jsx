import React from 'react';
import { Input } from 'semantic-ui-react'

const SearchBar = ({ setSearchInput, handleClick }) => (
    <Input
        fluid
        action={{ icon: 'search', onClick: () => handleClick() }}
        onChange={(e) => setSearchInput(e.target.value)}
        placeholder='Search...' />
)

export default SearchBar;