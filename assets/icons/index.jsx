import { theme } from '../../constants/theme'
import ArrowDown from './ArrowDown'
import ArrowRightIcon from './ArrowRight'
import BackIcon from './BackIcon'
import BookmarkIcon from './BookMark'
import BookIcon from './BookOpen'
import CalendarIcon from "./Calendar"
import PhoneIcon from './Call'
import CameraIcon from './CameraIcon'
import CommentIcon from './Comment'
import MailIcon from './Email'
import HeartIcon from "./Heart"
import HomeIcon from './HomeIcon'
import LocationIcon from './Location'
import LockIcon from './Lock'
import LogoutIcon from './LogOut'
import MoreIcon from './MoreIcon'
import AddIcon from "./Plus"
import PlusIcon from './PlusOnly'
import PostIcon from './PostIcon'
import SearchIcon from './Search'
import SendIcon from './Send'
import SettingsIcon from './Setting'
import ShareIcon from './ShareIcon'
import StudyIcon from "./Study"
import UserIcon from './User'
import UsersIcon from './Users'
import VideoIcon from './Video'
import FileIcon from './File'


const icons = {
    home: HomeIcon,
    arrowLeft:BackIcon,
    email: MailIcon,
    lock: LockIcon,
    user: UserIcon,
    heart: HeartIcon,
    plus:AddIcon,
    study: StudyIcon,
    setting: SettingsIcon,
    bookOpen:BookIcon,
    users:UsersIcon,
    logOut:LogoutIcon,
    camera:CameraIcon,
    post:PostIcon,
    comment: CommentIcon,
    more:MoreIcon,
    share:ShareIcon,
    bookMark:BookmarkIcon,
    call: PhoneIcon,
    location:LocationIcon,
    plusIcon: PlusIcon,
    search: SearchIcon,
    arrowRight: ArrowRightIcon,
    video: VideoIcon,
    calendar: CalendarIcon,
    arrowDown: ArrowDown,
    send: SendIcon,
    file: FileIcon
}

const Icon = ({name, ...props}) => {
    const IconComponent = icons[name];
  return (
    <IconComponent
      height={props.size || 24}
      width={props.size || 24}
      strokeWidth={props.strokeWidth || 1.5}
      color={theme.colors.textLight}
      {...props}
    />
    
  )
}

export default Icon