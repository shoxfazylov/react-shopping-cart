import styled from '@emotion/styled'
import MuiAccordion from '@mui/material/Accordion'
import MuiAccordionSummary from '@mui/material/AccordionSummary'
import MuiAccordionDetails from '@mui/material/AccordionDetails'

import { media } from 'styled/media'
import { Wrapper } from 'styled/components'

const media400 = media.createMedia(400)

export { Wrapper }

export const Footer = styled.footer`
  color: #fff;
  background: #2f2b4a;
`

export const Top = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 40px 0;

  ${media.laptop} {
    flex-wrap: wrap;
  }

  ${media.tablet} {
    padding-top: 30px;
    padding-bottom: 20px;
  }
`

export const Documents = styled.div`
  display: flex;
  margin-left: auto;

  a {
    color: #fff;
    line-height: 20px;

    &:not(:last-child) {
      margin-right: 30px;
    }
  }

  ${media.laptop} {
    display: none;
  }
`

export const TopRight = styled.div`
  width: 208px;

  ${Documents} {
    display: none;
  }

  ${media.laptop} {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-top: 30px;

    ${Documents} {
      display: flex;
    }
  }

  ${media.tablet} {
    flex-direction: column;
    margin-top: 0;

    ${Documents} {
      margin-left: 0;
    }
  }
`

export const NavColumn = styled.div`
  ${media.tablet} {
    display: none;
  }
`

export const NavTag = styled.p`
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
`

export const NavList = styled.ul`
  margin-top: 20px;
`

export const NavItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 8px;
  }

  a {
    color: #f4f5f6;
    line-height: 20px;
  }
`

export const Consultation = styled.div`
  ${media.laptop} {
    display: flex;
    align-items: center;
  }

  ${media.tablet} {
    width: 100%;
    flex-direction: column;
    justify-content: flex-start;
  }
`

export const ConsultationLink = styled.a`
  width: 208px;
  padding: 15px 20px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  box-sizing: border-box;

  & > span {
    display: flex;
    flex-direction: column;
    margin-left: 10px;

    span {
      &:first-child {
        color: #fff;
        line-height: 22px;
      }

      &:last-child {
        margin-top: 2px;
        font-size: 14px;
        line-height: 18px;
        color: #f4f5f7;
      }
    }
  }

  ${media.tablet} {
    display: flex;
    justify-content: center;
    width: 100%;
    margin-bottom: 20px;
  }
`

export const ConsultationStatus = styled.div`
  position: relative;
  margin-top: 20px;
  padding-left: 30px;

  p {
    white-space: unset;
  }

  ${media.laptop} {
    max-width: 182px;
    margin-top: 0;
    margin-left: 40px;
  }

  ${media.tablet} {
    max-width: 100%;
    margin-bottom: 20px;
    margin-left: -24px;
  }
`

export const ConsultationIndicator = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 20px;
  height: 20px;
  background: rgba(73, 193, 113, 0.3);
  border-radius: 50%;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 10px;
    height: 10px;
    background: var(--color-green-100);
    border-radius: 50%;
    transform: translate(-50%, -50%);
    z-index: 10;
  }
`

export const Bottom = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 0;
  border-top: 1px solid rgba(255, 255, 255, 0.15);

  & > p {
    flex-shrink: 0;
  }

  ${media.laptop} {
    justify-content: space-between;
  }

  ${media.tablet} {
    justify-content: center;
    flex-direction: column-reverse;
  }

  ${media400} {
    align-items: flex-start;
  }
`

export const PaymentAccept = styled.div`
  display: flex;
  align-items: center;
  margin-left: 118px;

  ${media.laptop} {
    margin-left: auto;
  }

  ${media.tablet} {
    margin-left: 0;
    margin-bottom: 20px;
  }

  ${media400} {
    p {
      font-size: 14px;
      line-height: 18px;
    }
  }
`

export const PaymentServices = styled.ul`
  display: flex;
  margin-left: 18px;
`

export const PaymentItem = styled.li`
  padding: 10px;
  height: 36px;
  background: rgba(244, 246, 249, 0.15);
  border-radius: 4px;
  box-sizing: border-box;

  &:not(:last-child) {
    margin-right: 10px;
  }
`

export const NavAccordionContainer = styled.div`
  display: none;
  width: 100%;
  margin-bottom: 20px;

  ${media.tablet} {
    display: block;
  }
`

export const NavAccordion = styled(MuiAccordion)`
  background: transparent;
  box-shadow: none;

  &::before {
    display: none;
  }

  &:not(:last-child) {
    margin-bottom: 15px;
  }
`

export const NavAccordionSummary = styled(MuiAccordionSummary)`
  min-height: 24px;
  padding: 0;

  .accordion-summary-content {
    margin: 0;

    p {
      color: #fff;
    }
  }

  .accordion-expand-icon-container {
    transform: rotate(90deg);

    svg path {
      stroke: #fff;
    }
  }
`

export const NavAccordionDetails = styled(MuiAccordionDetails)`
  margin-top: 15px;
  padding: 0;
`
