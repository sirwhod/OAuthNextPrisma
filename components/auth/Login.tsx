'use client'

import Image from 'next/image'

import { Session } from 'next-auth'

import { signIn, signOut } from 'next-auth/react'

import { BsPersonPlus } from 'react-icons/bs'

export default ({ session }: { session: Session }) => {
  let userImage = ''

  if (session) {
    if (session.user?.image) {
      userImage = session.user.image
    }
  }

  return (
    <>
      {!session ? (
        <>
          <button
            className="p-3 bg-transparent text-xl"
            onClick={() => signIn('google')}
          >
            <BsPersonPlus />
          </button>
        </>
      ) : (
        <button onClick={() => signOut()}>
          <Image
            src={userImage}
            width={50}
            height={50}
            alt=""
            className="h-12 w-12 rounded-full object-fill"
          />
        </button>
      )}
    </>
  )
}
