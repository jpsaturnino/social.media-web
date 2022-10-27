import {
  RiMoreFill,
  RiHeart3Fill,
  RiChat3Fill,
  RiBookmarkFill,
  RiDoubleQuotesL
} from 'react-icons/ri'
import CardHeader from './CardHeader'
import CardInfo from './CardInfo'

interface CardProps {
  post: string
}

const profileImg =
  'https://cdn.dribbble.com/users/1577045/screenshots/4914645/media/028d394ffb00cb7a4b2ef9915a384fd9.png?compress=1&resize=300x300&vertical=top'

function Card(props: CardProps) {
  const { post } = props

  return (
    <div className="flex flex-col w-[300px] h-fit border-gray bg-gray/20 shadow-black/40 shadow-2xl border-2 px-1 py-3 space-y-3 rounded-3xl">
      <CardHeader profileImg={profileImg} />
      <img
        src={post}
        className="rounded-xl block max-h-1080 w-full"
        alt="post image"
      />
      <{/* CardInfo likes={} /> */}
    </div>
  )
}

export default Card
