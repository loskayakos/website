import * as React from "react"
import { Arrow } from "../componets/icons/Arrow.icon";
import { Boat } from "../componets/icons/Boat.icon";
import { Equipment } from "../componets/icons/Equipment.icon";
import { Facebook } from "../componets/icons/Facebook.icon";
import { Instagram } from "../componets/icons/Instagram.icon";

import { NounArrow } from "../componets/icons/NounArrow.icon";
import { Safety } from "../componets/icons/Safety.icon";
import { Satisfaction } from "../componets/icons/Satisfaction.icon";
import { Sun } from "../componets/icons/Sun.icon";
import { Logo } from "../layout/TopNavigation/Logo";
import { GlobalStyle } from "../styles/globalstyle";
import { Bird } from './../componets/icons/Bird.icon';
import { NounCash } from './../componets/icons/NounCash.icon';
import { Section } from "../componets/shared/Index.styled";




const IndexPage = () => {
  return (
    <>
    <GlobalStyle />
    
    <div className="flex">coś</div>
    <Bird />
    <NounArrow />
    <Arrow />
    <Sun />
    <Logo />
    <Boat />
   
    <div style={{background: 'black'}} className='flex'>
<Satisfaction />
      <NounCash />
      <Equipment />
      <Safety />
      <Facebook />
      <Instagram />
      
    </div>
    
    </>
    
  )
}

export default IndexPage
