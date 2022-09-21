import { useEffect, useState } from 'react';

const GAP = 30


export default function useCard(position, index) {

    const [topPos, setTopPos] = useState(0)

    useEffect(() => {
        if (position === 'boardcell') {
            let defineTopPos = index * GAP
            setTopPos(defineTopPos)
        }
    }, [position, index])


    return { topPos }
}