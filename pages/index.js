import Head from 'next/head';
// Custom Components
import App from '../components/App';

export default function Main() {

  return (
    <div>
      <Head>
        <title>Task Manager</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/task_management_icon_3.jpg" />
      </Head>

      <App />
    </div>
  );
}
