import React from "react"
import Topbar from "../../Components/topbar/Topbar"
import Sidebar from "../../Components/topbar/sidebar/Sidebar"
import Feed from "../../Components/topbar/feed/Feed"
import Rightbar from "../../Components/topbar/rightbar/Rightbar"
import "./home.css"

export default function Home() {
 return (
        <>
        <Topbar />
        <div className="homeContainer">
        <Sidebar/>
        <Feed />
        <Rightbar profile/>
        </div>
        <div>
        </div>
        <div>
            
        </div>
        </>
    )
}