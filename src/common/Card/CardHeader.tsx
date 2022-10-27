import { RiMoreFill } from 'react-icons/ri'

interface CardHeaderProps {
  profileImg: string
}

function CardHeader(props: CardHeaderProps) {
  const { profileImg } = props
  return (
    <header className="flex items-center px-3 justify-between">
      <div className="flex space-x-3 items-center">
        <img
          src={profileImg}
          alt="profile picture"
          className="rounded-full aspect-auto h-[40px] w-[40px]"
        />
        <div className="flex flex-col -space-y-2">
          <span className="text-md ">name</span>
          <span className="text-lightGray text-sm">location</span>
        </div>
      </div>
      <RiMoreFill className="text-gray" size={24} />
    </header>
  )
}

export default CardHeader
