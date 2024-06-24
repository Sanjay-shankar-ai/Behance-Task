import React, { useState, useEffect } from 'react';
import { PiFolderOpenFill } from 'react-icons/pi';
import { AiFillLike, AiTwotoneEye } from 'react-icons/ai';
import { behanceItem } from '../Data';
import './BehanceList.css'; // Import CSS file for BehanceList component

const BehanceList = ({ sortType }) => {
  const [sortedItems, setSortedItems] = useState(behanceItem);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    let sorted = [...behanceItem];
    if (sortType === 'mostLiked') {
      sorted = sorted.sort((a, b) => b.feLike - a.feLike);
    } else if (sortType === 'mostWatched') {
      sorted = sorted.sort((a, b) => b.feWatch - a.feWatch);
    }
    setSortedItems(sorted);
  }, [sortType]);

  const openModal = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section>
      <div className="container-fluid px-4">
        <div className="grid md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 gap-4 py-10">
          {sortedItems.map((item, index) => (
            <div key={index} className="category-item cursor-pointer">
              <div className="cat.img relative overflow-hidden rounded-md">
                <div className="bg-overlay"></div>
                <img
                  src={item.featureImg}
                  alt={item.featureTxt}
                  onClick={() => openModal(item.featureImg)}
                />
                <div className="save-file flex items-center absolute cursor-pointer top-2 left-2 py-2 px-3 bg-black/50 rounded-full">
                  <div className="s-icon text-white text-sm pr-1">
                    <PiFolderOpenFill />
                  </div>
                  <span className="text-white text-xs font-medium">Save</span>
                </div>
                <div className="patch absolute top-0 hover:translate-y-[-5px] cursor-pointer translate-y-[-10px] right-2">
                  <img src={item.fePatch} alt={item.featureTxt} />
                </div>
              </div>
              <div className="cat-info flex justify-between py-3">
                <div className="cat-name cursor-pointer">
                  <h4 className="font-medium text-sm hover:underline leading-[15px] text-ellipsis">
                    {item.featureTxt}
                  </h4>
                  <span className="text-sm hover:underline">{item.feUser}</span>
                </div>
                <div className="be-time flex">
                  <div className="be-like flex mr-2">
                    <div className="li-icon text-[#959595] mr-1 mt-[2px]">
                      <AiFillLike />
                    </div>
                    <span className="text-sm font-medium text-[#959595]">
                      {item.feLike}
                    </span>
                  </div>
                  <div className="be-watch flex mr-2">
                    <div className="wa-icon text-[#959595] mr-1 mt-[2px]">
                      <AiTwotoneEye />
                    </div>
                    <span className="text-sm font-medium text-[#959595]">
                      {item.feWatch}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content">
            <img src={selectedImage} alt="Enlarged Image" />
          </div>
        </div>
      )}
    </section>
  );
};

export default BehanceList;
