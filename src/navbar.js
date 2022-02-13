import React from 'react';


const links = [
	{
      id:1,
		hyperLink:"#about",
      name:"About"
	},
	{
      id:2,
		hyperLink:"#experience",
      name:"Experience"
	},
	{
      id:3,
		hyperLink:"#experiments",
      name:"Experiments"
	},
   {
      id:4,
		hyperLink:"#contact",
      name:"Contact"
	},
   {
      id:5,
		hyperLink:"#", //TO BE CHANGED
      name:"Resume"
	}
];


const Logo = () => {
	return (
		<a href="#main">
         <svg id="Logo" viewBox="0 0 992.8 862.2">
            <g id="body">
               <polygon id="top" className="logo" points="0 862.2 0 862.2 127.38 862.2 254.6 862.2 254.6 862.2 0 862.2" />
               <polygon id="bottom" className="logo" points="647.4 664.8 647.4 664.8 895.1 664.8 895.1 664.8 647.4 664.8" />
               <polygon id="upper" className="logo" points="503.7 377.5 503.7 377.5 627.1 130.4 627.1 130.4 503.7 377.5" />
            </g>
         </svg>
      </a>
	)
}

const Links = () => {
	return (
		<ul>
         {links.map((link, index)=>{
            if (index >= 10 ){
               return(
                  <a href={link.hyperLink} key={link.id}>
                     <li><span>{index +1}. </span>{link.name}</li>
                  </a>
               )
            }else{
               return(
                  <a href={link.hyperLink} key={link.id}>
                     <li><span>0{index +1}. </span>{link.name}</li>
                  </a>
               )
            }
         })}
        </ul>
	)
}

const Navbar = () => {
	return (
      <nav>
         <Logo />
         <Links />
      </nav>
	)
}

export default Navbar;