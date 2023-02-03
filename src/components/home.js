import React from "react";
import Button from "./button";
import "./home.css"
import Zurag1 from "../assets/home.png"
import Zurag2 from "../assets/shorts.png"
import Zurag3 from "../assets/subscribe.png"
import Zurag4 from "../assets/history.png"
const Home = () =>{
    return(
        <>
        <div className="body">
            <div className="menu">
                <Button variant="first" text="home" img={Zurag1} />
                <Button variant="yes" text="Shorts" img={Zurag2}/>
                <Button variant="yes" text="Subscriptions"img={Zurag3}/>
                <Button variant="live" text="history"img={Zurag4}/>
                <Button variant="live" text="Library"/>
            </div>
            <div className="content">
            <Button variant="color" text="All" />
            <Button variant="category" text="Mixes" />
            <Button variant="category" text="Music" />
            <Button variant="category" text="Japan Music" />
            <Button variant="category" text="AMWs" />
            <Button variant="category" text="Live" />
            <Button variant="category" text="Playlists" />
            <Button variant="category" text="Filmi" />
            <Button variant="category" text="Piano" />
            <Button variant="category" text="Gaming" />
            </div>
        </div>     
        </>
    )
};  
export default Home