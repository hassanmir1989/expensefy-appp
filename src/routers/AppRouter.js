import React from 'react'
import {BrowserRouter,Route,Switch,Link,NavLink} from 'react-router-dom'
import DashboardPage from '../components/DashboardPage'
import EditExpensePage from '../components/EditExpensePage'
import AddExpensePage from '../components/AddExpensePage'
import HelpPage from '../components/HelpPage'
import PageNotFound from '../components/PageNotFound'
import Header from "../components/Header"






const AppRouter = () => (
    
    <BrowserRouter>
        <div>
            <Header />    
            <Switch>
                <Route path="/" component={DashboardPage} exact={true}/>
                <Route path="/create" component={AddExpensePage}/>
                <Route path="/edit/:id" component={EditExpensePage}/>
                <Route path="/help" component={HelpPage}/>
                <Route component={PageNotFound}/>
            </Switch>
        </div>
    </BrowserRouter>
)


export default AppRouter