// routing with pages => (About page or route)
import withAuth from "../components/HOC/withAuth"

function About() {
    return (
        <h3>About Page</h3>
    )
}

export default withAuth(About)