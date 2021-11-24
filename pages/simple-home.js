import Link from 'next/link'

const SimpleHome = () => {
    return (
        <div>
        <h2>Simple Protected</h2>
        <Link href="/simple-dashboard">Go to Dashboard</Link>
      </div>
    )
}

export default SimpleHome
