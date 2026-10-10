import { permanentRedirect } from "next/navigation"

// 本来の転送は next.config.mjs の redirects で行う。これは念のための予備。
export default function GigaHospitalPage() {
  permanentRedirect("/vision#giga-hospital")
}
