import React, { useState } from "react";
import "../Styles/LatestUpdates.css";
import { ApexLegends } from "./CardsForLatestUpdates/ApexLegends";
import { Battlefield } from "./CardsForLatestUpdates/Battlefield";
import { EANews } from "./CardsForLatestUpdates/EANews";
import { EAPlay } from "./CardsForLatestUpdates/EAPlay";
import { F1 } from "./CardsForLatestUpdates/F1";
import { FIFA } from "./CardsForLatestUpdates/FIFA";
import { InsideEA } from "./CardsForLatestUpdates/InsideEA";
import { TheSlims4 } from "./CardsForLatestUpdates/TheSlims4";
export const LatestUpdates = () => {
  const [activeTab, setActiveTab] = useState("EANews");
  const tabs = document.querySelectorAll("[data-tab-target]");
  const tabContents = document.querySelectorAll("[data-tab-content]");
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const target = document.querySelector(tab.dataset.tabTarget);
      tabContents.forEach((tabContent) => {
        tabContent.classList.remove("active");
      });
      target.classList.add("active");
    });
  });
  const handleTabActive = (tabName) => {
    setActiveTab(tabName);
  };
  return (
    <div>
      <h1 className="latestUpdatesHeading">Latest Updates</h1>
      <div className="tabs">
        <ul>
          <li
            data-tab-target="#EANews"
            className={`${activeTab === "EANews" && "active"}`}
            onClick={() => handleTabActive("EANews")}
          >
            EANews
          </li>
          <li
            data-tab-target="#EAPlay"
            className={`${activeTab === "EAPlay" && "active"}`}
            onClick={() => handleTabActive("EAPlay")}
          >
            EAPlay
          </li>
          <li
            data-tab-target="#FIFA"
            className={`${activeTab === "FIFA" && "active"}`}
            onClick={() => handleTabActive("FIFA")}
          >
            FIFA
          </li>
          <li
            data-tab-target="#F1"
            className={`${activeTab === "F1" && "active"}`}
            onClick={() => handleTabActive("F1")}
          >
            F1
          </li>
          <li
            data-tab-target="#ApexLegends"
            className={`${activeTab === "ApexLegends" && "active"}`}
            onClick={() => handleTabActive("ApexLegends")}
          >
            Apex Legends
          </li>
          <li
            data-tab-target="#TheSlims4"
            className={`${activeTab === "TheSlims4" && "active"}`}
            onClick={() => handleTabActive("TheSlims4")}
          >
            The Slims 4
          </li>
          <li
            data-tab-target="#Battlefield"
            className={`${activeTab === "Battlefield" && "active"}`}
            onClick={() => handleTabActive("Battlefield")}
          >
            Battlefield
          </li>
          <li
            data-tab-target="#InsideEA"
            className={`${activeTab === "InsideEA" && "active"}`}
            onClick={() => handleTabActive("InsideEA")}
          >
            Inside EA
          </li>
        </ul>
      </div>
      <div className="tab-content">
        <div id="EANews" className="active" data-tab-content>
          <EANews />
        </div>
        <div id="EAPlay" data-tab-content>
          <EAPlay />
        </div>
        <div id="FIFA" data-tab-content>
          <FIFA />
        </div>
        <div id="F1" data-tab-content>
          <F1 />
        </div>
        <div id="ApexLegends" data-tab-content>
          <ApexLegends />
        </div>
        <div id="TheSlims4" data-tab-content>
          <TheSlims4 />
        </div>
        <div id="Battlefield" data-tab-content>
          <Battlefield />
        </div>
        <div id="InsideEA" data-tab-content>
          <InsideEA />
        </div>
      </div>
      <div className="read-more"><button className="read-more-btn">Read More</button></div>
    </div>
  );
};
