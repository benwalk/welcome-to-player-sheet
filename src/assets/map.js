export default {
  // name of the map, used to bind the image
  name: 'player-sheet',

  // Array of area objects
  areas: [
    // area object
    {
      // Uniquely identify an area. Index in array is used if this value is not provided.
      // _id: '', // string
      // Either rect, circle or poly
      shape: 'rect', // string
      // Coordinates delimiting the zone according to the specified shape:
      // - rect: top-left-X,top-left-Y,bottom-right-X,bottom-right-Y
      // - circle: center-X,center-Y,radius
      // - poly: Every point in the polygon path as point-X,point-Y,...
      coords: [
        // array of number
        50,
        100,
        150,
        200,
      ],
      // Target link for a click in the zone (note that if you provide a
      // onClick prop, href will be prevented)
      href: '', // string
    },
  ],
};
