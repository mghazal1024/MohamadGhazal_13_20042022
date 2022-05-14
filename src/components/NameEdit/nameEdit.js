import React, {useState, useRef} from 'react'

import { useDispatch, useSelector } from 'react-redux';
import Axios from '../../services/axios'
import { profile } from '../../slices/User';

import './nameEdit.scss'

const NameEdit = () => {

    const state = useSelector((state) => state.user);
    const [ edit, setEdit ] = useState(false);
    const firstName = useRef();
    const lastName = useRef();
    const save = useRef();

    const regex =  /^[ a-zA-ZàèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêîôûÂÊÎÔÛãñõÃÑÕäëïöüÿÄËÏÖÜŸçÇßØøÅåÆæœ'`'\-]+$/;
    const dispatch = useDispatch();
    const [ error, setError ] = useState(false);

    const handleForm = () => {
        firstName.current.value.length >= 3
        && firstName.current.value.length <= 15
        && regex.test(firstName.current.value)
            ? (firstName.current.style.border = '2px solid green')
            : (firstName.current.style.border = '2px solid red');

        lastName.current.value.length >= 3
        && lastName.current.value.length <= 15
        && regex.test(lastName.current.value)
            ? (lastName.current.style.border = '2px solid green')
            : (lastName.current.style.border = '2px solid red');
        
        if (
            firstName.current.value.length >= 3
            && firstName.current.value.length <= 15
            && regex.test(firstName.current.value)
            && lastName.current.value.length >= 3
            && lastName.current.value.length <= 15
            && regex.test(lastName.current.value)
        ) {
            save.current.disabled = false;
            return true;
        } else {
            save.current.disabled = true;
            return false;
        }
    };

    const setResponse = (response) => {
        dispatch(profile({ ...response }));
        setEdit(false);
    }

    const submitForm = (e) => {
        e.preventDefault();
        const valid = handleForm();
        if (valid) {
            const dataForm = {
                firstName: firstName.current.value,
                lastName: lastName.current.value
            };
            Axios('update', dataForm, state.user.token)
                .then((response) => {
                    setResponse(response);
                })
                .catch(() => setError(true));
        }
    };

    return (

        <div className="header">
            {edit
            ? 
            <>
            <h1>Welcome back</h1>
            { error && (
                <p>A problem occurred, please try again.</p>
            )}
                <div className='user-edit'>
                    <form
                        onSubmit={submitForm}
                        onChange={handleForm}
                    >
                        <div className='user-edit__block'>
                            <input
                                type="text"
                                defaultValue={state.user.firstName}
                                placeholder={state.user.firstName}
                                ref={firstName}
                                className="user-edit__input"
                                maxLength="15"
                                required
                            />
                            <input
                                type="text"
                                defaultValue={state.user.lastName}
                                placeholder={state.user.lastName}
                                ref={lastName}
                                className="user-edit__input"
                                maxLength="15"
                                required
                            />
                        </div>
                        <div className='user-edit__block'>
                            <input
                                type="submit"
                                value="Save"
                                ref={save}
                                className="user-edit__button"
                                disabled={true}
                            /> 
                            <input
                                type="button"
                                value="Cancel"
                                className="user-edit__button"
                                onClick={() => setEdit(false)}
                            /> 
                        </div>
                    </form>
                </div>
            </>
            :
            <>
                <h1>Welcome Back <br/>
                    {`${state.user.firstName} ${state.user.lastName}`}
                </h1>
                <button
                    className="edit-button"
                    onClick={() => setEdit(true)}
                >Edit Name
                </button>
            </>
            }
                
            </div>

        
    )

}

export default NameEdit