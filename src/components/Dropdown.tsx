import React, {useState} from 'react';
import styled from "styled-components";

export type DropItemType = {
    text: string
    value: string
}

export type DropListType = {
    values: DropItemType[]
}


export const Dropdown = (props:DropListType) => {
    const [isActive, setIsActive] = useState(false)
    const [defaultValue, setDefaultValue] = useState(props.values[0])

    const activeHandler = () => {
        setIsActive(!isActive)
    }

    const toggleValue = (item:DropItemType) => {
        setDefaultValue(item)
        setIsActive(false)
    }

    return (
        <StyledDropdown className="head__languages_dropdown dropdown dropdown-light">
            <div className="dropdown__value" onClick={activeHandler}><span className="value">{defaultValue.text}</span></div>
            {isActive && <StyledDropdownList className="dropdown__list">
                {props.values.map(item => item.text !== defaultValue.text ? <StyledDropdownItem key={item.value} className="dropdown__item" onClick={()=>{toggleValue(item)}}>
                        <span className="value">{item.text}</span>
                    </StyledDropdownItem> : '')}
            </StyledDropdownList>}

        </StyledDropdown>
    );
};

const StyledDropdown = styled.div`
  position: relative;
`

const StyledDropdownList = styled.div`
  position: absolute;
  transition: all 0.3s;
  max-height: 220px;
  overflow: auto;
  z-index: 10;
  transform: translateX(-50%);
  left: 50%;
  top: calc(100% + 10px);
  background: ${(props) => props.theme.colors.white};
  box-shadow: ${(props)=> props.theme.effects.boxShadow};
  display: flex;
  flex-direction: column;
  border-radius: 24px;
`

const StyledDropdownItem = styled.div`
  line-height: 1.4;
  color: var(--clr-black-40);
  transition: all 0.5s;
  cursor: pointer;
  padding: 24px 32px;
  
  &:hover {
    color: ${(props) => props.theme.colors.black40};
    background-color: ${(props) => props.theme.colors.black5};
  }
`