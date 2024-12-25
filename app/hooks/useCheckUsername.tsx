import axios from "axios";
import { useEffect, useState } from "react"




export const useCheckUsername = () => {
    const [username, setUsername] = useState<string>("")
    const [isCheckingUserName, setIsCheckingUserName] = useState<boolean>(false);
    const [userNameAvailabe, setUserNameAavailable] = useState<boolean>(true);



    const checkUserName = async (username: string) => {
        setIsCheckingUserName(true);
        const svResponse = await axios.post("/api/checkUsername", {
          username: username,
        });
        setUserNameAavailable(svResponse.data);
        setIsCheckingUserName(false);
      };

      useEffect(() => {
          if (username) {
            setTimeout(() => {
              checkUserName(username.toLowerCase());
            }, 1000);
          }
        }, [username]);

        return { 
            username,
            setUsername,
            isCheckingUserName,
            userNameAvailabe
        }

}


