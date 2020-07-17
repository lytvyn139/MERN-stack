import React from "react";

const AllNotes = (props) => {
  return (
    <>
      <h2 className='mt-5'>All Notes</h2>
      <ul className='list-group'>
        {props.notes.map(
          (note, i) => (
            <li className='list-group-item' key={i}>
              {note}
            </li>
          )
          // <li className="list-group-item" key={i} dangerouslySetInnerHTML={{ __html: note }}></li>
        )}
      </ul>
    </>
  );
};
export default AllNotes;
