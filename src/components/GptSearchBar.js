import { useRef, useState } from 'react'
import { MdSearch } from 'react-icons/md';
import lang from '../utils/languageContant';
import { useDispatch, useSelector } from 'react-redux';
import openai from '../utils/openai';
import { API_OPTIONS } from '../utils/constant';
import { addGptMovies } from '../utils/gptSlice';


const GptSearchBar = () => {

  const dispatch = useDispatch();
  const langu = useSelector(store => store.language.language)
  const searchText = useRef(null)
  const [popupMsg, setPopupMsg] = useState('')


  const searchMovie = async (movie) => {
    const data = await fetch(`https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`, API_OPTIONS)
    const json = await data.json();

    return json.results;
  }

  const gptSearchHandle = async () => {
    try {
      const query = searchText.current.value;

      const gptQuery = `Act as a movie recommendation system and suggest some movies for the query: ${query}. Only give me names of five movies, comma-separated like the example result. Example: thudarum, thallumala, super saranya, pada`;

      const response = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: gptQuery }]
      });

      console.log(response.choices?.[0]?.message?.content);

      const gptMovies = response.choices?.[0]?.message?.content.split(",");

      if (!response.choices) {
        alert("Nothing find, Try again")
      }

      const data = gptMovies.map(item => searchMovie(item))

      const tmdbResult = await Promise.all(data)

      dispatch(addGptMovies({ movieName: gptMovies, movieResult: tmdbResult }))

    } catch (error) {
      if (error.status === 429) {
        setPopupMsg('Rate limit reached. Try again later.');
      } else if (error.status === 401) {
        setPopupMsg('Unauthorized. Check API key.');
      } else if (error.status === 404) {
        setPopupMsg('Model not found.');
      } else {
        setPopupMsg('Something went wrong.');
      }

      setTimeout(() => setPopupMsg(''), 3000)
    }
  };
     
  return (
    <div className='relative'>
      <form onSubmit={(e) => e.preventDefault()} className="fixed top-32  left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 ">
        <input ref={searchText} type="text" placeholder={lang[langu]?.placeHolder} className="py-1 px-3 w-[400px] bg-transparent text-white border-b focus:outline-none" />
        <button onClick={gptSearchHandle} className='absolute py-[6px] px-3' ><MdSearch className="bg-white text-black text-2xl p-1 w-11 h-7 rounded-full" /></button>
        {popupMsg && (
        <div className="absolute left-0 mt-2 bg-gray-800 text-white text-sm px-3 py-1 rounded shadow z-50">
          {popupMsg}
        </div>
      )}
      </form>
    </div>

  )
}

export default GptSearchBar
