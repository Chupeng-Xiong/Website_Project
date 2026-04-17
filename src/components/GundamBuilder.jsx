import { useState, useRef } from 'react'
import { DndContext, useDraggable, useDroppable } from '@dnd-kit/core'
import headImg from '../assets/Gundam/head.png'
import torsoImg from '../assets/Gundam/torso.png'
import leftArmImg from '../assets/Gundam/leftArm.png'
import rightArmImg from '../assets/Gundam/rightArm.png'
import leftLegImg from '../assets/Gundam/leftLeg.png'
import rightLegImg from '../assets/Gundam/rightLeg.png'
import '../styles/GundamBuilder.css'

const SNAP_DISTANCE = 60

const TORSO_OFFSETS = {
    head:     { x: -45, y: -258 },
    leftArm:  { x: -83, y: -95  },
    rightArm: { x: 210, y: -100 },
    leftLeg:  { x: -50, y: 155  },
    rightLeg: { x: 130, y: 155  },
}

const getInitialPositions = () => ({
    torso:    { x: Math.random() * 600, y: Math.random() * 500 },
    head:     { x: Math.random() * 600, y: Math.random() * 500 },
    leftArm:  { x: Math.random() * 600, y: Math.random() * 500 },
    rightArm: { x: Math.random() * 600, y: Math.random() * 500 },
    leftLeg:  { x: Math.random() * 600, y: Math.random() * 500 },
    rightLeg: { x: Math.random() * 600, y: Math.random() * 500 },
})

const PARTS = [
    { id: 'torso',    src: torsoImg,    label: 'Torso'     },
    { id: 'head',     src: headImg,     label: 'Head'      },
    { id: 'leftArm',  src: leftArmImg,  label: 'Left Arm'  },
    { id: 'rightArm', src: rightArmImg, label: 'Right Arm' },
    { id: 'leftLeg',  src: leftLegImg,  label: 'Left Leg'  },
    { id: 'rightLeg', src: rightLegImg, label: 'Right Leg' },
]

function DraggablePart({ part, position, isSnapped }) {
    const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({
        id: part.id,
        disabled: isSnapped && part.id !== 'torso'
    })
    const style = {
        position: 'absolute',
        left: position.x + (transform?.x || 0),
        top: position.y + (transform?.y || 0),
        zIndex: isDragging ? 100 : 1,
        cursor: isSnapped && part.id !== 'torso' ? 'default' : isDragging ? 'grabbing' : 'grab',
    }
    return (
        <img
            ref={setNodeRef}
            src={part.src}
            alt={part.label}
            style={style}
            className='gundam-piece'
            {...listeners}
            {...attributes}
        />
    )
}

function BuildArea({ children, buildAreaRef }) {
    const { setNodeRef } = useDroppable({ id: 'build-area' })
    return (
        <div ref={(el) => { setNodeRef(el); buildAreaRef.current = el; }} className='build-area'>
            {children}
        </div>
    )
}

export default function GundamBuilder() {
   const [positions, setPositions] = useState(getInitialPositions)
    const [snapped, setSnapped] = useState([])
    const buildAreaRef = useRef(null)

const handleDragEnd = ({ active, delta }) => {
    const id = active.id
    const bounds = buildAreaRef.current?.getBoundingClientRect()
    const areaWidth = bounds?.width || 800
    const areaHeight = bounds?.height || 750
    const clamp = (val, min, max) => Math.min(Math.max(val, min), max)

    setPositions(prev => {
        const newPositions = { ...prev }

        if (id === 'torso') {
            let newX = prev.torso.x + delta.x
            let newY = prev.torso.y + delta.y

            // clamp torso accounting for all snapped parts offsets
            snapped.forEach(partId => {
                const ox = TORSO_OFFSETS[partId].x
                const oy = TORSO_OFFSETS[partId].y
                if (ox < 0) newX = Math.max(newX, -ox)
                if (oy < 0) newY = Math.max(newY, -oy)
                if (ox > 0) newX = Math.min(newX, areaWidth - 200 - ox)
                if (oy > 0) newY = Math.min(newY, areaHeight - 200 - oy)
            })

            // also clamp torso itself
            newX = clamp(newX, 0, areaWidth - 200)
            newY = clamp(newY, 0, areaHeight - 200)

            newPositions.torso = { x: newX, y: newY }
            snapped.forEach(partId => {
                newPositions[partId] = {
                    x: newX + TORSO_OFFSETS[partId].x,
                    y: newY + TORSO_OFFSETS[partId].y,
                }
            })
            return newPositions
        }

        const newX = clamp(prev[id].x + delta.x, 0, areaWidth - 200)
        const newY = clamp(prev[id].y + delta.y, 0, areaHeight - 200)

        const torso = prev.torso
        const snapPos = {
            x: torso.x + TORSO_OFFSETS[id].x,
            y: torso.y + TORSO_OFFSETS[id].y,
        }
        const dist = Math.sqrt(
            Math.pow(newX - snapPos.x, 2) +
            Math.pow(newY - snapPos.y, 2)
        )

        if (dist < SNAP_DISTANCE) {
            newPositions[id] = snapPos
            setSnapped(prev => [...new Set([...prev, id])])
        } else {
            newPositions[id] = { x: newX, y: newY }
        }

        return newPositions
    })
}

    const allSnapped = snapped.length === PARTS.length - 1

    return (
        <div className='gundam-card'>
            <h5 className='gundam-title'>BUILD THE GUNDAM!</h5>
            <p className='gundam-txt'>Drag the parts onto the torso to build it!</p>
            <DndContext onDragEnd={handleDragEnd}>
                <BuildArea buildAreaRef={buildAreaRef}>
                    {PARTS.map(part => (
                        <DraggablePart
                            key={part.id}
                            part={part}
                            position={positions[part.id]}
                            isSnapped={snapped.includes(part.id)}
                        />
                    ))}
                </BuildArea>
            </DndContext>
            {allSnapped && <div className='gundam-complete'>Build Complete! 🎉</div>}
        </div>
    )
}