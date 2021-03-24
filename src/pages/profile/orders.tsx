import Profile from 'templates/Profile'
import OrdersList, { OrdersListProps } from 'components/OrderList'
import ordersMock from 'components/OrderList/mock'

export default function ProfileCards({ items }: OrdersListProps) {
  return (
    <Profile>
      <OrdersList items={items} />
    </Profile>
  )
}

export function getServerSideProps() {
  return {
    props: {
      items: ordersMock
    }
  }
}