import * as React from 'react'

const coffeeImage = {
    width: '10rem'
}
export default function Wine() {

    let items = []
    let [wineTitles, setWineTitles] = React.useState([])

    React.useEffect(async () => {

        let res = await fetch('https://api.sampleapis.com/wines/reds')
        let wines = await res.json()
        for (let i = 0; i < wines.length; i++) {
            console.log(wines[i].wine)
            items.push(<li>
                <div style={{  width:"40rem",overflow: "hidden" }} >
                    <div style={{ width: "11rem", float: "left" }}> <img style={coffeeImage} src={wines[i].image} /> </div>
                    <div >  <b>{wines[i].wine}</b> - {wines[i].winery} </div>
                </div>
            </li >)
        }

        setWineTitles(items)
    }, [])

    return (
        <>
            <h1>Wines</h1>
            <ul>
                {wineTitles}
            </ul>
        </>
    )
}

