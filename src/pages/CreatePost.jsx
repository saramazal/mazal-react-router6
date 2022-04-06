import { useAuth } from '../hook/useAuth';
import { useNavigate } from 'react-router-dom'


export default function CreatePost() {
  const {signout} = useAuth();
  const navigate = useNavigate();
  return (
    <div> <h1>Create a New Post</h1>
    <button onClick={() => signout(() => navigate('/', {replace: true}))}>Log Out</button></div>
  )
}
