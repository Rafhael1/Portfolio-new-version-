import React from 'react'

import Link from 'next/link'


import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

export default function Footer() {
    return (
        <div style={{padding: '20px'}} >
            <p>rafamlf.2011@protonmail.com</p>
            <div>
                <Link href="https://github.com/Rafhael1" target="_blank" ><i><GitHubIcon style={{fontSize: '40px'}} /></i></Link>
               <Link href="https://www.linkedin.com/in/rafhael-marques-b2881a1b3/" target="_blank" ><i><LinkedInIcon style={{fontSize: '40px'}}  /></i></Link> 
            </div>
            <p>&copy; 2021 - rafhaelmarques.me </p>
        </div>
    )
}
