export default function Component(){
    return(
        <div style={{backgroundColor:'#6d8ce3', textAlign:"center",height: "500px" , paddingTop:"50px"}}>
        <h1>SUBSCRIBE</h1>
        <p style={{margin:'50px'}}>Sign up with your email address to receive news and updates</p>
        <div>
        <input placeholder='First name' type='text' size="25" style={{padding:'20px', borderRadius:'10px', margin:'5px'}}></input>
        <input placeholder='Last name' type='text' size="25" style={{padding:'20px', borderRadius:'10px', margin:'5px'}}></input>
        <input placeholder='Email' type='text' size="25" style={{padding:'20px', borderRadius:'10px', margin:'5px'}}></input>
        </div>
        <button type="button"  style={{padding:"15px", backgroundColor:"red" , width: '300px',borderRadius:'10px',marginTop:'30px' }}>Subscribe</button>
         </div>
    )
}