

const UserImageSet = (props) => {
    const API = props.API

    return (
        <div className='w-full h-full flex flex-col gap-10 items-center relative'>
            <div className='w-4/5 bg-white/20 p-2 h-70 rounded-tr-[140px] rounded-tl-[140px] rounded-b-[20px]  mt-10 mb-50'>
                <img
                    className='w-full h-full object-cover rounded-tr-[120px] rounded-tl-[120px] rounded-b-[10px] bg-gray-600'
                    src="https://png.pngtree.com/element_our/png/20181206/users-vector-icon-png_260862.jpg" alt="image" />
            </div>

            <button
                onClick={() => {
                    localStorage.removeItem("user")
                    window.location.href = "/"
                }}
                className='w-50 bg-red-400 py-2 px-5 rounded-lg absolute bottom-5 right-5 cursor-pointer'>
                Log Out
            </button>
        </div>
    )
}

export default UserImageSet
