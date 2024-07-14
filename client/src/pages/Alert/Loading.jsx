import { ImSpinner8 } from "react-icons/im";

export default function Loading() {
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <ImSpinner8 className="w-20 h-20 animate-spin" />
    </div>
  )
}