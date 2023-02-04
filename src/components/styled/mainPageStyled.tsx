import styled from 'styled-components';
export const MapContainer = styled.section`
  width: 76%;
  height: calc(100vh - 84px);
  display: inline-block;
`;
export const KeyWordSearchWrapper = styled.div`
  position: relative;
  top: 0px;
  background: #fff;
  padding: 5px 20px;
  width: 100%;
  border: 2px solid #111;
  z-index: 100;
  transition: 0.5s;
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
    transition: 0.5s;
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
  overflow-y: scroll;
`;

export const PlaceItemWrapper = styled.div`
  position: relative;
  width: 100%;
  background: #fff;
  padding: 10px 10px;
  line-height: 30px;
  font-size: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  padding-bottom: 40px;
  text-decoration: none;
  color: #111;
  list-style: none;
  .container {
    width: 100%;
  }
  .name {
    font-weight: 900;
    font-size: 20px;
    line-height: 50px;
  }
  .address {
    font-size: 15px;
    line-height: 18px;
    font-weight: 400;
    margin-bottom: 10px;
  }
  .option {
    font-size: 14px;
    color: #999;
  }
  .line {
    position: absolute;
    width: 90%;
    border-bottom: 2px solid #6a9eff;
    bottom: 20px;
  }
`;
