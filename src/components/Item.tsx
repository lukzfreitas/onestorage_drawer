import React, { useEffect, useState } from "react";

interface ItemProps {
  id: string;
  title: string;
  subTitles: { label: string; url: string }[];
}

const Item = (props: ItemProps) => {
  return (
    <div className="nav-item">
      <div className="nav-item" id={`${props.id}-id`}>
        <button
          className="btn btn-link collapsed"
          style={{ textDecoration: "none" }}
          data-toggle="collapse"
          data-target={`#${props.id}-collapse`}
          aria-expanded="false"
          aria-controls={`${props.id}-collapse`}
        >
          {props.title}
        </button>
      </div>
      <div
        id={`${props.id}-collapse`}
        className="collapse"
        aria-labelledby={`${props.id}`}
        data-parent="#accordion"
      >
        {props.subTitles.map((subTitle) => (
          <div
            className="card-body btn-link"
            style={{ textDecoration: "none" }}
            key={subTitle.label}
          >
            <a style={{ textDecoration: "none" }} href={subTitle.url}>
              {subTitle.label}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Item;
