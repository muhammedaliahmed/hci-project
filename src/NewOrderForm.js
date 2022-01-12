import plus from "./plus.svg";
import { useState } from "react";
import Photodialog from "./PhotoDialog";
import { Link } from "react-router-dom";
export default function NewOrder() {
  const [displayDialog, setDisplayDialog] = useState(false);
  return (
    <div className="new-order-page">
      <div className=" new-order-form">
        <div>
          <div>
            <input type="text" placeholder="Student Name" />
          </div>
          <div>
            <input type="text" placeholder="Registration Number" />
          </div>
          <div>
            <input type="text" placeholder="Room Number" />
          </div>
          <div>
            <input type="text" placeholder="Hostel Number" />
          </div>
          <div className="button-container">
            <button
              onClick={(e) => {
                setDisplayDialog((curr) => !curr);
              }}
            >
              <Link to="/">
                <img src={plus} alt="yolo"></img>
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
