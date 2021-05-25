import { getSession } from 'next-auth/client'
import { GetServerSidePropsContext } from 'next'

async function protectedRoutes(context: GetServerSidePropsContext) {
  const session = await getSession(context)

  if (!session) {
    context.res.writeHead(302, {
      Location: '/sign-in'
    })
    context.res.end()
  }

  return session
}

export default protectedRoutes
