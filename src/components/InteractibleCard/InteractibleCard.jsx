import {Box} from "@chakra-ui/react"
import { useState } from "react";


function InteractibleCard({children, ...props}){

    const [transform, setTransform] = useState("perspective(1000px) rotate3d(0, 0, 0, 0) scale(1.00)");

    function mapNumberRange(n, a, b, c, d) {
        return ((n - a) * (d - c)) / (b - a) + c
    }

    const mouseMoveHandler = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const halfWidth = rect.width / 2
        const halfHeight = rect.height / 2

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const deltaX = centerX - x;
        const deltaY = centerY - y;

        const distToCenter = Math.sqrt(deltaX * deltaX + deltaY * deltaY)

        const maxDistance = Math.max(halfWidth, halfHeight)

        const degree = mapNumberRange(distToCenter, 0, maxDistance,0,10)

        const rx = mapNumberRange(deltaY, 0, halfWidth, 0, 1)
        const ry = mapNumberRange(deltaX, 0, halfHeight, 0, 1)

        setTransform(`perspective(1000px) rotate3d(${rx}, ${-ry}, 0, ${degree}deg) scale(1.03)`)
    }

    const mouseLeaveHandler = () => setTransform("perspective(1000px) rotate3d(0, 0, 0, 0) scale(1.00)")

    return(
        <Box
        transform={transform}
        onMouseMove={mouseMoveHandler}
        onMouseLeave={mouseLeaveHandler}
        cursor="pointer"
        transition="transform 0.2s ease, box-shadow 0.2s ease"
        {...props}
        >
            {children}
        </Box>
    )
}

export default InteractibleCard