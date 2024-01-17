import Link from "next/link";
const NotFound = () => {
  return (
    <div className="flex justify-center items-center flex-col gap-3">
      <p>
        Oops! It seems like you've taken a detour into uncharted territory. 🗺️
        Fear not, intrepid traveler! Even the best explorers find themselves in
        unknown places from time to time. Let's guide you back to familiar
        grounds. While we work on uncovering the path you were looking for, why
        not take a moment to appreciate the journey? Every wrong turn is an
        opportunity for a new adventure. In the meantime, feel free to explore
        other corners of our virtual realm or reach out for assistance. We're
        here to help you navigate and ensure your digital journey is as seamless
        as possible. Happy exploring! 🚀
      </p>
      <Link
        href="/"
        className="px-4 py-2 rounded-3xl cursor-pointer text-md text-bgColor bg-btn font-medium"
      >
        Back To Home
      </Link>
    </div>
  );
};

export default NotFound;
