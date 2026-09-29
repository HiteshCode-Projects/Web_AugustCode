import { useNavigate } from "react-router-dom";


function Home(){

    const navigate = useNavigate();

    function handleLogin(){
            navigate("/dashboard")
    }

return(
    <div>
        <h1>Welcome Student</h1>
        <button onClick={handleLogin}>Login</button>
    </div>
)


}

export default Home