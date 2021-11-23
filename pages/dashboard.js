// pages/dashboard.jsx
import withAuth from "../components/HOC/withAuth";

const Dashboard = ({ user }) => {
  return (
    <div>
      <h1>Dashboard</h1>
      <h2>{user?.name || 'username'}</h2>
    </div>
  );
};

export default withAuth(Dashboard);
// export default Dashboard;