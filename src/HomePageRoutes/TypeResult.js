// import { useState } from "react";
import data from "./data.json";
import { useParams } from "react-router-dom";
import React, { useState } from "react";
import { Box, Tab, Tabs, Typography } from "@mui/material";
export default function TypeResult(props) {
  const params = useParams();
  const showingtype = data.typeList.find(({ type }) => type === params.id);
  const [currentTabIndex, setCurrentTabIndex] = useState(0);
  const handleTabChange = (e, tabIndex) => {
    console.log(tabIndex);
    setCurrentTabIndex(tabIndex);
  };
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
      <div className="typeResult-right">
        <React.Fragment>
          <Tabs value={currentTabIndex} onChange={handleTabChange}>
            <Tab label="Features" />
            <Tab label="Strengths & Weaknesses" />
            <Tab label="Suitable Career" />
            <Tab label="Recommended List" />
          </Tabs>
          {/* TAB 1 Contents */}
          {currentTabIndex === 0 && (
            <Box sx={{ p: 3 }}>
              <Typography variant="h5"></Typography>
              <Typography variant="p">{showingtype.features}</Typography>
            </Box>
          )}
          {/* TAB 2 Contents */}
          {currentTabIndex === 1 && (
            <Box sx={{ p: 3 }}>
              <Typography variant="h5"></Typography>
              <Typography variant="p">
                {showingtype.strengthsWeaknesses}
              </Typography>
            </Box>
          )}
          {/* TAB 3 Contents */}
          {currentTabIndex === 2 && (
            <Box sx={{ p: 3 }}>
              <Typography variant="h5"></Typography>
              <Typography variant="p">{showingtype.suitableCareer}</Typography>
            </Box>
          )}
          {/* TAB 4 Contents */}
          {currentTabIndex === 3 && (
            <Box sx={{ p: 3 }}>
              <Typography variant="h5"></Typography>
              <Typography variant="p">{showingtype.recommendedList}</Typography>
            </Box>
          )}
        </React.Fragment>
      </div>
    </div>
  );
}

// export default function TypeResult(props) {
//   const params = useParams();
//   const showingtype = data.typeList.find(({ type }) => type === params.id);
//   const [showingContent, setShowingContent] = useState("features");
//   console.log(showingtype);

//   function featuresBtnClick() {
//     setShowingContent("features");
//   }

//   function strengthsWeaknessesBtnClick() {
//     setShowingContent("strengthsWeaknesses");
//   }

//   function suitableCareerBtnClick() {
//     setShowingContent("suitableCareer");
//   }

//   function recommendedListBtnClick() {
//     setShowingContent("recommendedList");
//   }

//   return (
//     <div
//       className="TypeResult"
//       style={{ display: "flex", gap: "10px", width: "100%" }}
//     >
//       <div className="typeResult-left" style={{ width: "30%", gap: "10px" }}>
//         <div className="type">
//           <img src={showingtype.src} alt={showingtype.type} />
//         </div>
//         <div className="typeBar">typebar</div>
//       </div>
//       <div className="typeResult-right" style={{ width: "70%", gap: "10px" }}>
//         <button id="features-btn" onClick={() => featuresBtnClick()}>
//           Features
//         </button>
//         <button
//           id="strengthsWeaknesses-btn"
//           onClick={() => strengthsWeaknessesBtnClick()}
//         >
//           Strengths & Weaknesses
//         </button>
//         <button
//           id="suitableCareer-btn"
//           onClick={() => suitableCareerBtnClick()}
//         >
//           Suitable Career
//         </button>
//         <button
//           id="recommendedList-btn"
//           onClick={() => recommendedListBtnClick()}
//         >
//           Recommended List
//         </button>

//         <div className="content">
//           {showingtype && showingtype[showingContent]}
//         </div>
//       </div>
//     </div>
//   );
// }
