import { GetServerSidePropsContext } from 'next'
import Profile from 'templates/Profile'
import OrdersList, { OrdersListProps } from 'components/OrderList'
import protectedRoutes from 'utils/protected-routes'
import { initializeApollo } from 'utils/apollo'
import {
  QueryOrders,
  QueryOrdersVariables
} from 'graphql/generated/QueryOrders'
import { QUERY_ORDERS } from 'graphql/queries/orders'
import { ordersMapper } from 'utils/mappers'

export default function ProfileCards({ items }: OrdersListProps) {
  return (
    <Profile>
      <OrdersList items={items} />
    </Profile>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await protectedRoutes(context)
  const apolloClient = initializeApollo(null, session)

  if (!session) return { props: {} }

  const { data } = await apolloClient.query<QueryOrders, QueryOrdersVariables>({
    query: QUERY_ORDERS,
    variables: {
      identifier: session?.id
    },
    fetchPolicy: 'no-cache'
  })
  return {
    props: {
      items: ordersMapper(data.orders),
      session
    }
  }
}
