import React from 'react'
import './Contact.css'

const SocialLinks = props => {
	const SOCIAL_ARR = ["linkedin", "github", "instagram"];
	const SOCIAL_LINKS = SOCIAL_ARR.map((app) =>
	React.createElement("li", { key: app.toString(), className: `social__link link--${app.toString()}` },
	React.createElement("a", { href: `https://${app.toString()}.com/ericanaglik`, target: "blank_" }),
	React.createElement("i", { className: `fa fa-3x fa-${app.toString()}` })));
  
  
	return (
	  React.createElement("ul", { className: "social-links" },
	  SOCIAL_LINKS));
  
  
  };
  
//   const SocialApp = props => React.createElement(SocialLinks, null);
  



export default SocialLinks

// ReactDOM.render(<SocialApp />, document.getElementById("root"));]]