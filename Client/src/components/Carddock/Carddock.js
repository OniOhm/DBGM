import React, { useRef, useReducer, useState, useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSync as skin,faPlus} from "@fortawesome/free-solid-svg-icons";
import { CompactPicker } from "react-color";
import { formReducer, dockReducer } from "../reducers";
import NewCard from "./subComponents/NewCard";
import DeckDock from "../subComponents/DeckDock";
import NewTextCard from "./subComponents/NewTextCard";
import {Card, defaultCard} from "../../data/cardTemplate";


import Logo from "../../assets/1x/DBGM.png";
import attack2 from "../../assets/1x/Attack.png";
import Equip from "../../assets/1x/Equipment.png";
import magic from "../../assets/1x/magic.png";
import Enemy from "../../assets/1x/Enemy.png";
import Beast from '../../assets/1x/Beast.png';
import Influance from '../../assets/1x/Influance.png';
import Glory from '../../assets/1x/Glory.png';
import Currency from '../../assets/1x/Currency.png';
import Symbol1 from '../../assets/1x/Symbol1.png';
import Symbol2 from '../../assets/1x/Symbol2.png';
import consequence from "../../assets/1x/Injury.png";
import TitleComponent from "./subComponents/TitleComponent";

function Carddock() {
  const cardState = {...defaultCard,
    cardPic: Logo,
    cardEmblem: attack2,
    // the true quick solution
    cardSwitch: true,
  };
  const dockInitState = {
    EmblemBox: false,
    sideBoxView: false,
    colorComp: "card",
    createdDeck: [],
  };
  const picRef = useRef(null);
  const colorRef = useRef(null);
  const [formState, dispatch] = useReducer(formReducer, cardState);
  const [dockState, dockDispatch] = useReducer(dockReducer, dockInitState);

  useEffect(() => {}, [formState.cardOrintation]);

  return (
    <div className="tile sidebar is-ancestor is-12 is-marginless is-vertical">
      <div className="tile is-parent is 12 is-marginless">
        <div className="tile sidebar is-parent box is-4 is-default is-vertical is-marginless">
          <div className="tile is-12 is-child is-vertical">
            <div className="buttons">
              <button
                className="button is-default"
                onClick={() => {
                  dockDispatch({ type: "TOGGLE_FORM_VIEW", data: true });
                }}
              >
                Info
              </button>
              <button
                className="button is-default"
                onClick={() => {
                  dockDispatch({ type: "TOGGLE_FORM_VIEW", data: false });
                }}
              >
                Design
              </button>
            </div>
            <div hidden={dockState.sideBoxView}>
              <p className="title is-4">Card Info</p>
              <TitleComponent fieldname="Name" type="text"  updatefield={(e) => {
                      dispatch({ type: "NAME_CHANGE", data: e.target.value})
              }}></TitleComponent>
                           <TitleComponent fieldname="Cost" type="number"  updatefield={(e) => {
                    dispatch({ type: "COST_CHANGE", data: e.target.value });
              }}></TitleComponent>
                                        <TitleComponent fieldname="Type" type="text"  updatefield={(e) => {
                         dispatch({ type: "TYPE_CHANGE", data: e.target.value });
              }}></TitleComponent>
  
              <div className="field">
                <label className="label is-6 has-text-black">Effect</label>
                <div className="control">
                  <textarea
                    className="textarea"
                    onChange={(e) => {
                      dispatch({
                        type: "DESCRIPT_CHANGE",
                        data: e.target.value,
                        key: e.keyCode,
                      });
                    }}
                  />
                </div>
              </div>
              <div className="field">
                <label className="label is-6 has-text-black">lore</label>
                <div className="control">
                  <textarea
                    className="textarea"
                    onChange={(e) => {
                      dispatch({ type: "LORE_CHANGE", data: e.target.value });
                    }}
                  />
                </div>
              </div>
            </div>
            <div hidden={!dockState.sideBoxView}>
              <p className="title level-start is-4">Card Design</p>
              <p className="label is-6 has-text-black">Card Style</p>
              <div className="buttons">
                <button
                  className="button is-default"
                  onClick={(e) => {
                    dispatch({
                      type: "CARDTYPE_CHANGE",
                      data: "card-portrait",
                    });
                  }}
                >
                  Standard Portrait
                </button>
                <button
                  className="button is-default"
                  onClick={(e) => {
                    dispatch({
                      type: "CARDTYPE_CHANGE",
                      data: "card-landscape",
                    });
                  }}
                >
                  Standard Landscape
                </button>
                <button
                  className="button is-default"
                  onClick={(e) => {
                    dispatch({
                      type: "CARDTYPE_CHANGE",
                      data: "card-info-portrait",
                    });
                  }}
                >
                  Info Portrait
                </button>
                <button
                  className="button is-default"
                  onClick={(e) => {
                    dispatch({
                      type: "CARDTYPE_CHANGE",
                      data: "card-info-landscape",
                    });
                  }}
                >
                  Info Landscape
                </button>
              </div>
              <label className="label is-6 has-text-black">Card Picture</label>
              <div className="level">
                <input type="text" className="input" ref={picRef} />
                <div className="control">
                  <a
                    className="button is-info"
                    onClick={(e) => {
                      dispatch({
                        type: "PIC_CHANGE",
                        data: picRef.current.value,
                      });
                    }}
                  >
                    Commit
                  </a>
                </div>
              </div>
              <label className="label is-6 has-text-black">Card Emblem</label>
              <div className="level">
                <div className="level-start">
                  {/* butttons will be images and the image displayed in the newCard sub-component will be passed down visa props */}
                  <button
                    className="button is-default"
                    onClick={(e) => {
                      dispatch({ type: "EMBLEM_CHANGE", data: attack2 });
                    }}
                  >
                    <img
                      className="image"
                      src={attack2}
                      alt="attack"
                    />
                  </button>
                  <button
                    className="button is-default"
                    onClick={(e) => {
                      dispatch({ type: "EMBLEM_CHANGE", data: Equip });
                    }}
                  >
                    <img className="image" src={Equip} alt="attack" />
                  </button>
                  <button
                    className="button is-default"
                    onClick={(e) => {
                      dispatch({ type: "EMBLEM_CHANGE", data: magic });
                    }}
                  >
                    <img className="image" src={magic} alt="attack" />
                  </button>
                  <button
                    className="button is-default"
                    onClick={(e) => {
                      dispatch({ type: "EMBLEM_CHANGE", data: Beast });
                    }}
                  >
                    <img
                      className="image"
                      src={Beast}
                      alt="attack"
                    />
                  </button>
                  <button
                    className="button is-default"
                    onClick={(e) => {
                      dispatch({ type: "EMBLEM_CHANGE", data: Influance });
                    }}
                  >
                    <img
                      className="image"
                      src={Influance}
                      alt="attack"
                    />
                  </button>
                  <button
                    className="button is-default"
                    onClick={(e) => {
                      dispatch({ type: "EMBLEM_CHANGE", data: Enemy });
                    }}
                  >
                    <img
                      className="image"
                      src={Enemy}
                      alt="attack"
                    />
                  </button>
                  
                  <button
                    className="button is-default"
                    onClick={(e) => {
                      dispatch({ type: "EMBLEM_CHANGE", data: consequence });
                    }}
                  >
                    <img
                      className="image"
                      src={consequence}
                      alt="attack"
                    />
                  </button>
                  <button
                    className="button is-default"
                    onClick={(e) => {
                      dispatch({ type: "EMBLEM_CHANGE", data: Glory });
                    }}
                  >
                    <img
                      className="image"
                      src={Glory}
                      alt="attack"
                    />
                  </button>
                  <button
                    className="button is-default"
                    onClick={(e) => {
                      dispatch({ type: "EMBLEM_CHANGE", data: Currency });
                    }}
                  >
                    <img
                      className="image"
                      src={Currency}
                      alt="attack"
                    />
                  </button>
                  <button
                    className="button is-default"
                    onClick={(e) => {
                      dispatch({ type: "EMBLEM_CHANGE", data: Symbol1 });
                    }}
                  >
                    <img
                      className="image"
                      src={Symbol1}
                      alt="attack"
                    />
                  </button>
                  <button
                    className="button is-default"
                    onClick={(e) => {
                      dispatch({ type: "EMBLEM_CHANGE", data: Symbol2 });
                    }}
                  >
                    <img
                      className="image"
                      src={Symbol2}
                      alt="attack"
                    />
                  </button>
                </div>
                <div className="level-end">
                  <button className="button is-info">Set</button>
                </div>
              </div>
              <label className="label is-6 has-text-black">Colors</label>
              <div className="level">
                <div className="select">
                  <select
                    ref={colorRef}
                    onChange={(e) => {
                      dockDispatch({
                        type: "COLOR_COMP_CHANGE",
                        data: e.target.value,
                      });
                    }}
                  >
                    <option value="card">Card</option>
                    <option value="box">Box</option>
                    <option value="text">Text</option>
                    <option value="border">border</option>
                  </select>
                </div>
                <CompactPicker
                  className="level-end"
                  color={formState.backgroundColor}
                  onChangeComplete={(color) => {
                    dispatch({
                      type: "COLOR_CHANGE",
                      data: color.hex,
                      component: dockState.colorComp,
                    });
                  }}
                />
              </div>
              <div className="level"></div>
            </div>
            <div className="level">
              <button className="button is-link level-item level-end">
                <FontAwesomeIcon icon={faPlus} />
              </button>
              <button
                className="button level-item is-warning"
                onClick={(e) => {
                  dispatch({ type: "RESET_DESIGN" });
                }}
              >
                <FontAwesomeIcon icon={skin} />
              </button>
              <button
                className="button is-link level-item level-end"
                onClick={(e) => {
                  dockDispatch({ type: "ADD_TO_DECKDOCK", data: formState });
                  dispatch({ type: "RESET_DESIGN" });
                }}
              >
                Save
              </button>
            </div>
          </div>
        </div>
        <div className="tile">
          <DeckDock
            className="is-marginless"
            // passing length of deckDock array
            numOfCards={dockState.createdDeck.length}
            createdDeck={dockState.createdDeck}
            displayCard={(value) => {
              dispatch({ type: "DISPLAY_CARD", data: value });
            }}
          ></DeckDock>
        </div>
        <div className="tile is-parent is-6">
          {formState.cardSwitch && (
            <NewCard
              name={formState.name}
              cost={formState.cost}
              description={formState.description}
              lore={formState.lore}
              type={formState.type}
              oriantation={formState.oriantation}
              cardPic={formState.cardPic}
              backgroundColor={formState.backgroundColor}
              textColor={formState.textColor}
              boxColor={formState.boxColor}
              borderColor={formState.borderColor}
              cardEmblem={formState.cardEmblem}
            ></NewCard>
          )}
          {/* need to efficently render multiple card types */}
          {!formState.cardSwitch && (
            <NewTextCard
              name={formState.name}
              cost={formState.cost}
              description={formState.description}
              lore={formState.lore}
              type={formState.type}
              oriantation={formState.oriantation}
              cardPic={formState.cardPic}
              backgroundColor={formState.backgroundColor}
              textColor={formState.textColor}
              boxColor={formState.boxColor}
              borderColor={formState.borderColor}
              cardEmblem={formState.cardEmblem}
            ></NewTextCard>
          )}
        </div>
      </div>
    </div>
  );
}

export default Carddock;
