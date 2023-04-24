import { useContext } from 'react'
import { UserContext } from '../../contexts/UserContext'

const AccountSettings = () => {
  const { user } = useContext(UserContext);
  console.log(user)

  return (
    <div>AccountSettings</div>
  )
}

export default AccountSettings;