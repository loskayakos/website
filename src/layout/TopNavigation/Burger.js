import React  from 'react'






export const Burger = ({opened, toggle}) => {
    return (
        <a role='button'
           className={{'is-active': opened}}
           aria-label='menu'
           aria-expanded='false'
           data-target='#topNavBar'
           onClick={toggle}>
            <span aria-hidden='true' />
            <span aria-hidden='true' />
            <span aria-hidden='true' />
        </a>
    )
}