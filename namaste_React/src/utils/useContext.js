import { createContext } from "react";

const userContext = createContext({user:{
    name:"avinash",
    email: "avinash20@gmail.com", 
}})

export default userContext;