import { IconButton, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { useSearchParams } from "react-router-dom";

function SearchInput() {
  const [text, setText] = useState("");
  const [searchParams, setSearchParams] = useSearchParams({});

  const onSubmit = () => {
    if (text === "") return;
    setSearchParams({ q: text });
  };

  const onChange = (e) => {
    setText(e.target.value);
  };

  const onKeyUp = (e) => {
    if (e.key !== "Enter") return;

    onSubmit();
  };

  useEffect(() => {
    if (!searchParams.get("q")) return;
    setText(searchParams.get("q"));
  }, [searchParams]);

  return (
    <TextField
      label="Github User 입력"
      variant="outlined"
      sx={{
        margin: "50px auto",
        width: "80%",
      }}
      value={text}
      onChange={onChange}
      onKeyUp={onKeyUp}
      InputProps={{
        endAdornment: (
          <IconButton type="button" onClick={onSubmit}>
            <SearchIcon />
          </IconButton>
        ),
      }}
    />
  );
}

export default SearchInput;
