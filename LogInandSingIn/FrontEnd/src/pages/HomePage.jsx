import UserImageSet from "../Components/UserImageSet"

const Home = (props) => {
  const API = props.API
  const lineStyle = "bg-white/30 p-5 text-2xl rounded-2xl"

  const user = JSON.parse(localStorage.getItem("user"))

  if (!user){
    window.location.href = "/"
  }

  return (
    <div className="bg-black/95 min-w-screen min-h-screen flex flex-col lg:flex-row box-border">
      <div className="lg:w-1/4">
        <UserImageSet API = {API}/>
      </div>

      <div className="lg:h-screen lg:w-1 bg-amber-400"></div>

      <div className="lg:w-3/4 bg-white/10 pt-10 pl-5 pr-5 pb-4 text-white/70 flex flex-col gap-7">
        <p className={lineStyle}> Name: {user.firstName} {user.lastName} </p>
        <p className={lineStyle}> Address: {user.streetAddress} </p>

        <div className="flex flex-col gap-7">
          <p className={lineStyle}>City: {user.city} </p>
          <p className={lineStyle}>State: {user.state} </p>
          <p className={lineStyle}>Postal Number: {user.pinNum} </p>
        </div>

        <p className={lineStyle}> Email: {user.email}</p>
        <p className={lineStyle}>Ph: {user.phone}</p>
      </div>

      <div>
          <button
          onClick={()=>{window.location.href="/edit"}} 
          className="bg-green-600 float-right p-2 m-10 w-30 rounded-lg cursor-pointer"> Edit </button>
      </div>
    </div>
  )
}

export default Home
