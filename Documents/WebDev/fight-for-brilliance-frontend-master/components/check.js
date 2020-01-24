import React from "react"
import styled from "styled-components"
import { motion } from "framer-motion"
import Icon from "church_center/components/external_icon"
import { string, any } from "prop-types"
const Circle = ({ color, children }) => {
  const CircleElement = styled(motion.div)`
    width: 32px;
    height: 32px;
    border-radius: 100%;
    background: ${props => (props.color ? props.color : "gray")};
  `
  return (
    <CircleElement
      color={color}
      initial={{ opacity: 0.15, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
    >
      {children}
    </CircleElement>
  )
}
Circle.propTypes = {
  color: string,
  children: any,
}
const IconWrapper = styled(motion.div)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    fill: #fff;
  }
`
const AnimatedCheckmark = () => {
  return (
    <IconWrapper
      initial={{ opacity: 0, scale: 0.1, rotate: -60 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 20,
        delay: 0.1,
      }}
    >
      <Icon symbol="giving#checkmark" style={{ width: "56%", height: "56%" }} />
    </IconWrapper>
  )
}
const AnimatedX = () => {
  return (
    <IconWrapper
      initial={{ opacity: 0, scale: 0.1 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 50,
        damping: 40,
      }}
    >
      <Icon symbol="giving#close" style={{ width: "48%", height: "48%" }} />
    </IconWrapper>
  )
}
export const DonationStatusIconSuccess = () => {
  return (
    <Circle color="#66BB6A">
      <AnimatedCheckmark />
    </Circle>
  )
}
export const DonationStatusIconError = () => {
  return (
    <Circle color="#EF5350">
      <AnimatedX />
    </Circle>
  )
}