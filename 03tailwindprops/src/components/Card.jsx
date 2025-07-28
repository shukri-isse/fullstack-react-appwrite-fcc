// refc enter creates a react functional component
// rafc enter creates a react arrow function component

import React from 'react'
// can destructure props = {username: shukri} into {username}
// if username is not given use default value "SI"
function Card({username = "SI", post = "Not assigned yet"}) {
    // console.log(props);
    //props.username
    // if username not given  print 'Shukri'
  return (
    <div>
        <figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
            <img className="w-24 h-24 rounded-full mx-auto" src="https://images.pexels.com/photos/18264716/pexels-photo-18264716.jpeg" alt="" width="384" height="512"/>
            <div className="pt-6 space-y-4">
                <blockquote>
                    <p className="text-lg font-medium">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, voluptas.
                    </p>
                </blockquote>
                <figcaption className="font">
                    <div>
                        {username}
                    </div>
                    <div>
                        {post}
                    </div>
                </figcaption>
            </div>
        </figure>
    </div>
  )
}

export default Card