import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import iconSearch from './../../../assets/ic_Search.png';
import logoMeLi from './../../../assets/Logo_ML.png';
import { ButtonSearch, SearchBarStyled } from './../../styled/common/searchBar/SearchbarStyled';

const Searchbar = (props: any) => {
  let navigate = useNavigate();

  const [textSearch, setTextSearch] = useState('');

  const onChangeTextSearch = (event: any) => {
    setTextSearch(event.target.value);
  };

  const onKeyDownTextSearch = (event: any) => {
    if (event.keyCode === 13) {
      onClickSearch();
    }
  };

  const onClickSearch = () => {
    if (textSearch.length > 0) {
      navigate(`/items?search=${textSearch}`, { state: { search: textSearch } });
    }
  };

  return (
    <SearchBarStyled>
      <nav>
        <div className="container">
          <div className="navbar pl-0 pr-0">
            <div className="col-2 col-sm-2 col-md-1 col-lg-1">
              <Link to="/">
                <img src={logoMeLi} alt="logoMeLi" title="Logo Mercado Libre" />
              </Link>
            </div>
            <div className="col-10 col-sm-10 col-md-11 col-lg-11">
              <div className="form-inline d-inline w-100">
                <div className="input-group">
                  <input
                    type="text"
                    onChange={onChangeTextSearch}
                    onKeyDown={onKeyDownTextSearch}
                    placeholder="Nunca dejes de buscar"
                    className="form-control"
                    aria-label="placeholder"
                  />
                  <ButtonSearch>
                    <img src={iconSearch} alt="buscar" onClick={onClickSearch} />
                  </ButtonSearch>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </SearchBarStyled>
  );
};

export default Searchbar;
