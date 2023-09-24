import Test from './components/Test'
import Test2 from './components/Test2'
import Test3 from './components/Test3'
import Icon from './components/Icon'
import SvgAnimation from './components/SvgAnimation'
import ImoocLoading from './components/ImoocLoading'
import ImoocFlyBox from './components/ImoocFlyBox'
import Container from './components/Container'
import WuHeaderIcon from './components/WuHeaderIcon'
import vueCountTo from './components/vueCountTo'
import VueEcharts from './components/VueEcharts'

export default function (Vue) {
  Vue.use(Test)
  Vue.use(Test2)
  Vue.use(Test3)
  Vue.use(Icon)
  Vue.use(SvgAnimation)
  Vue.use(ImoocLoading)
  Vue.use(ImoocFlyBox)
  Vue.use(Container)
  Vue.use(WuHeaderIcon)
  Vue.use(vueCountTo)
  Vue.use(VueEcharts)
 }