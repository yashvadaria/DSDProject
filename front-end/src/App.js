import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import { Divider, InputAdornment, Typography } from "@mui/material";

const handleSubmit = () => {};
const SearchBar = ({ setSearchQuery }) => (
  <form
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      marginTop: "40px",
    }}
    onSubmit={handleSubmit}
  >
    <Typography
      variant="h2"
      style={{ fontWeight: "bold", marginBottom: "30px" }}
    >
      Translate
    </Typography>
    <TextField
      size="large"
      sx={{
        width: "600px",
        ".MuiInputBase-root.MuiOutlinedInput-root": {
          borderRadius: "50px",
        },
      }}
      id="search-bar"
      multiline
      maxRows={4}
      className="text"
      onInput={(e) => {
        setSearchQuery(e.target.value);
      }}
      label="Search"
      variant="outlined"
      placeholder=""
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
    />
    {/* <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
    <IconButton color="primary" sx={{ p: "10px" }} aria-label="search">
      <SearchIcon style={{ fill: "blue" }} />
    </IconButton> */}
    {/* <IconButton type="submit" aria-label="search">
    </IconButton> */}
  </form>
);
const data = [
  "Paris",
  "London",
  "New York",
  "Tokyo",
  "Berlin",
  "Buenos Aires",
  "Cairo",
  "Canberra",
  "Rio de Janeiro",
  "Dublin",
];
const filterData = (query, data) => {
  if (!query) {
    return data;
  } else {
    return data.filter((d) => d.toLowerCase().includes(query));
  }
};

export default function App() {
  const [searchQuery, setSearchQuery] = useState("");

  const dataFiltered = filterData(searchQuery, data);
  console.log(dataFiltered);
  return (
    <div
      style={{
        display: "flex",
        alignSelf: "center",
        justifyContent: "center",
        flexDirection: "column",
        padding: 20,
        alignItems: "center",
      }}
    >
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      {/* <div style={{ padding: 3 }}>
        {dataFiltered.map((d) => (
          <div
            className="text"
            style={{
              padding: 5,
              justifyContent: "normal",
              fontSize: 20,
              color: "blue",
              margin: 1,
              width: "250px",
              BorderColor: "green",
              borderWidth: "10px",
            }}
            key={d.id}
          >
            {d}
          </div>
        ))}
      </div> */}
    </div>
  );
}
