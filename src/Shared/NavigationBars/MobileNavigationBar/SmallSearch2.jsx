import SearchIcon from "@mui/icons-material/Search";
import { Divider, Grid, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { useEffect, useState } from "react";
import Autosuggest from "react-autosuggest";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useGetAllProductsQuery } from "../../../redux/api/api";
import styles from "../HeroNavigationBar/HeroNavigation.module.scss";
// Custom CSS for suggestion box
const suggestionBoxStyle = {
  position: "absolute",
  top: "100%", // Position it below the input
  left: 0,
  zIndex: 1,
  border: "1px solid #ccc",
  backgroundColor: "#fff",
  width: "100%", // Match the width of the input
  maxHeight: "200px", // Limit the height if needed
  overflowY: "auto", // Enable vertical scrolling if needed
};

const SmallSearch2 = () => {
  const router = useRouter();
  const { data, isLoading, isError } = useGetAllProductsQuery();

  const [products, setProducts] = useState(data);
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const goTODetails = (link) => {
    router.push(link);
  };

  const updateSuggestions = (value) => {
    if (data) {
      const filteredSuggestions = products?.filter(
        (product1) => product1?.name.toLowerCase().includes(value.toLowerCase())
        // product?.code?.toLowerCase().includes(value.toLowerCase())
      );

      setSuggestions(filteredSuggestions);
    }
  };

  // Autosuggest input onChange handler
  const handleInputChange = (event, { newValue }) => {
    setQuery(newValue);
    updateSuggestions(newValue);
  };

  // Autosuggest suggestion click handler
  const handleSuggestionSelected = (event, { suggestion }) => {
    setSelectedProduct(suggestion);
    // You can do something with the selected product, like navigate to its details page.
  };
  // Function to fetch suggestions
  const onSuggestionsFetchRequested = ({ value }) => {
    updateSuggestions(value);
  };

  const handleSearchBtn = () => {
    router.push(`/searchProducts/?search=${query}`);
  };
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearchBtn();
    }
  };
  useEffect(() => {
    setProducts(data);
  }, [data]);
  // Autosuggest rendering suggestions
  const renderSuggestion = (suggestion) => (
    <div style={{ padding: "10px 10px" }}>
      <div
        onClick={() =>
          goTODetails(
            `/product/${suggestion?.id}/${encodeURIComponent(suggestion?.name)}`
          )
        }
        style={{
          display: "flex",
          justifyContent: "start",
          alignItems: "center",
        }}
      >
        <Image
          src={`${
            suggestion?.photo ? suggestion?.photo : "/assets/no-img.jpg"
          }`}
          alt={suggestion.name}
          width="75"
          height={50}
        />
        <div style={{ marginLeft: "20px" }}>
          {" "}
          <Typography
            variant="title1"
            style={{
              fontSize: "16px",
              fontFamily: "Poppins",
              fontWeight: "bold",
            }}
          >
            {suggestion.name}
          </Typography>
          <br />
          <Typography
            variant="title1"
            style={{ fontSize: "16px", fontFamily: "Poppins" }}
          >
            BDT {suggestion?.price}
          </Typography>
        </div>
      </div>

      <Divider />
    </div>
  );

  return (
    <div style={{ width: "100%", marginBottom: "2px" }}>
      <Grid container spacing={0} style={{ width: "100" }}>
        <Grid item xs={10}>
          <Autosuggest
            className={styles.searchField2}
            inputProps={{
              placeholder: "Search for products",
              value: query,
              onChange: handleInputChange,
              style: {
                width: "100%",
                marginLeft: "12px",
                padding: "10px 0px",
                fontSize: "16px",
              },
            }}
            suggestions={suggestions}
            onSuggestionsFetchRequested={onSuggestionsFetchRequested}
            onSuggestionSelected={handleSuggestionSelected}
            getSuggestionValue={(suggestion) => suggestion.name}
            renderSuggestion={renderSuggestion}
            onKeyDown={handleKeyDown}
            theme={{
              container: {
                position: "relative",
                zIndex: "5", // Ensure that the suggestion box is positioned relative to the input
              },
              suggestionsContainer: "custom-suggestions-container",
            }}
          />
        </Grid>
        <Grid item xs={2}>
          <IconButton
            size="large"
            onClick={handleSearchBtn}
            className={styles.searchBtn2}
          >
            <SearchIcon />
          </IconButton>
        </Grid>
      </Grid>
    </div>
  );
};

export default SmallSearch2;
