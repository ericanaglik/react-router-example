import React from 'react'
import './Contact.css'
import { SocialIcon } from 'react-social-icons';
import ReactDOM from 'react-dom';

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
  

  



export default SocialLinks

ReactDOM.render(<SocialIcon url="http://twitter.com/ericalovesmusic" />, document.getElementById("root"));