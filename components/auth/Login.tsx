'use client'

import { Session } from 'next-auth'
import { signIn, signOut } from 'next-auth/react'
import Image from 'next/image'

import { BsPersonPlus } from 'react-icons/bs'

// eslint-disable-next-line react/display-name
export default ({ session }: { session: Session }) => {
  if (session) {
    console.log(session)
  }
  return (
    <>
      {!session ? (
        <button className="p-3 bg-transparent text-xl" onClick={() => signIn()}>
          <BsPersonPlus />
        </button>
      ) : (
        <button onClick={() => signOut()}>
          <Image src={session.user?.image} alt="foto de perfil" />
        </button>
      )}
    </>
  )
}
