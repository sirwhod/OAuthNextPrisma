import Login from './auth/Login'
import { getServerSession } from 'next-auth/next'
import { Session } from 'next-auth'
import { authOptions } from '../pages/api/auth/[...nextauth]'
import Link from 'next/link'

import { HiHomeModern } from 'react-icons/hi2'

export default async function Nav() {
  const session: Session = await getServerSession(authOptions)

  return (
    <nav className="flex items-center justify-between bg-zinc-950 p-2 rounded-b-md">
      <Link href={'/'} className="flex mx-2 gap-2 items-center">
        <HiHomeModern />
        Home
      </Link>

      <Login session={session} />
    </nav>
  )
}
