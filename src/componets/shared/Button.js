import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const SharedButton = styled.button`

`





export const Button = ({link, name, color}) => {
    return (
<SharedButton>

            <Link className="btn"  to={link}>{name}</Link>
            
</SharedButton>
    )
}