import { Metadata } from "next"
import MjProfile from "@/components/mj-profile"

export const metadata: Metadata = {
  title: 'Masanari Jinnouchi | peaceful inc.',
  robots: { index: false, follow: false },
}

export default function MjPage() {
  return <MjProfile />
}
