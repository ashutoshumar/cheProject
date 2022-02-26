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