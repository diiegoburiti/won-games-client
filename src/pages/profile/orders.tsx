import { GetServerSidePropsContext } from 'next'
import Profile from 'templates/Profile'
import OrdersList, { OrdersListProps } from 'components/OrderList'
import ordersMock from 'components/OrderList/mock'
import protectedRoutes from 'utils/protected-routes'

export default function ProfileCards({ items }: OrdersListProps) {
  return (
    <Profile>
      <OrdersList items={items} />
    </Profile>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await protectedRoutes(context)

  return {
    props: {
      items: ordersMock,
      session
    }
  }
}
