import './App.css';
import React from 'react';

function App() {

  const [notifData, setNotifData] = React.useState([
    {
        id: 1,
        author: {
          name: "Mark Webber",
          img: "avatar-mark-webber.webp",
          href: "#"
        },
        activity: "reacted to your recent post",
        link: {
          activity: "My first tournament today!",
          href: "#"
        },
        time: "1m ago",
        unread: true
    },
    {
      id: 2,
      author: {
        name: "Angela Grey",
        img: "avatar-angela-gray.webp",
        href: "#"
      },
      activity: "followed you",
      time: "5m ago",
      unread: true
    },
    {
      id: 3,
      author: {
        name: "Jacob Thompson",
        img: "avatar-jacob-thompson.webp",
        href: "#"
      },
      activity: "has joined your group",
      link: {
        activity: "Chess Club",
        href: "#"
      },
      time: "1 day ago",
      unread: true
    },
    {
      id: 4,
      author: {
        name: "Rizky Hasanuddin",
        img: "avatar-rizky-hasanuddin.webp",
        href: "#"
      },
      activity: "sent you a private message",
      linkPM: {
        privateMessage: "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun improving my game.",
        hrefPM: "#"
    },
      time: "5 days ago",
      unread: false
    },
    {
      id: 5,
      author: {
        name: "Kimberly Smith",
        img: "avatar-kimberly-smith.webp",
        href: "#"
      },
      activity: "commented on your picture",
      image: {
        image_comment: "image-chess.webp",
        alt: "Chess game",
        href: "#"
      },
      time: "1 week ago",
      unread: false
    },
    {
      id: 6,
      author: {
        name: "Nathan Peterson",
        img: "avatar-nathan-peterson.webp",
        href: "#"
      },
      activity: "reacted to your recent post",
      link: {
        activity: "5 end-game strategies to increase your win rate",
        href: "#"
      },
      time: "2 weeks ago",
      unread: false
    },
    {
      id: 7,
      author: {
        name: "Anna Kim",
        img: "avatar-anna-kim.webp",
        href: "#"
      },
      activity: "left the group",
      link: {
        activity: "Chess Club",
        href: "#"
      },
      time: "2 weeks ago",
      unread: false
    },
])

function handleClick() {
  setNotifData(prevNotifData => {
      const newArray = []
      for(let i=0; i < prevNotifData.length; i++) {
          const currentNotif = prevNotifData[i]
          if(currentNotif.unread === true) {
              const updatedNotif = {
                  ...currentNotif,
                  unread: !currentNotif.unread
              }
              newArray.push(updatedNotif)
          } else {
              newArray.push(currentNotif)
          }
          }
          return newArray
      
  })
}

function handlePress(id) {
  setNotifData(prevNotifData => {
    const newArray = []
    for(let i=0; i < prevNotifData.length; i++) {
      const currentNotif = prevNotifData[i]
      if(currentNotif.id === id) {
        const updatedNotif = {
          ...currentNotif,
          unread: false
        }
        newArray.push(updatedNotif)
      } else {
        newArray.push(currentNotif)
      }
    }
    return newArray
  })
}



  return (
   <>
   <div className="Container" >
    <nav>
      <div className="title">
        <h1>Notifcations</h1>
        <span className="badge"><b>{notifData.filter(item => item.unread).length}</b></span>
        <button className="mark" onClick={handleClick}>Mark all as read</button>
      </div>
    </nav>
    {notifData && notifData.map(item => {
      return (
              <div className={`switch ${item.unread ? "Class1" : "Class2"}`} key={item.id} onClick={()=>{handlePress(item.id)}}> 
                <img className="profile--img" src={`../images/${item.author.img}`} alt={item.author}/> 
                <div>
                  <div className="post--text">
                    <p><a href={item.author.href} className="author">
                      {item.author.name}
                        </a> 
                        <span className="activity">&nbsp;&nbsp;{item.activity}&nbsp;&nbsp;</span>
                      <span>{item.link && <a href={item.link.href} className="activity--link">{item.link.activity}&nbsp;&nbsp;</a>}</span>
                      {item.unread && <span className="unread"></span>}</p>
                  </div>
                  <p className="time">{item.time}</p>
                  {item.linkPM && <a href={item.linkPM.hrefPM} className="a--PM"> {<p className="privateMessage">{item.linkPM.privateMessage}</p>}</a>}
                </div>
                {item.image && <a href={item.image.href}><img className="image--comment" src={`../images/${item.image.image_comment}`} alt={item.image.alt}/> </a>}
              </div>
         
              )})}
              
    </div>
   </>
  );
}

export default App;
