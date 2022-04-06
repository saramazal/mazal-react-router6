import {useContext} from 'react'
import {AuthContext} from '../hoc/AuthProvider.jsx'

export function useAuth() {
    return useContext(AuthContext);
}