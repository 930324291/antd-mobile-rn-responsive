/**
 * @Author: 杨俊宁
 * @Date:   2018-08-25 10:19:30
 * @Last modified by:   杨俊宁
 * @Last modified time: 2018-09-01 11:19:33
 */

import {Dimensions, Platform, PixelRatio} from 'react-native'

const {width} = Dimensions.get('window')

// const basePx = Platform.OS === 'ios' ? 750 : 720
const basePx = 720
const px2dp = (px) => {
  const layoutSize = px / basePx * width

  return PixelRatio.roundToNearestPixel(layoutSize)
}
export default px2dp
