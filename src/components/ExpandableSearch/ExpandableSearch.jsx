import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { IconButton, InputBase } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import Clear from '@mui/icons-material/Clear';
import SearchIcon from '@mui/icons-material/Search';
import styles from './ExpandableSearch.module.scss';
import products from '../../data/products.json';

const ExpandableSearchIcon = () => {
  const [expanded, setExpanded] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const matches = useMediaQuery('(min-width:720px)');

  const handleExpand = () => {
    setExpanded(!expanded);
    setSearchValue('');
    setSearchResults([]);
  };

  const handleChange = e => {
    setSearchValue(e.target.value);
    performSearch(e.target.value);
  };

  const handleItemClick = () => {
    setSearchValue('');
    setExpanded(!expanded);
  };

  const performSearch = query => {
    const filteredResults = products.filter(item =>
      item.title.toLowerCase().includes(query.toLowerCase() ?? '')
    );
    setSearchResults(filteredResults);
  };

  const truncateString = (str, maxLength) => {
    if (str.length <= maxLength) {
      return str;
    }
    return str.substring(0, maxLength) + '...';
  };

  return (
    <div className={styles.wrap}>
      <IconButton onClick={handleExpand}>
        {expanded ? (
          <Clear sx={{ color: 'red', transition: 'color 0.9s' }} />
        ) : (
          <SearchIcon
            sx={{
              transition: 'color 0.9s',
              width: `${matches ? '1.8rem' : '1.5rem'}`,
              height: `${matches ? '1.8rem' : '1.5rem'}`,
              color: 'var(--color-secondary)',
            }}
          />
        )}
      </IconButton>
      {expanded && (
        <div className={styles.input}>
          <InputBase
            placeholder="Search..."
            value={searchValue}
            onChange={handleChange}
            sx={{
              minWidth: { xs: '250px', lg: '400px' },
              padding: '4px 12px',
              opacity: expanded ? 1 : 0,
              backgroundColor: 'var(--color-secondary)',
              borderRadius: '4px',
              color: 'white',
              transition: 'opacity 0.9s',
            }}
          />
          {searchValue && (
            <div className={styles.searchSuggest}>
              <ul>
                {searchValue &&
                  searchResults.map(item => (
                    <li
                      key={item.id}
                      onClick={() => handleItemClick(item)}
                      className={styles.item}
                    >
                      <NavLink to={`/product/${item?.id}`}>
                        {truncateString(item.title, 40)}
                      </NavLink>
                    </li>
                  ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ExpandableSearchIcon;
