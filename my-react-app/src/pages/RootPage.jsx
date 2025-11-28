import react from 'react';
<<<<<<< HEAD
import { usePageTitle } from '../hooks/usePageTitle';
=======
import './RootPage.css';
>>>>>>> 08fccbf8b5fd0675ec2330751551923d532b126d

function RootPage() {
    usePageTitle("FlowUNIQUE - Record Company");
    return (
        <div>
            <h1>Welcome to the Root Page</h1>
            <p>This is the main landing page of the application.</p>
        </div>
    );
}

export default RootPage;