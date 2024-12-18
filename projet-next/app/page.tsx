import { DiAndroid } from "react-icons/di";
import { DiApple } from "react-icons/di";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


export default function Home() {
  return (
   <div>
    <DiAndroid /> 
    <DiApple />


    <Avatar>
  <AvatarImage src="https://github.com/shadcn.png" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>
    
   </div>
  );
}