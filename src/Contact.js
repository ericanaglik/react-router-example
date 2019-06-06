import React from 'react'
import './Contact.css'
import { fab } from '@fortawesome/free-brands-svg-icons'


const SocialLinks = props => {
	const SOCIAL_ARR = ["linkedin", "github", "instagram"];
	
	const socialLinks = SOCIAL_ARR.map((app) => {
		return (
			<li key={app.toString()} className={`social__link link--${app.toString()}`}>
				<i className={`fab fa-${app.toString()}`}></i>
			</li>
		)
	})

	return (
		<div>
		<div class="bounce animated"><h2>erica.naglik@students.makeschool.com</h2></div>
			<ul className="social-links">
			
			{socialLinks}
			</ul>
		</div>	
		);
};

export default SocialLinks
