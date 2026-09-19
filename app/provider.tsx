"use client"
import { UserDetailContext } from "@/context/UserDetailContext";
import React,{useEffect,useState} from "react"
import axios from "axios"
import { User } from "@clerk/nextjs/server";
function Provider({ children }: { children: React.ReactNode }) {
  const [userDetail, setUserDetail] = useState<any>();
  useEffect(() => {
    CreateNewUser();
  }, [])
  const CreateNewUser = async () => {
    const result = await axios.post("/api/users")
    console.log(result.data)
    setUserDetail(result.data)
  }
  return (
    <UserDetailContext.Provider value={{userDetail, setUserDetail}}>
      <div>{children}</div>
    </UserDetailContext.Provider>

  )
}
export default Provider;
