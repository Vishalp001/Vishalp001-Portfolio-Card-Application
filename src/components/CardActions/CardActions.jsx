import { LuMoonStar, LuSun } from 'react-icons/lu'
import {
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdOutlineMail,
} from 'react-icons/md'
import { FaHeart, FaRegHeart } from 'react-icons/fa'

const CardActions = ({
  isDarkMode,
  isLiked,
  likes,
  setimageIndex,
  imageIndex,
  setisDarkMode,
  setisLiked,
}) => {
  const incriment = () => {
    if (imageIndex <= 3) return setimageIndex(imageIndex + 1)
  }

  const decriment = () => {
    if (imageIndex >= 2) return setimageIndex(imageIndex - 1)
  }

  return (
    <div className='footer'>
      <div className='lightDark'>
        {isDarkMode ? (
          <LuSun onClick={() => setisDarkMode(false)} />
        ) : (
          <LuMoonStar onClick={() => setisDarkMode(true)} />
        )}
      </div>
      <div className='arrow'>
        <div>
          <span>
            <MdKeyboardArrowLeft onClick={decriment} />
          </span>
          <span onClick={incriment}>
            <MdKeyboardArrowRight />
          </span>
        </div>
        <p className='page'>{imageIndex}/4</p>
      </div>

      <div className='likeSection'>
        {isLiked ? (
          <FaHeart color='red' onClick={() => setisLiked(!isLiked)} />
        ) : (
          <FaRegHeart onClick={() => setisLiked(!isLiked)} />
        )}
        {isLiked ? likes + 1 : likes}
      </div>

      <div className='contactButton'>
        <button className='btn'>
          <MdOutlineMail /> Contact
        </button>
      </div>
    </div>
  )
}

export default CardActions
