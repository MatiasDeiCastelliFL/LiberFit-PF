import React from 'react'
import Logo from '../../Atoms/Logo/Logo'
import Filter from '../../Molecules/Filter/Filter'
import Search from './../../Atoms/Inputs/Search/Search';
import style from './Style/sidebar.module.css'

function SideBar() {
  return (
    <div className='flex h-full w-sidebar flex-col justify-between border-r border-redGray bg-white select-none'>
        <div className=''>
            <div className='mt-5 ml-5'>
                <Logo/>
            </div>
            <div className='w-max h-full flex items-center flex-col mt-28'>
                <div className='mb-10'>
                    <Search Placeholder='Search'/>
                </div>
                <Filter />
            </div>
        </div>
        <div className='border-t border-redGray w-max h-73 flex flex-row'>
            <div className='h-full flex items-center ml-4'>
                <img className='inline-block h-14 w-14 rounded-full ring-2 ring-white border border-redGray cursor-pointer' src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'/>
            </div>
            <div className='flex h-full items-center ml-4'>
                <div className='flex flex-col'>
                    <p className={`${style.text} text-gray`}>Guest</p>
                    <p className={`${style.text2} text-semiRed`}>Register</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SideBar