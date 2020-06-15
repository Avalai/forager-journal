import Head from '../components/Head'

export default function Page({ children }) {
    return (
        <>
            <Head />
            { children }
        </>
    )
} 