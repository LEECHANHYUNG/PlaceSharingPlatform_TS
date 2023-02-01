import styled from 'styled-components';
export const MapContainer = styled.section`
  width: 76%;
  height: calc(100vh - 80px);
  display: inline-block;
`;
export const KeyWordSearchWrapper = styled.div`
  position: absolute;
  top: 0px;
  background: #fff;
  padding: 5px 20px;
  width: 100%;
  border: 2px solid #111;
  z-index: 100;

  .search-glass {
    cursor: pointer;
  }
  .searchInput {
    width: 90%;
    height: 40px;
    border: none;
    font-size: 1.1rem;
    padding-left: 10px;
  }

  .searchInput:focus {
    outline: none;
  }
  &:focus-within {
    border: 2px solid var(--color-main);
    transition: 1s;
  }
  .searchInput .icon {
    padding-right: 20px;
  }
  @media screen and (max-width: 1170px) {
    position: absolute;
    top: 0px;
    width: 100%;
  }
`;
export const PlaceListWrapper = styled.section`
  width: 24%;
  float: right;
  position: relative;
  display: inline-block;
  height: calc(100vh - 80px);
`;
