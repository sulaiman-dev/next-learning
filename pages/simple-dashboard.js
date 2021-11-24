import Link from 'next/link'
import withPrivateRoute from '../components/HOC/withPrivateRoute';

const SimpleDashboard = () => {
    return (
        <div>
            <div>
        <h2>Simple Protected</h2>
        <Link href="/simple-home">Go To Home</Link>
      </div>
        </div>
    )
}

SimpleDashboard.getStaticProps = async props => {
    console.info('##### Congratulations! You are authorized! ######', props);
    return {};
  };

export default withPrivateRoute(SimpleDashboard)
