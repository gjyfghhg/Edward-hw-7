import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const arr = [
    {
      id: "1",
      createdAt: "2020-10-19T20:58:07.576Z",
      name: "Kareem Okuneva",
      avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/danro/128.jpg",
      desc:
        "Lorem ipsum dolor sit amet,consectetur adipiscing elit more example text asdffdasasdfasdfasdf",
    },
    // {
    //   id: "2",
    //   createdAt: "2020-10-19T11:24:27.956Z",
    //   name: "Miss Franz Conn",
    //   avatar:
    //     "https://s3.amazonaws.com/uifaces/faces/twitter/tbakdesigns/128.jpg",
    //   asdf: false,
    // },
    // {
    //   id: "3",
    //   createdAt: "2020-10-19T04:37:50.567Z",
    //   name: "Joyce Haley",
    //   avatar:
    //     "https://s3.amazonaws.com/uifaces/faces/twitter/lingeswaran/128.jpg",
    //   asdf: false,
    // },
    // {
    //   id: "4",
    //   createdAt: "2020-10-19T07:36:07.150Z",
    //   name: "Rigoberto Abshire",
    //   avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/isacosta/128.jpg",
    //   asdf: false,
    // },
    // {
    //   id: "5",
    //   createdAt: "2020-10-19T06:38:24.091Z",
    //   name: "Trace Crooks",
    //   avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/toddrew/128.jpg",
    //   asdf: false,
    // },
    // {
    //   id: "6",
    //   createdAt: "2020-10-19T00:49:52.861Z",
    //   name: "Dulce Schroeder",
    //   avatar:
    //     "https://s3.amazonaws.com/uifaces/faces/twitter/rtyukmaev/128.jpg",
    //   asdf: false,
    // },
    // {
    //   id: "7",
    //   createdAt: "2020-10-19T02:21:32.793Z",
    //   name: "Hipolito Balistreri V",
    //   avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/ky/128.jpg",
    //   asdf: false,
    // },
    // {
    //   id: "8",
    //   createdAt: "2020-10-19T04:26:37.468Z",
    //   name: "Mr. Kayla Pouros",
    //   avatar:
    //     "https://s3.amazonaws.com/uifaces/faces/twitter/karthipanraj/128.jpg",
    //   asdf: false,
    // },
    // {
    //   id: "9",
    //   createdAt: "2020-10-19T21:09:32.080Z",
    //   name: "Miss Kameron King",
    //   avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/meelford/128.jpg",
    //   asdf: false,
    // },
    // {
    //   id: "10",
    //   createdAt: "2020-10-19T22:16:06.663Z",
    //   name: "Mr. Francesco Cormier",
    //   avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/dgajjar/128.jpg",
    //   asdf: false,
    // },
    // {
    //   id: "11",
    //   createdAt: "2020-10-19T20:17:53.843Z",
    //   name: "Cordell Borer",
    //   avatar:
    //     "https://s3.amazonaws.com/uifaces/faces/twitter/thedjpetersen/128.jpg",
    //   asdf: false,
    // },
    // {
    //   id: "12",
    //   createdAt: "2020-10-19T02:52:13.562Z",
    //   name: "Lauretta Price",
    //   avatar:
    //     "https://s3.amazonaws.com/uifaces/faces/twitter/lebinoclard/128.jpg",
    //   asdf: false,
    // },
    // {
    //   id: "13",
    //   createdAt: "2020-10-19T06:01:52.737Z",
    //   name: "Mr. Jodie Zboncak",
    //   avatar:
    //     "https://s3.amazonaws.com/uifaces/faces/twitter/layerssss/128.jpg",
    //   asdf: false,
    // },
    // {
    //   id: "14",
    //   createdAt: "2020-10-19T05:27:05.297Z",
    //   name: "Lisandro Kutch",
    //   avatar:
    //     "https://s3.amazonaws.com/uifaces/faces/twitter/AlbertoCococi/128.jpg",
    //   asdf: false,
    // },
    // {
    //   id: "15",
    //   createdAt: "2020-10-19T23:55:55.891Z",
    //   name: "Keagan Bruen",
    //   avatar:
    //     "https://s3.amazonaws.com/uifaces/faces/twitter/joe_black/128.jpg",
    //   asdf: false,
    // },
    // {
    //   id: "16",
    //   createdAt: "2020-10-19T23:08:56.657Z",
    //   name: "Ms. Clare Barrows",
    //   avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/tgormtx/128.jpg",
    //   asdf: false,
    // },
    // {
    //   id: "17",
    //   createdAt: "2020-10-19T04:04:08.726Z",
    //   name: "Ms. Melvin Bayer",
    //   avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/stan/128.jpg",
    //   asdf: false,
    // },
    // {
    //   id: "18",
    //   createdAt: "2020-10-19T13:30:06.939Z",
    //   name: "Domenica Brakus",
    //   avatar:
    //     "https://s3.amazonaws.com/uifaces/faces/twitter/m_kalibry/128.jpg",
    //   asdf: false,
    // },
    // {
    //   id: "19",
    //   createdAt: "2020-10-19T13:00:07.241Z",
    //   name: "Kathleen Lemke",
    //   avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/dahparra/128.jpg",
    //   asdf: false,
    // },
    // {
    //   id: "20",
    //   createdAt: "2020-10-19T15:24:14.061Z",
    //   name: "Miss Cassie Sporer",
    //   avatar:
    //     "https://s3.amazonaws.com/uifaces/faces/twitter/dudestein/128.jpg",
    //   asdf: false,
    // },
    // {
    //   id: "21",
    //   createdAt: "2020-10-19T02:07:22.170Z",
    //   name: "Annalise Cole",
    //   avatar:
    //     "https://s3.amazonaws.com/uifaces/faces/twitter/IsaryAmairani/128.jpg",
    //   asdf: false,
    // },
    // {
    //   id: "22",
    //   createdAt: "2020-10-19T04:09:25.707Z",
    //   name: "Kaylin Koelpin",
    //   avatar:
    //     "https://s3.amazonaws.com/uifaces/faces/twitter/vaughanmoffitt/128.jpg",
    //   asdf: false,
    // },
    // {
    //   id: "23",
    //   createdAt: "2020-10-19T21:56:04.732Z",
    //   name: "Thelma Wilkinson",
    //   avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/h1brd/128.jpg",
    //   asdf: false,
    // },
    // {
    //   id: "24",
    //   createdAt: "2020-10-19T08:09:31.801Z",
    //   name: "Clair Corwin",
    //   avatar:
    //     "https://s3.amazonaws.com/uifaces/faces/twitter/marcoramires/128.jpg",
    //   asdf: false,
    // },
  ];

  return (
    <div className="App">
      {arr.map(function (v, i) {
        return <UserCard data={v} />;
      })}
    </div>
  );
}

const UserCard = ({ data: { id, createdAt, name, avatar, desc } }) => {
  return (
    <div className="card">
      <img src={avatar} height="200" />
      <h1> {name} </h1>
      <p>{desc}</p>
      <button>See profile</button>
    </div>
  );
};

export default App;
