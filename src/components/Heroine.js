import React, { useState, useRef, useEffect } from 'react';
import { IoSearchSharp } from "react-icons/io5";
import { BsImage } from "react-icons/bs";
import { VscSettings } from "react-icons/vsc";
import { RiArrowDropDownFill } from "react-icons/ri";
import { tagName, behanceItem } from '../Data'; // Import your data
import './Heroine.css'; // Import CSS file for Heroine component

const Heroine = ({ setSortType }) => {
  const [filterVisible, setFilterVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchSuggestions, setSearchSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchRef = useRef(null);

  useEffect(() => {
    // Function to handle clicks outside the search box
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSuggestions(false);
      }
    };

    // Add event listener when component mounts
    document.addEventListener('mousedown', handleClickOutside);

    // Cleanup event listener when component unmounts
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleFilterVisibility = () => {
    setFilterVisible(!filterVisible);
    clearSearchState();
  };

  const handleSearchFocus = () => {
    setShowSuggestions(true);
  };

  const handleSearchChange = (event) => {
    const newSearchTerm = event.target.value;
    setSearchTerm(newSearchTerm);

    // Filter suggestions based on the current search term
    const filteredSuggestions = behanceItem.filter(item =>
      item.featureTxt.toLowerCase().includes(newSearchTerm.toLowerCase())
    );

    // Update the search suggestions
    setSearchSuggestions(filteredSuggestions);
  };

  const handleSelectSuggestion = (selectedItem) => {
    setSearchTerm(selectedItem.featureTxt);
    setShowSuggestions(false);
  };

  const clearSearchState = () => {
    setSearchTerm('');
    setSearchSuggestions([]);
  };

  // Function to highlight matching letters in suggestion
  const highlightMatchedText = (text, highlight) => {
    const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
    return parts.map((part, index) =>
      part.toLowerCase() === highlight.toLowerCase() ? <strong key={index}>{part}</strong> : part
    );
  };

  return (
    <header className='border-b sticky top-0 bg-white z-10'>
      <div className='search-area p-5'>
        <div className='container-fluid flex relative'>
          <div className='relative z-20'>
            <button 
              className='flex items-center text-[#777] font-bold text-xl border-2 border-[#e0e0e0] rounded-full px-5 py-2 bg-white hover:bg-[#e0e0e0]'
              onClick={toggleFilterVisibility}
            >
              <VscSettings className='mr-2' /> Filter
            </button>
            {filterVisible && (
              <div className='behance-tools absolute top-full left-0 mt-2 bg-white shadow-lg rounded-lg p-4 w-64'>
                <div className='flex flex-col'>
                  {['Projects', 'Assets', 'Images', 'People'].map((option) => (
                    <div key={option} className='rounded-full bg-white border px-3 py-2 my-2'>
                      <p className='text-sm font-bold text-center'>{option}</p>
                    </div>
                  ))}
                  {tagName.map((tools, index) => (
                    <React.Fragment key={tools.tags}>
                      <div className='tools-item flex justify-between items-center py-2'>
                        <div className='t-icon'>
                          {tools.tagsIcon}
                        </div>
                        <div className='tname px-1'>
                          <p className='text-sm font-bold'>{tools.tags}</p>
                        </div>
                        <div className='dt-arrow'>
                          <RiArrowDropDownFill />
                        </div>
                      </div>
                      {index < tagName.length - 1 && <hr className='my-2' />}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            )}
          </div>
          <div className='flex-1 ml-2'>
            <div className='search-box w-full border-2 rounded-full bg-[#f9f9f9] overflow-hidden flex items-center'>
              <div className='input-box relative w-full' ref={searchRef}>
                <input 
                  type='text' 
                  placeholder='Search the creative world at work' 
                  className='bg-transparent outline-none w-full pl-12 pr-3 py-2 text-lg font-bold text-[#222] placeholder:text-[#777]' 
                  value={searchTerm}
                  onChange={handleSearchChange}
                  onFocus={handleSearchFocus}
                />
                <div className='search-icon text-2xl text-[#777] absolute top-1/2 left-3 transform -translate-y-1/2'>
                  <IoSearchSharp />
                </div>
              </div>
              <div className='tags-search px-5 py-3'>
                <button className='flex items-center bg-white rounded-full  text-[#777] font-bold text-sm px-4 py-2'>
                  <BsImage className='mr-1' /> Search by image
                </button>
              </div>
            </div>
          </div>
          <div className='Recm-items flex items-center ml-4'>
            <span className='text-xs font-bold text-[#333] mr-2'>Sort</span>
            <div className='flex items-center'>
              <select 
                className='text-sm font-medium mr-1 bg-white border-none'
                onChange={(e) => setSortType(e.target.value)}
              >
                <option value='recommended'>Recommended</option>
                <option value='mostLiked'>Most Liked</option>
                <option value='mostWatched'>Most Watched</option>
              </select>
              <RiArrowDropDownFill />
            </div>
          </div>
        </div>
        {/* Display search suggestions only when showSuggestions is true */}
        {showSuggestions && searchSuggestions.length > 0 && (
          <div className='search-suggestions'>
            {searchSuggestions.map((item, index) => (
              <div 
                key={index} 
                className='suggestion-item'
                onClick={() => handleSelectSuggestion(item)}
              >
                {highlightMatchedText(item.featureTxt, searchTerm)}
              </div>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}

export default Heroine;
