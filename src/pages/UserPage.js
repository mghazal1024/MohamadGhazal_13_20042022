import React, {useState, useEffect} from 'react'
import AccountCard from '../components/AccountCard/AccountCard'
import Homepage from './Homepage'





const UserPage = () => {

    const [ openEdit, setOpenEdit ] = useState();

    
    const handleEdit = () => {
        setOpenEdit(true)
    }

    const handleCancelEdit = () => { 
        setOpenEdit(false)
    }


    return (
        <main className="main bg-dark">
            <div className="header">
                <h1>Welcome back<br />
                Tony Jarvis!
                </h1>
                {openEdit ?
                    <div className='user-edit'>
                    <form>
                        <input type="text" placeholder='Tony'/>
                        <input type="text" placeholder='Travis'/>
                        <button>Save</button>
                        <button onClick={handleCancelEdit}>Cancel</button> 
                    </form>
                </div>
                : ''}
                <button className="edit-button"
                onClick={handleEdit}
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
        </main>
    )
}

export default UserPage