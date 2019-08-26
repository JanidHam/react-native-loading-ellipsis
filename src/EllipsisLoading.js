import React, { useState, useEffect } from 'react'
import { Animated, View, StyleSheet } from 'react-native'

const DOT_SIZE = 12
const SELECTION_COLOR = '#f8fafc'
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: 'transparent',
    flexDirection: 'row',
    height: 21,
    justifyContent: 'center',
    width: 'auto',
  },
  dotDefault: {
    backgroundColor: SELECTION_COLOR,
    marginRight: 5,
  },
})

const defaultProps = {
  dotSize: DOT_SIZE,
  numberOfDots: 3,
  animationDelay: 150,
  minOpacity: 0.2,
  style: {},
  styleDot: {
    backgroundColor: SELECTION_COLOR,
    marginRight: 5,
  },
}

const initializeDots = props => {
  const opacities = []
  const { numberOfDots, minOpacity } = props

  for (let i = 0; i < numberOfDots; i += 1) {
    const dot = new Animated.Value(minOpacity)
    opacities.push(dot)
  }

  return opacities
}

const animateDots = (whichDot, animateDotsParam, animationState, props) => {
  let whicDotTmp = whichDot

  if (!animationState.shouldAnimate) {
    return
  }

  const { minOpacity, animationDelay } = props
  // swap fade direction when we hit end of list
  if (whicDotTmp >= animationState.dotOpacities.length) {
    whicDotTmp = 0
    const min = minOpacity
    animationState.targetOpacity =
      animationState.targetOpacity === min ? 1 : min
  }

  const nextDot = whicDotTmp + 1

  Animated.timing(animationState.dotOpacities[whicDotTmp], {
    toValue: animationState.targetOpacity,
    duration: animationDelay,
  }).start(() =>
    animateDotsParam(nextDot, animateDotsParam, animationState, props),
  )
}

const EllipsisLoading = props => {
  const [animationState, setAnimationState] = useState({
    dotOpacities: initializeDots({ ...defaultProps, ...props }),
    targetOpacity: 1,
    shouldAnimate: true,
  })

  useEffect(() => {
    animateDots(0, animateDots, animationState, {
      ...defaultProps,
      ...props,
    })

    return function cleanup() {
      setAnimationState({ shouldAnimate: false })
    }
  })

  const { style, styleDot } = defaultProps
  const { styleDot: sDot, dotSize } = props

  styleDot.width = dotSize || DOT_SIZE
  styleDot.height = dotSize || DOT_SIZE
  styleDot.borderRadius = (dotSize || DOT_SIZE) / 2

  const s = { ...styles.dotDefault, ...styleDot, ...sDot }

  const dots = animationState.dotOpacities.map((o, i) => (
    <Animated.View key={`${i}-dot`} style={[{ opacity: o }, s]} />
  ))

  return <View style={[style, styles.container]}>{dots}</View>
}

export default EllipsisLoading
