import styled from '@emotion/styled'
import {Wrapper, Letter} from 'styled/components'
import {media} from 'styled/media'

const media610 = media.createMedia(610)
const media960 = media.createMedia(960)
import { Button } from 'ui/Button/Button.styled'
export {Wrapper, Letter}
export const OrderPage = styled.div`
  h2 {
    margin-top: 40px;
  }
  
  ${media610} {
    h2 {
      font-size: 20px;
      white-space: normal;
    }
  }
  h1 {
    margin-bottom: 1.25rem;
  }
  .order {
    .shadow-block {
      margin-bottom: 0.625rem;
      padding: 0.5rem;
      display: block;
      background: #FFFFFF;
      box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.02);
      border-radius: 6px;
      @media all and (min-width: 1023px) {
        padding: 1.875rem; 
      }
      &:first-child {
        padding: 0.5rem;
        @media all and (min-width: 1023px) {
          padding: 1.563rem 1.875rem;
        }
      }
      &__title {
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 30px;
        color: #1B1D1F;
        margin-bottom: 10px;
      }
      &__inner {
        display: flex;
        .shadow__left {
          flex: 1 0 50%;
          display: flex;
          flex-direction: column;
          @media all and (min-width: 1023px) {
            padding-right: 3rem;
            box-sizing: border-box;
          }
        }
        .shadow__right {
          flex: 1 0 50%;
          position: relative;
          width: 100%;
          background: #e1dfdf;
          border-radius: 8px;
        }
      }
    }
    &__success{
      text-align: center;
      margin-top: 50px;
      
      h4{
        font-size: 40px;
        font-weight: bold;
        margin-bottom: 10px;
      }
      
      &-desc{
        font-size: 20px;
        line-height: 1.2em;
        
        strong{
          font-weight: bold;
        }
      }

      ${Button} {
        margin-top: 20px;
        font-size: 20px;
        line-height: 1.8em;
        width: 200px;
      }
    }
    &__contain {
        display: flex;
        flex-direction: column;
        @media all and (min-width: 1023px) {
          flex-direction: row;
          align-items: flex-start;
        }
    }
    &__form {
      flex: 1 0 1%;
    }
    &__creation {
      background: #FFFFFF;
      border: 1px solid #F4F5F7;
      box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.05);
      border-radius: 6px;
      @media all and (min-width: 1023px) {
        flex: 1 0 300px;
        max-width: 300px;
        margin-left: 20px;
      }
      &--wrap {
        padding: 20px 30px;
        display: block;
        &:not(:last-child) {
          border-bottom: 1px solid #E3E3E8;
        }
      }
      &--title {
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        color: #1B1D1F;
      }
      &--item {
        display: flex;
        justify-content: space-between;
        margin-bottom: 10px;
        &__title {
          font-style: normal;
          font-weight: 400;
          font-size: 20px;
          line-height: 30px;
          color: #1B1D1F;
        }
        &__info {
          font-style: normal;
          font-weight: 400;
          font-size: 20px;
          line-height: 30px;
          color: #1B1D1F;
        }
      }
      .promo-code {
        margin-top: 20px;
        display: block;
        .check-promo {
          .form__input {
            padding-right: 52px;
          }
          &__button {
            position: absolute;
            right: 10px;
            top: 50%;
            border: none;
            outline: none;
            width: 36px;
            height: 36px;
            margin-top: -18px;
            background-color: rgba(89, 70, 215, 0.1);
            border-radius: 6px;
            background-image: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M15.8327 9.99998H4.16602' stroke='%232E1066' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M15.8327 9.99998H4.16602' stroke='%23410F9E' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M15.8327 9.99998H4.16602' stroke='%23453888' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M15.8327 9.99998H4.16602' stroke='%235946D7' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M15.8327 9.99998H4.16602' stroke='%236B59CC' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M11.666 14.1667L15.8327 10' stroke='%232E1066' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M11.666 14.1667L15.8327 10' stroke='%23410F9E' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M11.666 14.1667L15.8327 10' stroke='%23453888' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M11.666 14.1667L15.8327 10' stroke='%235946D7' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M11.666 14.1667L15.8327 10' stroke='%236B59CC' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M11.666 5.83331L15.8327 9.99998' stroke='%232E1066' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M11.666 5.83331L15.8327 9.99998' stroke='%23410F9E' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M11.666 5.83331L15.8327 9.99998' stroke='%23453888' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M11.666 5.83331L15.8327 9.99998' stroke='%235946D7' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M11.666 5.83331L15.8327 9.99998' stroke='%236B59CC' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A");
            background-repeat: no-repeat;
            background-position: 50% 50%;
            cursor: pointer;
          }
        }
      }
      &--total {
        display: flex;
        justify-content: space-between;
        margin-bottom: 10px;
        &__title {
          font-style: normal;
          font-weight: 400;
          font-size: 20px;
          line-height: 30px;
          color: #1B1D1F;
          
        }
        &__price {
          font-style: normal;
          font-weight: 600;
          font-size: 24px;
          line-height: 30px;
          color: #1B1D1F;
        }
      }
      &--desc {
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 18px;
        color: #7A7680;
      }
      .form-send-block {
        display: block;
        margin-bottom: 1rem;
      }
      .form__submit {
        border: none;
        outline: none;
        padding: 1rem;
        width: 100%;
        cursor: pointer;
        background: linear-gradient(0deg, #6B59CC, #6B59CC), linear-gradient(0deg, #5946D7, #5946D7), linear-gradient(0deg, #453888, #453888), linear-gradient(0deg, #410F9E, #410F9E), #2E1066;
        border-radius: 6px;
        border-color: rgb(107, 89, 204);
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        color: #FFFFFF;
        transition: all .3s ease;
        &:hover {
          box-shadow: 0 0 0 1px rgb(107 89 204);
          background: #fff;
          color: rgb(107 89 204);
        }
      }
    }
  }
  
  .tabs {
    &__nav {
      padding: 5px;
      background: #F4F5F7;
      border: 1px solid #E3E3E8;
      border-radius: 6px;
      display: inline-block;
      &--link {
        display: inline-block;
        padding: 10px 20px;
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 22px;        
        color: #55556D;
        &.active {
          background: linear-gradient(0deg, #6B59CC, #6B59CC), linear-gradient(0deg, #5946D7, #5946D7), linear-gradient(0deg, #453888, #453888), linear-gradient(0deg, #410F9E, #410F9E), #2E1066;
          border-radius: 6px;
          color: #fff;
        }
      }
    }
    &__content {
      &--block {
        display: none;        
        max-width: 400px;
        &.active {
          display: block;
        }
      }
    }
  }
  
  .form {
    
    &__radio-group {
      display: flex;
      margin-bottom: 1.25rem;
    }
    &__label {
      width: 100%;
      display: block;
      position: relative;
      &:not(:last-child) {
        margin-bottom: 1.25rem;
      }
      &.success {
        .form__input {
          padding-right: 42px;
        }
        &:after {
          content: '';
          position: absolute;
          right: 12px;
          width: 24px;
          height: 24px;
          top: 50%;
          margin-top: -12px;
          background: url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='12' cy='12' r='12' fill='%2368C659'/%3E%3Cpath d='M17.3327 8.33331L9.99935 15.6666L6.66602 12.3333' stroke='white' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A") 50% 50% / auto no-repeat;
        }
      }
      &.col-3 {
        @media all and (min-width: 640px) {
          width: calc(50% - 1.25rem);
        }
        @media all and (min-width: 1023px) {
          width: calc(33% - 0.75rem);
          margin-right: 1.25rem;
        }
        &:nth-child(5n) {
          @media all and (min-width: 1023px) {
            margin-right: 0;
          }
        }
      }
      &--title {
        background: #fff;
        position: absolute;
        left: 15px;
        top: -7px;
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 18px;
        color: #55556D;
        padding: 0 5px;
      }
      &--radio {
        display: flex;
        align-items: center;
        margin-right: 1.875rem;
        cursor: pointer;
        &__input {
          margin: 0 5px 0 0;
          cursor: pointer;
          width: 24px;
          height: 24px;
        }
        &__title {
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          line-height: 22px;
          color: #1B1D1F;
          margin-top: 4px;
        }
      }
    }
    &__input {
      width: 100%;
      display: block;
      background: #FFFFFF;
      border: 1px solid #DEDEE2;
      border-radius: 6px;
      padding: 13px 20px;
      outline: none;
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 22px;
      color: #000;
      transition: all .3s ease;
      box-sizing: border-box;
      &::placeholder {
        color: #55556D;
      }
      &:focus,
      &:active {
        outline: none;
        border-color: rgb(107, 89, 204);
        box-shadow: 0 0 0 1px rgb(107 89 204);
      }
    }
  }
  
  .form_radio {
    display: flex;
    align-items: center;
    &:not(:last-child) {
      margin-right: 1.25rem;
    }
    input[type=radio] {
      display: none;
      &:checked + label:before {
        background: url("data:image/svg+xml,%3Csvg width='12' height='12' viewBox='0 0 12 12' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='12' height='12' rx='6' fill='%232E1066'/%3E%3Crect width='12' height='12' rx='6' fill='%23410F9E'/%3E%3Crect width='12' height='12' rx='6' fill='%23453888'/%3E%3Crect width='12' height='12' rx='6' fill='%235946D7'/%3E%3Crect width='12' height='12' rx='6' fill='%236B59CC'/%3E%3C/svg%3E%0A") 50% 50% / auto no-repeat;
        border-color: rgb(107, 89, 204);
      }
      &:disabled + label:before {
        filter: grayscale(100%);
      }
    }
    label {
      position: relative;
      padding-left: 34px;
      cursor: pointer;
      &:before {
        content: "";
        display: inline-block;
        width: 24px;
        height: 24px;
        position: absolute;
        left: 0;
        top: 50%;
        margin-top: -17px;
        border: 2px solid #C5C3C8;
        border-radius: 34px;
        transition: all .3s ease;
        background-position: 50% 50%;
      }
      &:hover:before {
        filter: brightness(120%);
      }
    }
  }
  
  .del-group {
    display: flex;
    flex-wrap: wrap;
    &__item {
      width: 100%;
      margin-bottom: 1rem;
      @media all and (min-width: 640px) {
        width: calc(50% - 1.25rem);
        margin-bottom: 10px;
      }
      @media all and (min-width: 1023px) {
        width: calc(33% - 0.7rem);
      }
    }
    &__input {
      
      &:checked+label {
        box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.07);
      }
    }
    &__block {
      background: #FFFFFF;
      border: 1px solid #E3E3E8;
      border-radius: 6px;
      padding: 20px 20px 20px 54px !important;
      width: 100%;
      display: flex;
      flex-direction: column;
      min-height: 100%;
      box-sizing: border-box;
      transition: all .3s ease;
      &:before {
        left: 20px !important;
        top: 15px !important;
        margin-top: 0 !important;
      }
      &--title {
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        color: #1B1D1F;
        margin-bottom: 5px;
      }
      &--desc,
      &--price {
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 20px;
        color: #55556D;
      }
      &--desc {
        margin: 0 0 5px;
      }
      &--price {
        margin-top: auto;
      }
    }
  }
  
  .address,
  .payments {
    display: flex;
    flex-wrap: wrap;
    max-width: 400px;
  }
  
  .payments {
    .pay {
      &__item {
        display: block;
        width: 100%;
        margin-right: 0 !important;
        &:not(:last-child) {
          margin: 0 0 1.25rem !important;
        }
      }
      &__input {
        &:checked + label {
          background: rgba(89, 70, 215, 0.1);
          border-radius: 6px;
          border-color: rgb(107, 89, 204);
          box-shadow: 0 0 0 1px rgb(107 89 204);
        }
      }
      &__block {
        padding: 20px 40px 20px 3.75rem;
        box-sizing: border-box;
        display: flex;
        background: #FFFFFF;
        border: 1px solid #E3E3E8;
        border-radius: 6px;
        transition: all .3s ease;
        &:after {
          content: '';
          position: absolute;
          width: 24px;
          height: 24px;
          left: 20px;
          top: 50%;
          margin-top: -12px;
        }
        &.card-payment {
          &:after {
            background: url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M3 9H21' stroke='%231B1D1F' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M9.57 13H7' stroke='%231B1D1F' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M18 19H6C4.343 19 3 17.657 3 16V8C3 6.343 4.343 5 6 5H18C19.657 5 21 6.343 21 8V16C21 17.657 19.657 19 18 19Z' stroke='%231B1D1F' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A") 50% 50% / auto no-repeat;
          }
        }
        &.cash-payment {
          &:after {
            background: url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M16 7H8' stroke='%231B1D1F' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M16.13 11H8' stroke='%231B1D1F' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M4 19.191V4C4 3.448 4.448 3 5 3H19C19.552 3 20 3.448 20 4V19.191C20 19.563 19.609 19.804 19.276 19.638L17.333 18.666L14.89 19.888C14.749 19.958 14.584 19.958 14.443 19.888L12 18.667L9.557 19.889C9.416 19.959 9.251 19.959 9.11 19.889L6.667 18.667L4.724 19.639C4.391 19.804 4 19.563 4 19.191Z' stroke='%231B1D1F' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M13 15H8' stroke='%231B1D1F' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A") 50% 50% / auto no-repeat;
          }
        }
        &.courier-payment {
          &:after {
            background: url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M17 20H7V7H17V20' stroke='%231B1D1F' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M10 10H14' stroke='%231B1D1F' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M14 13H10' stroke='%231B1D1F' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M10 16H13' stroke='%231B1D1F' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M17 11H19C20.105 11 21 10.105 21 9V5C21 3.895 20.105 3 19 3H5C3.895 3 3 3.895 3 5V9C3 10.105 3.895 11 5 11H7' stroke='%231B1D1F' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A") 50% 50% / auto no-repeat;
          }
        }
        &:before {
          right: 16px;
          left: inherit;
          top: 50%;
          margin-top: -12px;
        }
        &--title {
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          line-height: 20px;
          color: #1B1D1F;
        }
      }
    }
  }

  .warning {
    background: rgba(251, 96, 25, 0.1);
    border: 1px solid rgba(251, 96, 25, 0.5);
    border-radius: 6px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 10px;
    @media all and (min-width: 1023px) {
      flex-direction: row;
      align-items: center;
    }
    &__icon {
      margin-bottom: auto;
    }
    &__left {
      display: flex;
      flex-direction: column;
      flex: 1 0 1%;
      margin-left: 1rem;
    }
    &__right {
      display: flex;
      align-items: center;
      &--buttons {
        button {
          padding: 10px 20px;
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          line-height: 22px;
          color: #FFFFFF;
          border: 2px solid #6b59cc;
          border-radius: 6px;
          cursor: pointer;
          transition: all .3s ease;
        }
      }
    }
    &__title {
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 22px;
      color: #1B1D1F;
      .price {
        font-weight: 500;
      }
    }
    &__desc {
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 20px;
      color: #3D3D4B;
    }
    &__subtitle {
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 22px;
      color: #1B1D1F;
      margin-right: 1rem;
    }
    .button-agree {
      color: #FFFFFF;
      background: linear-gradient(0deg, #6B59CC, #6B59CC), linear-gradient(0deg, #5946D7, #5946D7), linear-gradient(0deg, #453888, #453888), linear-gradient(0deg, #410F9E, #410F9E), #2E1066;
      margin-right: 10px;
      &:hover {
        
      }
    }
    .button-cancel {
      color: #6b59cc;
      background: #FFFFFF;
      &:hover {
        
      }
    }
  }
  
  .select-btn {
    background: #FFFFFF;
    border: 1px solid #C5C3C8;
    border-radius: 6px;
    padding: 10px 20px;
    cursor: pointer;
    text-align: left;
    margin-bottom: 1rem;
    padding-right: 34px;
    position: relative;
    &:before {
      content: '';
      position: absolute;
      width: 24px;
      height: 24px;
      top: 50%;
      margin-top: -12px;
      right: 10px;
      background: url("data:image/svg+xml,%3Csvg width='10' height='6' viewBox='0 0 10 6' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1L5 5L9 1' stroke='%237A7680' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A") 50% 50% / auto no-repeat;
    }
  }
  
  .cart_open {
    content: '';
    position: absolute;
    width: 32px;
    height: 32px;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.07);
    border-radius: 6px;
    outline: none;
    border: none;
    top: 10px;
    right: 10px;
    background: url("data:image/svg+xml,%3Csvg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 1H17V6' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M10 8L17 1' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M17 10V15C17 16.105 16.105 17 15 17H3C1.895 17 1 16.105 1 15V3C1 1.895 1.895 1 3 1H8' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A") 50% 50% / auto no-repeat, #3D3D4B;
    cursor: pointer;
  }
  
  .schedule {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    color: #7A7680;
    margin-bottom: 0.5rem;
  }
  
  .schedule__day {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    color: #1B1D1F;
  }
  
  .remodal {
    opacity: 0;
    visibility: hidden;
    transition: all .3s ease;
    z-index: -1;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1.5rem;
    &.active {
      z-index: 9999;
      background: rgb(27 29 31 / 50%);
      opacity: 1;
      visibility: visible;
    }
    &__inner {
      max-width: 1000px;
      width: 100%;
      background: #FFFFFF;
      border: 1px solid #E3E3E8;
      box-shadow: 0px 5px 40px rgba(0, 0, 0, 0.05);
      border-radius: 15px;
      position: relative;
      max-height: 100%;
      overflow-y: scroll;
      &::-webkit-scrollbar {
        width: 5px;
      }
      &::-webkit-scrollbar-track {
      
      }
      &::-webkit-scrollbar-thumb {
        background-color: #92979E;    
        border-radius: 30px;       
        border: 5px solid #92979E; 
      }
    }
    &__close-btn {
      position: absolute;
      right: 15px;
      top: 15px;
      width: 24px;
      height: 24px;
      border: none;
      border-radius: 50%;
      background: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M6.66602 6.66663L13.3327 13.3333' stroke='%237A7680' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M13.3327 6.66663L6.66602 13.3333' stroke='%237A7680' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A") 50% 50% / auto no-repeat, #E3E3E8;
      cursor: pointer;
    } 
    .rm_p {
      padding: 20px;
      box-sizing: border-box;
      display: flex;
    }
    &__header {
      padding-right: 39px;
      width: 100%;
      border-bottom: 1px solid #E3E3E8;
      &--title {
        font-style: normal;
        font-weight: 600;
        font-size: 20px;
        color: #1B1D1F;
      }
    }
    &__map {
      display: flex;
      flex-direction: column;
      @media all and (min-width: 1023px) {
        flex-direction: row;
      }
      &--search {
        position: relative;
        .form__input {
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          color: #55556D;
          padding-right: 39px;
          padding: 13px 15px;
        }
        input[data-type="submit-search-form"] {
          font-size: 0;
          position: absolute;
          width: 24px;
          height: 24px;
          border: none;
          outline: none;
          top: 50%;
          margin-top: -12px;
          right: 15px;
          background: url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M4 11C4 7.13401 7.13401 4 11 4C14.866 4 18 7.13401 18 11C18 14.866 14.866 18 11 18C7.13401 18 4 14.866 4 11ZM11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20C13.125 20 15.078 19.2635 16.6177 18.0319L20.2929 21.7071C20.6834 22.0976 21.3166 22.0976 21.7071 21.7071C22.0976 21.3166 22.0976 20.6834 21.7071 20.2929L18.0319 16.6177C19.2635 15.078 20 13.125 20 11C20 6.02944 15.9706 2 11 2Z' fill='%2392979E'/%3E%3C/svg%3E%0A") 50% 50% / auto no-repeat;
          cursor: pointer;
        }
      }
      &--left {
        border-right: 1px solid #E3E3E8;
        max-height: 700px;
        overflow-y: scroll;
        @media all and (min-width: 1023px) {
          flex: 1 0 320px;
          max-width: 320px;
        }
        &__scrolled {
          max-height: 700px;
        }
        &::-webkit-scrollbar {
          width: 5px;
        }
        &::-webkit-scrollbar-track {
        
        }
        &::-webkit-scrollbar-thumb {
          background-color: #92979E;    
          border-radius: 30px;       
          border: 5px solid #92979E; 
        }
      }
      &--right {
        flex: 1 0 1%;
        .map-integration {
          background: #F4F5F7;
          width: 100%;
          height: 100%;
          border-radius: 8px;
        }
      }
    }
    .searching_blocks {
      margin-top: 10px;
      &__item {
        padding: 15px;
        box-sizing: border-box;
        display: block;
        
        &.selected {
          background: #F4F5F7;
          border-radius: 5px;
          .searching_blocks__item--select {
            background: #6b59cc;
            color: #fff;
            pointer-events: none;
          }
        }
        &--title {
          font-style: normal;
          font-weight: 500;
          font-size: 18px;
          line-height: 22px;
          color: #1B1D1F;
          margin-bottom: 5px;
        }
        &--bottom {
          display: flex;
        }
        &--desc {
            flex: 1 0 1%;
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 18px;
            color: #7A7680;
        }
        &--select {
          background: #FFFFFF;
          border-radius: 6px;
          border: 1px solid #6b59cc;
          color: #6b59cc;
          font-style: normal;
          font-weight: 400;
          font-size: 14px;
          line-height: 18px;
          padding: 8px 15px;
          cursor: pointer;
          transition: all .3s ease;
          &:hover {
            background: #6b59cc;
            color: #fff;
          }
        }
      }
    }
    
  }
  
  
`
