import React from "react";

import "./Content.scss";

function Content(props) {
  let { data = [] } = props;

  return (
    <>
      {/* <div className="card__content">
        <div className="card__content-key">Status:</div>
        <div className="card__content-value">Pre-RFP</div>
      </div>
      <div className="card__content">
        <div className="card__content-key">RFP Date (est.):</div>
        <div className="card__content-value">23/01/2023</div>
      </div>
      <div className="card__content">
        <div className="card__content-key">Contact Expires on:</div>
        <div className="card__content-value">Nil</div>
      </div>
      <div className="card__content">
        <div className="card__content-key">Status:</div>
        <div className="card__content-value">Pre-RFP</div>
      </div>
      <div className="card__content">
        <div className="card__content-key">RFP Date (est.):</div>
        <div className="card__content-value">23/01/2023</div>
      </div>
      <div className="card__content">
        <div className="card__content-key">Contact Expires on:</div>
        <div className="card__content-value">Nil</div>
      </div>
      <div className="card__content">
        <div className="card__content-key">Status:</div>
        <div className="card__content-value">Pre-RFP</div>
      </div>
      <div className="card__content">
        <div className="card__content-key">RFP Date (est.):</div>
        <div className="card__content-value">23/01/2023</div>
      </div> */}

      {data.map((ele, ind) => {
        return (
          <>
            <div className="card__content">
              <div className="card__content-key">{ele.key}</div>
              <div className="card__content-value">{ele.value}</div>
            </div>
          </>
        );
      })}
    </>
  );
}

export default Content;
