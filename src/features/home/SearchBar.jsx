import React, { Component } from "react";
import PlaceInput from "../../app/common/form/PlaceInput";
import { geocodeByAddress, getLatLng } from "react-places-autocomplete";
import styled from "styled-components";

class SearchBar extends Component {
  state = {
    city: "",
    cityLatLng: {}
  };

  handleCityChange = city => {
    this.setState({ city });
  };

  handleCitySelect = selectedCity => {
    geocodeByAddress(selectedCity)
      .then(results => getLatLng(results[0]))
      .then(latLng => {
        this.setState({ cityLatLng: latLng });
      })
      .catch(error => console.error("Error", error));
    this.setState({ city: selectedCity });
  };

  render() {
    const { city, cityLatLng } = this.state;
    console.log("Success", cityLatLng);
    return (
      <SearchBarWrapper>
        <PlaceInput
          city={city}
          onChange={this.handleCityChange}
          onSelect={this.handleCitySelect}
        />
        <StyledButtonWrapper>
          <button className="btn">Search</button>
        </StyledButtonWrapper>
      </SearchBarWrapper>
    );
  }
}

export default SearchBar;

const SearchBarWrapper = styled.div`
  position: relative;
`;

const StyledButtonWrapper = styled.div`
  margin-top: 1.5rem;
  text-align: center;
  button {
    font-size: 1.2rem;
    font-weight: bolder;
    display: inline-block;
    color: #fff;
    background-color: #17c671;
    border: none;
    padding: 0.7rem 2rem;
    border-radius: 10px;
    transition: all .2s;
    &:hover {
      color: #eee;
      transform: scale(1.01) translateY(-3%);
    }
    &:active {
      transform: scale(1) translateY(0);
    }
    &:focus {
      outline: none;
    }
  }
`