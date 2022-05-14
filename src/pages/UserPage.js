import React from 'react'

import AccountCard from '../components/AccountCard/AccountCard'
import NameEdit from '../components/NameEdit/nameEdit';










const UserPage = () => {

    // const [ openEdit, setOpenEdit ] = useState();

    
    // const handleEdit = () => {
    //     setOpenEdit(true)
    // }

    // const handleCancelEdit = () => { 
    //     setOpenEdit(false)
    // }


    return (
        <main className="main bg-dark">
            <NameEdit></NameEdit>
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