import {Link} from 'react-router-dom'
function Header({ setSearchQuery, searchQuery }) {
    //function to enter anything and it will print somewhere on the screen
    // const [searchTerm, setSearchTerm] = useState("")
    function toggleBg(){
      //to toggle between dark and light mode
      document.body.classList.toggle("dark")
    }
    // function filterProducts(){
    //   //to filter products based on search term
    //   return products.filter((product) => product.title.toLowerCase().includes(searchTerm.toLowerCase()))
    // }
  return (
  <>
  <header style={{display:"flex",justifyContent:"space-around",alignItems:"center",backgroundColor:"black",color:"white"}}>
    <img src="src/assets/vite.svg" alt="Logo" />
    <input  style={{backgroundColor:"white",color:"black"}} type="text" placeholder="Search..." onChange={(e) => setSearchQuery(e.target.value)} />
    {/* {searchQuery} */}
    <nav style={{display:"flex",gap:"20px"}}>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/signup">Signup</Link>
        <Link to="/signin">SignIn</Link>
    </nav>
    <button onClick={toggleBg}>Dark/Light</button>
  </header>
  </>
  )
}

export default Header