import Link from "next/link"
import { Github, Instagram, Mail, MessageCircle } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import logo from "../assets/logo.jpg"
import Image from "next/image"

export default function LinktreePage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-rose-100 to-teal-100 p-4">
      <div className="w-full max-w-md space-y-8">
        <div className="flex flex-col items-center space-y-4">
          <Avatar className="h-32 w-32 border-4 border-white shadow-lg transition-all duration-300 hover:scale-110">
            <Image src={logo} alt="Nafis_image" width={250} height={250} />
            {/* <AvatarFallback className="text-2xl">ME</AvatarFallback> */}
          </Avatar>
          <div className="text-center">
            <h1 className="text-2xl font-bold">Md. Nafees</h1>
          </div>
        </div>

        <div className="space-y-4">
          <LinkButton href="https://wa.me/01774751770" icon={<MessageCircle className="h-5 w-5" />}>
            WhatsApp
          </LinkButton>

          <LinkButton
            href="https://m.me/DesignInteriorPrime"
            icon={<MessageCircle className="h-5 w-5" />}
          >
            Messenger
          </LinkButton>

          <LinkButton href="https://instagram.com/design_interior_prime" icon={<Instagram className="h-5 w-5" />}>
            Instagram
          </LinkButton>

          <LinkButton href="mailto:designinteriorprime@gmail.com" icon={<Mail className="h-5 w-5" />}>
            Email Me
          </LinkButton>
        </div>
{/* 
        <footer className="pt-8 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Your Name
        </footer> */}
      </div>
    </div>
  )
}

function LinkButton({ href, children, icon }) {
  return (
    <Link href={href} target="_blank" rel="noopener noreferrer">
      <Button
        variant="outline"
        className="relative w-full overflow-hidden border-2 bg-white/80 py-6 text-lg font-medium backdrop-blur transition-all duration-300 hover:scale-105 hover:bg-white hover:shadow-lg"
      >
        <span className="absolute left-4 top-1/2 -translate-y-1/2">{icon}</span>
        {children}
      </Button>
    </Link>
  )
}
