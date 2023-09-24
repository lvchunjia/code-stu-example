import React, { memo, useRef, useState } from 'react'
import type { FC, ReactNode, ElementRef } from 'react'
import classNames from 'classnames'
import { Carousel } from 'antd'
import { shallowEqualApp, useAppSelector } from '@/store'
import { BannerControl, BannerLeft, BannerRight, BannerWrapper } from './style'

interface IProps {
  children?: ReactNode
}

const TopBanner: FC<IProps> = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  // 轮播图组件DOM
  const bannerRef = useRef<ElementRef<typeof Carousel>>(null)

  // 轮播图数据
  const { banners } = useAppSelector(
    (state) => ({
      banners: state.recommend.banners
    }),
    shallowEqualApp
  )

  /**
   * 切换面板的回调
   */
  function handleAfterChange(current: number) {
    setCurrentIndex(current)
  }

  /**
   * 控制按钮上一个
   */
  function handlePrevClick() {
    bannerRef.current?.prev()
  }

  /**
   * 控制按钮下一个
   */
  function handleNextClick() {
    bannerRef.current?.next()
  }

  /**
   * 获取背景图片
   */
  let bgImageUrl
  if (currentIndex >= 0 && banners?.length > 0) {
    bgImageUrl = banners[currentIndex].imageUrl + '?imageView&blur=40x20'
  }

  return (
    <BannerWrapper
      style={{
        background: `url('${bgImageUrl}') center center / 6000px`
      }}
    >
      <div className="banner wrap-v2">
        {/* 左侧轮播图 */}
        <BannerLeft>
          <Carousel
            autoplay
            dots={false}
            autoplaySpeed={5000}
            effect="fade"
            ref={bannerRef}
            afterChange={handleAfterChange}
          >
            {banners?.map((item) => {
              return (
                <div className="banner-item" key={item.imageUrl}>
                  <img className="image" src={item.imageUrl} alt={item.typeTitle} />
                </div>
              )
            })}
          </Carousel>
          <ul className="dots">
            {banners?.map((item, index) => {
              return (
                <li key={item.imageUrl}>
                  <span
                    className={classNames('item', {
                      active: index === currentIndex
                    })}
                  ></span>
                </li>
              )
            })}
          </ul>
        </BannerLeft>

        {/* 右侧下载图片 */}
        <BannerRight></BannerRight>

        {/* 控制按钮 */}
        <BannerControl>
          <button className="btn left" onClick={handlePrevClick}></button>
          <button className="btn right" onClick={handleNextClick}></button>
        </BannerControl>
      </div>
    </BannerWrapper>
  )
}

export default memo(TopBanner)
