import styled from "styled-components";

const StyledHeaderTop = styled.div`
  display: none;
  padding-bottom: 12px;
  border-bottom: 2px solid rgb(219, 219, 219);
  align-items: flex-end;
  justify-content: space-between;
  
  @media screen and (max-width: 991px) {
      display: flex !important;
  }
`

export const S = {
    StyledHeaderTop
}