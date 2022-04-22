import React, {useState} from 'react';


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
   const [isActive, setActive] = useState(true);
   const [isScrolledTop, setScrolledTop] = useState(true);

   React.useEffect(() => {

      window.addEventListener('wheel', (e) => {
         if (e.deltaY < 0) {
            // go up
            if(!isActive){
               setActive(true);
            }
            if (window.scrollY<= 250){
               setScrolledTop(true);
            }
         }
         else {
            //go down
            if(isActive){
               setActive(false);
               setScrolledTop(false);
            }
         }
      });
   });

	return (
      <nav className={!isActive ? 'hiddenNavbar': null} style={!isScrolledTop ? {boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}:null}>
         <Logo />
         <Links />
      </nav>
	)
}

export default Navbar;