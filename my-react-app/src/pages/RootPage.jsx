import react from 'react';
import { usePageTitle } from '../hooks/usePageTitle';

function RootPage() {
    usePageTitle("FlowUNIQUE - Record Company");
    return (
        <div>
            <h1>Welcome to the Root Page</h1>
        </div>
    );
}

export default RootPage;