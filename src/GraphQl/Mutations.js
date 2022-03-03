import { gql } from "@apollo/client";

export const CREATE_USER_MUTATION = gql`
  mutation createUser($name:String!,$email:String!,$phone:String!){ 
    createUser(
        data:{
            name: $name
            email: $email
            phone: $phone
        }
      
    ) {
      id
      name
      email
  

    }
  }
`;


export const CREATE_COMMERCIAL_SPACE_MUTATION = gql`
  mutation createCommercialSpace( $name: String!,
    $city: String!,
    $address:String!,
    $pin:Int!,
    $distance_from_road:Float!,
    $area:Float!,
    $availability:Boolean!,
    $amenities: [String!]!,
    $photos: [String!]!,
    $suitable_for: [String!]!,
    $coordinate: [String!]!,
    $ownerId: ID!
    ){ 
      createCommercialSpace(
        data:{
            name: $name
            city: $city
            address: $address
            pin: $pin
            distance_from_road: $distance_from_road
            area: $area
            availability:  $availability
            amenities: $amenities
            photos: $photos
            suitable_for: $suitable_for
            coordinate: $coordinate
            ownerId: $ownerId
        }
      
    ) {
     
      name
      city 
      address
      pin
      distance_from_road
      area
      availability
      amenities
      photos
      suitable_for
      coordinate


    }
  }
`;