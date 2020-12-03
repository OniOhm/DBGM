import React, { useRef, useReducer, useState, useEffect } from "react";

function TitleComponent(props){
    return (
        <div className="field">
                <label className="label is-6 has-text-black">{props.fieldname}</label>
                <div className="control">
                  <input
                    type={props.type}
                    className="input"
                    value={props.value}
                    onChange={props.updatefield
                    }
                  />
                </div>
              </div>
    )
}
export default TitleComponent;