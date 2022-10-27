import {
  RiBookmarkFill,
  RiChat3Fill,
  RiDoubleQuotesL,
  RiHeart3Fill
} from 'react-icons/ri'

interface CardInfoProps {
  likes: number
  description: string
  date: string
}

function CardInfo(props: CardInfoProps) {
  const { likes, description, date } = props

  return (
    <div className="px-3 space-y-3">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <RiHeart3Fill className="text-red" size={24} />
          <RiChat3Fill className="text-gray" size={24} />
        </div>
        <RiBookmarkFill className="text-gray" size={24} />
      </div>
      <div className="flex justify-between">
        <span className="text-sm">
          Liked by <span className="font-bold">{likes || 0} users</span>
        </span>
      </div>
      <div className="flex space-x-1">
        <RiDoubleQuotesL size={12} />
        <div className="text-sm w-11/12">
          <p className="truncate">
            {description ||
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi aut sint praesentium soluta fuga neque reiciendis in eos, nesciunt libero reprehenderit consequuntur, tempora quasi culpa aliquid rem perspiciatis est provident!'}
          </p>
          <span className="text-xs text-lightGray">
            {date || 'Wed, 20 January 2022'}
          </span>
        </div>
      </div>
    </div>
  )
}

export default CardInfo
