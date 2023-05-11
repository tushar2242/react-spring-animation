
import { useTransition, animated } from 'react-spring'


// const count = [1, 2, 3, 4]

export default function AnimationUseTransition() {
    return (
        <div><MyComponent /></div>
    )
}


// const ModelWrapper = () => {
//     const [on, toggle] = useState(false);

//     const transition = useTransition(count, {
//         from: { opacity: 0 },
//         enter: { opacity: 1 },
//         leave: { opacity: 1 }
//     })

//     return (
//         <>
//             {transition((style, item) => {
//                 <animated.h2 style={style}>{item}This is Template mode </animated.h2>
//             })}


//             <Button onClick={() => toggle(!on)}>Open</Button>
//         </>
//     )
// }

function MyComponent({ data = [1, 2, 3] }) {
    const transition = useTransition(data, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
    })

    return transition((style, item) => (
        <animated.div style={style}>{item}</animated.div>
    ))
}