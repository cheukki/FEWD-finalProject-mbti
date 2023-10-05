import { useState } from "react";
import data from "./data.json";
import { useParams } from "react-router-dom";

export default function TypeResult(props) {
  const params = useParams();
  const showingtype = data.typeList.find(({ type }) => type === params.id);
  const [showingContent, setShowingContent] = useState("features");
  console.log(showingtype);

  function featuresBtnClick() {
    setShowingContent("features");
  }

  function strengthsWeaknessesBtnClick() {
    setShowingContent("strengthsWeaknesses");
  }

  function suitableCareerBtnClick() {
    setShowingContent("suitableCareer");
  }

  function recommendedListBtnClick() {
    setShowingContent("recommendedList");
  }

  return (
    <div
      className="TypeResult"
      style={{ display: "flex", gap: "10px", width: "100%" }}
    >
      <div className="typeResult-left" style={{ width: "30%", gap: "10px" }}>
        <div className="type">
          <img src={showingtype.src} alt={showingtype.type} />
        </div>
        <div className="typeBar">typebar</div>
      </div>
      <div className="typeResult-right" style={{ width: "70%", gap: "10px" }}>
        <button id="features-btn" onClick={() => featuresBtnClick()}>
          Features
        </button>
        <button
          id="strengthsWeaknesses-btn"
          onClick={() => strengthsWeaknessesBtnClick()}
        >
          Strengths & Weaknesses
        </button>
        <button
          id="suitableCareer-btn"
          onClick={() => suitableCareerBtnClick()}
        >
          Suitable Career
        </button>
        <button
          id="recommendedList-btn"
          onClick={() => recommendedListBtnClick()}
        >
          Recommended List
        </button>

        <div className="content">
          {showingtype && showingtype[showingContent]}
        </div>
      </div>
    </div>
  );
}
