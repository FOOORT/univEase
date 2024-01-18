const Footer = () => {
  const footerData = [
    {
      logo: "UnivEase",
      service: [
        {
          title: "Services",
          student: "Students",
          
        }
      ]
    },
  ];
  return (
    <>
      <div className="container py-5 grid-cols-2 md:grid-cols-2 lg:grid-cols-4"></div>
      <div className=" container pb-10 lg:flex-row flex flex-col justify-between items-center text-center ">
        <div className="container flex gap-3">
          <p className="text-md text-btn font-medium">Privacy Policy</p>
          <p className="text-md text-btn font-medium">Contact us</p>
        </div>

        <p className="text-nowrap">&copy;2024 UniveEase. All Rights Reserved</p>
      </div>
    </>
  );
};
export default Footer;
