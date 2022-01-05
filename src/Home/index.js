import React from "react";
import { Header } from '../Header';
import { ConfigurationItem } from '../ConfigurationItem';
import { CreateNewConfiguration } from '../CreateNewConfiguration';

import './Home.css';

function Home() {
    return (
        <React.Fragment>
            <Header />
            <div className="container-items">
                <ConfigurationItem />
            </div>
            <CreateNewConfiguration />
        </React.Fragment>
    );
}

export { Home };