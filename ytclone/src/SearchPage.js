import React from 'react'
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined';
import ChannelRow from './ChannelRow.js';
import VideoRow from './VideoRow.js';
import './SearchPage.css'

function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage__filter">
                <TuneOutlinedIcon />
                <h2>FILTER</h2>
            </div>
            <hr />

            <ChannelRow 
                image="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png"
                channel="Clever Programmer"
                verified
                subs="660K"
                noOfVideos={382}
                description="You can find awesome programmings tips and tricks that will take your coding skills to the next level."
            />

            <hr />

            <VideoRow 
                image="https://i.ytimg.com/vi/NT299zIk2JY/maxresdefault.jpg?v=5f1f9c4e"
                channel="Clever Programmer"
                title="Let's Build a YouTube Clone with REACT JS"
                subs="660k"
                description="Build a youtube clone with react js"
                timestamp="49 seconds ago"
                views="2.3M"
            />
            <VideoRow 
                image="https://i.ytimg.com/vi/NT299zIk2JY/maxresdefault.jpg?v=5f1f9c4e"
                channel="Clever Programmer"
                title="Let's Build a YouTube Clone with REACT JS"
                subs="660k"
                description="Build a youtube clone with react js"
                timestamp="49 seconds ago"
                views="2.3M"
            />
            <VideoRow 
                image="https://i.ytimg.com/vi/NT299zIk2JY/maxresdefault.jpg?v=5f1f9c4e"
                channel="Clever Programmer"
                title="Let's Build a YouTube Clone with REACT JS"
                subs="660k"
                description="Build a youtube clone with react js"
                timestamp="49 seconds ago"
                views="2.3M"
            />
            <VideoRow 
                image="https://i.ytimg.com/vi/NT299zIk2JY/maxresdefault.jpg?v=5f1f9c4e"
                channel="Clever Programmer"
                title="Let's Build a YouTube Clone with REACT JS"
                subs="660k"
                description="Build a youtube clone with react js"
                timestamp="49 seconds ago"
                views="2.3M"
            />
            <VideoRow 
                image="https://i.ytimg.com/vi/NT299zIk2JY/maxresdefault.jpg?v=5f1f9c4e"
                channel="Clever Programmer"
                title="Let's Build a YouTube Clone with REACT JS"
                subs="660k"
                description="Build a youtube clone with react js"
                timestamp="49 seconds ago"
                views="2.3M"
            />
            <VideoRow 
                image="https://i.ytimg.com/vi/NT299zIk2JY/maxresdefault.jpg?v=5f1f9c4e"
                channel="Clever Programmer"
                title="Let's Build a YouTube Clone with REACT JS"
                subs="660k"
                description="Build a youtube clone with react js"
                timestamp="49 seconds ago"
                views="2.3M"
            />
            <VideoRow 
                image="https://i.ytimg.com/vi/NT299zIk2JY/maxresdefault.jpg?v=5f1f9c4e"
                channel="Clever Programmer"
                title="Let's Build a YouTube Clone with REACT JS"
                subs="660k"
                description="Build a youtube clone with react js"
                timestamp="49 seconds ago"
                views="2.3M"
            />
            <VideoRow 
                image="https://i.ytimg.com/vi/NT299zIk2JY/maxresdefault.jpg?v=5f1f9c4e"
                channel="Clever Programmer"
                title="Let's Build a YouTube Clone with REACT JS"
                subs="660k"
                description="Build a youtube clone with react js"
                timestamp="49 seconds ago"
                views="2.3M"
            />
            <VideoRow 
                image="https://i.ytimg.com/vi/NT299zIk2JY/maxresdefault.jpg?v=5f1f9c4e"
                channel="Clever Programmer"
                title="Let's Build a YouTube Clone with REACT JS"
                subs="660k"
                description="Build a youtube clone with react js"
                timestamp="49 seconds ago"
                views="2.3M"
            />
            <VideoRow 
                image="https://i.ytimg.com/vi/NT299zIk2JY/maxresdefault.jpg?v=5f1f9c4e"
                channel="Clever Programmer"
                title="Let's Build a YouTube Clone with REACT JS"
                subs="660k"
                description="Build a youtube clone with react js"
                timestamp="49 seconds ago"
                views="2.3M"
            />
            <VideoRow 
                title="you mollied in the wrong neighborhood"
                description="This is a valorant skit that I made a while ago, I hope you enjoy and don't forget to hit the like and subscribe button :)"
                views="6.9M Views"
                timestamp="10 seconds ago"
                channel="vinsacci"
                image="https://i.ytimg.com/vi/hoiZg_wtPgA/maxresdefault.jpg"
            />
        </div>
    )
}

export default SearchPage
