import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";




export const Logo = () => {
    return (
        <Link to='/'>
              <StaticImage
        alt={'Los Kayakos logo'}
        src='../../../static/images/Logo.png'
      />
        </Link>
    )
}