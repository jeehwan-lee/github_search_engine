import React, { useState } from "react";
import SearchInput from "../../components/SearchInput/SearchInput";
import UserGrid from "../../components/UserGrid/UserGrid";
import { Search } from "../../components/search/Search";

function Main() {
  const [searchText, setSearchText] = useState("");

  return (
    <>
      <Search>
        <Search.Input searchText={searchText} setSearchText={setSearchText} />
        <Search.Button searchText={searchText} />
      </Search>
      <UserGrid />
    </>
  );
}

export default Main;
