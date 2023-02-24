import styled from '@emotion/styled'
import {Wrapper, Letter} from 'styled/components'
import {media} from 'styled/media'

const media610 = media.createMedia(610)
const media960 = media.createMedia(960)
export {Wrapper, Letter}

export const OriginalSparePartsQuickDetailsPage = styled.div`
  h2 {
    margin-top: 40px;
  }
  
  ${media610} {
    h2 {
      font-size: 20px;
      white-space: normal;
    }
  }
  
  h1 span {
    color: #92979E;
  }
  
  .product {
    
    &__desc {
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 22px;
      color: #3D3D4B;
    }
    &__wrap {
      margin-top: 1.25rem;
      &--title-block {
        margin-bottom: 1rem;
        @media all and (min-width:  960px) {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
        }
      }
      &--title {
        font-style: normal;
        font-weight: 600;
        font-size: 24px;
        line-height: 30px;
        color: #1B1D1F;
        margin-bottom: 1remrem;
        @media all and (min-width:  960px) {
          margin-bottom: 0;
        }
      }
      .link-location {
        display: inline-block;
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 20px;
        color: #2E1066;
        border-bottom: 1px dashed #2E1066;
        padding-bottom: 4px;
        padding-left: 1.5rem;
        position: relative;
        &:before {
          content: '';
          position: absolute;
          left: 0;
          top: 50%;
          margin-top: -12px;
          width: 24px;
          height: 24px;
          background: url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg opacity='0.5'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M12 13V13C10.343 13 9 11.657 9 10V10C9 8.343 10.343 7 12 7V7C13.657 7 15 8.343 15 10V10C15 11.657 13.657 13 12 13Z' stroke='%232E1066' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M12 13V13C10.343 13 9 11.657 9 10V10C9 8.343 10.343 7 12 7V7C13.657 7 15 8.343 15 10V10C15 11.657 13.657 13 12 13Z' stroke='%23410F9E' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M12 13V13C10.343 13 9 11.657 9 10V10C9 8.343 10.343 7 12 7V7C13.657 7 15 8.343 15 10V10C15 11.657 13.657 13 12 13Z' stroke='%23453888' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M12 13V13C10.343 13 9 11.657 9 10V10C9 8.343 10.343 7 12 7V7C13.657 7 15 8.343 15 10V10C15 11.657 13.657 13 12 13Z' stroke='%235946D7' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M12 13V13C10.343 13 9 11.657 9 10V10C9 8.343 10.343 7 12 7V7C13.657 7 15 8.343 15 10V10C15 11.657 13.657 13 12 13Z' stroke='%236B59CC' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/g%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M12 21C12 21 5 15.25 5 10C5 6.134 8.134 3 12 3C15.866 3 19 6.134 19 10C19 15.25 12 21 12 21Z' stroke='%232E1066' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M12 21C12 21 5 15.25 5 10C5 6.134 8.134 3 12 3C15.866 3 19 6.134 19 10C19 15.25 12 21 12 21Z' stroke='%23410F9E' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M12 21C12 21 5 15.25 5 10C5 6.134 8.134 3 12 3C15.866 3 19 6.134 19 10C19 15.25 12 21 12 21Z' stroke='%23453888' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M12 21C12 21 5 15.25 5 10C5 6.134 8.134 3 12 3C15.866 3 19 6.134 19 10C19 15.25 12 21 12 21Z' stroke='%235946D7' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M12 21C12 21 5 15.25 5 10C5 6.134 8.134 3 12 3C15.866 3 19 6.134 19 10C19 15.25 12 21 12 21Z' stroke='%236B59CC' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A") 50% 50% / auto no-repeat; 
        }
      }
    }
    
    &__link {
      display: inline-block;
      margin-right: 1.5rem;
      color: var(--color-primary);
    }
    &__table-block {
      overflow: hidden;
      .divTable {
        width: 1260px;
      }
    }
    .divTable {
      background: #FFFFFF;
      border: 1px solid #F4F5F7;
      box-shadow: 0 2px 5px rgba(38, 34, 45, 0.03);
      border-radius: 6px;
      box-sizing: border-box;
      .divTableRow {
        display: grid;
        align-items: center;
        grid-template-columns: 190px 600px repeat(4, 99px) 70px;
        grid-template-rows: 1fr;
        grid-column-gap: 0px;
        grid-row-gap: 0px;
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 20px;
        color: var(--color-black);
        &.table__header {
          border-bottom: 1px solid #E3E3E8;
          margin: 0 -10px;
          .divTableCell {
            padding: 20px 10px 20px 20px;
            color: #55556D;
            .icon-asc {
              position: relative;
              display: inline-block;
              padding-right: 25px;
              &:after {
                content: '';
                position: absolute;
                right: 0;
                top: 50%;
                margin-top: -10px;
                width: 20px;
                height: 20px;
                background: url("data:image/svg+xml,%3Csvg width='16' height='12' viewBox='0 0 16 12' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.33342 6L9.66675 6' stroke='%233D3D4B' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M1.33342 1L14.6667 1' stroke='%233D3D4B' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M1.33341 11H4.66675' stroke='%233D3D4B' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A") 50% 50% / auto no-repeat;
              }
            }
          }
        }
        &.product__supplier-company {
          min-height: 40px;
          align-items: center;
          margin-top: 10px;
          background: #F4F5F7;
          border-radius: 4px;
          .divTableCell {
            padding: 5px 10px !important;
          }
        }
        &.element {
          align-items: center;
          grid-template-columns: 190px 600px repeat(4, 94px) 70px;
          transition: all .3s ease;
          border-radius: 6px;
          &:hover {
            background: #FFEBD3;
            cursor: pointer;
          }
          .divTableCell {
            padding: 1rem 10px;
            &:last-child {
              padding: 0;
              display: flex;
              justify-content: center;
              align-items: center;
            }
          }
          .dealer {
            width: 1rem;
            height: 1rem;
            margin-top: -3px;
            margin-right: 0.5rem;
            background: url("data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0_3601_66339)'%3E%3Cpath d='M2.61462 3.31387L5.23579 5.09996L7.4567 2.48864C7.51998 2.41085 7.6 2.34833 7.69079 2.30575C7.78159 2.26317 7.88082 2.24163 7.9811 2.24272C8.08137 2.2438 8.18011 2.2675 8.26996 2.31204C8.35981 2.35659 8.43845 2.42082 8.50003 2.49997L10.6958 5.0993L13.2442 3.30853C13.347 3.2198 13.4745 3.1646 13.6096 3.15032C13.7447 3.13603 13.8809 3.16334 14 3.2286C14.1191 3.29385 14.2155 3.39393 14.2762 3.51544C14.3368 3.63695 14.359 3.7741 14.3395 3.90853L13.4098 11.03H2.61446L1.51462 3.91254C1.49446 3.77736 1.51632 3.63925 1.57726 3.51692C1.63819 3.39458 1.73526 3.29393 1.8553 3.2286C1.97535 3.16326 2.11257 3.1364 2.24839 3.15166C2.38421 3.16691 2.51206 3.22354 2.61462 3.31387ZM2.66646 12.2H13.3331V13.1552C13.3331 13.332 13.2629 13.5016 13.1379 13.6266C13.0128 13.7516 12.8433 13.8219 12.6665 13.8219H3.33313C3.15631 13.8219 2.98675 13.7516 2.86172 13.6266C2.7367 13.5016 2.66646 13.332 2.66646 13.1552L2.66646 12.2Z' fill='%23FB6019'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_3601_66339'%3E%3Crect width='16' height='16' fill='white'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E%0A") 50% 50% / auto no-repeat;
          }
          .sale {
            display: inline-block;
            margin-left: 0.5rem;
            width: 1rem;
            height: 1rem;
            background: url("data:image/svg+xml,%3Csvg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M13.2444 4.75555C15.5887 7.09986 15.5887 10.9001 13.2444 13.2444C10.9001 15.5887 7.09986 15.5887 4.75555 13.2444C2.41124 10.9001 2.41124 7.09986 4.75555 4.75555C7.09986 2.41124 10.9001 2.41124 13.2444 4.75555Z' fill='%2338A865'/%3E%3Cpath d='M13.2444 4.75555C15.5887 7.09986 15.5887 10.9001 13.2444 13.2444C10.9001 15.5887 7.09986 15.5887 4.75555 13.2444C2.41124 10.9001 2.41124 7.09986 4.75555 4.75555C7.09986 2.41124 10.9001 2.41124 13.2444 4.75555' stroke='%2338A865' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M12.1112 7.66608L9.44409 10.3339L7.66601 8.55511L5.88794 10.3339' stroke='white' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A") 50% 50% / auto no-repeat;
          }
        }
        &.btn-wrap {
          align-items: center;
          grid-template-columns: 190px 600px repeat(4, 94px) 70px;
          .divTableCell {
            padding: 1rem 10px;
            color: #7A7680;
            &:last-child {
              padding: 0;
              display: flex;
              justify-content: center;
              align-items: center;
            }
            .btn-wrap__name {
              color: var(--color-primary);
              position: relative;
              display: inline-block;
              padding-right: 20px;
              cursor: pointer;
              &:after {
                content: '';
                position: absolute;
                right: 0;
                top: 50%;
                margin-top: -10px;
                width: 20px;
                height: 20px;
                background: url("data:image/svg+xml,%3Csvg width='10' height='6' viewBox='0 0 10 6' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.66675 1.33331L5.00008 4.66665L8.33341 1.33331' stroke='%232E1066' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M1.66675 1.33331L5.00008 4.66665L8.33341 1.33331' stroke='%23410F9E' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M1.66675 1.33331L5.00008 4.66665L8.33341 1.33331' stroke='%23453888' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M1.66675 1.33331L5.00008 4.66665L8.33341 1.33331' stroke='%235946D7' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M1.66675 1.33331L5.00008 4.66665L8.33341 1.33331' stroke='%236B59CC' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A") 50% 50% / auto no-repeat;
              }
            }
          }
        }
        .divTableCell {
          box-sizing: border-box;
          vertical-align: middle;
          &:nth-child(1) {
            align-items: center;
          }
          &:nth-child(3) {
            padding: 1rem 0;
            display: flex;
            align-items: center;
          }
          &:nth-child(4) {
            padding: 1rem 0;
            display: flex;
            align-items: center;
          }
          &:nth-child(5) {
            padding: 1rem 0;
          }
        }
      }
    }
    
    
    &__rating {
      display: inline-block;
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: normal;
      color: #BD7E20;
      background: #FAEFD1;
      border-radius: 6px;
      padding: 3px 7px 0 22px;
      position: relative;
      &:before {
        content: '';
        position: absolute;
        left: 5px;
        top: 1px;
        width: 14px;
        height: 14px;
        background: url("data:image/svg+xml,%3Csvg width='14' height='14' viewBox='0 0 14 14' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12.8025 5.35442C12.7658 5.24643 12.6984 5.15154 12.6084 5.08146C12.5184 5.01138 12.4099 4.96919 12.2962 4.96009L8.9706 4.69584L7.53151 1.51026C7.48568 1.40766 7.41114 1.32051 7.31687 1.25934C7.22261 1.19817 7.11266 1.16559 7.00029 1.16553C6.88791 1.16547 6.77793 1.19793 6.68359 1.25899C6.58926 1.32006 6.51462 1.40712 6.46868 1.50968L5.0296 4.69584L1.70401 4.96009C1.59228 4.96894 1.48546 5.0098 1.39634 5.07777C1.30721 5.14574 1.23956 5.23795 1.20147 5.34336C1.16338 5.44877 1.15646 5.56293 1.18155 5.67217C1.20664 5.78141 1.26266 5.88111 1.34293 5.95934L3.80051 8.35509L2.93135 12.1188C2.90496 12.2327 2.91341 12.3519 2.95562 12.461C2.99784 12.57 3.07185 12.6639 3.16806 12.7303C3.26428 12.7968 3.37825 12.8328 3.49519 12.8337C3.61213 12.8346 3.72663 12.8003 3.82385 12.7353L7.0001 10.6178L10.1763 12.7353C10.2757 12.8013 10.3929 12.8353 10.5121 12.8327C10.6314 12.83 10.747 12.791 10.8433 12.7207C10.9397 12.6505 11.0122 12.5524 11.0512 12.4396C11.0902 12.3269 11.0937 12.205 11.0613 12.0902L9.99435 8.35684L12.6403 5.97568C12.8136 5.81934 12.8772 5.57551 12.8025 5.35442Z' fill='%23EF9002'/%3E%3C/svg%3E ") 50% 50% / auto no-repeat;
      }
    }
    &__cart {
      display: inline-block;
      width: 32px;
      height: 32px;
      background: url("data:image/svg+xml,%3Csvg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M7.83203 9.33331L9.8787 18.9946C10.16 20.3253 11.3987 21.2306 12.7534 21.096L21.8414 20.1866C22.9614 20.0746 23.8894 19.272 24.1627 18.18L25.96 10.9906C26.1707 10.148 25.5347 9.33331 24.6667 9.33331H13.5827' stroke='%232E1066' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M7.83203 9.33331L9.8787 18.9946C10.16 20.3253 11.3987 21.2306 12.7534 21.096L21.8414 20.1866C22.9614 20.0746 23.8894 19.272 24.1627 18.18L25.96 10.9906C26.1707 10.148 25.5347 9.33331 24.6667 9.33331H13.5827' stroke='%23410F9E' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M7.83203 9.33331L9.8787 18.9946C10.16 20.3253 11.3987 21.2306 12.7534 21.096L21.8414 20.1866C22.9614 20.0746 23.8894 19.272 24.1627 18.18L25.96 10.9906C26.1707 10.148 25.5347 9.33331 24.6667 9.33331H13.5827' stroke='%23453888' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M7.83203 9.33331L9.8787 18.9946C10.16 20.3253 11.3987 21.2306 12.7534 21.096L21.8414 20.1866C22.9614 20.0746 23.8894 19.272 24.1627 18.18L25.96 10.9906C26.1707 10.148 25.5347 9.33331 24.6667 9.33331H13.5827' stroke='%235946D7' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M7.83203 9.33331L9.8787 18.9946C10.16 20.3253 11.3987 21.2306 12.7534 21.096L21.8414 20.1866C22.9614 20.0746 23.8894 19.272 24.1627 18.18L25.96 10.9906C26.1707 10.148 25.5347 9.33331 24.6667 9.33331H13.5827' stroke='%236B59CC' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M7.83208 9.33331L6.96541 5.33331H4.66675' stroke='%232E1066' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M7.83208 9.33331L6.96541 5.33331H4.66675' stroke='%23410F9E' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M7.83208 9.33331L6.96541 5.33331H4.66675' stroke='%23453888' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M7.83208 9.33331L6.96541 5.33331H4.66675' stroke='%235946D7' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M7.83208 9.33331L6.96541 5.33331H4.66675' stroke='%236B59CC' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M22.812 25.6893C22.5426 25.6893 22.324 25.908 22.3266 26.1773C22.3266 26.4467 22.5453 26.6653 22.8146 26.6653C23.084 26.6653 23.3026 26.4467 23.3026 26.1773C23.3013 25.908 23.0826 25.6893 22.812 25.6893' stroke='%232E1066' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M22.812 25.6893C22.5426 25.6893 22.324 25.908 22.3266 26.1773C22.3266 26.4467 22.5453 26.6653 22.8146 26.6653C23.084 26.6653 23.3026 26.4467 23.3026 26.1773C23.3013 25.908 23.0826 25.6893 22.812 25.6893' stroke='%23410F9E' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M22.812 25.6893C22.5426 25.6893 22.324 25.908 22.3266 26.1773C22.3266 26.4467 22.5453 26.6653 22.8146 26.6653C23.084 26.6653 23.3026 26.4467 23.3026 26.1773C23.3013 25.908 23.0826 25.6893 22.812 25.6893' stroke='%23453888' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M22.812 25.6893C22.5426 25.6893 22.324 25.908 22.3266 26.1773C22.3266 26.4467 22.5453 26.6653 22.8146 26.6653C23.084 26.6653 23.3026 26.4467 23.3026 26.1773C23.3013 25.908 23.0826 25.6893 22.812 25.6893' stroke='%235946D7' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M22.812 25.6893C22.5426 25.6893 22.324 25.908 22.3266 26.1773C22.3266 26.4467 22.5453 26.6653 22.8146 26.6653C23.084 26.6653 23.3026 26.4467 23.3026 26.1773C23.3013 25.908 23.0826 25.6893 22.812 25.6893' stroke='%236B59CC' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M11.5961 25.6894C11.3267 25.6894 11.1081 25.908 11.1107 26.1774C11.1081 26.448 11.3281 26.6667 11.5974 26.6667C11.8667 26.6667 12.0854 26.448 12.0854 26.1787C12.0854 25.908 11.8667 25.6894 11.5961 25.6894' stroke='%232E1066' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M11.5961 25.6894C11.3267 25.6894 11.1081 25.908 11.1107 26.1774C11.1081 26.448 11.3281 26.6667 11.5974 26.6667C11.8667 26.6667 12.0854 26.448 12.0854 26.1787C12.0854 25.908 11.8667 25.6894 11.5961 25.6894' stroke='%23410F9E' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M11.5961 25.6894C11.3267 25.6894 11.1081 25.908 11.1107 26.1774C11.1081 26.448 11.3281 26.6667 11.5974 26.6667C11.8667 26.6667 12.0854 26.448 12.0854 26.1787C12.0854 25.908 11.8667 25.6894 11.5961 25.6894' stroke='%23453888' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M11.5961 25.6894C11.3267 25.6894 11.1081 25.908 11.1107 26.1774C11.1081 26.448 11.3281 26.6667 11.5974 26.6667C11.8667 26.6667 12.0854 26.448 12.0854 26.1787C12.0854 25.908 11.8667 25.6894 11.5961 25.6894' stroke='%235946D7' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M11.5961 25.6894C11.3267 25.6894 11.1081 25.908 11.1107 26.1774C11.1081 26.448 11.3281 26.6667 11.5974 26.6667C11.8667 26.6667 12.0854 26.448 12.0854 26.1787C12.0854 25.908 11.8667 25.6894 11.5961 25.6894' stroke='%236B59CC' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A") 50% 50% / auto no-repeat;
    }
  }
   
`
