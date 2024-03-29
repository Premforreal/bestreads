import React,{useState,useEffect} from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TerminalIcon from '@mui/icons-material/Terminal';
import EmailIcon from '@mui/icons-material/Email';
import '../App.css';

const password={
  name:"",
  email:'',
  password:''
}

function Home() { 
  const [inputs, setInputs] = useState(password);

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  function handleSubmit(e){
    e.preventDefault();
    window.alert("Coming soon!")
  }


  return (<>

        <div className='Home'>
          <h1>Meet your next favourite book</h1>
          <div className="form">
            <h1>Please login</h1>
            <form onSubmit={handleSubmit}>
            
            <div className="form-input" >
              <input name='name' value={inputs.name} onChange={(e)=>handleChange(e)} type="name" required />
              <label>Name</label>
            </div>
        
            <div className="form-input" >
              <input name='email' value={inputs.email} onChange={(e)=>handleChange(e)} type="email" required />
              <label>email</label>
            </div>
        
            <div className="form-input" >
                <input name='password' value={inputs.password} onChange={(e)=>handleChange(e)} type="password" required />
                <label>password</label>
            </div>
        
            <button className="btn">login</button>
            </form>
          </div>
        </div>


        <div className="home-container">
            <div className="item-1">
                <h3>Deciding What to Read Next?</h3>
                <p>Browse through our selection and read reviews. Keep track of what you have read and have not read.</p>
            </div>
            <div className="item-2">
                <h3>What are other people reading?</h3>
                <p>Know what other people are reading and have a discussion about your favorite and least favorite books.</p>
            </div>
        </div>

        <div className="footer">
                    <a className='github' href="https://github.com/Premforreal" target='blank'><GitHubIcon /></a>
                    <a className='portfolio' href="https://prem-react-portfolio.netlify.app/" target='blank'><TerminalIcon/></a>
                    <a className='linkedin' href="https://www.linkedin.com/in/premforreal/" target='blank'><LinkedInIcon/></a>
                    <a className='gmail' href="mailto:premalakuntah@gmail.com" target='blank'><EmailIcon/></a>
        </div>
        </>
  )
}

export default Home



