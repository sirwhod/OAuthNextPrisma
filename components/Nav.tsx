import authOptions from '../pages/api/auth/[...nextauth]'
import Login from './auth/Login'
import { getServerSession } from 'next-auth'

export default async function Nav() {
  const session = getServerSession(authOptions)

  return <Login session={session} />
}
