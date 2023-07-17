function Box({task}) {

    function handleDelete(){

    }

    return(
        <div>
            <div>
                <p id="maintask"></p>
                <button onClick={handleDelete}>Delete</button>
            </div>
        </div>
    )
}

export default Box;