import client from '../../../prisma/client'

export async function GET() {
  const allPosts = await client.post.findMany({
    include: {
      author: true,
    },
  })

  if (allPosts) {
    return Response.json(allPosts)
  }
}

export async function POST() {
  const newPost = await client.post.create({
    data: {
      
    }
  })
}
