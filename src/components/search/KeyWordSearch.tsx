import React from 'react';
import { KeyWordSearchWrapper } from '../styled/mainPageStyled';
import Search from '../../../public/svg/search.svg';
const KeyWordSearch = () => {
  return (
    <KeyWordSearchWrapper>
      <form>
        <Search className="search-glass" />
        <input
          type="text"
          name="searchWord"
          placeholder="Place 지점명 or 지역명으로 검색"
          className="searchInput"
          autoComplete="false"
        />
      </form>
    </KeyWordSearchWrapper>
  );
};

export default KeyWordSearch;
