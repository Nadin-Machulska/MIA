
const cityMark = { lat: 43.11929245452738, lng: 12.29488598450219 };
const markers = [
    { lat: 40.753096872043805, lng: -73.97995627380735 },
    { lat: 45.468089321104245, lng: -122.6531240526058 },
    { lat: 43.77643352183174, lng: 11.248248024662045 },
    { lat: 43.77147542782845, lng: 11.250329418831551 },
    { lat: 52.231961552297065, lng: 21.011264026119008 },
    { lat: 49.83873115170147, lng: 24.03414323809035 },
    { lat: 54.7106771955873, lng: 25.26170301494416 },
]

function initMap() {

    const map = new google.maps.Map(document.querySelector(".map-container"), {
        zoom: 5,
        center: cityMark,
        mapTypeControlOptions: {
            mapTypeIds: ["roadmap", "satellite", "hybrid", "terrain", "styled_map"],
        },
    });

    const styledMapType = new google.maps.StyledMapType(
        [
            { elementType: "geometry", stylers: [{ color: "#ebe3cd" }] },
            { elementType: "labels.text.fill", stylers: [{ color: "#523735" }] },
            { elementType: "labels.text.stroke", stylers: [{ color: "#f5f1e6" }] },
            {
                featureType: "administrative",
                elementType: "geometry.stroke",
                stylers: [{ color: "#c9b2a6" }],
            },
            {
                featureType: "administrative.land_parcel",
                elementType: "geometry.stroke",
                stylers: [{ color: "#dcd2be" }],
            },
            {
                featureType: "administrative.land_parcel",
                elementType: "labels.text.fill",
                stylers: [{ color: "#ae9e90" }],
            },
            {
                featureType: "landscape.natural",
                elementType: "geometry",
                stylers: [{ color: "#dfd2ae" }],
            },
            {
                featureType: "poi",
                elementType: "geometry",
                stylers: [{ color: "#dfd2ae" }],
            },
            {
                featureType: "poi",
                elementType: "labels.text.fill",
                stylers: [{ color: "#93817c" }],
            },
            {
                featureType: "poi.park",
                elementType: "geometry.fill",
                stylers: [{ color: "#a5b076" }],
            },
            {
                featureType: "poi.park",
                elementType: "labels.text.fill",
                stylers: [{ color: "#447530" }],
            },
            {
                featureType: "road",
                elementType: "geometry",
                stylers: [{ color: "#f5f1e6" }],
            },
            {
                featureType: "road.arterial",
                elementType: "geometry",
                stylers: [{ color: "#fdfcf8" }],
            },
            {
                featureType: "road.highway",
                elementType: "geometry",
                stylers: [{ color: "#f8c967" }],
            },
            {
                featureType: "road.highway",
                elementType: "geometry.stroke",
                stylers: [{ color: "#e9bc62" }],
            },
            {
                featureType: "road.highway.controlled_access",
                elementType: "geometry",
                stylers: [{ color: "#e98d58" }],
            },
            {
                featureType: "road.highway.controlled_access",
                elementType: "geometry.stroke",
                stylers: [{ color: "#db8555" }],
            },
            {
                featureType: "road.local",
                elementType: "labels.text.fill",
                stylers: [{ color: "#806b63" }],
            },
            {
                featureType: "transit.line",
                elementType: "geometry",
                stylers: [{ color: "#dfd2ae" }],
            },
            {
                featureType: "transit.line",
                elementType: "labels.text.fill",
                stylers: [{ color: "#8f7d77" }],
            },
            {
                featureType: "transit.line",
                elementType: "labels.text.stroke",
                stylers: [{ color: "#ebe3cd" }],
            },
            {
                featureType: "transit.station",
                elementType: "geometry",
                stylers: [{ color: "#dfd2ae" }],
            },
            {
                featureType: "water",
                elementType: "geometry.fill",
                stylers: [{ color: "#b9d3c2" }],
            },
            {
                featureType: "water",
                elementType: "labels.text.fill",
                stylers: [{ color: "#92998d" }],
            },
        ],
        { name: "Styled Map" })

    map.mapTypes.set("styled_map", styledMapType);
    map.setMapTypeId("styled_map");

    for (let i = 0; i < markers.length; i++) {
        const marker = new google.maps.Marker({
            position: markers[i],
            map: map,
        });

    }
}

window.initMap = initMap;


const openSubListButton = document.querySelectorAll('.open-sub-menu');
const catogoriesSubMenu = document.querySelectorAll('.product-burger-menu');
const buttonContainers = document.querySelectorAll('.pr-title');
const catalog = document.querySelector('.catalog-of-products')

function toggleCategoriesModal(){
    for (let i=0; i < buttonContainers.length; i++){

        buttonContainers[i].addEventListener('click', (event) => {
            let targetItem = event.target;
            if (targetItem.nodeName != 'BUTTON'){
                console.log('nope')
                
            }else{
                catogoriesSubMenu[i].classList.toggle('closed')
            }
        })
    }
    };
toggleCategoriesModal();
