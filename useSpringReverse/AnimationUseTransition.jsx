
import { animated, useSpring, config } from 'react-spring'


// const count = [1, 2, 3, 4]

export default function AnimationUseTransition() {
    return (
        <div><MyComponent /></div>
    )
}

function MyComponent() {
    const slide = useSpring({
        from: {
            opacity: 0,
            transform:`translateY(0)`,
        },
        to: {
            opacity: 1,
            transform:`translateY(100px)`,
        },
        delay: 4000,
        reverse: true,
        config: config.gentle

    })

    return (
        <animated.h2 style={slide}>This is Modal working with useSpring</animated.h2>
    )
}