import { Typewriter } from 'react-simple-typewriter'

export function Header() {
    const words = [
        'Desarrollador React', 'Desarrollador Java', 'Entusiasta de Linux','Ingeniero de Software'
    ]

    const { text } = Typewriter({
        loop: {},
    })

    return (
        <header className="header">
            <p>SoyDz - {text}
                <span className='text_animado'>
                    <Typewriter
                        words={words}
                        cursor
                        typeSpeed={50}
                        deleteSpeed={35}
                        delaySpeed={1300}
                        loop={1}
                    />
                </span>
            </p>
        </header>
    )
}