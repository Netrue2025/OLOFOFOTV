import Particles from "react-tsparticles"

export function Background(){
    return(
        <Particles
        id="tsparticles"
        options={{
            background: {color: "#031a3dff"},
            particles: {
                number: {value: 80 },
                size: {value: 3 },
                move: { speed: 1 },
            },
        }}
        />
    )
}