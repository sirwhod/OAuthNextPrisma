'use client'

import Image from 'next/image'

import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { ThumbsUp } from 'phosphor-react'

interface User {
  id: string
  name: string
  email: string
  emailVerified: Date
  image: string
}

interface Post {
  id: string
  title: string
  createdAt: Date
  content: string
  published: boolean
  authorId: string
  author: User
}

interface AvatarUserProps {
  post: Post
}

export default function AvatarUser({ post }: AvatarUserProps) {
  return (
    <div className="flex flex-col p-4 gap-4 bg-zinc-900 rounded-md">
      <header className="flex align-center justify-between">
        <div className="flex items-center gap-2">
          <Image
            src={post.author.image}
            width={50}
            height={50}
            alt=""
            className="h-12 w-12 rounded-full object-fill"
          />
          <div className="flex flex-col">
            <strong className="text-sm">{post.author.name}</strong>
            <span className="text-xs">{post.author.email}</span>
          </div>
        </div>

        <time className="text-zinc-500 text-xs text-end">
          {formatDistanceToNow(new Date(post.createdAt), {
            addSuffix: false,
            locale: ptBR,
          })}
        </time>
      </header>
      <main>{post.content}</main>
      <footer>
        <button className="flex items-center content-center gap-2 hover:text-green-500">
          <ThumbsUp size={16} weight="bold" />
          Like
        </button>
      </footer>
    </div>
  )
}
