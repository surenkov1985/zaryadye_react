import styled from "styled-components";

const StyledHeaderBottom = styled.div`
  display: flex;
  margin-left: -1rem;
  margin-right: -1rem;
  align-items: flex-start;
  
  & .head {

    &__logo {
      display: flex;
      height: 113px;
      margin-left: -2rem;
      
      & svg {
        width: 100%;
        height: 100%;
      }
    }
    
    &__left {
      flex-grow: 1;
      
      &_content {
        border-bottom: 2px solid rgb(219, 219, 219);
        padding-top: 2px;
        padding-bottom: 12px;
        display: flex;
        justify-content: space-between;
        gap: 84px;
      }
      
      &_controls {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-grow: 1;
      }
      
      & .links {
        display: flex;
        align-items: center;
        gap: 1.5rem;
        
        &__item {
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          
          & svg path {
            transition: all 0.3s;
          }
          
          &:hover  svg path {
            stroke: var(--clr-black-40);
          }
        }

        &:nth-child(2) {
          margin-left: 30px;
        }
      }
    }
    
    &__right {
      flex-grow: 1;
      
      &_content {
        border-bottom: 2px solid rgb(219, 219, 219);
        padding-bottom: 32px;
        padding-top: 15px;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
    }
    
    &__nav {
      
      &_list {
        display: flex;
        align-items: center;
        gap: 40px;
      }
    }
    
    &__languages {
      font-size: 1.375rem;
      color: var(--clr-black-40);
      line-height: 1.4;
    }

    .dropdown {
      position: relative;
      
      &__value {
        cursor: pointer;
        transition: all 0.3s;
        
        &:hover {
          color: var(--clr-black);
        }
      }
      
      &__list {
        position: absolute;
        top: calc(100% + 8px);
        border-radius: calc(var(--radius-sm) * 2);
        background: var(--clr-white);
        box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.08);
        padding: 16px 23px;
        display: flex;
        flex-direction: column;
        gap: 8px;
        left: 50%;
        z-index: 100;
      }
      
      &__item {
        cursor: pointer;
        
        & a {
          color: var(--clr-black-40);
          transition: all 0.3s;

          &:hover {
            color: var(--clr-black);
          }
        }
      }
    }
  }
`

export const S = {
    StyledHeaderBottom
}