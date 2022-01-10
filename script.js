const { Map, Marker, InfoWindow, LatLng } = google.maps

const position = { lat: 50.45, lng: 30.5 };
const options = {
  center: position,
  zoom: 11,
}

const ourOperatives = [
  { position: { lat: 50.4201, lng: 30.4749 }, title: "Я" },
  { position: { lat: 50.4236, lng: 30.6633 }, title: "Он" },
  { position: { lat: 50.3807, lng: 30.4778 }, title: "Онa" },
  // { position: { lat: 50.3807, lng: 40.4778 }, title: "Онo" },
]

const myMap = new Map(map, options);

const content = /* html */`
  <div id="content">
    <h1 id="firstHeading" class="firstHeading">{title}</h1>
    <div id="bodyContent">
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda deleniti, et vitae pariatur quaerat iste
        voluptatem mollitia quidem asperiores magnam incidunt ratione vero, laboriosam eaque? Labore ab, officia ut ex,
        amet esse corporis eveniet rem quia fugiat dolorem aspernatur explicabo id sit nemo repellendus mollitia?
      </p>
    </div>
  </div>
`

const markers = []

ourOperatives.forEach((({ title, position }) => {
  const marker = new Marker({ map: myMap, title, position })
  const info = new InfoWindow({ content: content.replace('{title}', title) })

  markers.push(marker)

  marker.addListener('click', () => info.open({ anchor: marker, map: myMap, shouldFocus: true, }))
}))

// const myMarker = new Marker({map: myMap, position})

let i = 0

setInterval(
  () => {
    const {lat, lng} = ourOperatives[i++ % ourOperatives.length].position
    myMap.panTo(new LatLng(lat, lng))
  },
  200000
)
