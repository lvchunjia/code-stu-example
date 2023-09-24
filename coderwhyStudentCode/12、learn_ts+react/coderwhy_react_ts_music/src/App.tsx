import React, { Suspense, useEffect } from 'react'
import { useRoutes } from 'react-router-dom'
import routes from './router'
import AppHeader from './components/app-header'
import AppFooter from './components/app-footer'
import AppPlayerBar from './views/player/app-player-bar'
import { useAppDispatch } from './store'
import { fetchCurrentSongAction } from './views/player/store/player'

function App() {
  // 获取某一首喜欢的歌曲
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchCurrentSongAction(2056170681))
  }, [])

  return (
    <div className="App">
      {/* 顶部一级导航栏 */}
      <AppHeader />

      {/* 一级路由 */}
      <Suspense fallback="">
        <div className="main">{useRoutes(routes)}</div>
      </Suspense>

      <div style={{ height: '30px' }}></div>

      {/* <AppFooter /> */}

      {/* 播放器工具 */}
      <AppPlayerBar />
    </div>
  )
}

export default App
