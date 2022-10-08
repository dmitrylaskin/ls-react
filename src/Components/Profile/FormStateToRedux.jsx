import React from 'react'
import { connect } from 'react-redux'
import { FormSpy } from 'react-final-form'
import {updateFormState} from "../Redux/profile/profile-reducer";

const FormStateToRedux = ({ form, updateFormState }) => {
    return <FormSpy onChange={state => updateFormState(form, state)}/>
}

export default connect(undefined, { updateFormState })(FormStateToRedux)