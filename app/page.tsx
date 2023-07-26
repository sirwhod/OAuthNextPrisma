import AvatarUser from '@/components/AvatarUser/AvatarUser'
import CreatePost from '@/components/CreatePost/CreatePost'

async function getPosts() {
  const res = await fetch(`${process.env.URL}/api/posts`, {
    cache: 'no-store',
  })

  if (!res.ok) {
    throw new Error('Erro muito mal tratado!')
  }

  return res.json()
}

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

export default async function Home() {
  const data = await getPosts()

  return (
    <main className="mt-2 flex flex-col gap-4">
      <CreatePost />
      <div className="flex flex-col gap-2">
        {data.map((post: Post) => {
          return <AvatarUser key={post.id} post={post} />
        })}
      </div>
    </main>
  )
}
