'use client'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import './image-gallery.css'

// import required modules
import { Pagination } from 'swiper/modules'
import Image from 'next/image'

export default function ImageGallery({ data }) {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + '</span>'
    },
  }
  data.forEach((img) => {
    console.log(img)
  })
  return (
    <Swiper pagination={pagination} modules={[Pagination]} className="mySwiper mt-5">
      {data.map((img, index) => (
        <SwiperSlide key={index}>
          <Image src={img} alt={`LiftTracker${index}`} width={400} height={200} />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
