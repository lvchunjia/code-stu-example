import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { useAppSelector, shallowEqualApp } from '@/store'
import { RecommendWrapper } from './style'
import AreaHeaderV1 from '@/components/area-header-v1'
import SongMenuItem from '@/components/song-menu-item'

interface IProps {
  children?: ReactNode
}

const HotRecommend: FC<IProps> = () => {
  const { HotRecommends } = useAppSelector(
    (state) => ({
      HotRecommends: state.recommend.hotRecommends
    }),
    shallowEqualApp
  )
  return (
    <RecommendWrapper>
      <AreaHeaderV1 title="热门推荐" keywords={['华语', '流行', '摇滚', '民谣', '电子']} moreLink="/discover/songs" />
      <div className="recommend-list">
        {HotRecommends?.map((item) => {
          return <SongMenuItem itemData={item} key={item.id} />
        })}
      </div>
    </RecommendWrapper>
  )
}

export default memo(HotRecommend)
