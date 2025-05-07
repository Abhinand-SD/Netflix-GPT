import React from 'react'
import { MdSearch } from 'react-icons/md';
import lang from '../utils/languageContant';
import { useSelector } from 'react-redux';

const GptSearchBar = () => {

  const langu = useSelector(store => store.language.language)

  return (
    <div>
  <form className="fixed top-8 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
    <input type="text" placeholder={lang[langu]?.placeHolder} className="py-1 px-3 w-[400px] bg-transparent text-white border-b focus:outline-none" />
    <button className='absolute py-[9px] px-2' ><MdSearch className="bg-white text-black text-2xl p-1 mr-2 rounded-full" /></button>
  
  </form>
</div>

  )
}

export default GptSearchBar
