// eslint-disable-next-line react/prop-types
function Layout ({children}){
    return (
        <div className="flex flex-col items-center mt-16">
            {children}
        </div>
    )
}

export default Layout