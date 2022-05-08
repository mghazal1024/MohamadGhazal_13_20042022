import React, {useEffect} from 'react'
import AccountCard from '../components/AccountCard/AccountCard'

// import { createBrowserHistory as history } from 'history'
import Homepage from './Homepage'




const UserPage = () => {

    // const firstName = useSelector(state => state.userReducer.firstName);
    // const lastName = useSelector(state => state.userReducer.lastName);
    // const id = useSelector(state => state.userReducer.id);
    // const createdAt = new Date(Date.parse(useSelector(state => state.userReducer.createdAt))).toLocaleString();
    // const updatedAt = new Date(Date.parse(useSelector(state => state.userReducer.updatedAt))).toLocaleString();

    // useEffect(() => {
    //     document.title = `Argent Bank - ${firstName} ${lastName}`;
    // }, [firstName, lastName]);

    // if (!firstName) {
    //     history.push({
    //         pathname: `/`
    //     });
    //     return <Homepage/>
    // }

    // const handleEdit = (e) => {
    //     e.preventDefault();
    //     history.push({
    //             // pathname: `/edit-user/${(firstName).toLowerCase()}`,
    //             pathname: `/edit-user/`
    //      });
    // }

    return (
        <main className="main bg-dark">
            <div className="header">
                <h1>Welcome back<br />
                Tony Jarvis!
                </h1>
                <div className='user-edit'>
                    <form>
                        <input type="text" placeholder='Tony'/>
                        <input type="text" placeholder='Travis'/>
                        <button>Save</button>
                        <button>Cancel</button>
                    </form>
                </div>
                <button className="edit-button"
                // onClick={handleEdit}
                >Edit Name</button>
            </div>
            <h2 className="sr-only">Accounts</h2>
            <AccountCard
                accountTitle = "Argent Bank Checking (x8349)"
                accountAmount = "$2,082.79"
                accountAmountDescription = "Available Balance"
                transactionButton = "View transactions"
            />
            <AccountCard
                accountTitle = "Argent Bank Savings (x6712)"
                accountAmount = "$10,928.42"
                accountAmountDescription = "Available Balance"
                transactionButton = "View transactions"
            />
            <AccountCard
                accountTitle = "Argent Bank Credit Card (x8349)"
                accountAmount = "$184.30"
                accountAmountDescription = "Current Balance"
                transactionButton = "View transactions"
            />
            <div className='customer-info'>
                {/* <p>Customer ID: {id}</p>
                <p>Customer Since: {createdAt}</p>
                <p>Last updated: {updatedAt}</p> */}
            </div>
        </main>
    )
}

export default UserPage