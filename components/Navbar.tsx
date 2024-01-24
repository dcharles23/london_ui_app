import Link from "next/link"

const navbar = () => {
  return (
    // used semantic html nav tag below for the navbar to improve SEO
    <nav className="border-2 border-red-500 flexBetween max-container
     padding-container relative z-30 py-5">
      <Link href="/">
        Home
      </Link>
    </nav>
  )
}

export default navbar

