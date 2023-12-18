import React from "react";
import SearchInput from "../../components/SearchInput/SearchInput";
import UserGrid from "../../components/UserGrid/UserGrid";
import { Search } from "../../components/search/Search";

function Main() {
  return (
    <>
      <Search>
        <Search.Input />
        <Search.Button />
      </Search>
      <UserGrid />
    </>
  );
}

export default Main;
