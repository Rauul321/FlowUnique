import react from 'react';
import { usePageTitle } from '../hooks/usePageTitle';
import './RootPage.css';

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