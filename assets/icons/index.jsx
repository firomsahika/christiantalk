import { theme } from '../../constants/theme'
import BackIcon from './BackIcon'
import BookIcon from './BookOpen'
import MailIcon from './Email'
import HeartIcon from "./Heart"
import HomeIcon from './HomeIcon'
import LockIcon from './Lock'
import AddIcon from "./Plus"
import SettingsIcon from './Setting'
import StudyIcon from "./Study"
import UserIcon from './User'
import UsersIcon from './Users'
import LogoutIcon from './LogOut'

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
    logOut:LogoutIcon

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