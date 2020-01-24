import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

// context
import { TabContext } from "./index";

// components
import { Colors } from "../../theme";
import { Title } from "../../theme/fonts";

const propTypes = {
  labels: PropTypes.arrayOf(PropTypes.string),
  centered: PropTypes.bool
};

const defaultProps = {
  labels: [],
  centered: false
};

const Tabs = props => {
  const [activeTab, setActiveTab] = useState(``);

  useEffect(() => {
    if (props.labels.length) {
      const initial = props.labels[0].toLowerCase();
      setActiveTab(initial);
    }
  }, []);

  return (
    <Wrapper>
      <TabList centered={props.centered}>
        {props.labels.length &&
          props.labels.map(label => {
            return (
              <li key={label}>
                <Tab
                  as="button"
                  key={label}
                  active={activeTab === label.toLowerCase()}
                  onClick={() => setActiveTab(label.toLowerCase())}
                  aria-label={`show ${label} tab content`}
                >
                  {label}
                </Tab>
              </li>
            );
          })}
      </TabList>
      <TabContext.Provider value={activeTab}>
        <TabContent>{props.children}</TabContent>
      </TabContext.Provider>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const TabList = styled.ul`
  display: flex;
  justify-content: ${props => (props.centered ? "center" : "flex-start")};
  align-items: baseline;
  list-style-type: none;
  padding: 0;
  margin: 0;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const Tab = styled(Title)`
  font-size: 0.8rem;
  letter-spacing: 2px;
  margin-right: 2rem;
  background: transparent;
  border: none;
  color: ${props => (props.active ? Colors.primary : Colors.text.muted)};
  border-bottom: ${props =>
    props.active ? "1px solid" + Colors.primary : "none"};
  outline: none;
  cursor: pointer;
`;

const TabContent = styled.div``;

Tabs.propTypes = propTypes;
Tabs.defaultProps = defaultProps;

export default Tabs;
