import { Profile } from '@styled-icons/remix-fill'
import CardsList, { CardsListProps } from 'components/CardsList'
import mockCards from 'components/PaymentOptions/mock'

export default function ProfileCards({ cards }: CardsListProps) {
  return (
    <Profile>
      <CardsList cards={cards} />
    </Profile>
  )
}

export function GetServerSideProps() {
  return {
    props: {
      cards: mockCards
    }
  }
}
