import './Show.css'
function Show(props) {
    return(
        <div id='show' style={{display:props.display}}>
        <table>
            <thead>
                <th>Email</th>
                <th>Username</th>
                <th>Password</th>
            </thead>
            {
                props.item.map((items,index) =>{
                    return <tr>
                        <td>{items.useremail}</td>
                        <td>{items.username}</td>
                        <td>{items.password}</td>
                    </tr>
                })
            }
        </table>
        </div>
    )
}
export default Show;