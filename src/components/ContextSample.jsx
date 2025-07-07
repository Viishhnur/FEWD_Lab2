import React , {useContext} from 'react';
import { UserContext } from '../contexts/UserContext.jsx';
function ContextSample() {
    const userData = useContext(UserContext);
  return (
    <div>
      <h1>Context Sample</h1>
      <p>{userData.name}</p>
    </div>
  );
}

export default ContextSample;