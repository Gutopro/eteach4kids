import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Code, Gamepad2, Rocket, Users } from "lucide-react"
import Link from "next/link"

export default function Homepage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <Gamepad2 className="h-6 w-6 text-primary" />
          <span className="ml-2 text-2xl font-bold text-primary">eteach4kids</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Courses
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            About
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-primary">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                  Learn to Code, Create, and Have Fun!
                </h1>
                <p className="mx-auto max-w-[700px] text-white md:text-xl">
                  Join eteach4kids and start your exciting journey into the world of programming. Perfect for ages 7-14!
                </p>
              </div>
              <Button className="bg-white text-primary hover:bg-primary-foreground" size="lg">
                Start Learning Now
              </Button>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <Code className="h-12 w-12 text-primary" />
                <h2 className="text-xl font-bold">Learn Multiple Languages</h2>
                <p className="text-muted-foreground text-center">
                  From Scratch to Python, we've got you covered with kid-friendly coding languages.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <Gamepad2 className="h-12 w-12 text-primary" />
                <h2 className="text-xl font-bold">Fun Interactive Projects</h2>
                <p className="text-muted-foreground text-center">
                  Create games, animations, and cool apps while learning essential coding skills.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <Rocket className="h-12 w-12 text-primary" />
                <h2 className="text-xl font-bold">Self-Paced Learning</h2>
                <p className="text-muted-foreground text-center">
                  Progress at your own speed with our engaging video lessons and coding challenges.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Our Courses</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {["Scratch", "Python", "Web Design", "App Inventor", "JavaScript", "Robotics"].map((course) => (
                <div key={course} className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg bg-background">
                  <img
                    alt={`${course} logo`}
                    className="aspect-square overflow-hidden rounded-lg object-contain object-center"
                    height="100"
                    src={`/placeholder.svg?height=100&width=100&text=${course}`}
                    width="100"
                  />
                  <h3 className="text-xl font-bold">{course}</h3>
                  <p className="text-muted-foreground text-center">Learn the basics of {course} through fun projects.</p>
                  <Button variant="outline">Explore Course</Button>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">What Our Students Say</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { name: "Alex, 12", quote: "I love making my own games with Scratch!" },
                { name: "Sophia, 10", quote: "Python is so cool! I can make my computer do anything." },
                { name: "Ethan, 14", quote: "Building websites is awesome. I made one for my school project!" },
              ].map((testimonial, index) => (
                <div key={index} className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg bg-muted">
                  <Users className="h-12 w-12 text-primary" />
                  <p className="text-muted-foreground text-center italic">"{testimonial.quote}"</p>
                  <p className="font-bold">{testimonial.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">
                  Ready to Start Your Coding Adventure?
                </h2>
                <p className="mx-auto max-w-[600px] text-white md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join thousands of kids who are learning to code with eteach4kids. Sign up now for a free trial!
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <Input className="max-w-lg flex-1 bg-white" placeholder="Enter your email" type="email" />
                  <Button className="bg-background text-primary hover:bg-primary-foreground" type="submit">
                    Sign Up
                  </Button>
                </form>
                <p className="text-xs text-white">
                  By signing up, you agree to our{" "}
                  <Link className="underline underline-offset-2" href="#">
                    Terms & Conditions
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">© 2024 eteach4kids. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}
