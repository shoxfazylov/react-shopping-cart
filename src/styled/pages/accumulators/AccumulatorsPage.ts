import styled from '@emotion/styled'
import {Wrapper, Letter} from 'styled/components'
import {media} from 'styled/media'

const media610 = media.createMedia(610)
const media960 = media.createMedia(960)
export {Wrapper, Letter}
export const AccumulatorsPage = styled.div`
  h2 {
    margin-top: 40px;
  }
  
  ${media610} {
    h2 {
      font-size: 20px;
      white-space: normal;
    }
  }
  
  .catalog {
    display: flex;
    align-items: flex-start;
    &__filter {
      display: none;
      background: #FFFFFF;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
      border-radius: 4px;
      margin-right: 1.25rem;
      @media all and (min-width: 960px) {
        display: block;
        flex: 1 0 300px;
        max-width: 300px;
      }
    }
    &__products {
      flex: 1 0 1%;
      display: flex;
      flex-wrap: wrap;
      @media all and (min-width: 620px) {
        margin: 0 -5px;
      }
    }
  }
  
  .filter {
    &__sect {
      
      &:not(:last-child) {
        border-bottom: 1px solid #E3E3E8;
      }
    }
    &__item {
      padding: 1.25rem;
      &--btn {
        background: transparent;
        outline: none;
        border: none;
        padding: 0 1.2em 0 0;
        width: 100%;
        text-align: left;
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        color: #1B1D1F;
        position: relative;
        cursor: pointer;
        margin-bottom: 1rem;
        &.active {
          &:after {
            transform: rotateX(180deg);
          }
        }
        &:after {
          content: '';
          position: absolute;
          right: 0;
          width: 24px;
          height: 24px;
          top: 50%;
          margin-top: -12px;
          transition: all .3s ease;
          transform: rotateX(0);
          background: url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8 10L12 14L16 10' stroke='%2355556D' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A") 50% 50% / auto no-repeat;
         
        }
      }
      &--info {

      }
      &--text-field {
        margin-bottom: 1rem;
        input {
          background: #FFFFFF;
          border: 1px solid #DEDEE2;
          border-radius: 4px;
          font-weight: 400;
          font-size: 16px;
          line-height: 20px;
          color: #7A7680;
          outline: none;
          width: 100%;
          padding: 10px 20px;
          box-sizing: border-box;
          transition: all .3s ease;
          &:active,
          &:focus {
            color: #000;
            border-color: var(--color-primary);
          }
        }
      }
      &--two-field {
        overflow: hidden;
        border: 1px solid #DEDEE2;
        border-radius: 4px;
        &.no-active {
          input {
            background: #F4F5F7;
          }
        }
        input {
          background: #fff;
          border: none;
          font-weight: 400;
          font-size: 16px;
          line-height: 20px;
          color: #7A7680;
          outline: none;
          width: 100%;
          padding: 10px 20px;
          box-sizing: border-box;
          transition: all .3s ease;
          width: 50%;
          &:active,
          &:focus {
            color: #000;
            border-color: var(--color-primary);
          }
          &:first-child {
            border-right: 1px solid #DEDEE2;
          }
        }
      }
      &--checkboxes {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        max-height: 140px;
        overflow: hidden;
        overflow-y: scroll;
        margin-bottom: 1rem;
        &.active {
          max-height: inherit;
          overflow: auto;
          overflow-y: auto;
        }
        &__show-all {
          background: transparent;
          outline: none;
          border: none;
          padding: 0;
          color: var(--color-primary);
          font-family: 'TTCommons',sans-serif;
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          line-height: 20px;
          cursor: pointer;
        }
        &__label {
          display: flex;
          align-items: center;
          &:not(:last-child) {
            margin-bottom: 10px;
          }
          input {
            margin: 0 8px 0 0;
          }
          &--name {
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            color: #1B1D1F;
          }
          &--count {
            color: #7A7680;
            margin-left: 0.2rem;
          }
        }
      }
      &--clear-btn {
        outline: none;
        border: none;
        width: 100%;
        padding: 1rem;
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        color: #92979E;
        background: #F4F5F7;
        border-radius: 4px;
        cursor: pointer;
      }
    }
  }
  
  .product {
    background: #FFFFFF;
    border: 1px solid #E3E3E8;
    border-radius: 6px;
    width: 100%;
    transition: all .3s ease;
    @media all and (min-width: 620px) {
      width: calc(50% - 12px);
      margin: 0 5px 1.25rem;
    }
    @media all and (min-width: 1023px) {
      width: calc(33% - 10px);
    }
    
    &__inner {
      padding: 1.25rem;
      position: relative;
      display: flex;
      flex-direction: column;
      height: 100%;
      box-sizing: border-box;
    }
    &__top {
    }
    &__link{
      display: flex;
      justify-content: center;
      max-height: 200px;
      overflow: hidden;
      margin-bottom: 10px;
    }
    
    &__bottom {
      display: flex;
      flex-direction: column;
      margin-top: auto;
    }
    &__main-info { 
      margin-bottom: 10px;
    }
    &__vendor {
      display: inline-block;
      margin-bottom: 5px;
      &--name{
        font-style: normal;
        font-weight: 600;
        font-size: 18px;
        line-height: 22px;
        color: #1B1D1F;
      }
    }
    &__name {
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 20px;
      color: #1B1D1F;
      &--link {
        display: block;
        margin-bottom: 5px;
      }
    }
    &__article{
      
      &--title{
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 20px;
        color: #7A7680;
      }
      &--num {
        color: var(--color-primary);
        margin-left: 0.5rem;
      }
    }
    &__buy--btn{
      margin-top: 12px;
      font-family: TTCommons,Roboto,Arial,sans-serif;
      background: rgba(89, 70, 215, 0.1);
      border-radius: 4px;
      border: 1px solid #5946d71a;
      padding: 13px;
      border: none;
      outline: none;
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 22px;
      color: var(--color-primary);
      transition: all .3s ease;
      cursor: pointer;
      
      &.no-active {
        background: #F4F5F7;
        border: 1px solid #C5C3C8;
        border-radius: 4px;
        color: #1B1D1F;
      }
    }
    &:hover {
      border: 1px solid #F4F5F7;
      box-shadow: rgb(0 0 0 / 10%) 0px 4px 6px -1px, rgb(0 0 0 / 6%) 0px 2px 4px -1px;
      .product__buy--btn {
        background: var(--color-primary);
        color: #fff;
        &.no-active {
          background: #F4F5F7;
          border: 1px solid #C5C3C8;
          border-radius: 4px;
          color: #1B1D1F;
        }
      }
      .product__additional-info {
        z-index: 1;
        visibility: visible;
        opacity: 1;
        transition: opacity .3s ease,visibility .0s ease,transform .3s ease;
        transform: scale(1);
      }
    }
    &__additional-info{
      position: absolute;
      top: calc(100% - 6px);
      left: -1px;
      right: -1px;
      opacity: 0;
      transition: opacity .3s ease,visibility .0s ease,transform .3s ease;
      box-shadow: rgb(0 0 0 / 10%) 0px 4px 6px -1px, rgb(0 0 0 / 6%) 0px 2px 4px -1px;
      visibility: hidden;
      background: #FFFFFF;
      border: 1px solid #F4F5F7;
      border-top: 0;
      padding: 6px 20px 20px;
      border-radius: 0 0 6px 6px;
      &__item{
        
        &--title{
          color: #7A7680;
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          line-height: 20px;
        }
        &--value{
          font-weight: 400;
          font-size: 16px;
          line-height: 20px;
          color: #1B1D1F;
          display: inline-block;
          margin-left: 0.2rem;
        }
        &:not(:last-child) {
          margin-bottom: 0.5rem;
        }
      }
    }
  }
  
`
