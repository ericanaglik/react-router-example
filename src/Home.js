import React from 'react'

import './Home.css'

const Home = (props) => {
    return (
        <div>

            <div class="container gradient-purple-blue">
            <div class="under-container bubble">
                <div class="line">
                <div class="square" id="square">E</div>
                <div class="square" >r</div>
                <div class="square" >i</div>
                <div class="square" >c</div>
                <div class="square" >a</div>

                </div>
                <div class="line">
                <div class="square" >N</div>
                <div class="square" >a</div>
                <div class="square" >g</div>
                <div class="square" >l</div>
                <div class="square" >i</div>
                <div class="square" >k</div>
                </div>
            </div>
            <div class="under-container">
                <div class="mouse">
                <div class="molette"></div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Home