import { useEffect, useState } from 'react'
import { ArrowBackIos as ArrowLeft } from '@styled-icons/material-outlined/ArrowBackIos'
import { ArrowForwardIos as ArrowRight } from '@styled-icons/material-outlined/ArrowForwardIos'
import { Close } from '@styled-icons/material-outlined'

import Slider, { SliderSettings } from 'components/Slider'

import * as S from './styles'

const settings: SliderSettings = {
  arrows: true,
  slidesToShow: 4,
  infinite: false,
  lazyLoad: 'ondemand',
  responsive: [
    {
      breakpoint: 1375,
      settings: {
        arrows: false,
        slidesToShow: 3.2,
        draggable: true
      }
    },
    {
      breakpoint: 1024,
      settings: {
        arrows: false,
        slidesToShow: 2.2,
        draggable: true
      }
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        slidesToShow: 2.2,
        draggable: true
      }
    }
  ],
  nextArrow: <ArrowRight aria-label="next image" />,
  prevArrow: <ArrowLeft aria-label="previous image" />
}

export type GalleryImageProps = {
  src: string
  label: string
}

export type GalleryProps = {
  items: GalleryImageProps[]
}

const Gallery = ({ items }: GalleryProps) => {
  const [hiddenModal, setHiddenModal] = useState(true)

  useEffect(() => {
    function handlekeyUp({ key }: KeyboardEvent) {
      key === 'Escape' && setHiddenModal(true)
    }

    window.addEventListener('keyup', handlekeyUp)

    return () => {
      window.removeEventListener('keyup', handlekeyUp)
    }
  }, [])

  return (
    <S.Wrapper>
      <Slider settings={settings}>
        {items.map((item, index) => (
          <img
            role="button"
            key={`thumb-${index}`}
            src={item.src}
            alt={`Thumb - ${item.label}`}
            onClick={() => setHiddenModal(false)}
          />
        ))}
      </Slider>
      <S.Modal
        hiddenModal={hiddenModal}
        aria-label="modal"
        aria-hidden={!!hiddenModal}
      >
        <S.Close
          role="button"
          aria-label="close modal"
          onClick={() => setHiddenModal(true)}
        >
          <Close size={40} />
        </S.Close>
      </S.Modal>
    </S.Wrapper>
  )
}
export default Gallery
