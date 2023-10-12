import React from 'react'
import logoMe from '../assets/logoMe.png'
import githubLogo from '../assets/githubLogo.png'
export default function Logo() {
    return (
        <div className='flex divide-x justify-center'>
            <img src={logoMe} alt='Abdelhalim LAKFIFI' className=' w-24 h-fit mr-5' />
            <img src={githubLogo} alt='github LOGO' className=' w-44 h-fit' />
        </div>
    )
}
