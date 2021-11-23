//this folder is related with nestjs linked clone app
import Header from "../../components/feed/Header/Header"
import { apisBasepath } from "../../config"

export default function Developer({ posts }) {
    return (
            <div>
                <h2>Home page</h2>
            </div>

    )
}

// This gets called on every request
export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(`${apisBasepath}/feed`)
    console.log('response', res)
    const data = await res.json()
    console.log('response', data)

    // Pass data to the page via props
    return { props: { data } }
}
