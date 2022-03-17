import React from "react";
import "./NavTab.css";

function NavTab() {
  const navTabLinksConfig = [
    {
      id: 1,
      link: '#о_проекте',
      text: 'О проекте',
    },
    {
      id: 2,
      link: '#технологии',
      text: 'Технологии',
    },
    {
      id: 3,
      link: '#студент',
      text: 'Студент',
    },
  ]

  const renderLink = navTabLinksConfig.map((m) => {
     return (<a href={m.link} className="NavTab__link hover-opacity">{m.text}</a>)
    })

  return(
    <nav className="NavTab">
      {renderLink}
    </nav>
  )
}

export default NavTab;
