import React, { useState } from "react";
import styled from "styled-components";
import fetch from "isomorphic-unfetch";

// components
import Layout from "../../components/layout";
import Button from "../../components/button";

// style
import { Colors } from "../../theme";
import { Title, Text } from "../../theme/fonts";
import { subscribe } from "graphql";
import { sizes } from "../../theme/layout";

const preferences = [
  { id: 0, name: "Coaching with Justin", selected: false },
  { id: 1, name: "Press/media", selected: false },
  { id: 2, name: "Speaking/podcast appearances", selected: false }
];

const Contact = props => {
  const [prefs, setPrefs] = useState(preferences);

  const selectPref = id => {
    let updated = [...prefs];
    updated[id] = {
      id,
      name: prefs[id].name,
      selected: !prefs[id].selected
    };
    setPrefs(updated);
  };

  const subscribe = e => {
    e.preventDefault();

    const request = {
      email: "coreybrown89@gmail.com",
      fName: "Corey",
      lName: "Brown",
      phone: "832-353-7221",
      id: "748ed055c5",
      interest: { "01": true }
    };

    fetch("/api/subscribe", {
      method: "POST",
      body: JSON.stringify(request)
    });
  };

  return (
    <Layout>
      <Wrapper>
        <Form onSubmit={subscribe}>
          <FormTitle as="legend">Contact Justin</FormTitle>
          <Row>
            <div>
              <Input id="fname" type="text" placeholder="First Name" />
            </div>
            <div>
              <Input id="lname" type="text" placeholder="Last Name" />
            </div>
          </Row>
          <Row>
            <div>
              <Input id="fname" type="text" placeholder="Email" />
            </div>
            <div>
              <Input id="lname" type="tel" placeholder="Phone (optional)" />
            </div>
          </Row>
          <Selections>
            {prefs &&
              prefs.map(pref => {
                return (
                  <CheckButton
                    onClick={() => selectPref(pref.id)}
                    key={pref.id}
                  >
                    <CheckBox selected={pref.selected} />
                    <CheckText>{pref.name}</CheckText>
                  </CheckButton>
                );
              })}
          </Selections>
          <TextArea type="textarea" placeholder="Comments" rows="8" />
          <ButtonRow>
            <SubmitBtn type="submit">Submit</SubmitBtn>
          </ButtonRow>
        </Form>
      </Wrapper>
    </Layout>
  );
};

const Wrapper = styled.div`
  background-color: ${Colors.primary};
  padding: 1rem;
`;

const FormTitle = styled(Title)`
  font-size: 1.4rem;
  letter-spacing: 3px;
  text-align: center;
  color: white;
  margin-bottom: 4rem;
`;

const Form = styled.form`
  max-width: 655px;
  margin: 4rem auto;
  padding: 3rem;
`;

const Selections = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin: 3rem 0;
`;

const CheckText = styled(Text)`
  font-size: 0.8rem;
  color: white;
`;

const CheckBox = styled.div`
  position: relative;
  height: 23px;
  width: 23px;
  border: 1px solid white;
  margin-right: 1rem;

  &:after {
    content: "✓";
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: PT Serif, serif;
    font-size: 0.8rem;
    padding: 0;
    margin: 0;
    color: ${Colors.primary};
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: white;
    transition: transform 0.12s ease-in-out;
    transform: ${props => (props.selected ? "scale(1)" : " scale(0)")};
  }
`;

const CheckButton = styled.div`
  display: flex;
  align-items: center;
  border: none;
  padding: 0;
  margin: 0.5rem 0;
  background: transparent;
  cursor: pointer;
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;
  margin-bottom: 2rem;
  @media (${sizes.MOBILE}) {
    grid-template-columns: 1fr;
  }
`;

const Input = styled.input`
  font-family: PT Serif, serif;
  font-weight: normal;
  font-size: 0.8rem;
  color: white;
  width: 100%;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid white;

  &::placeholder {
    font-family: PT Serif, serif;
    font-weight: normal;
    font-size: 0.8rem;
    color: white;
    opacity: 1;
  }
`;

const TextArea = styled.textarea`
  font-size: 0.8rem;
  font-family: PT Serif, serif;
  font-weight: normal;
  width: 100%;
  color: ${Colors.secondary};
  padding: 1rem;
  background-color: white;
`;

const ButtonRow = styled.div`
  display: flex;
  justify-content: center;
  margin: 3rem 0;
  @media (${sizes.MOBILE}) {
    justify-content: flex-start;
    margin: 2rem 0;
  }
`;

const SubmitBtn = styled.button`
  font-family: "PT Serif", "Times New Roman", Times, serif;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  min-width: 188px;
  border: 1px solid white;
  color: white;
  text-align: center;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  z-index: 10;

  &:hover {
    background-color: white;
    color: ${Colors.primary};
    cursor: pointer;
    transform: scale(1.1);
    box-shadow: 8px 9px 0 0 ${Colors.secondary};
  }
`;

export default Contact;
