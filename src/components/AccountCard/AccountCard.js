import React from 'react'
import './AccountCard.scss'

const AccountCard = ( props ) => {
    const { accountTitle, accountAmount, accountAmountDescription, transactionButton } = props;
    return (
        <section className="account">
            <div className="account-content-wrapper">
            <h3 className="account-title">{accountTitle}</h3>
            <p className="account-amount">{accountAmount}</p>
            <p className="account-amount-description">{accountAmountDescription}</p>
            </div>
            <div className="account-content-wrapper cta">
            <button className="transaction-button">{transactionButton}</button>
            </div>
        </section>
    )
}

export default AccountCard