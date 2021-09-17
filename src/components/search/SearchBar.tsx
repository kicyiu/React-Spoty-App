import React, { useState } from "react";
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import ClearIcon from '@material-ui/icons/Clear';
import './SearchBar.css';

type SearchBarProps = {
    onSearch: (arg0: string) => void
}

function SearchBar(props: SearchBarProps): JSX.Element {

    const [searchText, setSearchText]  = useState('');

    function handleChange(event) {
        const newValue = event.target.value;
        setSearchText(newValue);
    }

    function handleKeyUp(): void {
        if (searchText !== '') {
            submitSearch()
        }
    }

    function clearSearchText(): void {
        setSearchText('');
    }

    function submitSearch() {
        console.log('submitSearch', searchText);
        props.onSearch(searchText);
    }



    return (
        <div className="search-div">
            <div className="custom-search-box input-group">
                <input 
                    className="form-control search-input"
                    placeholder="Search an artist..."
                    onChange={handleChange}
                    onKeyUp={handleKeyUp}
                    value={searchText}
                />
                <IconButton className="search-button">
                    <SearchIcon/>
                </IconButton>
                <IconButton className="clear-button" onClick={clearSearchText}>
                    <ClearIcon/>
                </IconButton>
            </div>
        </div>
    );
}

export default SearchBar;