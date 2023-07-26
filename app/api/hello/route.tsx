import client from '../../../prisma/client'

export async function GET(request: any) {
  const user = await client.user.findMany()

  const userId = user[0].id

  console.log(userId)

  await client.post.create({
    data: {
      title: 'Titulo 1',
      content: 'lorem Ipsum',
      published: true,
      author: {
        connect: {
          id: userId,
        },
      },
    },
  })

  const allPosts = await client.post.findMany()

  return new Response(JSON.stringify(allPosts))
}
