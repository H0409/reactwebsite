import React from 'react';

function Card(){
    return(
        <>
        <div className="cards">
          <div className="card">
            <img src=" https://i.scdn.co/image/ab67616d0000b273bd0db295c0164ddbc0584ebb" alt="mypic" className="card_img" />
            <div className="card_info">
              <span className="card_category"></span>
              <h3 className="card_title"></h3>
              <a href=" " target="_blank">
                <button>Watch Now</button>
              </a>
            </div>
          </div>
        </div>
      </>,
    );
}

export default Card;