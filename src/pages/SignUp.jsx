import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";

function SignUp() {

  const navigate = useNavigate();

  const fullNameRef = useRef();
  const emailRef = useRef();
  const userNameRef = useRef();
  const passwordRef = useRef();
  const avatarRef = useRef();
  const coverImageRef = useRef();
  const [error, setError] = useState("");

  const fieldMap = [
    { value: "fullName", ref: fullNameRef, name: "Full Name" },
    { value: "email", ref: emailRef, name: "Email" },
    { value: "userName", ref: userNameRef, name: "Username" },
    { value: "password", ref: passwordRef, name: "Password" },
  ];

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userName = userNameRef.current.value;
    const password = passwordRef.current.value;
    const fullName = fullNameRef.current.value;
    const email = emailRef.current.value;
    const avatar = avatarRef.current.files[0];
    const coverImage = coverImageRef.current.files[0];

    const fields = [
      { value: fullName, ref: fullNameRef, name: "Full Name" },
      { value: email, ref: emailRef, name: "Email" },
      { value: userName, ref: userNameRef, name: "Username" },
      { value: password, ref: passwordRef, name: "Password" },
    ];

    for (const field of fields) {
      if (!field.value) {
        setError(`${field.name} is required.`);
        setTimeout(() => setError(""), 3000);
        field.ref.current.focus();
        return;
      }
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      setTimeout(() => setError(""), 3000);
      emailRef.current.focus();
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      setTimeout(() => setError(""), 3000);
      passwordRef.current.focus();
      return;
    }

    setError("");

    const formData = new FormData();
    formData.append('fullName', fullName);
    formData.append('email', email);
    formData.append('username', userName);
    formData.append('password', password);
    formData.append('avatar', avatar);
    if (coverImage) formData.append('coverImage', coverImage);
  
    await axios.post('http://localhost:8000/api/v1/users/register', formData)
    .then((response) => {
      console.log(response.data.message); 
      navigate('/login')
    })
    .catch((error) => {
      console.error('Error:', error);
    });
    
  };

  return (
    <div className="flex bg-[#0F0F0F] justify-center items-center h-screen">
      <form onSubmit={handleSubmit} className="flex flex-col bg-purple-800 w-[350px] sm:w-[400px] p-6 rounded-4xl">
        <h1 className="self-center text-3xl text-white font-sans mb-5">SignUp</h1>
        <div className="flex flex-col mb-4">
          <input
            type="file"
            accept="image/*"
            ref={avatarRef}
          />
        </div>
        <div className="flex flex-col mb-4">
          <input
            type="file"
            accept="image/*"
            ref={coverImageRef}
          />
        </div>
        {fieldMap.map((item) => (
          <div className="flex flex-col mb-4" key={item.name}>
            <label className="text-white">{item.name}</label>
            <input
              className="h-10 bg-white rounded px-2"
              ref={item.ref}
              placeholder={item.name}
              autoComplete={item.value}
            />
          </div>
        ))}
        {error && <p className="text-red-500 text-center">{error}</p>}
        <button
          type="submit"
          className="bg-white self-center cursor-pointer w-full h-10 rounded text-purple-900 font-bold mt-4 text-lg"
        >
          Sign Up
        </button>
        <div className="self-center pt-2">
          <span>Already have an account? </span>
          <Link to="/login" className="cursor-pointer text-blue-600 underline text-lg">
            Login
          </Link>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
