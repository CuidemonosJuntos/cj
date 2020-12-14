import { useRouter } from 'next/router'

const Course1 = () => {

    const router = useRouter();
    const { id }= router.query
    return (
        <h1> I am a course number 1: {id}</h1>
    )
}

export default Course1
