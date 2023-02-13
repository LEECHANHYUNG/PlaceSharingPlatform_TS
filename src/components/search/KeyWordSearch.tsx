import React, { useRef } from 'react';
import { KeyWordSearchWrapper } from '../styled/mainPageStyled';
import Search from '../../../public/svg/search.svg';
import AxiosService from '../../service/axios.service';
import { useAppDispatch } from '../../store/hook';
import { placeListActions } from '../../store/placeList';
const KeyWordSearch = () => {
  const dispatch = useAppDispatch();
  const keyWordRef = useRef<HTMLInputElement>(null);
  const keyWordSubmitHandler = async (e: any) => {
    e.preventDefault();
    const inputKeyWord: HTMLInputElement | null = keyWordRef.current;
    if (inputKeyWord) {
      try {
        const response = await AxiosService.instance({
          method: 'post',
          url: 'main/search',
          data: { searchWord: inputKeyWord.value },
        });
        if (response.status === 200) {
          dispatch(placeListActions.getFilteredPlaceList(response.data));
          dispatch(placeListActions.setSelectedPlace(null));
        } else {
          throw new Error('Error');
        }
      } catch (e) {
        console.error(e);
      }
    }
  };

  return (
    <KeyWordSearchWrapper>
      <form onSubmit={keyWordSubmitHandler}>
        <Search className="search-glass" onClick={keyWordSubmitHandler} />
        <input
          type="text"
          name="searchWord"
          placeholder="Place 지점명 or 지역명으로 검색"
          className="searchInput"
          autoComplete="false"
          ref={keyWordRef}
        />
      </form>
    </KeyWordSearchWrapper>
  );
};

export default KeyWordSearch;
