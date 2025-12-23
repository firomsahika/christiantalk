import { theme } from '../../constants/theme'
import BackIcon from './BackIcon'
import BookmarkIcon from './BookMark'
import BookIcon from './BookOpen'
import CameraIcon from './CameraIcon'
import CommentIcon from './Comment'
import MailIcon from './Email'
import HeartIcon from "./Heart"
import HomeIcon from './HomeIcon'
import LockIcon from './Lock'
import LogoutIcon from './LogOut'
import MoreIcon from './MoreIcon'
import AddIcon from "./Plus"
import PostIcon from './PostIcon'
import SettingsIcon from './Setting'
import ShareIcon from './ShareIcon'
import StudyIcon from "./Study"
import UserIcon from './User'
import UsersIcon from './Users'


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
    bookMark:BookmarkIcon

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