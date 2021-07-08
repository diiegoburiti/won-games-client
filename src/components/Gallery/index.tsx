import Image from 'next/image'
import { useEffect, useState, useRef } from 'react'
import { ArrowBackIos as ArrowLeft } from '@styled-icons/material-outlined/ArrowBackIos'
import { ArrowForwardIos as ArrowRight } from '@styled-icons/material-outlined/ArrowForwardIos'
import { Close } from '@styled-icons/material-outlined'

import Slider, { SliderSettings } from 'components/Slider'
import SlickSlider from 'react-slick'

import * as S from './styles'

const commonSettings: SliderSettings = {
  infinite: false,
  lazyLoad: 'ondemand',
  arrows: true,
  nextArrow: <ArrowRight aria-label="next image" />,
  prevArrow: <ArrowLeft aria-label="previous image" />
}

const settings: SliderSettings = {
  ...commonSettings,
  slidesToShow: 4,
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
  ]
}

const modalSettings: SliderSettings = {
  ...commonSettings,
  slidesToShow: 1
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
  const slickRef = useRef<SlickSlider>(null)

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
      <Slider ref={slickRef} settings={settings}>
        {items.map((item, index) => (
          <Image
            width={295}
            height={165}
            role="button"
            key={`thumb-${index}`}
            src={item.src}
            alt={`Thumb - ${item.label}`}
            onClick={() => {
              setHiddenModal(false)
              slickRef.current?.slickGoTo(index, true)
            }}
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

        <S.Content>
          <Slider ref={slickRef} settings={modalSettings}>
            {items.map((item, index) => (
              <Image
                width={1200}
                height={675}
                key={`gallery-${index}`}
                src={item.src}
                alt={item.label}
              />
            ))}
          </Slider>
        </S.Content>
      </S.Modal>
    </S.Wrapper>
  )
}
export default Gallery
