'use client'

export default function Error(props) {
    console.log('props', props)
    return <div>
        Something Went Wrong...
        {props.error.message}
    </div>
}
